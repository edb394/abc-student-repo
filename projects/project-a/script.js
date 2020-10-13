let replyname=document.createElement("h3");
replyname.innerHTML="Armie Activist"

//set up function to be used later choosing between one of three text outputs upon call
let trumpreply;
let c=0;
function randomTrumpTweet(){
  let arr=[];
  while (arr.length<2){
    let choose = Math.floor(Math.random() * 2)
    if(arr.indexOf(choose)===-1)arr.push(choose);
  }
    if (arr[c]==0){
      trumpreply="who else finds this ABSOLUTELY PREPOSTEROUS!?!?! #CancelHim";
    }
    if (arr[c]==1){
      trumpreply="SORRY CHEETO IN CHIEF, your lunatic tweets don't represent ALL Americans."
    }
    else if (arr[c]==2){
      trumpreply="BAN DRUMPF FROM TWITTER!"
    }
    c++;
}

let request = new XMLHttpRequest()
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump&count=10&include_rts=1', true)
//the following is a very unsafe way to transmit authorization to the twitter API and display tweets but it is the only way I can do it within the extent of my abilities and I was unwilling to scrap this part of the project.
request.setRequestHeader("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAF0%2FIgEAAAAA8jK5y3IKA7gaJhR0l1MlMDDS%2BfU%3DWKv1sUB6utvAODg3Z377pDE6vBXZBaXLIlgvGHYiwLlaFWcz2f")
request.onload = function(){
//   let arr=[];
//   function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;
//     }
//     return a;
// }
// for(let i = 0; i < 6-arr.length; i++){
//    if(document.getElementsByClassName("mediacontainer")[i].childNodes.length>0){
//      arr.push(i);
//    }
// }
// shuffle(arr)
  // while(arr.length<6){
  //   let spawnNumber = Math.floor(Math.random() * 5);
  //   if(arr.indexOf(spawnNumber)===-1 && !(document.getElementsByClassName("mediacontainer")[spawnNumber].childNodes.length>0)) arr.push(spawnNumber);
  // }
  // console.log(arr);
  let data = JSON.parse(this.response)
  data.forEach((tweet)=>{
    console.log(tweet.text);
    let loc = data.indexOf(tweet);
    if(
      // typeof tweet.retweeted_status== 'undefined' &&
       tweet.text.startsWith("https://t.co")==0){
      let container = document.createElement("div");
      container.className="quote-tweet";
      let tpfp = document.createElement("img");
      tpfp.src="media/pfp.jpg";
      tpfp.id = "tpfp";
      container.appendChild(tpfp)
      let name = document.createElement("h2");
      name.innerHTML= "Donald J. Trump";
      container.appendChild(name);
      let text = document.createElement("p");
      text.innerHTML=tweet.text;
      container.appendChild(text);
      // let randomContainer = arr[loc];
      document.getElementsByClassName("mediacontainer")[loc].appendChild(container);
      console.log(tweet.id);
      let mc = document.getElementsByClassName("mediacontainer")[loc];
      mc.appendChild(replyname);
      randomTrumpTweet();
      let replytext= document.createElement("p");
      replytext.innerHTML=trumpreply;
      mc.appendChild(replytext);
      // type2random();
      // type1random();
    }
  })
}
request.send()

let numberofclicks=0
document.getElementById("clickphone").addEventListener("click",clickphone)
function clickphone(){
  document.getElementsByClassName("mediacontainer")[numberofclicks].style.opacity="100%";
  numberofclicks++;
  if(numberofclicks==0){
    document.getElementById("header").children[0].style.opacity="0%"
  }
  if (numberofclicks==5){
    document.getElementById("footer").children[0].style.opacity=""
  }
}

// function type2random(){
//   let arr=[];
//   while(arr.length<2){
//     let spawnNumber = Math.floor(Math.random() * 2);
//     if(arr.indexOf(spawnNumber)===-1 && !(document.getElementsByClassName("mediacontainer")[spawnNumber].childNodes.length>0)) arr.push(spawnNumber);}
//     let reply = document.createElement("p");
//     for (let d = 0; d < 2; d++) {
//       var xyz=arr[d];
//       if (xyz==0){
//         reply.innerHTML="hi"
//       }
//       if (xyz==1){
//         reply.innerHTML="ho"
//       }
//       if (xyz==2){
//         reply.innerHTML="hey"
//       }
//       document.getElementsByClassName("mediacontainer")[xyz].appendChild(reply)
//     }
//
//   }
// function type1random(){
//   let arr=[];
//   while(arr.length<2){
//     let spawnNumber = Math.floor(Math.random() * 2);
//     if(arr.indexOf(spawnNumber)===-1 && !(document.getElementsByClassName("mediacontainer")[spawnNumber].childNodes.length>0)) arr.push(spawnNumber);}
//     let reply = document.createElement("p");
//     for (let d = 0; d < 2; d++) {
//       var xyz=arr[d];
//       if (xyz==0){
//         reply.innerHTML="bibble"
//       }
//       if (xyz==1){
//         reply.innerHTML="bobble"
//       }
//       if (xyz==2){
//         reply.innerHTML="bop"
//       }
//       document.getElementsByClassName("mediacontainer")[xyz].appendChild(reply)
//     }
//
//   }

// function type1random(){
//   let placed=0
//   function placerandom(){
//     if (placed==0){
//       let text=document.createElement("p")
//       text.innerHTML="test";
//       document.getElementsByClassName("mediacontainer")[i].appendChild(text);
//     }
//     if (placed==1){
//       let text=document.createElement("p")
//       text.innerHTML="toiajefoij";
//       document.getElementsByClassName("mediacontainer")[i].appendChild(text);
//     }
//   }
//   for (var i = 0; i < document.getElementsByClassName("mediacontainer").length; i++) {
//     if (document.getElementsByClassName("mediacontainer")[i].hasChildNodes()==0 && placed<2){
//       placerandom();
//       placed++;
//     }
//   }
// }

// create 2 type-1 tweets in two random areas of the 6.
// create 2 type-2 tweets in two random areas of the 6.
//
// clickphone => number between 1-6 => change style of that mediacontainer
// once clicked 6 times, end sequence triggered
// once clicked 1 time, intro sequence ends
