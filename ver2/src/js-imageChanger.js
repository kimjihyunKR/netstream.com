const changers = document.querySelectorAll('.image-changer');

function setImageChanger() {
  changers.forEach( changer => {
    const images = changer.children;
    const max = images.length;
    // 차례대로 이미지 보이기
    for(let i=0 ; i < max ; i++) {
      setTimeout( function(){
        for(let j=0 ; j < max ; j++) {
          images[j].classList.remove('show');
        }
      }, 1500);// 1.5초간 보여주기
      images[i].classList.remove('show');
    }
  })
}



setInterval(setImageChanger, 1000);


