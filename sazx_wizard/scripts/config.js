

const formConfig = {
    title: "Here goes the wizard title",
    steps: [


        // Step 5  - Free Text         
        {
            label: "Define Label for this",
            questions: [

                {
                    type: "group",
                    questions: [

                        {
                            type: "number",
                            name: "gp1",
                            label: "Group Element 1",
                            default: "this is default value",

                        },

                        {
                            type: "number",
                            name: "gp2",
                            label: "Group Element 2",
                            default: "this is default value",

                        },
                        
                        {
                            type: "number",
                            name: "gp3",
                            label: "Group Element 3",
                            default: "this is default value",

                        },
                        
                    ]
                },

                {
                    type: "number",
                    name: "large_claims",
                    label: "Large claims",
                    default: "this is default value",

                }, {
                    type: "tel",
                    name: "large_claims",
                    label: "Large claims",
                    default: "this is default value",
                },
                {
                    type: "email",
                    name: "large_claims",
                    label: "Large claims",
                    default: "this is default value"
                },
                {
                    type: "password",
                    name: "large_claims",
                    label: "Large claims",
                    default: "this is default value"
                },
                {
                    type: "number",
                    name: "large_claims",
                    label: "Large claims",
                    default: "this is default value"
                },


            ]


        },


        // Step 1 - Radio
        {

            label: "Model",
            questions: [
                {
                    type: "radio",
                    description: "What do you want to Model?",
                    name: "model",
                    options: [
                        {
                            label: "Frequency",
                            value: "f"
                        },
                        {
                            label: "Severity",
                            value: "s"
                        },
                        {
                            label: "Demand",
                            value: "d"
                        }
                    ]
                }
            ]


        },
        // Step 2 - file
        {

            label: "Upload CSV",
            questions: [
                {
                    type: "file",
                    description: "Import CSV file?",
                    name: "csv1"
                }
            ]
        },

        // Step 3 - Column Mapping
        {
            label: "Map Columns",
            questions: [
                {

                    type: "column_mapper",
                    name: "mapper1",
                    description: "Map the CSV file collumns",
                    file: "csv1",
                    columns: [
                        "Column One",
                        "Column Two",
                        "Column Thre",
                        "Column FOur",
                    ],


                }
            ]
        },

        // Step 4 -Radio
        {

            label: "Choose Model",
            questions: [
                {
                    type: "radio",
                    description: "Choose Model Type",
                    name: "model_type",
                    options: [
                        {
                            label: "GLM",
                            value: "GLM"
                        },
                        {
                            label: "GBM",
                            value: "GBM"
                        },
                        {
                            label: "GAM",
                            value: "GAM"
                        },
                        {
                            label: "BYOM",
                            value: "BYOM"
                        }
                    ]
                }
            ]


        },



        // Step 7 - Result

        {
            label: "Result",
            questions: [
                {

                    type: "result",
                    description: "Calculated Result",
                    data: {
                        head: [
                            "column 1",
                            "column 2",
                            "column 3",
                            "column 4",
                        ],
                        body: [
                            [
                                "Cell 1",
                                "Cell 2",
                                "Cell 3",
                                "Cell 4",

                            ],
                            [
                                "Cell 1",
                                "Cell 2",
                                "Cell 3",
                                "Cell 4",

                            ],
                            [
                                "Cell 1",
                                "Cell 2",
                                "Cell 3",
                                "Cell 4",

                            ],

                        ]
                    }


                }
            ]
        },





    ]
}


console.log("");
/**
 * Run this script on the page load
 */
(function () {

    if (document.readyState === "complete") {
        /**
         * If the page has alread loaded, directly call the builder function
         */
        build(formConfig, "#wizwiz");
    } else {
        window.addEventListener("load", function (event) {
            build(formConfig, "#wizwiz");
        });
    }
})();