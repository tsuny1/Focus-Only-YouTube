chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  chrome.storage.local.get(null, function(history) {

    if (history["last_url"] != tab.url && tab.url.includes("youtube.com/watch?") && changeInfo.status == "complete") {

      chrome.tabs.sendMessage(tab.id, { action: "open_dialog_box"});
      var key = new Date().getTime()

      var viewedAlready = 0;
      var newHistory = history["history"];
      for (object in newHistory) {
        if (typeof newHistory[object] !== "number" || (newHistory[object] - key) >= 3600 * 1000 * 24) {
          delete newHistory[object]
        } else {
          viewedAlready++;
        }
      }
      chrome.storage.local.set({
        "history": newHistory
      });
      if (viewedAlready >= 3) {
        reroute(tab);
      } else {

        if (history["history"]) {

          history["history"][String(tab.url)] = key;
          chrome.storage.local.set({
            "history": history["history"]
          });

        } else {
          history[String(tab.url)] = key

          chrome.storage.local.set({
            "history": history
          });
        }
      }
    }
  });
});


function reroute(tab) {
  var response = httpGetAsync("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=classical+music&key=AIzaSyBJGxP_859uX1nYSZ45_2PUssQI_Vqq43Q",
    function(text) {
      var responseObject = JSON.parse(text);
      var rand = Math.floor(Math.random() * 25);
      if (responseObject.items[rand].id.videoId) {
        var myNewUrl = "https://www.youtube.com/watch?v=" + responseObject.items[rand].id.videoId


        chrome.tabs.update(tab.id, {
          url: myNewUrl
        });
        chrome.storage.local.set({
          "last_url": myNewUrl
        });

      }
    });
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}
