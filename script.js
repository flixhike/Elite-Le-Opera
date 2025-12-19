let currentIndex = 0;
let images = [];

function zoom(img) {
  images = Array.from(document.querySelectorAll('.menu-vertical img'));
  currentIndex = images.indexOf(img);

  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modalImg").src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modalImg").src = images[currentIndex].src;
}
function zoom(img){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function toggleOrder(){
  const mini = document.getElementById("orderMini");
  mini.style.display = mini.style.display === "flex" ? "none" : "flex";
}
