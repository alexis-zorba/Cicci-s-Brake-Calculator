// calculations.js

const pi = Math.PI;

function calculateArea(diameter) {
    return pi * Math.pow(diameter / 2, 2);
}

function calculateRatio(mcArea, totalPistonArea) {
    return totalPistonArea / mcArea;
}

function calculateOverallLeverage(mcToCaliperRatio, interaxisRatio) {
    return mcToCaliperRatio * interaxisRatio;
}

function calculatePercentageDifference(newValue, originalValue) {
    return ((newValue - originalValue) / originalValue) * 100;
}

function calculateMcToCaliperRatio(mcBore, pistonDiameter, pistonsPerCaliper, numberOfCalipers) {
    const mcArea = calculateArea(mcBore);
    const pistonArea = calculateArea(pistonDiameter);
    const totalPistonArea = pistonsPerCaliper * numberOfCalipers * pistonArea;
    return calculateRatio(mcArea, totalPistonArea);
}

function calculateInteraxisRatio(pivotToHand, pivotToPiston) {
    return pivotToHand / pivotToPiston;
}

function calculateOptimalRange(referenceDiameter, referenceNumPistons, referenceNumCalipers, referenceRatioMin, referenceRatioMax, currentDiameter, currentNumPistons, currentNumCalipers) {
    const referenceArea = calculateArea(referenceDiameter) * referenceNumPistons * referenceNumCalipers;
    const currentArea = calculateArea(currentDiameter) * currentNumPistons * currentNumCalipers;
    const scaleFactor = currentArea / referenceArea;
    return [referenceRatioMin * scaleFactor, referenceRatioMax * scaleFactor];
}

function calculateZScore(mcToCaliperRatio, overallLeverageRatio, optimalRatioRange, minPower, maxPower, powerWeight) {
    const [optimalMin, optimalMax] = optimalRatioRange;

    let modularityScore;
    if (mcToCaliperRatio < optimalMin) {
        modularityScore = (mcToCaliperRatio - optimalMin) / optimalMin;
    } else if (mcToCaliperRatio > optimalMax) {
        modularityScore = (mcToCaliperRatio - optimalMax) / optimalMax;
    } else {
        modularityScore = 0; // All'interno dell'intervallo ottimale
    }

    // Normalizzazione della potenza
    const normalizedPower = (overallLeverageRatio - minPower) / (maxPower - minPower);

    // Calcolo finale dello Z-Score
    return (modularityScore * (1 - Math.pow(powerWeight, 2)) + normalizedPower * Math.pow(powerWeight, 2));
}


function validateInputs(...inputs) {
    return inputs.every(input => input > 0);
}

// Export the functions if using modules
// Uncomment the following line if you're using ES6 modules
/*
export {
    calculateArea,
    calculateRatio,
    calculateOverallLeverage,
    calculatePercentageDifference,
    calculateMcToCaliperRatio,
    calculateInteraxisRatio,
    calculateZScore,
    validateInputs
};
*/

//function validateInputs(...inputs) {
//    return inputs.every(input => input > 0);
//}

// Export the functions if using modules
// Uncomment the following line if you're using ES6 modules
/*
export {
    calculateArea,
    calculateRatio,
    calculateOverallLeverage,
    calculatePercentageDifference,
    calculateMcToCaliperRatio,
    calculateInteraxisRatio,
    calculateZScore,
    validateInputs
};
*/
