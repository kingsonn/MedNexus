document.getElementById("trans").addEventListener('change',function(e){
    if(e.target.value === "en"){
        window.location.href = ("/")  
    }
    if(e.target.value === "es"){
        esp()   
    }
    if(e.target.value === "hi"){
        hin()   
    }
    if(e.target.value === "zh-Hans"){
        man()   
    }
    if(e.target.value === "fr"){
        fre()   
    }


})
    var t1 = document.getElementById('t1')
    var t2 = document.getElementById('t2')
    var t3 = document.getElementById('t3')
    var t4 = document.getElementById('t4')
    var t5 = document.getElementById('t5')
    var t6 = document.getElementById('t6')
    var t7 = document.getElementById('t7')
    var t8 = document.getElementById('t8')
    var t9 = document.getElementById('t9')
    var t10 = document.getElementById('t10')
    var t11 = document.getElementById('t11')
    var t12 = document.getElementById('t12')
    var t13 = document.getElementById('t13')
    var t14 = document.getElementById('t14')
    var t15 = document.getElementById('t15')
    var t16 = document.getElementById('t16')
    var t17 = document.getElementById('t17')
    
    
   function esp(){
   
    $.ajax({
       url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es&textType=html",
       
       beforeSend: function(xhrObj){
           // Request headers
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","7cba4a39b27f4974a5221935b39115be");
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region","eastus");
           xhrObj.setRequestHeader("Content-Type","application/json; charset=UTF-8");
       },
       type: "POST",
       data: "[{'Text':"+ "'" +t1.innerHTML + "'" +" }, {'Text':"+ "'" + t2.innerHTML + "'" +"}, {'Text':"+ "'" + t3.innerHTML + "'" +"}, {'Text':"+ "'" + t4.innerHTML + "'" +"}, {'Text':"+ "'" + t5.innerHTML + "'" +"}, {'Text':"+ "'" + t6.innerHTML + "'" +"}, {'Text':"+ "'" + t7.innerHTML + "'" +"}, {'Text':"+ "'" + t8.innerHTML + "'" +"}, {'Text':"+ "'" + t9.innerHTML + "'" +"}, {'Text':"+ "'" + t10.innerHTML + "'" +"}, {'Text':"+ "'" + t11.innerHTML + "'" +"}, {'Text':"+ "'" + t12.innerHTML + "'" +"}, {'Text':"+ "'" + t13.innerHTML + "'" +"}, {'Text':"+ "'" + t14.innerHTML + "'" +"}, {'Text':"+ "'" + t15.innerHTML + "'" +"}, {'Text':"+ "'" + t16.innerHTML + "'" +"}, {'Text':"+ "'" + t17.innerHTML + "'" +"}]"
       
   })
   .done(function(data) {
      
     t1.innerHTML =data[0].translations[0].text
     t2.innerHTML =data[1].translations[0].text
     t3.innerHTML =data[2].translations[0].text
     t4.innerHTML =data[3].translations[0].text
     t5.innerHTML =data[4].translations[0].text
     t6.innerHTML =data[5].translations[0].text
     t7.innerHTML =data[6].translations[0].text
     t8.innerHTML =data[7].translations[0].text
     t9.innerHTML =data[8].translations[0].text
     t10.innerHTML =data[9].translations[0].text
     t11.innerHTML =data[10].translations[0].text
     t12.innerHTML =data[11].translations[0].text
     t13.innerHTML =data[12].translations[0].text
     t14.innerHTML =data[13].translations[0].text
     t15.innerHTML =data[14].translations[0].text
     t16.innerHTML =data[15].translations[0].text
     t17.innerHTML =data[16].translations[0].text
    
   })
   .fail(function() {
       console.log("error")
      
   });
   }
   
   function man(){
   
    $.ajax({
       url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=zh-Hans&textType=html",
       
       beforeSend: function(xhrObj){
           // Request headers
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","7cba4a39b27f4974a5221935b39115be");
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region","eastus");
           xhrObj.setRequestHeader("Content-Type","application/json; charset=UTF-8");
       },
       type: "POST",
       data: "[{'Text':"+ "'" +t1.innerHTML + "'" +" }, {'Text':"+ "'" + t2.innerHTML + "'" +"}, {'Text':"+ "'" + t3.innerHTML + "'" +"}, {'Text':"+ "'" + t4.innerHTML + "'" +"}, {'Text':"+ "'" + t5.innerHTML + "'" +"}, {'Text':"+ "'" + t6.innerHTML + "'" +"}, {'Text':"+ "'" + t7.innerHTML + "'" +"}, {'Text':"+ "'" + t8.innerHTML + "'" +"}, {'Text':"+ "'" + t9.innerHTML + "'" +"}, {'Text':"+ "'" + t10.innerHTML + "'" +"}, {'Text':"+ "'" + t11.innerHTML + "'" +"}, {'Text':"+ "'" + t12.innerHTML + "'" +"}, {'Text':"+ "'" + t13.innerHTML + "'" +"}, {'Text':"+ "'" + t14.innerHTML + "'" +"}, {'Text':"+ "'" + t15.innerHTML + "'" +"}, {'Text':"+ "'" + t16.innerHTML + "'" +"}, {'Text':"+ "'" + t17.innerHTML + "'" +"}]"
       
   })
   .done(function(data) {
      
     t1.innerHTML =data[0].translations[0].text
     t2.innerHTML =data[1].translations[0].text
     t3.innerHTML =data[2].translations[0].text
     t4.innerHTML =data[3].translations[0].text
     t5.innerHTML =data[4].translations[0].text
     t6.innerHTML =data[5].translations[0].text
     t7.innerHTML =data[6].translations[0].text
     t8.innerHTML =data[7].translations[0].text
     t9.innerHTML =data[8].translations[0].text
     t10.innerHTML =data[9].translations[0].text
     t11.innerHTML =data[10].translations[0].text
     t12.innerHTML =data[11].translations[0].text
     t13.innerHTML =data[12].translations[0].text
     t14.innerHTML =data[13].translations[0].text
     t15.innerHTML =data[14].translations[0].text
     t16.innerHTML =data[15].translations[0].text
     t17.innerHTML =data[16].translations[0].text
    
   })
   .fail(function() {
       console.log("error")
      
   });
   }
   function hin(){
   
    $.ajax({
       url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=hi&textType=html",
       
       beforeSend: function(xhrObj){
           // Request headers
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","7cba4a39b27f4974a5221935b39115be");
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region","eastus");
           xhrObj.setRequestHeader("Content-Type","application/json; charset=UTF-8");
       },
       type: "POST",
       data: "[{'Text':"+ "'" +t1.innerHTML + "'" +" }, {'Text':"+ "'" + t2.innerHTML + "'" +"}, {'Text':"+ "'" + t3.innerHTML + "'" +"}, {'Text':"+ "'" + t4.innerHTML + "'" +"}, {'Text':"+ "'" + t5.innerHTML + "'" +"}, {'Text':"+ "'" + t6.innerHTML + "'" +"}, {'Text':"+ "'" + t7.innerHTML + "'" +"}, {'Text':"+ "'" + t8.innerHTML + "'" +"}, {'Text':"+ "'" + t9.innerHTML + "'" +"}, {'Text':"+ "'" + t10.innerHTML + "'" +"}, {'Text':"+ "'" + t11.innerHTML + "'" +"}, {'Text':"+ "'" + t12.innerHTML + "'" +"}, {'Text':"+ "'" + t13.innerHTML + "'" +"}, {'Text':"+ "'" + t14.innerHTML + "'" +"}, {'Text':"+ "'" + t15.innerHTML + "'" +"}, {'Text':"+ "'" + t16.innerHTML + "'" +"}, {'Text':"+ "'" + t17.innerHTML + "'" +"}]"
       
   })
   .done(function(data) {
      
     t1.innerHTML =data[0].translations[0].text
     t2.innerHTML =data[1].translations[0].text
     t3.innerHTML =data[2].translations[0].text
     t4.innerHTML =data[3].translations[0].text
     t5.innerHTML =data[4].translations[0].text
     t6.innerHTML =data[5].translations[0].text
     t7.innerHTML =data[6].translations[0].text
     t8.innerHTML =data[7].translations[0].text
     t9.innerHTML =data[8].translations[0].text
     t10.innerHTML =data[9].translations[0].text
     t11.innerHTML =data[10].translations[0].text
     t12.innerHTML =data[11].translations[0].text
     t13.innerHTML =data[12].translations[0].text
     t14.innerHTML =data[13].translations[0].text
     t15.innerHTML =data[14].translations[0].text
     t16.innerHTML =data[15].translations[0].text
     t17.innerHTML =data[16].translations[0].text
    
   })
   .fail(function() {
       console.log("error")
      
   });
   }
   function fre(){
   
    $.ajax({
       url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=fr&textType=html",
       
       beforeSend: function(xhrObj){
           // Request headers
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","7cba4a39b27f4974a5221935b39115be");
           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region","eastus");
           xhrObj.setRequestHeader("Content-Type","application/json; charset=UTF-8");
       },
       type: "POST",
       data: "[{'Text':"+ "'" +t1.innerHTML + "'" +" }, {'Text':"+ "'" + t2.innerHTML + "'" +"}, {'Text':"+ "'" + t3.innerHTML + "'" +"}, {'Text':"+ "'" + t4.innerHTML + "'" +"}, {'Text':"+ "'" + t5.innerHTML + "'" +"}, {'Text':"+ "'" + t6.innerHTML + "'" +"}, {'Text':"+ "'" + t7.innerHTML + "'" +"}, {'Text':"+ "'" + t8.innerHTML + "'" +"}, {'Text':"+ "'" + t9.innerHTML + "'" +"}, {'Text':"+ "'" + t10.innerHTML + "'" +"}, {'Text':"+ "'" + t11.innerHTML + "'" +"}, {'Text':"+ "'" + t12.innerHTML + "'" +"}, {'Text':"+ "'" + t13.innerHTML + "'" +"}, {'Text':"+ "'" + t14.innerHTML + "'" +"}, {'Text':"+ "'" + t15.innerHTML + "'" +"}, {'Text':"+ "'" + t16.innerHTML + "'" +"}, {'Text':"+ "'" + t17.innerHTML + "'" +"}]"
       
   })
   .done(function(data) {
      
     t1.innerHTML =data[0].translations[0].text
     t2.innerHTML =data[1].translations[0].text
     t3.innerHTML =data[2].translations[0].text
     t4.innerHTML =data[3].translations[0].text
     t5.innerHTML =data[4].translations[0].text
     t6.innerHTML =data[5].translations[0].text
     t7.innerHTML =data[6].translations[0].text
     t8.innerHTML =data[7].translations[0].text
     t9.innerHTML =data[8].translations[0].text
     t10.innerHTML =data[9].translations[0].text
     t11.innerHTML =data[10].translations[0].text
     t12.innerHTML =data[11].translations[0].text
     t13.innerHTML =data[12].translations[0].text
     t14.innerHTML =data[13].translations[0].text
     t15.innerHTML =data[14].translations[0].text
     t16.innerHTML =data[15].translations[0].text
     t17.innerHTML =data[16].translations[0].text
    
   })
   .fail(function() {
       console.log("error")
      
   });
   }