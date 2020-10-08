let lever = document.getElementById("lever");
let l=document.getElementById("l");
let lb=document.getElementById("lb");
let firsthover=0
let leverposition=0

document.getElementById("efg").addEventListener("click",()=>{
  if (leverposition==0){
    alert("The elevator isn't working! Try to find a way to generate power to fuel your journey back.")
  }
  else{
    document.getElementById("efg").style.animation="scroll 5s linear forwards";
    setTimeout(()=>{
      window.location.assign("../")
    },5000)
  }
})
lever.addEventListener("mouseover",()=>{
  if (firsthover==0){
    l.style.animation="0";
    lb.style.animation="0";
    firsthover = 1;
  }
})
l.addEventListener("click",()=>{
  if(leverposition==0){
    l.style.animation="rotateright 2s linear forwards";
    leverposition=1;
    document.getElementById("wheel").style.animation="spin 4s linear infinite"
    setTimeout(()=>{
      document.getElementById("efg").style.animation="pulse 2s linear infinite"
    },2500)
  }
  else{
    l.style.animation="rotateleft 2s linear forwards"
    document.getElementById("wheel").style.animationPlayState="paused"
    leverposition=0;
    document.getElementById("efg").style.animation="0"
  }
})
