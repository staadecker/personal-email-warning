// From https://github.com/josteink/gmailjs-node-boilerplate
"use strict";

console.log("Extension loading...");

// import * as jQuery from "jquery";

// const $ = jQuery;

const GmailFactory = require("gmail-js");
const gmail = new GmailFactory.Gmail();

// window.gmail = gmail;

gmail.observe.before("send_message", (url, body, data, xhr) => {
    console.log("url:", url, 'body', body, 'email_data', data, 'xhr', xhr);
    const from = data.from.address;
    const to = data.to;

    if (!from.includes("@mail.utoronto.com")){
        for (let i = 0; i < to.length; i++){
            if (to[i].address.includes("utoronto.ca")){
                if(!confirm("Are you sure you want to send an email to U of T using a personal email")){
                    throw Error("Canceling sending")
                } else {
                    break // Since use already confirmed once it was OK
                }
            }
        }
    }
});