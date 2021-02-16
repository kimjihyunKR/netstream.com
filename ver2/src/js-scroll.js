const secVisionWorld = document.querySelector("#sec-vision-world");
const secAbout = document.querySelector("#sec-about");
const secGame = document.querySelector("#sec-games");
console.log("a")
window.addEventListener("scroll", () => {
  const pointUp = secVisionWorld.offsetHeight;

  if( pointUp-50 < window.scrollY && window.scrollY < pointUp+50){
    console.log("Aa")
    window.scrollTo("sec-vision-world");
  }
})