var feedRemoved = false;

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) return

    for (var i = 0; i < mutation.addedNodes.length; i++) {
      var toggle = document.getElementById("toggle")
      var checked = toggle && toggle.getAttribute("checked")
      var items = document.getElementById("items")
      var endVideo = document.getElementsByClassName("html5-endscreen")

      if (checked == "") {


        toggle.click()
        $("#toggle").attr("disabled", true);
        toggle.disabled = true

      } else if (toggle && checked == undefined && !toggle.disabled) {

        $("#toggle").attr("disabled", true);
        toggle.disabled = true
      }
      if(items){
        $("#items").remove()
      }
      if(endVideo.length > 0 && endVideo[0]){
        feedRemoved = true
        var parent = endVideo[0].parentNode
        parent.removeChild(endVideo[0])
      }

      var node = mutation.addedNodes[i]
    }
  })
})
var target = document.body

observer.observe(target, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false
})
