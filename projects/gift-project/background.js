let wordOfTheDay = "not yet defined";

function newMessage(message, sender, sendResponse){
  console.log("got a message:", message);
  if (message.subject=="getWordOfTheDay") {
    sendResponse({subject:"wordOfTheDay", value:wordOfTheDay});
  }else if (message.subject=="newWord") {
    wordOfTheDay=message.value;
  }
}

chrome.runtime.onMessage.addListener( newMessage );
