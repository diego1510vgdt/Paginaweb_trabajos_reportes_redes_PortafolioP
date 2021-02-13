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