// These are the api functions that are injected into the different runtimes that UAI runs on. These functions are used to interact with the UAI platform and perform operations such as fetching data, sending data, etc.
// Do not change this file. This file is used to test the module via the index.html file.

import axios from "axios";  // eslint-disable-line no-unused-vars
import {emit as emitObject} from "./useSignalSlots";  // eslint-disable-line no-unused-vars
const load = () => {
    window.restGetString = restGetString;
    window.restGetBytes = restGetBytes;
    window.restGetJson = restGetJson;
    window.restPostJson = restPostJson;
    window.getProject = getProject;
    window.getAppName = getAppName;
    window.getUser = getUser;
    window.sendPostRequest = sendPostRequest;
    window.setBrowserPath = setBrowserPath;
    window.setBrowserImagesPath = setBrowserImagesPath;
    window.setBrowserAudioPath = setBrowserAudioPath;
    window.emit = emit;
    window.sendToast = sendToast;
    
    console.log("loaded uaiConnector");
};

let sendToast = (message) => {
    alert(message);
};
const emit = (type, args) => {

    emitObject(type, args);
}

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

const getProject = async () => {
    const pr= localStorage.getItem("project");
    if(pr==null){
        return null;
    }
    return JSON.parse(pr);
};


const getAppName = async () => {
    return localStorage.getItem("appName");
    
};

const getUser = async () => {
    return JSON.parse(localStorage.getItem("user"));
    
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

const sendPostRequest = async (request, endpoint) =>{

    // dictionary["570537e7-7"].subwindows[0].fields[0]
    console.log("request", request);
    console.log("endpoint", endpoint);
    const response = await axios.post(
        endpoint, 
        request,
        {headers:{ "Authorization": "Bearer " + process.env.REACT_APP_UAI_API_KEY}}
    );
    return response;
}


const setBrowserPath = (path) => {

    document.dispatchEvent(new CustomEvent("filebrowser.setpath", {detail: {url: path}}));
}



const setBrowserImagesPath = () => {
const url= `stableV/${JSON.parse(localStorage.getItem("user")).id.toString()}/${JSON.parse(localStorage.getItem("project")).id.toString()}/assets/image`;
setBrowserPath(url);
}

const setBrowserAudioPath = (path) => {
const url= `stableV/${JSON.parse(localStorage.getItem("user")).id.toString()}/${JSON.parse(localStorage.getItem("project")).id.toString()}/assets/audio/${path}`;
setBrowserPath(url);
}

export { restGetString, restGetBytes, restGetJson, restPostJson, load ,getProject, getAppName
, getUser, sendPostRequest, setBrowserPath, setBrowserImagesPath, setBrowserAudioPath

};

load();
// window["restGetString"] = restGetString;
// window["restGetBytes"] = restGetBytes;
// window["restGetJson"] = restGetJson;
// window["restPostJson"] = restPostJson;
