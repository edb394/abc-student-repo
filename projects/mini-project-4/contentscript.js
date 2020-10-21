let ticking = false;

function doSomething(scroll_pos) {
  var c=document.body.children;
  console.log(scroll_pos);
  for (var i = 0; i < c.length; i++) {
    if(i%2==0){
    c[i].style="transform: rotate(" + scroll_pos**1.2 + "deg);";
  }
  else{
    c[i].style="transform: rotate(-" + scroll_pos**1.2 + "deg);";
  }
  }
}


window.addEventListener('scroll', function(e) {
  let h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(percent);
      ticking = false;
    });

    ticking = true;
  }
});
