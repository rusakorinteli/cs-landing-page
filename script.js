// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// async function renderData() {
//   const container = document.querySelector(".container");
//   const data = await fetchData();

//   if (!data) {
//     return;
//   }

//   data.forEach((item) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const title = document.createElement("h2");
//     title.textContent = item.title;

//     const body = document.createElement("p");
//     body.textContent = item.body;

//     card.appendChild(title);
//     card.appendChild(body);
//     container.appendChild(card);
//   });
// }

// renderData();
// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to render data in cards
async function renderData(startIndex, endIndex) {
  const container = document.querySelector(".container");
  const data = await fetchData();

  if (!data) {
    return;
  }

  // Clear previous content if any
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

// Initial rendering (display first two rows)
renderData(0, 5);

const moreButton = document.getElementById("moreButton");
let currentIndex = 5; // Start index for next rendering

moreButton.addEventListener("click", () => {
  renderData(currentIndex, currentIndex + 5);
  currentIndex += 5; // Increment start index for the next rendering
});
