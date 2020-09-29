let p1 = document.getElementById('p1')
let p0 = document.getElementById('p0')
let p2 = document.getElementById('p2')
let scaleduration=0;

p0.addEventListener("click",()=>{
  scaleduration++;
  console.log(scaleduration);
  document.getElementsByClassName("box-2")[0].style.animation="scaling 2s linear";
  document.getElementsByClassName("box-2")[0].style.animationIterationCount=scaleduration;
})
