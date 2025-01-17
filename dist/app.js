const shippingDetailsToggle = document.getElementById("toggleBtn");
const showShippingInfo = document.querySelector(".toggle-hidden");
const rotateBtn = document.getElementById("rotate-btn");
const shippingAndTaxColor = document.getElementById("shipping-tax");

function rotateImg() {
  const initialImg = rotateBtn.src.split("/").pop();
  const srcTest = initialImg === "click.png";

  let newImg = {
    true: "../src/img/onClick.png",
    false: "../src/img/click.png",
  }[srcTest];

  return newImg;
}

shippingDetailsToggle.addEventListener("click", () => {
  showShippingInfo.classList.toggle("toggle-hidden");
  shippingAndTaxColor.classList.toggle("shippingColor");
  rotateBtn.src = rotateImg();
});
