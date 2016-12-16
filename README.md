# quality-payment-program-measures
###Quality Payment Program Measures Web Data Connector for Tableau

![GitHub Logo](https://qpp.cms.gov/build_201612091113/images/hhs-logo.png)

This project is to build Web Data Connectors for the Quality Payment Program Measures that are available via the 
Quality Payment Program site [QPP](https://qpp.cms.gov).

This API available that will be available as Web Data Connectors are:

## Quality Measures List
Quality is one of the four performance categories of the Quality Payment Program. It will replace the existing Physician 
Quality Reporting System (PQRS). The quality measure details service returns the list of all measures in this category. The results 
include the different identifier numbers used to refer to this measure in different indices: CMS, NQF, and Quality.

## ACI Measures List
Advancing Care Information is one of the four performance categories of the Quality Payment Program. It will replace 
the existing Meaningful Use program. The advancing care information measure details service returns the list of all measures 
in this category. The results indicate details such as whether the measure contributes to the performance 
score ("performance_score_weight") and whether the measure contributes an optional bonus ("optional_measure_for_bonus").

## Improvement Activities List
Improvement Activities is one of the four performance categories of the Quality Payment Program. It is a new category. The 
improvement activities details list service returns all of the activities in this category. It takes no input and returns the entire 
list of the improvement activities. The results can be grouped by subcategory and indicates details such as the weighting of the 
activity ("activity_weighting").

These APIs are not maintained by me, but by the Center for Medicare & Medicaid Services.  Questions about the APIs or support for
these should be found on the [QPP](https://qpp.cms.gov/api/) API page.
