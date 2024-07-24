Warnings: This simulator is an educational exercise and does not replace professional advice. Modifying a motorcycle's brake system can compromise safety if not done correctly. Always consult a qualified mechanic before making changes to the brake system.
-------------

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
Overall Leverage Ratio:
For radial pumps: MC-to-Caliper Ratio * Interaxis Ratio
For axial pumps: MC-to-Caliper Ratio (interaxis ratio is always 1:1)
Power Difference (%): ((New MC-to-Caliper Ratio - Original MC-to-Caliper Ratio) / Original MC-to-Caliper Ratio) * 100
Lever Travel Difference (%): ((New Overall Leverage Ratio - Original Overall Leverage Ratio) / Original Overall Leverage Ratio) * 100

Methodological Notes
For comparisons, the simulator assumes that the force applied to the brake lever remains constant across different configurations.
Factors such as brake system elasticity, fluid compressibility, or mechanical efficiency of different configurations are not considered.
For axial pumps, the interaxis ratio is fixed at 1:1, so the Pivot-to-Piston does not influence calculations and is not modifiable.
The results are theoretical and may differ from actual performance due to various factors not considered in the model.

Simulator Output and Interpretation
MC-to-Caliper Ratio: A lower value indicates greater brake modularity, offering more precise control of braking force.
Overall Leverage Ratio: A higher value indicates greater total amplification of the force applied to the lever, resulting in potentially greater braking power.
Power Difference (%): A negative value indicates a reduction in hydraulic amplification, generally translating to greater modularity. However, this does not account for the mechanical leverage effect.
Lever Travel Difference (%): A positive value indicates that the lever needs to be pulled further to achieve the same fluid displacement. This can compensate for or exceed a reduction in Power Difference, potentially resulting in greater overall braking power.

Considerations for the Optimal Compromise
Balance between Modularity and Power: Seek a balance between a lower MC-to-Caliper Ratio (for greater modularity) and a sufficiently high Overall Leverage Ratio (to maintain or increase braking power).
Lever Travel: A moderate increase in lever travel (20-30%) can improve modularity, but excessive increase can compromise ergonomics and responsiveness.
Individual Preferences: The ideal configuration varies based on the rider's preferences and the characteristics of the motorcycle.

Conclusion
The simulator provides useful theoretical data for understanding brake system dynamics. However, practical experience and the rider's feel remain essential for the final choice of the optimal configuration.
