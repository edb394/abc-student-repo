let range = document.getElementById("myRange");
let valueField=document.getElementById("myValue");


console.log("range", range);

//what does listener "change" do?
function changeHappened(){
  console.log("whats change");
  valueField.innerHTML=range.value;
}

range.addEventListener("change", changeHappened);

//what does listener "input" do?
function inputHappened(){
  console.log("whats input");
  valueField.innerHTML=range.value;
  valueField.style.left=range.value +"px"
}

range.addEventListener("input", inputHappened);
