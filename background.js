// Fix stupid Zoom links - they really, really want you to use the desktop client
// rather than the web client.

const ruleId = 1;

const rules = {
  removeRuleIds: [ruleId],
  addRules: [{
      id: ruleId,
      "priority": 1,
      "action": {
          "type": "redirect",
          "redirect": {
              "regexSubstitution": "https://\\1zoom.us/wc/join/\\2"
          }
      },
      "condition": {
          "regexFilter": "^https://(.*?\\.)?zoom.us/j/(.*)$",
          "isUrlFilterCaseSensitive": false,
          "resourceTypes": [
              "main_frame"
          ]
      }
  }]
};

chrome.declarativeNetRequest.updateDynamicRules(rules, () => {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  } else {
    chrome.declarativeNetRequest.getDynamicRules(rules => console.log(rules));
  }
});
