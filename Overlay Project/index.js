const hamburger = document.querySelector(".hamburger")
const bar1 =document.querySelector(".bar1")
const bar2 =document.querySelector(".bar2")
const bar3 =document.querySelector(".bar3")

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1")
});