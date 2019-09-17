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

    //If sender email is not a U of T email
    if (!from.includes("utoronto.com")){
        for (let i = 0; i < to.length; i++){
            //If one of the recipients is a U of T email
            if (to[i].address.includes("utoronto.ca")){
                //Ask if this was a mistake
                if(!confirm("Are you sure you want to send an email to U of T using your personal email?")){
                    throw Error("User does not want to send email.")
                } else {
                    break // Since user already confirmed once it was OK
                }
            }
        }
    }
});
