function wrap(wordToWrap){
  findAndReplaceDOMText(document.body,{
    find: wordToWrap,
    wrap: 'span',
    wrapClass: 'wordOfTheDayExtension'
  })
}


function returnEnvelope(message){
  if (message.subject=="wordOfTheDay") {
    wrap(message.value);
  }
  console.log("they", message);
}

chrome.runtime.sendMessage({subject:"getWordOfTheDay"}, returnEnvelope);
