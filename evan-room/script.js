// let moonphases = document.getElementsByClassName("moonphase")
// let links = ["https://edb394.github.io/abc-student-repo/projects/coding-foundation/","","","","","","","","",""]
//
// for (var i = 0; i < moonphases.length; i++) {
//   moonphases[i].addEventListener("click", ()=>{
//     let link = links[i]
//     window.open(link)
//   })
// }

document.getElementsByClassName("moonphase")[0].addEventListener("click",()=>{
  window.open("../projects/mini-project-1/")
})
document.getElementsByClassName("moonphase")[1].addEventListener("click",()=>{
  window.open("../projects/mini-project-2/")
})
document.getElementsByClassName("moonphase")[2].addEventListener("click",()=>{
  window.open("../projects/mini-project-3/")
})
document.getElementsByClassName("moonphase")[3].addEventListener("click",()=>{
  window.open("../projects/project-a/")
})
document.getElementsByClassName("moonphase")[4].addEventListener("click",()=>{
  window.open("../projects/bug-project/")
})
