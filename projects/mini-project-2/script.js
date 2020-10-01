document.getElementById("myButton").addEventListener("click",startTimer)

let x =null
var timeLimit = 60000
let timePassed=0
let timeRemaining=timeLimit;
let unwinnable=false


function startTimer(){
  x = setInterval(()=>{
    timePassed = timePassed+1000;
    timeRemaining = timeLimit-timePassed;
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    if (seconds<10){
      seconds="0"+seconds;
    }
    if (minutes<10){
      minutes="0"+minutes;
    }
    document.getElementById("timer").innerHTML = minutes+":"+seconds;

    //define how and when popups will show, i.e. every 3000ms
    let ww=screen.width/6;
    let wh=screen.height/3;
    let leftpos=Math.random()*(screen.width-ww)
    let toppos=Math.random()*(screen.height-wh)
    if (timeRemaining%3000==0 && timeRemaining>3000){
      //50-50 chance of red or blue window
      let windowcolor=Math.random()>=0.5
      if (windowcolor==true && timeRemaining>10000){
       window.open("blue.html","", "width="+ww+",height="+wh+",left="+leftpos+",top="+toppos+"")
    }
      if (windowcolor==false){
        var newWindow = window.open("red.html","", "width="+ww+",height="+wh+",left="+leftpos+",top="+toppos+"");

        let doubleTime =timeRemaining/2
        setTimeout(()=>{console.log(newWindow.closed);
          if (newWindow.closed==false){lose();}
          else if (newWindow.closed==true) {win();}
        },doubleTime)
      }
}

      //this will say yes if a blue window has been clicked
     if (document.getElementById("invisible").innerHTML=="yes"){
       lose();
     }
     function win(){
       if (unwinnable ==false){
       clearInterval(x);
       console.log("win");
       document.getElementById("timer").innerHTML="you win!"
       document.getElementById("h2-1").innerHTML="";
       document.getElementById("h2-2").innerHTML="";}
     }
     function lose(){
       clearInterval(x);       document.getElementById("timer").innerHTML="you lose"
       console.log("lose");
       document.getElementById("h2-1").innerHTML="";
       document.getElementById("h2-2").innerHTML="";
       unwinnable = true;
     }

  },500);
}
