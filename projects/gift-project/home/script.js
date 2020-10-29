function sendMessage(){
  let msg = document.getElementById("myInput").value;
  chrome.runtime.sendMessage({subject:"newWord", value:msg});
  document.getElementById("todaysWord").innerHTML=msg;
}

document.getElementById("myButton").addEventListener("click", sendMessage);

function returnEnvelope(message){
  if (message.subject=="wordOfTheDay") {
    document.getElementById("todaysWord").innerHTML=message.value;
  }
  console.log("they", message);
}

chrome.runtime.sendMessage({subject:"getWordOfTheDay"}, returnEnvelope);
