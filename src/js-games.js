const dalgonaTumbnail = document.querySelector("#game-dalgona");
const yongsaTumbnail = document.querySelector("#game-yongsa");
const modal = document.querySelector(".modal")

const gamesTab = document.querySelector(".games-tab");

function init() {
  dalgonaTumbnail.style.backgroundImage = "url(../public/dalgona.webp)";
  yongsaTumbnail.style.backgroundImage = "url(../public/yongsa.webp)";

  dalgonaTumbnail.addEventListener('click', function(event){
    modal.classList.toggle('show')
  })
}

init();

gamesTab.addEventListener('click', function(event){
  console.log(event.target)
})