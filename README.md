Warnings: This simulator is an educational exercise and does not replace professional advice. Modifying a motorcycle's brake system can compromise safety if not done correctly. Always consult a qualified mechanic before making changes to the brake system.
-------------

The primary objective of Cicci's Brake Calculator is to provide motorcycle enthusiasts, mechanics, and engineers with a detailed and intuitive tool to compare and analyze various brake system configurations. This simulator is named in honor of Cicci, a legendary Honda mechanic from Genoa, known for his expertise and contributions to the motorcycle community.

you can use the simulator here: https://ciccisbrakecalculator.netlify.app/

In progresss!

Primary Objective
The primary objective of Cicci's Brake Calculator is to provide motorcycle enthusiasts, mechanics, and engineers with a detailed and intuitive tool to compare and analyze various brake system configurations. This simulator is named in honor of Cicci, a legendary Honda mechanic from Genoa, known for his expertise and contributions to the motorcycle community.

Glossary
MC: Master Cylinder
Bore: Internal diameter of the cylinder
Pivot-to-Piston: Distance from the lever pivot to the point of contact with the master cylinder piston
Pivot-to-Hand: Distance from the lever pivot to the point where hand force is applied
Radial: Brake pump with cylinder parallel to the lever
Axial: Brake pump with cylinder perpendicular to the lever

Calculated Values
Master Cylinder Area: π * (diameter / 2)²
Caliper Piston Area: π * (diameter / 2)²
Total Caliper Piston Area: Piston Area * Number of Pistons * Number of Calipers
MC-to-Caliper Ratio: Total Caliper Piston Area / Master Cylinder Area
Interaxis Ratio (only for radial pumps): Pivot-to-Hand / Pivot-to-Piston
Overall Leverage Ratio: MC-to-Caliper Ratio * Interaxis Ratio
Power Difference (%): ((New MC-to-Caliper Ratio - Original MC-to-Caliper Ratio) / Original MC-to-Caliper Ratio) * 100
Lever Travel Difference (%): ((New Overall Leverage Ratio - Original Overall Leverage Ratio) / Original Overall Leverage Ratio) * 100

Methodological Notes
For comparisons, the simulator assumes that the force applied to the brake lever remains constant across different configurations.
Factors such as brake system elasticity, fluid compressibility, or mechanical efficiency of different configurations are not considered.
The results are theoretical and may differ from actual performance due to various factors not considered in the model.
Simulator Output and Interpretation
MC-to-Caliper Ratio: A lower value indicates that less lever travel is needed to achieve a given braking force, which can result in a "harder" and less modulatable feel. A higher value indicates that more lever travel is needed for the same braking force, offering greater modulation and control.
Overall Leverage Ratio: A higher value indicates greater total amplification of the force applied to the lever, resulting in potentially greater braking power.
Power Difference (%): A negative value indicates a reduction in hydraulic amplification, generally translating to greater modularity. However, this does not account for the mechanical leverage effect.
Lever Travel Difference (%): A positive value indicates that the lever needs to be pulled further to achieve the same fluid displacement. This can compensate for or exceed a reduction in Power Difference, potentially resulting in greater overall braking power.
The preset example is for calculating the brake conversion of a Ducati Sportclassic Sport 1000, with 4-piston calipers (30 and 32mm), to switch to a radial pump and Brembo Triple Bridge caliper (34mm).

Z-Score Calculation
The Z-Score is a measure used to evaluate and compare different brake system configurations. The goal of the Z-Score is to identify configurations that optimize the balance between modularity and braking power, strongly penalizing those that deviate from the optimal parameters.

Intuitive Introduction
Think of the Z-Score as a score that tells you how well a brake configuration performs relative to a predefined optimal range. When a configuration falls within this optimal range, it receives a high score, indicating that it is a good choice. If the configuration is outside the range, it is penalized, and the score decreases.

Gradual Explanation

Determining the Optimal Range:

For a standard configuration with 4-piston calipers and 2 calipers with 34mm pistons, the optimal MC-to-Caliper Ratio range is between 22 and 28.
We use linear equations based on the total piston area to determine the optimal ranges for different configurations.
Calculating Modularity:

Modularity is calculated as the inverse of the MC-to-Caliper Ratio.
If the MC-to-Caliper Ratio is outside the optimal range, a quadratic penalty is applied to reduce the score.
If the MC-to-Caliper Ratio is within the optimal range, the configuration receives a high score.
Normalizing Power:

Power is normalized relative to the minimum and maximum ranges.
A quadratic penalty is also applied for values outside the optimal range.

Combining the Components:

We combine the normalized modularity and power components, weighting the two based on powerWeight.
The final result is the Z-Score, which rewards balanced configurations and strongly penalizes those outside the parameters.
Considerations for the Optimal Compromise
Balance between Modularity and Power: Seek a balance between a lower MC-to-Caliper Ratio (for dual calipers with 4 pistons each, a range of 22-28 is recommended) and a sufficiently high Overall Leverage Ratio (between 115:1 and 145:1) to maintain or increase braking power.
Lever Travel: A moderate increase in lever travel (20-30%) can improve modularity, but excessive increase can compromise ergonomics and responsiveness.
Individual Preferences: The ideal configuration varies based on the rider's preferences and the characteristics of the motorcycle.
Conclusion
The simulator provides useful theoretical data for understanding brake system dynamics. However, practical experience and the rider's feel remain essential for the final choice of the optimal configuration.

https://github.com/alexis-zorba/Cicci-s-Brake-Calculator

Warnings
This simulator is an educational exercise and does not replace professional advice. Modifying a motorcycle's brake system can compromise safety if not done correctly. Always consult a qualified mechanic before making changes to the brake system.


