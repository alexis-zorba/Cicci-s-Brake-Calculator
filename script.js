// script.js

function createConfigurationRows() {
    const tbody = document.querySelector('#configurations tbody');
    tbody.innerHTML = ''; // Clear existing rows
    presetConfigurations.forEach(config => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${config.name}</td>
            <td><input type="number" class="mcBore" value="${config.bore}" step="0.1"></td>
            <td>${config.type}</td>
            <td><input type="number" class="pivotToPiston" value="${config.pivotToPiston}" step="0.1"></td>
            <td><input type="number" class="pivotToHand" value="${config.pivotToHand}" step="0.1"></td>
            <td><input type="number" class="pistonDiameter" value="27" step="0.1"></td>
            <td><input type="number" class="pistonsPerCaliper" value="2"></td>
            <td><input type="number" class="numberOfCalipers" value="1"></td>
        `;
    });
}

function updatePowerWeightValue() {
    const powerWeight = document.getElementById('powerWeight').value;
    let description;
    if (powerWeight < 25) description = "More emphasis on Modularity";
    else if (powerWeight > 75) description = "More emphasis on Power";
    else description = "Balanced";
    document.getElementById('powerWeightValue').textContent = `${powerWeight}% (${description})`;
}

function calculateResults() {
    const originalBore = parseFloat(document.getElementById('originalBore').value);
    const originalPistonDiameter = parseFloat(document.getElementById('originalPistonDiameter').value);
    const originalPivotToHand = parseFloat(document.getElementById('originalPivotToHand').value);
    const originalPistonsPerCaliper = parseInt(document.getElementById('originalPistonsPerCaliper').value);
    const originalNumberOfCalipers = parseInt(document.getElementById('originalNumberOfCalipers').value);
    const originalPumpType = document.getElementById('originalPumpType').value;
    const originalPivotToPiston = parseFloat(document.getElementById('originalPivotToPiston').value);
    const powerWeight = parseFloat(document.getElementById('powerWeight').value) / 100;
    const maxLeverTravel = parseFloat(document.getElementById('maxLeverTravel').value);

    const originalMcArea = calculateArea(originalBore);
    const originalPistonArea = calculateArea(originalPistonDiameter);
    const originalTotalPistonArea = originalPistonsPerCaliper * originalNumberOfCalipers * originalPistonArea;
    const originalMcToCaliperRatio = calculateRatio(originalMcArea, originalTotalPistonArea);
    const originalInteraxisRatio = originalPivotToHand / originalPivotToPiston;
    const originalOverallLeverageRatio = calculateOverallLeverage(originalMcToCaliperRatio, originalInteraxisRatio, originalPumpType);

    const resultsTableBody = document.getElementById('resultsTable').querySelector('tbody');
    resultsTableBody.innerHTML = '';

    // Add original configuration row
    const originalRow = resultsTableBody.insertRow();
    originalRow.innerHTML = `
        <td>Original Configuration</td>
        <td>${originalBore.toFixed(2)}</td>
        <td>${originalMcToCaliperRatio.toFixed(3)}</td>
        <td>${originalOverallLeverageRatio.toFixed(2)}</td>
        <td>0.00%</td>
        <td>0.00%</td>
        <td>N/A</td>
    `;

    const powerDifferences = [];
    const leverTravelDifferences = [];
    const mcToCaliperRatios = [];
    const leverageRatios = [];
    const zScores = [];

    const configurations = document.querySelectorAll('#configurations tbody tr');
    
    // First pass to calculate all ratios and find min/max values
    const modularityValues = [];
    const powerValues = [];
    
    configurations.forEach((config, index) => {
        const mcBore = parseFloat(config.querySelector('.mcBore').value);
        const mcType = presetConfigurations[index].type;
        const pivotToPiston = parseFloat(config.querySelector('.pivotToPiston').value);
        const pivotToHand = parseFloat(config.querySelector('.pivotToHand').value);
        const pistonDiameter = parseFloat(config.querySelector('.pistonDiameter').value);
        const pistonsPerCaliper = parseInt(config.querySelector('.pistonsPerCaliper').value);
        const numberOfCalipers = parseInt(config.querySelector('.numberOfCalipers').value);

        const mcArea = calculateArea(mcBore);
        const pistonArea = calculateArea(pistonDiameter);
        const totalPistonArea = pistonsPerCaliper * numberOfCalipers * pistonArea;
        const mcToCaliperRatio = calculateRatio(mcArea, totalPistonArea);
        const interaxisRatio = pivotToHand / pivotToPiston;
        const overallLeverageRatio = calculateOverallLeverage(mcToCaliperRatio, interaxisRatio, mcType);

        modularityValues.push(1 / mcToCaliperRatio);
        powerValues.push(overallLeverageRatio);
    });

    const minModularity = Math.min(...modularityValues);
    const maxModularity = Math.max(...modularityValues);
    const minPower = Math.min(...powerValues);
    const maxPower = Math.max(...powerValues);

    // Second pass to calculate Z-Scores and populate the table
    configurations.forEach((config, index) => {
        const mcBore = parseFloat(config.querySelector('.mcBore').value);
        const mcType = presetConfigurations[index].type;
        const pivotToPiston = parseFloat(config.querySelector('.pivotToPiston').value);
        const pivotToHand = parseFloat(config.querySelector('.pivotToHand').value);
        const pistonDiameter = parseFloat(config.querySelector('.pistonDiameter').value);
        const pistonsPerCaliper = parseInt(config.querySelector('.pistonsPerCaliper').value);
        const numberOfCalipers = parseInt(config.querySelector('.numberOfCalipers').value);

        const mcArea = calculateArea(mcBore);
        const pistonArea = calculateArea(pistonDiameter);
        const totalPistonArea = pistonsPerCaliper * numberOfCalipers * pistonArea;
        const mcToCaliperRatio = calculateRatio(mcArea, totalPistonArea);
        
        const interaxisRatio = pivotToHand / pivotToPiston;
        const overallLeverageRatio = calculateOverallLeverage(mcToCaliperRatio, interaxisRatio, mcType);

        const powerDifference = calculatePercentageDifference(mcToCaliperRatio, originalMcToCaliperRatio);
        const leverTravelDifference = calculatePercentageDifference(overallLeverageRatio, originalOverallLeverageRatio);

        let zScore;
        if (Math.abs(leverTravelDifference) > maxLeverTravel) {
            zScore = "OUT";
        } else {
            zScore = calculateZScore(mcToCaliperRatio, overallLeverageRatio, minModularity, maxModularity, minPower, maxPower, powerWeight);
        }

        powerDifferences.push(powerDifference);
        leverTravelDifferences.push(leverTravelDifference);
        mcToCaliperRatios.push(mcToCaliperRatio);
        leverageRatios.push(overallLeverageRatio);
        zScores.push(zScore);

        const row = resultsTableBody.insertRow();
        row.innerHTML = `
            <td>${presetConfigurations[index].name}</td>
            <td>${mcBore.toFixed(2)}</td>
            <td>${mcToCaliperRatio.toFixed(3)}</td>
            <td>${overallLeverageRatio.toFixed(2)}</td>
            <td>${powerDifference.toFixed(2)}%</td>
            <td>${leverTravelDifference.toFixed(2)}%</td>
            <td>${zScore === "OUT" ? "OUT" : zScore.toFixed(4)}</td>
        `;

        if (zScore === "OUT") {
            row.style.backgroundColor = '#ff0000';
        }
    });

    // Sort configurations by Z-Score, excluding those with Z-Score "OUT"
    const validConfigs = zScores
        .map((score, index) => ({ score, index }))
        .filter(config => config.score !== "OUT")
        .sort((a, b) => b.score - a.score);

    // Color rows based on ranking (only for valid configurations)
    resultsTableBody.querySelectorAll('tr').forEach((row, index) => {
        if (index === 0) return; // Skip original configuration row
        const configIndex = index - 1;
        const validRank = validConfigs.findIndex(config => config.index === configIndex);

        if (zScores[configIndex] !== "OUT") {
            if (validRank === 0) {
                row.style.backgroundColor = '#00ff00'; // Green for best
            } else if (validRank === 1 || validRank === 2) {
                row.style.backgroundColor = '#32cd32'; // Lime green for second and third
            } else if (validRank >= 3 && validRank <= 5) {
                row.style.backgroundColor = '#ffff00'; // Yellow for fourth, fifth, and sixth
            }
        }
    });

    createCharts(powerDifferences, leverTravelDifferences, mcToCaliperRatios, leverageRatios, originalMcToCaliperRatio, originalOverallLeverageRatio);
}

function checkMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('mobileWarning').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    }
}

function initializeApp() {
    createConfigurationRows();
    checkMobile();
    document.getElementById('calculate').addEventListener('click', calculateResults);
    document.getElementById('powerWeight').addEventListener('input', updatePowerWeightValue);
    document.getElementById('originalPumpType').addEventListener('change', function() {
        const pivotToPistonInput = document.getElementById('originalPivotToPiston');
        //pivotToPistonInput.disabled = this.value === 'axial';
    });
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}