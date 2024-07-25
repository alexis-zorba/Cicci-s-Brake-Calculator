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

function calculateZScore(mcToCaliperRatio, overallLeverageRatio, minModularity, maxModularity, minPower, maxPower, powerWeight) {
    const modularity = 1 / mcToCaliperRatio;
    const normalizedModularity = (modularity - minModularity) / (maxModularity - minModularity);
    const normalizedPower = (overallLeverageRatio - minPower) / (maxPower - minPower);
    return (normalizedModularity * (1 - powerWeight) + normalizedPower * powerWeight);
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