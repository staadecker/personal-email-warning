// From https://github.com/josteink/gmailjs-node-boilerplate
"use strict";

function addScript(src) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = chrome.extension.getURL(src);
    (document.body || document.head || document.documentElement).appendChild(script);
}

addScript("dist/extension.js");