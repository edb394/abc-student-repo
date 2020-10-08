
let range = document.getElementById("entryRange");
let rangeEnd = window.innerWidth/100*60;
let finished = 0
window.onload = ()=>{
  setTimeout(()=>{
    range.style.animation="pulse 2s linear infinite";
  },4000)
}
range.addEventListener("input",()=>{
  range.style.width=(((rangeEnd-100)/100)*range.value+100)+"px"
})
range.addEventListener("change",()=>{
  if (range.value==100){
    document.getElementsByTagName("body")[0].style.overflow="scroll";
    finished = 1;
    range.style.animation="scroll 10s linear forwards";
    document.getElementById("bg").style.animation="scroll 10s linear forwards";
    document.getElementById("ebg").style.animation="scroll 10s linear forwards";
    setTimeout(()=>{
      window.location.assign("underground")
    },10000)
  }
})
range.addEventListener("mouseover",()=>{
  range.style.animation="0";
})
range.addEventListener("mouseout",()=>{
  if (finished==0){
    range.style.animation="pulse 2s linear infinite";
  }
})
