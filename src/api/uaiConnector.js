// These are the api functions that are injected into the different runtimes that UAI runs on. These functions are used to interact with the UAI platform and perform operations such as fetching data, sending data, etc.
// Do not change this file. This file is used to test the module via the index.html file.


const load = () => {
    window.restGetString = restGetString;
    window.restGetBytes = restGetBytes;
    window.restGetJson = restGetJson;
    window.restPostJson = restPostJson;
    console.log("loaded uaiConnector");
};

const restGetString = async (url) => {
    const response = await fetch(url);
    const data = await response.text();

    return data;
};

const restGetBytes = async (url) => {
    const response = await fetch(url);
    const data = await response.arrayBuffer();
    return data;
};

const restGetJson = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const restPostJson = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
};

export { restGetString, restGetBytes, restGetJson, restPostJson, load };

load();
// window["restGetString"] = restGetString;
// window["restGetBytes"] = restGetBytes;
// window["restGetJson"] = restGetJson;
// window["restPostJson"] = restPostJson;
