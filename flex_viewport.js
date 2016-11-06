var ele = document.querySelectorAll('.module');

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

function showRect(elem) {
  var r = elem.getBoundingClientRect()
  return { top:r.top, bottom:r.bottom}
}

for (var i = 0; i < ele.length; i++) {
  var kava = (showRect(ele[i]).top+(ele[i].clientHeight/3));
  if (kava <= h) {
    ele[i].style.animation = "none";
  } else {
    ele[i].style.opacity = 0;
  }
}

window.addEventListener('scroll', function() {
  for (var i = 0; i < ele.length; i++) {
    var kava = (showRect(ele[i]).top+(ele[i].clientHeight/3));
    if (kava <= h) {
      ele[i].style.opacity = 1;
      ele[i].classList.add('come-in');
    }
  }
})
