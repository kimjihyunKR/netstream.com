const tab = document.querySelector(".js-tab");
const tabContentes = document.querySelectorAll(".js-tab-content");

const imageWraps = document.querySelectorAll(".image");

function tabClickEventHandler(e) {
  const tabItem = e.target;
  const parentTab = e.target.parentNode;
  if(tabItem.classList.contains("tab-item")){
    for (let i = 0; i < parentTab.children.length; i++) {
      var tableChild = parentTab.children[i];
      tableChild.classList.remove("active")
    }
    tabItem.classList.add("active");

    tabContentes.forEach( content => {
      if (tabItem.dataset.name === content.dataset.name) {
        content.classList.add("show");
      } else {
        content.classList.remove("show");
      }
    });
  }
}

function setImage() {
  imageWraps.forEach( imageWrap => {
    const imageSource = imageWrap.querySelector("img");
    imageWrap.style.backgroundImage = `url(${imageSource.src})`;
    imageSource.remove();
  })
}

setImage();
tab.addEventListener("click", tabClickEventHandler);

