let ticking = false;

function doSomething(scroll_pos) {
  var ele=document.getElementsByTagName("*");
  console.log(scroll_pos);
  for (var i = 0; i < ele.length; i++) {
    if(i%2==0){
    ele[i].style="transform: rotate(" + scroll_pos**2/50 + "deg);";
  }
  else{
    ele[i].style="transform: rotate(-" + scroll_pos**2/50 + "deg);";
  }
  }
}


window.addEventListener('scroll', function(e) {
  let h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
console.log(percent);
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(percent);
      ticking = false;
    });

    ticking = true;
  }
});
