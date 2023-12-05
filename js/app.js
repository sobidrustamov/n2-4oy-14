addEventListener("DOMContentLoaded", async () => {
  let productsMain = document.querySelector(".products");
  let cardBtn = document.querySelector("#card-btn");
  let logOut = document.querySelector("#logout");

  let { data: products } = await axios.get("https://fakestoreapi.com/products");
  products.forEach((product) => {
    console.log(product);
    let productDiv = document.createElement("div");
    productDiv.classList.add("product", "bg-gray-100", "rounded", "p-5");
    let img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.classList.add("w-100", "aspect-square", "mb-2");
    let info = document.createElement("div");
    info.classList.add("p-info", "flex", "justify-between");
    let price = document.createElement("span");
    price.innerText = `$ ${product.price}`;
    let rating = document.createElement("span");
    rating.innerHTML = `<i class="fa-solid fa-star text-yellow-300"></i> ${product.rating.rate}`;
    info.append(price, rating);
    productDiv.append(img, info);
    productsMain.append(productDiv);
  });

  logOut.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("/");
  });
});
