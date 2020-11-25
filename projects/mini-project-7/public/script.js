console.log("hi");

let socket = io();
let namebox = document.getElementById("name");
let chatbox = document.getElementById("chat");
let messagebox = document.getElementById("message");
let sendbutton = document.getElementById("send");

sendbutton.addEventListener("click", ()=>{
  let name = namebox.value.trim();
  if(name==""){
    name="anonymous";
  }
  namep.innerHTML=name+", what do you want to say?";
  let message=messagebox.value.trim();
  if(message!=""){
    let data={name:name,message:message};
    socket.emit('message', data);
  }
  messagebox.value="";

})
let nameintro = document.getElementById("nameintro");
let namep = document.getElementById("namep");


namebox.addEventListener("keyup", (e)=>{
  if(e.keyCode===13){
    nameintro.style.opacity='0%';
    setTimeout(()=>{
      nameintro.style.display="none";
      if(namebox.value.trim() != ""){
        namep.innerHTML=namebox.value+", what do you want to say?";
        sendbutton.style.opacity="100%";
        message.style.opacity="100%";
      }
    },1000)
  }
})


messagebox.addEventListener("keyup", (e)=>{
  if(e.keyCode===13){
    sendbutton.click();
  }
})

socket.on("incoming", (data)=>{
  let name=data.name;
  let message=data.message;
  let li=document.createElement("li");
  let p=document.createElement("p");
  p.innerHTML=name+": "+message;
  li.appendChild(p);
  chatbox.appendChild(li);
  chatbox.scrollTop = chatbox.scrollHeight;
})
socket.on("newtree", (treeinfo)=>{
  let eachtree = document.createElement("img");
  eachtree.style.left=treeinfo.xpos + "vw";
  eachtree.style.bottom=treeinfo.ypos + "vh";
  if (treeinfo.treenum==0) {
    eachtree.src="images/tree4.png";
  }else if (treeinfo.treenum==1) {
    eachtree.src="images/tree3.png"
  }else if (treeinfo.treenum==2) {
    eachtree.src="images/tree2.png";
  }
  else {
    eachtree.src="images/tree1.png";
  }
  document.getElementById("treeHolder").appendChild(eachtree);

})
