export function map(ak) {  
    return new Promise(function (resolve, reject) {  
      window.onload = function () {  
        resolve(BMap)  
      }  
      var script = document.createElement("script");  
      script.type = "text/javascript";  
      script.src = "http://api.map.baidu.com/getscript?v=2.0&ak=' ak '&callback=init";  
      script.onerror = reject;  
      document.head.appendChild(script);  
    })  
  }  