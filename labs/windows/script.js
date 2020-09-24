let button = window.document.getElementById("myButton")
console.log(button);
let sw=screen.width;
let sh=screen.height;


function openWindow(){
  console.log("a window should open 🤞")
  let randomX=Math.random()*(sw-300);
  let randomY=Math.random()*(sh-300);
  let newWindow = window.open("popup.html","","height=300, width=300, left="+randomX+", top="+randomY+"")
  let randomTime = 5000+Math.random()*5000;
  setTimeout(()=>{
    newWindow.close();
  },randomTime)
}

button.addEventListener("click",()=>{
  for (var i = 0; i < 30; i++) {
    openWindow();
  }
})
