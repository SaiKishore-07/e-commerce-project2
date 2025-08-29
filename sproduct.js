import { productData } from "./product.js";

const MainImg = document.getElementById("MainImg");
const title = document.querySelector(".single-pro-details h4");
const price = document.querySelector(".single-pro-details h2");
const desc = document.querySelector(".single-pro-details span");

const smallImgs = document.querySelectorAll(".small-img");

const defaultProduct = productData[0];
MainImg.src = defaultProduct.img;
title.textContent = defaultProduct.title;
price.textContent = defaultProduct.price;
desc.textContent = defaultProduct.desc;

smallImgs.forEach((img) => {
  img.addEventListener("click", () => {
    const index = parseInt(img.dataset.index);
    const product = productData[index];

    MainImg.src = product.img;
    title.textContent = product.title;
    price.textContent = product.price;
    desc.textContent = product.desc;
  });
});
