function addTree(){
  let inputcount = document.getElementById("quantity").value;
  for (let i = 0; i < inputcount; i) {
    let eachtree = document.createElement("img");
    let randomXPosition = Math.round(Math.random()*100).toString();
    eachtree.style.left=randomXPosition + "vw";
    let randomYPosition = Math.round(Math.random()*10).toString();
    eachtree.style.bottom=randomYPosition + "vh";
    if (inputcount % 4 == 0) {
      eachtree.src="images/tree4.png";
    }else if (inputcount % 3 == 0) {
      eachtree.src="images/tree3.png"
    }else if (inputcount%2==0) {
      eachtree.src="images/tree2.png";
    }
    else {
      eachtree.src="images/tree1.png";
    }
    document.getElementById("treeHolder").appendChild(eachtree);
    inputcount--;
  }
  setTimeout(asktoreplay,1000)
  function asktoreplay(){
    document.getElementById("replayask").style.display="block"
    document.getElementById("travelbutton").innerHTML="travel again"
  }
}
