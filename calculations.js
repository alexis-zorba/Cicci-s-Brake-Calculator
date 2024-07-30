// calculations.js

// calculations.js

const pi = Math.PI;

function calculateArea(diameter) {
    return pi * Math.pow(diameter / 2, 2);
}

function calculateRatio(mcArea, totalPistonArea) {
    return totalPistonArea / mcArea;
}

function calculateOverallLeverage(mcToCaliperRatio, interaxisRatio, pumpType) {
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

function calculateZScore(mcToCaliperRatio, overallLeverageRatio, pistonArea, minPower, maxPower, powerWeight) {
    // Coefficienti delle rette per Ratio Min e Ratio Max
    const m1 = (22 - 10) / (14000 - 2000); // Coefficiente angolare per Ratio Min
    const b1 = 10 - m1 * 2000; // Intercetta per Ratio Min
    
    const m2 = (28 - 12) / (14000 - 2000); // Coefficiente angolare per Ratio Max
    const b2 = 12 - m2 * 2000; // Intercetta per Ratio Max

    // Calcolo del minModularity e maxModularity basati sull'area dei pistoni
    const minModularity = m1 * pistonArea + b1;
    const maxModularity = m2 * pistonArea + b2;

    // Calcolo della modularità come l'inverso del MC-to-Caliper Ratio
    const modularity = 1 / mcToCaliperRatio;
    
    // Normalizzazione della modularità rispetto agli intervalli calcolati
    let normalizedModularity;
    if (mcToCaliperRatio < minModularity) {
        normalizedModularity = (minModularity - mcToCaliperRatio) / minModularity;
    } else if (mcToCaliperRatio > maxModularity) {
        normalizedModularity = (mcToCaliperRatio - maxModularity) / maxModularity;
    } else {
        normalizedModularity = 0; // All'interno dell'intervallo ottimale
    }

    // Normalizzazione della potenza rispetto agli intervalli minPower e maxPower
    const normalizedPower = (overallLeverageRatio - minPower) / (maxPower - minPower);
    
    // Calcolo finale dello Z-Score, variando il peso per oscillare nel range ottimale
    const zScore = (normalizedModularity * (1 - Math.pow(powerWeight, 2)) + normalizedPower * Math.pow(powerWeight, 2));
    return zScore;
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
