var phraseDiv;
         var startRecognizeOnceAsyncButton;
     
         // subscription key and region for speech services.
         var subscriptionKey, serviceRegion;
         var SpeechSDK;
         var recognizer;
         const url = "https://australiaeast.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/bf3d2786-29d7-4bcc-a58c-25a527f638f4/slots/staging/predict?verbose=true&show-all-intents=true&log=true&subscription-key=12a586f3f80647eab101bbc54f095e1a&query=";
         var HttpClient = function() {
             this.get = function(aUrl, aCallback) {
                 var anHttpRequest = new XMLHttpRequest();
                 anHttpRequest.onreadystatechange = function() { 
                     if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                         aCallback(anHttpRequest.responseText);
                 }
         
                 anHttpRequest.open( "GET", aUrl, true );            
                 anHttpRequest.send( null );
             }
         }
         function speak(){
            var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey.value, serviceRegion.value);
            synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);
            speechConfig;
            let inputText = "Hello, I'm Dr. Medico, How can I help you?";
        synthesizer.speakTextAsync(
      inputText,
      function (result) {
        startSpeakTextAsyncButton.disabled = false;
        
        window.console.log(result);
        synthesizer.close();
        synthesizer = undefined;
      },
      function (err) {
        startSpeakTextAsyncButton.disabled = false;
        yy
        window.console.log(err);

        synthesizer.close();
        synthesizer = undefined;
    });
           }
         var client = new HttpClient();
             client.get("https://australiaeast.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/bf3d2786-29d7-4bcc-a58c-25a527f638f4/slots/staging/predict?verbose=true&show-all-intents=true&log=true&subscription-key=12a586f3f80647eab101bbc54f095e1a&query=doctor%20diagnosis", function(response) {
                 return JSON.parse(response).prediction.topIntent
             });
         document.addEventListener("DOMContentLoaded", function () {
           startRecognizeOnceAsyncButton = document.getElementById("startRecognizeOnceAsyncButton");
           subscriptionKey = document.getElementById("subscriptionKey");
           serviceRegion = document.getElementById("serviceRegion");
           phraseDiv = document.getElementById("phraseDiv");
     
           startRecognizeOnceAsyncButton.addEventListener("click", function () {
             startRecognizeOnceAsyncButton.disabled = true;
             
     
             if (subscriptionKey.value === "" || subscriptionKey.value === "subscription") {
               alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
               return;
             }
             speak()
             setTimeout(rec, 5000);

            function rec(){
                var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey.value, serviceRegion.value);
             
                speechConfig.speechRecognitionLanguage = "en-US";
                var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
                recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
                
                recognizer.recognizeOnceAsync(
                    
                  function (result) {
                    startRecognizeOnceAsyncButton.disabled = false;
                    phraseDiv.innerHTML += result.text;
                    window.console.log(result);
                    console.log(url+result.privText);
                    
                    change()
                    function change(){
                        client.get(url+result.privText, function(response) {
                            if(JSON.parse(response).prediction.topIntent === "accessWebsite") {
                                window.location.href = ("https://mexus.azurewebsites.net/diagnosis")
                            }
                            if(JSON.parse(response).prediction.topIntent === "accessDoc") {
                                window.location.href = ("https://mexus.azurewebsites.net/mentalhealth")
                            }
                            if(JSON.parse(response).prediction.topIntent === "accessconsult") {
                                window.location.href = ("https://mexus.azurewebsites.net/bdonation")
                            }
                            if(JSON.parse(response).prediction.topIntent === "emotiondetect") {
                                window.location.href = ("https://mexus.azurewebsites.net/emotion")
                            }
                            if(JSON.parse(response).prediction.topIntent === "goBack") {
                                window.location.href = ("https://mexus.azurewebsites.net/")
                            }
                            if(JSON.parse(response).prediction.topIntent === "heartdisease") {
                                window.location.href = ("https://mexus.azurewebsites.net/heartdisease")
                            }
                            if(JSON.parse(response).prediction.topIntent === "skincancer") {
                                window.location.href = ("https://mexus.azurewebsites.net/skincancer")
                            }
                            if(JSON.parse(response).prediction.topIntent === "blooddonation") {
                                window.location.href = ("https://mexus.azurewebsites.net/bdonation")
                            }
            
                        });
                    }
                    recognizer.close();
                    recognizer = undefined;
                    
                  },
                  function (err) {
                    startRecognizeOnceAsyncButton.disabled = false;
                    phraseDiv.innerHTML += err;
                    window.console.log(err);
        
                    recognizer.close();
                    recognizer = undefined;
                  });
            }
           });
           
           function speakagain(){
            var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey.value, serviceRegion.value);
            synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);
            speechConfig;
            let inputText = "Yes, as you wish";
        synthesizer.speakTextAsync(
      inputText,
      function (result) {
        startSpeakTextAsyncButton.disabled = false;
        
        window.console.log(result);
        synthesizer.close();
        synthesizer = undefined;
      },
      function (err) {
        startSpeakTextAsyncButton.disabled = false;
        yy
        window.console.log(err);

        synthesizer.close();
        synthesizer = undefined;
    });
           }
     
           if (!!window.SpeechSDK) {
             SpeechSDK = window.SpeechSDK;
             startRecognizeOnceAsyncButton.disabled = false;
     
             document.getElementById('content').style.display = 'block';
             document.getElementById('warning').style.display = 'none';
           }
         });