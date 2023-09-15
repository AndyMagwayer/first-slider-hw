const images = [
 "https://ichef.bbci.co.uk/news/640/cpsprodpb/9c3b/live/24267770-5123-11ee-a08f-b73b642f2ad4.jpg",
 "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/02/rsz_1a320_aib_sharklet_in_flight.jpg",
 "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/22/20/easyjetatgatwick.jpg"
];

let currentIndex = 0;
const airplaneImage = document.getElementById("airplane-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateImage() {
  airplaneImage.src = images[currentIndex];
  console.log("Current image: " + images[currentIndex]);
}

prevButton.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

updateImage();