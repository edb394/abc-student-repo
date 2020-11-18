let d = new Date();
document.getElementById("today").innerHTML = d.toDateString();
let days= 27-d.getDate();
console.log(days);

button.addEventListener("click", ()=>{
  let guess = document.getElementById("secret").value;
  console.log("guess:", guess);
  window.location.href="/guess?word=" + guess
})
