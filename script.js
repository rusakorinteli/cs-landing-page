"use strict";

import { initializeMenu } from "./burger.js";

initializeMenu();

import { validationForm } from "./forms.js";

validationForm();

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function renderData(startIndex, endIndex) {
  const container = document.querySelector(".container");
  const data = await fetchData();

  if (!data) {
    return;
  }

  container.innerHTML = "";

  data.slice(startIndex, endIndex).forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
  });
}

renderData(0, 5);

const moreButton = document.getElementById("moreButton");
let currentIndex = 5;

moreButton.addEventListener("click", () => {
  renderData(currentIndex, currentIndex + 5);
  currentIndex += 5;
});

//header on scroll
const header = document.getElementById("header");

function toggleHeaderColor() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", toggleHeaderColor);
