chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      "message": "clicked_browser_action"
    });
  });

});
var counter = 0;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {


  if (tab.url.includes("youtube.com/watch?") && changeInfo.status == "complete") {

    chrome.tabs.sendMessage(tab.id, {action: "open_dialog_box"}, function(response) {

    });
    chrome.storage.local.get(null, function(st) {
      console.log(st)
      var obj = {};
      var key = new Date().getTime()

      var viewedAlready = 0;
      for (object in st) {
        if (!(st[object] instanceof Date) || (st[object] - key) >= 3600 * 1000 * 24) {
          chrome.storage.local.remove(object)
        } else {
          viewedAlready++;
        }
      }
      if (viewedAlready >= 3) {
        var response = httpGetAsync("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=classical+music&key=AIzaSyBJGxP_859uX1nYSZ45_2PUssQI_Vqq43Q",
          function(text) {
            var responseObject = JSON.parse(text);
            responseObject.items[rand].id.videoId
            var myNewUrl = "https://www.youtube.com/watch?v=" + responseObject.items[rand].id.videoId

          chrome.tabs.update(tab.id, {
              url: myNewUrl
            });
          });
      }

      obj[tab.url] = key

      chrome.storage.local.set(obj, function(st) {
        chrome.storage.local.get(null, function(st) {})


      })


    })

  }

});

Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}
