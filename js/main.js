var allImgs = Array.from(document.querySelectorAll("img"));
var innerDiv = document.querySelector(".inner_div");
var rightArrow = document.querySelector(".fa-chevron-right");
var leftArrow = document.querySelector(".fa-chevron-left");
var closeIcon = document.querySelector(".fa-xmark");
var layer = document.querySelector(".layer");

var imgIndex = 0;

for (var i = 0; i < allImgs.length; i++) {
  allImgs[i].addEventListener("click", function (e) {
    layer.classList.remove("d-none");
    var clickedImgSrc = e.target.getAttribute("src");
    innerDiv.style.backgroundImage = `url(${clickedImgSrc})`;

    var indexOfClickedElement = allImgs.indexOf(e.target);
    console.log(indexOfClickedElement);
  });
}

function getNextImg() {
  imgIndex++;
  if (imgIndex == allImgs.length) {
    imgIndex = 0;
  }
  var nextImgSrc = allImgs[imgIndex].getAttribute("src");
  innerDiv.style.backgroundImage = `url(${nextImgSrc})`;
}
function getPrevImg() {
  imgIndex--;
  if (imgIndex == -1) {
    imgIndex = allImgs.length - 1;
  }
  var nextImgSrc = allImgs[imgIndex].getAttribute("src");
  innerDiv.style.backgroundImage = `url(${nextImgSrc})`;
}
function hideLayer() {
  layer.classList.add("d-none");
}

rightArrow.addEventListener("click", getNextImg);
leftArrow.addEventListener("click", getPrevImg);
closeIcon.addEventListener("click", hideLayer);

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    getNextImg();
  } else if (e.key === "ArrowLeft") {
    getPrevImg();
  } else if (e.key === "Escape") {
    hideLayer();
  }
});

layer.addEventListener("click", function (e) {
  if (e.target === layer) {
    //or this
    hideLayer();
  }
});
