chrome.browserAction.onClicked.addListener(function(tab) {
  let archiveMessage = chrome.i18n.getMessage("archiveButton");
  chrome.tabs.executeScript({
    code: "window.location='https://archive.today/' + document.location; void(0);"
  });
});