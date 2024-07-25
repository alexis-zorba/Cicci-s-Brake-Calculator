// charts.js

let powerChart, leverTravelChart, scatterChart;

function createCharts(powerDifferences, leverTravelDifferences, mcToCaliperRatios, leverageRatios, originalMcToCaliperRatio, originalOverallLeverageRatio) {
    createPowerChart(powerDifferences);
    createLeverTravelChart(leverTravelDifferences);
    createScatterChart(mcToCaliperRatios, leverageRatios, originalMcToCaliperRatio, originalOverallLeverageRatio);
}

function createPowerChart(powerDifferences) {
    const ctx = document.getElementById('powerChart').getContext('2d');
    if (powerChart) powerChart.destroy();
    powerChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: presetConfigurations.map(config => config.name),
            datasets: [{
                label: 'Power Difference (%)',
                data: powerDifferences,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createLeverTravelChart(leverTravelDifferences) {
    const ctx = document.getElementById('leverTravelChart').getContext('2d');
    if (leverTravelChart) leverTravelChart.destroy();
    leverTravelChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: presetConfigurations.map(config => config.name),
            datasets: [{
                label: 'Lever Travel Difference (%)',
                data: leverTravelDifferences,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createScatterChart(mcToCaliperRatios, leverageRatios, originalMcToCaliperRatio, originalOverallLeverageRatio) {
    const ctx = document.getElementById('scatterChart').getContext('2d');
    if (scatterChart) scatterChart.destroy();
    scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Configurazioni',
                data: mcToCaliperRatios.map((ratio, index) => ({
                    x: ratio,
                    y: leverageRatios[index]
                })),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 6,
                pointHoverRadius: 8
            }, {
                label: 'Originale',
                data: [{ x: originalMcToCaliperRatio, y: originalOverallLeverageRatio }],
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'MC-to-Caliper Ratio - più basso = più modulare'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Leverage Ratio - più alto = più potente'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const index = context.dataIndex;
                            return context.dataset.label === 'Originale' ? 
                                `Originale: (MC-to-Caliper Ratio: ${context.parsed.x.toFixed(3)}, Leverage Ratio: ${context.parsed.y.toFixed(2)})` :
                                `${presetConfigurations[index].name}: (MC-to-Caliper Ratio: ${context.parsed.x.toFixed(3)}, Leverage Ratio: ${context.parsed.y.toFixed(2)})`;
                        }
                    }
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: 4,
                    color: 'white',
                    font: {
                        size: 10
                    },
                    formatter: function(value, context) {
                        return context.dataset.label === 'Originale' ? 
                            `Originale` : `${presetConfigurations[context.dataIndex].name}`;
                    }
                }
            }
        }
    });
}

// Export the functions if using modules
// Uncomment the following line if you're using ES6 modules
// export { createCharts };