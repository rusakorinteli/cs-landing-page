"use strict";
const apiKey = "8a52342bf29540b3bd5bea7d88ce56d7";

const apiUrl =
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8a52342bf29540b3bd5bea7d88ce56d7";

let totalNews = 0;
let currentIndex = 0;

function showMoreNews() {
  const newsItems = document.querySelectorAll(".newsItem");

  for (let i = currentIndex; i < Math.min(currentIndex + 5, totalNews); i++) {
    newsItems[i].style.display = "block";
  }

  currentIndex += 5;
  if (currentIndex >= totalNews) {
    document.getElementById("moreButton").style.display = "none";
  }
}

document.getElementById("moreButton").addEventListener("click", showMoreNews);

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const newsList = document.getElementById("newsList");
//     totalNews = data.articles.length;
//     data.articles.forEach((article, index) => {
//       const li = document.createElement("li");
//       li.classList.add("newsItem");

//       const link = document.createElement("a");
//       link.classList.add("newsLink");
//       link.href = article.url;
//       link.textContent = article.title;

//       li.appendChild(link);
//       newsList.appendChild(li);

//       if (index < 5) {
//         li.style.display = "block";
//       }
//     });
//   })
//   .catch((error) => console.error("Error fetching news:", error));

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const newsList = document.getElementById("newsList");
    if (!data.articles || !Array.isArray(data.articles)) {
      throw new Error("Invalid response from NewsAPI");
    }
    totalNews = data.articles.length;
    data.articles.forEach((article, index) => {
      const li = document.createElement("li");
      li.classList.add("newsItem");

      const link = document.createElement("a");
      link.classList.add("newsLink");
      link.href = article.url;
      link.textContent = article.title;

      li.appendChild(link);
      newsList.appendChild(li);

      if (index < 5) {
        li.style.display = "block";
      }
    });
  })
  .catch((error) => console.error("Error fetching news:", error));
