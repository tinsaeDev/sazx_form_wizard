

const formConfig = {
    title: "Here goes the wizard title",
    steps: [


        // Step 5  - Free Text         
        {
            label: "Define Label for this",
            questions: [

                // 
                {
                    type: "radio",
                    label: "What do you want to Model?",
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
                    ]},
                // 

                {
                    type: "group",
                    label : "Your Address",
                    questions: [

                        {
                            type: "number",
                            name: "gp1",
                            label: "Group Element 1",
                            default: "this is default value",

                        },

                                        // 
                {
                    type: "radio",
                    label: "What do you want to Model?",
                    name: "model11",
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
                    ]},
                // 

                        {
                            type: "url",
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
// 
                        {
                            
                    type: "group",
                    label : "Your Address",
                    questions: [

                        {
                            type: "number",
                            name: "gp1",
                            label: "Group Element 1",
                            default: "this is default value",

                        },

                        {
                            type: "url",
                            name: "gp2",
                            label: "Group Element 2",
                            default: "this is default value",

                        },
                    ]
                    }

                        
                        // 
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
                    label: "What do you want to Model?",
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
                    type: "number",
                    label: "Import CSV file?",
                    name: "csv1"
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