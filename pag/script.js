window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 500);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 500);
});


window.onscroll = function(){
  if (document.documentElement.scrollTop > 400){
    document.getElementById("scrollbtn").style.transform = "scale(1)";
  }
  if (document.documentElement.scrollTop < 400){
    document.getElementById("scrollbtn").style.transform = "scale(0)";
  }
  if (document.documentElement.scrollTop == 0){
    document.getElementById("backbtn").style.transform = "scale(1)"
  }
  if (document.documentElement.scrollTop != 0){
    document.getElementById("backbtn").style.transform = "scale(0)"
  }
};

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".image-gallery img");
const original = document.querySelector(".fullsimg");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    original.classList.add("open");
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./images/prac1/${originalSrc}`
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
    original.classList.remove("open");
  }
});