// Fix stupid Zoom links - they really, really want you to use the desktop client
// rather than the web client.

var filter = {
    "urls": ["https://*.zoom.us/j/*"]
};

var options = ["blocking"];

var regex = /^(https:\/\/.*?zoom\.us)\/j\/(.*)$/i;

var callback = function(details) {
    var match = details.url.match(regex);
    var new_url = match[1] + "/wc/join/" + match[2];
    var response =  {
        "redirectUrl": new_url
    };
    return response;
};

chrome.webRequest.onBeforeRequest.addListener(
    callback,
    filter,
    options
);
