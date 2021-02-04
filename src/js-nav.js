const nav = document.querySelector("nav");

var preScrollY = window.scrollY;
var nowScrollY = 0;

window.addEventListener("scroll", function() {
  nowScrollY = window.scrollY;
  if(preScrollY-nowScrollY <=0) {
    nav.classList.add("nav-show");
  } else {
    // 위로 스크롤
    nav.classList.remove("nav-show");
  }
  preScrollY = nowScrollY;
})

