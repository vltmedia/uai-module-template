// An example of a custom module that can be loaded as a plugin in the UAI platform.
// This module generates a random cat fact.

import React, { useState, useEffect } from "react";

// This is the view of the module. It is the component that will be rendered in the UAI platform if autoUI == false.
const view = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        console.log("loaded CustomModule");
    }, []);

    return <div>CustomModule loaded from plugin</div>;
};

// This is the operation of the module. It is the function that will be executed when the module is run in the UAI platform.
// It should return the result of the operation and be an async function.
const operation = async (props) => {
    const response = await window.restGetString(
        "https://cat-fact.herokuapp.com/facts"
    );
    const jsData = JSON.parse(response);
    return jsData;
};

// This is the schema of the module. It defines the metadata of the module such as name, title, description, inputs, outputs, etc.
// The subwindows field defines the settings of the module that will be displayed in the UAI platform.
const schema = {
    name: "custom.name.customModule",
    title: "Generate Cat Fact",
    path: "Facts/Cat",
    category: "Text",
    icon: "",
    tags: ["Text", "Cat"],
    description: "Generate a random Cat Fact.",
    inputs: ["Text"],
    outputs: ["Text"],
    panel: 2,
    subwindows: [
        {
            title: "Basic Settings",
            size: "Large",
            fields: [
                {
                    name: "prompt",
                    label: "Prompt",
                    type: "string",
                    lines: "multi",
                    placeholder: "",
                    value:
                        "A Photograph of a dog. high quality. Cinematic lighting.",
                    required: true,
                    help: "Enter the text prompt for generating the image.",
                    uuid: "1dd420db-5",
                    options: [],
                    keyframeable: true,
                    keyframeType: "all",
                },
            ],
            buttons: [],
            uuid: "8ba403fa-a",
            enabled: true,
            toggleable: true,
            initialState: false,
            name: "basicsettings",
        },
    ],
    functions: [
        {
            name: "Generate",
            module: "CustomModule",
            moduleType: "js",
            operation: "operation",
            args: "",
            executable: "js",
            url: "https://cat-fact.herokuapp.com/facts",
            type: "submit",
            help: "Click to get a Cat Fact",
            requestType: "ImageRequestConsole",
            responseType: "string",
            preFunction: "",
            postFunction: "",
            icon: "fa-paint-brush",
            uuid: "269d6e2a-9",
        },
    ],
    uuid: "16467d71-2",
    autoUI: false,
    hidden: false,
    automatic: [],
    documentation: "https://uai.software/docs",
    initialState: false,
    toggleable: true,
    isFX: false,
    window: "AIGenerate",
};

export default view;

export { operation, schema, view };
