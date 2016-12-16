(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "activity_id",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "activity_name",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "activity_description",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "subcategory_name",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "activity_weighting",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "ia",
            alias: "Improvement Activites",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://qpp.cms.gov/api/v1/ia", function(resp) {
            var feat = resp.serviceData.improvement_activities,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len;i++) {
                tableData.push({
                    "activity_id": feat[i].activity_id,
                    "activity_name": feat[i].activity_name,
                    "activity_description": feat[i].activity_description,
                    "subcategory_name": feat[i].subcategory_name,
                    "activity_weighting": feat[i].activity_weighting
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Improvement Activities List"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
