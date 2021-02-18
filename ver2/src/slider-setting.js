// set slider
var slider = tns({
  container: '.my-slider2',
  items: 1,
  slideBy: 1,
  autoplay: true,
  mouseDrag : true,
  speed : 600,
  controlsContainer : '.slider-controler2',
  navContainer : '#slider-thumbnails',
  navAsThumbnails : true,
  autoplayButtonOutput : false,
  preventScrollOnTouch: 'auto' 
});

const ThumbnailImages = [
  "person0",
  "person1",
  "person2",
  "person3",
]

const SliderNavThumbanils = document.querySelectorAll("#slider-thumbnails .profile-image");
const ProfileThumbanils = document.querySelectorAll(".profile-box .profile-image");

SliderNavThumbanils.forEach( function(item, index) {
  const IMG_URL = `url(public/img/${ThumbnailImages[index]}.jpg)`;
  item.style.backgroundImage = IMG_URL;
  ProfileThumbanils[index+1].style.backgroundImage = IMG_URL;
});