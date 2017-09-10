//
// var Context = window.AudioContext || window.webkitAudioContext;
// var context = new Context();
// var mediaStream;
// var rec;
// var mediaRecorderGlobal;
// var blob;
// var mediaConstraints = {
//     audio: true,
//     video: true
// };
//
//
// function onMediaSuccess(stream) {
//     var mediaRecorder = new MediaStreamRecorder(stream);
//     mediaRecorder.mimeType = 'video/webm';
//     mediaRecorder.ondataavailable = function (blob) {
//         // POST/PUT "Blob" using FormData/XHR2
//         var blobURL = URL.createObjectURL(blob);
//         document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
//     };
//     mediaRecorder.start(3000);
// }
//
// function onMediaError(e) {
//     console.error('media error', e);
// }
function newTab(tab) {
  return tab;
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("start").addEventListener("click", start);
  document.getElementById("stop").addEventListener("click", stop);

});

function start() {
  chrome.tabs.getAllInWindow(function (tabs) {
console.log(tabs);
console.log(mapping);
  })

  // startRecording();
 //  var constraints = {
 //   audio: true,
 //   video: true,
 // };
 // var options = {
 //      audioBitsPerSecond : 128000,
 //      videoBitsPerSecond : 2500000,
 //      mimeType : 'video/mp4'
 //    }
 //    chrome.desktopCapture.chooseDesktopMedia(["audio"],   function(streamId) {
 //    var vid_constraint = {
 //      mandatory: {
 //        chromeMediaSource: 'desktop',
 //        chromeMediaSourceId: streamId,
 //        maxWidth: 1920,
 //        maxHeight: 1080
 //      },
 //      optional: []
 //    };
 //    navigator.webkitGetUserMedia({audio: false, video: vid_constraint}, success_func, fallback_func);
  // }
    // chrome.tabCapture.capture(constraints, function(stream){
    //    mediaRecorder = new MediaStreamRecorder(stream,options);
    //   mediaRecorder.ondataavailable = function (blob) {
    //       // POST/PUT "Blob" using FormData/XHR2
    //       var blobURL = URL.createObjectURL(blob);
    //       blob = blobURL
    //
    //       document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
    //   };
    //   mediaRecorder.start(3000);
    // })

}

//     const audioContext =  new (window.AudioContext || window.webkitAudioContext)();
//
//     const recorder = new Recorder(audioContext);
//     navigator.mediaDevices.getUserMedia({audio: true,video: true})
//      .then(stream => recorder.init(stream))
//      .catch(err => console.log('Uh oh... unable to get stream...', err));
// recorder.start();
    // mediaStream = stream;
    // var mediaStreamSource = context.createMediaStreamSource(stream);
    // rec = new Recorder(stream)

        // start recording
        // rec.start();

//
//   });
// }

function stop() {
  //  mediaRecorderGlobal.stop();
// console.log("ASDASD")
// mediaStream.stop();
//
//   // stop Recorder.js
//   rec.stop();
//
//   // export it to WAV
//   rec.exportWAV(function(e){
//     rec.clear();
//     Recorder.forceDownload(e, "filename.wav");
//   });
}
// function getUserMediaError() {
// console.log("getUserMedia() failed.");
// }
//
// function onAccessApproved(id) {
//  if (!id) {
//  console.log("Access rejected.");
//  return;
//  }
//   navigator.webkitGetUserMedia({
//      audio:false,
//     video: { mandatory: { chromeMediaSource: "desktop",
//                         chromeMediaSourceId: id } }
//   }, onMediaSuccess, getUserMediaError);
// }
//
// function startRecording()  {
// // pending_request_id = chrome.desktopCapture.chooseDesktopMedia(
// //    ["window"], onAccessApproved);
// var constraints = {
//  audio: true,
//  video: true,
// };
// chrome.tabCapture.capture(constraints,function(stream){
//   onMediaSuccess(stream)
// })
// }
//
//
//
// function onMediaSuccess(stream) {
//
//  var mediaRecorder = new MediaStreamRecorder(stream);
//  mediaRecorder.mimeType = 'video/mp4';
//  //i dont want strechy video so i fixed the width and height of recorder equal to window
// mediaRecorder.width = window.screen.width;
// mediaRecorder.height = window.screen.height;
//
// mediaRecorder.ondataavailable = function (blob) {
//
//     var blobURL = URL.createObjectURL(blob);
//
//
//     var link=blobURL;
// var videoInfo="Compiled Video file size: " + Math.ceil(blob.size / 1024) + "KB";
// mediaRecorder.save(blob, 'sample.mp4');
//
//
// };
// mediaRecorderGlobal = mediaRecorder
// mediaRecorder.onstop = function() {
// };
// mediaRecorder.start(3000); // i want unlimited recording time so i increased the timeslice
//   stream.onended = function() {
//   //finalizeVideo();
//   console.log("Ended"); };
//    }
