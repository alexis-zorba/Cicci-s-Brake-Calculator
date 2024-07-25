// config.js

// Preset configurations for different brake setups
const presetConfigurations = [
    { name: "14x16 radial", bore: 14, type: "radial", pivotToPiston: 16, pivotToHand: 90 },
    { name: "14x18 radial", bore: 14, type: "radial", pivotToPiston: 18, pivotToHand: 90 },
    { name: "14x20 radial", bore: 14, type: "radial", pivotToPiston: 20, pivotToHand: 90 },
    { name: "15x18 radial", bore: 15, type: "radial", pivotToPiston: 18, pivotToHand: 90 },
    { name: "15x20 radial", bore: 15, type: "radial", pivotToPiston: 20, pivotToHand: 90 },
    { name: "16x16 radial", bore: 16, type: "radial", pivotToPiston: 16, pivotToHand: 90 },
    { name: "16x18 radial", bore: 16, type: "radial", pivotToPiston: 18, pivotToHand: 90 },
    { name: "16x20 radial", bore: 16, type: "radial", pivotToPiston: 20, pivotToHand: 90 },
    { name: "19x18 radial", bore: 19, type: "radial", pivotToPiston: 18, pivotToHand: 90 },
    { name: "19x20 radial", bore: 19, type: "radial", pivotToPiston: 20, pivotToHand: 90 },
    { name: "10 axial", bore: 10, type: "axial", pivotToPiston: 30, pivotToHand: 90 },
    { name: "12.7 axial", bore: 12.7, type: "axial", pivotToPiston: 27, pivotToHand: 90 },
    { name: "14 axial", bore: 14, type: "axial", pivotToPiston: 25, pivotToHand: 90 }
];

// Default values for the original setup
const defaultOriginalSetup = {
    bore: 12.7,
    numberOfCalipers: 1,
    pivotToPiston: 27,
    pistonsPerCaliper: 2,
    pivotToHand: 90,
    pistonDiameter: 27,
    pumpType: "axial"
};

// Configuration for the power vs modularity slider
const powerModularitySlider = {
    min: 0,
    max: 100,
    defaultValue: 50,
    step: 1
};

// Configuration for the max lever travel increase
const maxLeverTravel = {
    defaultValue: 25,
    min: 0,
    max: 100,
    step: 1
};

// Export the configurations if using modules
// Uncomment the following line if you're using ES6 modules
// export { presetConfigurations, defaultOriginalSetup, powerModularitySlider, maxLeverTravel };