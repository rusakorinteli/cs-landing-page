const productContainer = document.getElementById("product-container");
const loadMoreBtn = document.getElementById("load-more-btn");
let products = [];
let currentIndex = 0;
const batchSize = 5;

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();
});

function fetchProducts() {
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      displayProducts();
    })
    .catch((error) => console.error("Error fetching products:", error));
}

function displayProducts() {
  // Clear previous content
  productContainer.innerHTML = "";

  // Display batchSize number of products starting from currentIndex
  for (
    let i = currentIndex;
    i < currentIndex + batchSize && i < products.length;
    i++
  ) {
    const product = products[i];
    const productDiv = createProductDiv(product);
    productContainer.appendChild(productDiv);
  }

  // Hide the button if there are no more products to load
  if (currentIndex + batchSize >= products.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

function createProductDiv(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productBrand = document.createElement("p");
  productBrand.textContent = "Brand: " + product.brand;

  const productPrice = document.createElement("p");
  productPrice.textContent = "Price: $" + product.price;

  productDiv.appendChild(productName);
  productDiv.appendChild(productBrand);
  productDiv.appendChild(productPrice);

  return productDiv;
}

loadMoreBtn.addEventListener("click", loadMoreProducts);

function loadMoreProducts() {
  currentIndex += batchSize;
  displayProducts();
}
