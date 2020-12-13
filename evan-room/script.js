// let moonphases = document.getElementsByClassName("moonphase")
// let links = ["https://edb394.github.io/abc-student-repo/projects/coding-foundation/","","","","","","","","",""]
//
// for (var i = 0; i < moonphases.length; i++) {
//   moonphases[i].addEventListener("click", ()=>{
//     let link = links[i]
//     window.open(link)
//   })
// }
let moonphase=document.getElementsByClassName("moonphase");
moonphase[0].addEventListener("click",()=>{
  window.open("../projects/mini-project-1/")
})
moonphase[1].addEventListener("click",()=>{
  window.open("../projects/mini-project-2/")
})
moonphase[2].addEventListener("click",()=>{
  window.open("../projects/mini-project-3/")
})
moonphase[3].addEventListener("click",()=>{
  window.open("../projects/project-a/")
})
moonphase[4].addEventListener("click",()=>{
  window.open("../projects/bug-project/")
})
moonphase[5].addEventListener("click",()=>{
  window.open("../projects/gift-project/")
})
moonphase[7].addEventListener("click",()=>{
  window.open("https://acoustic-brassy-paint.glitch.me")
})
moonphase[8].addEventListener("click",()=>{
  window.open("https://purple-working-enigmosaurus.glitch.me")
})

let moonvid=document.getElementById("moonvid");

moonvid.onended=()=>{
  console.log("ended");
  moonvid.style.opacity="0%";
  setTimeout(()=>{
    moonvid.style.display="none";
    for (var i = 0; i < moonphase.length; i++) {
      moonphase[i].style.position="relative";
    }
  },1000);
  for (var i = 0; i < document.getElementsByClassName("moonphasep").length; i++) {
    document.getElementsByClassName("moonphasep")[i].style.opacity="100%";
  }
  for (var i = 0; i < document.getElementsByClassName("moonphaseimg").length; i++) {
    document.getElementsByClassName("moonphaseimg")[i].style.opacity="100%";
  }
}
