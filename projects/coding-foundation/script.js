function addTree(){
  let inputcount = document.getElementById("quantity").value;
  for (let i = 0; i < inputcount; i) {
    let eachtree = document.createElement("img");
    let randomDistance = Math.round(Math.random()*100).toString();
    eachtree.style.left=randomDistance + "vh";
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
}
