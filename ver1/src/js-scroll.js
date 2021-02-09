const secWebvr = document.querySelector("#sec-webvr");
const secAbout = document.querySelector("#sec-about");
const secGame = document.querySelector("#sec-games");
console.log("a")
window.addEventListener("scroll", () => {
  const secWebvrY = secWebvr.scrollHeight;

  if(window.scrollY > secWebvrY && window.scrollY<secGame.scrollHeight){
    console.log("Aa")
  }
})