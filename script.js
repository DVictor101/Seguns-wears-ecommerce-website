//
const a = true;

if (a) {
  console.log("a is true");
} else {
  console.log("a is a lier");
}
//
const closeBtn = document.querySelector(".close__btn");
const sideBar = document.querySelector(".listcontain");
const barBtn = document.getElementById("cartboll");
barBtn.addEventListener("click", function () {
  sideBar.classList.remove("hidelist");
});
closeBtn.addEventListener("click", function () {
  sideBar.classList.add("hidelist");
});
// SINGLE PAGE CLOTHE DISPLAY SCRIPT
const bigImage = document.querySelector(".bg_-image");
const images = document.querySelectorAll(".sm--img");
images[0].addEventListener("click", function () {
  bigImage.src = images[0].src;
});
images[1].addEventListener("click", function () {
  bigImage.src = images[1].src;
});
images[2].addEventListener("click", function () {
  bigImage.src = images[2].src;
});
images[3].addEventListener("click", function () {
  bigImage.src = images[3].src;
});
