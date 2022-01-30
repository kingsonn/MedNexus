let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let stopcam = document.querySelector("#stop");
camera_button.addEventListener('click', async function () {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    video.style.display = "inline"
    stopcam.style.display = "inline"

    stopcam.addEventListener('click', async function () {
      stream.getTracks().forEach(function (track) {
        track.stop();
        video.style.display = "none"
        stopcam.style.display = "none"
        clearInterval(intervall);

      });
    });

    const intervall = setInterval(processImage, 3000);
  
    

});
function getMax(obj){
    return Math.max.apply(null,Object.keys(obj));
};
makeblob = function (dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}

function processImage() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL();
    $.ajax({
        url: "https://hahacv-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9668de6b-ff5f-403a-a290-56f7fd49c677/classify/iterations/Iteration1/image",

        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Prediction-Key", "659d0587560d461086c017ee619f6d07");
            xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
        },
        type: "POST",
        processData: false,

        data: makeblob(image_data_url)
    })

        .done(function (data) {
            // Show formatted JSON on webpage.
            abc = data["predictions"][0]["tagName"];
           console.log(abc);
           if(data["predictions"][0]["tagName"] === "One"){
            window.location.href = ("http://127.0.0.1:5000/diagnosis")
           }
           if(data["predictions"][0]["tagName"] === "Three" || abc === "Two"){
            window.location.href = ("http://127.0.0.1:5000/mental")
           }
           if(data["predictions"][0]["tagName"] === "Five"){
            window.location.href = ("http://127.0.0.1:5000/bdonation")
           }
           if(data["predictions"][0]["tagName"] === "Zero"){
            window.location.href = ("http://127.0.0.1:5000/bdonation")
           }
           
        })

        .fail(function (jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ?
                "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ?
                "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                    jQuery.parseJSON(jqXHR.responseText).message :
                    jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });
    
};