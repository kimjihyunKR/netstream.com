// set slider
var slider = tns({
  container: '.my-slider2',
  items: 1,
  slideBy: 1,
  // autoplay: true,
  mouseDrag : true,
  speed : 600,
  controlsContainer : '.slider-controler2',
  navContainer : '#slider-thumbnails',
  navAsThumbnails : true,
  autoplayButtonOutput : false,
});

const ThumbnailImages = [
  "person0",
  "person1",
  "person2",
  "person3",
]

const SliderNavThumbanils = document.querySelectorAll("#slider-thumbnails .profile-image");

SliderNavThumbanils.forEach( function(item) {
  item.style.backgroundImage = "url(../person0.jpg)";
  console.log(item);
})