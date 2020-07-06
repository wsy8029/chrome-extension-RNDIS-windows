chrome.browserAction.onClicked.addListener(function(activeTab){
    var a = document.createElement('a');
    a.href = 'Modi_AI_OTG_Driver.exe';
    a.download = 'Modi_AI_OTG_Driver.exe'; // Filename
    a.click(); 
  });