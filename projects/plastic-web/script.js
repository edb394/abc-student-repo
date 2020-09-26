var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('myiframe',{
    events: {
        'onReady': onPlayerReady,
    }
  });
}

let range = document.getElementById("myRange");
let mc = document.getElementById("minicircle");
let vi = document.getElementById("volumeindicator");

function onPlayerReady(){
  player.setVolume(0);
  range.addEventListener("input", rangeInputFunctions);
  range.addEventListener("change", rangeChangeFunctions);
  vi.addEventListener("click", muteSong)
};

function rangeInputFunctions(){
  youtubeVolume();
  checkMute();
}
function youtubeVolume(){
  player.setVolume(range.value);
}
function checkMute(){
  if (range.value==0) {
    vi.innerHTML="🔇"
  }
  else {
    vi.innerHTML="🔊"
  }
}

function muteSong(){
   (range.value!=0)
    range.value=0;
    vi.innerHTML="🔇";
    player.setVolume(0);
    vi.style.cursor="default";
}

function rangeChangeFunctions(){
  minicircleColor();
  unmute();
}
function minicircleColor(){
  mc.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
}
function unmute(){
  vi.innerHTML="🔊";
  vi.style.cursor="pointer";
}

//make text into a circle
let text = document.getElementById("startText").innerHTML;
let letters = text.split("");
let letterSpans = letters.map((letter)=>{
  return "<div class='rotatingLetters'>"+letter+"</div>"
});
document.getElementById("startText").innerHTML=letterSpans.join("")
let rotLett = document.getElementsByClassName('rotatingLetters');

for (var i = 0; i < rotLett.length; i++) {
  rotLett[i].style.transform="rotate("+(i*(360/(rotLett.length)))+"deg)"+"translateY(-100px)"
}
