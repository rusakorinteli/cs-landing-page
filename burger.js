export function initializeMenu() {
  let hamMenu = document.querySelector(".ham-menu");
  let offScreenMenu = document.querySelector(".off-screen-menu");
  let filterInput = document.getElementById("filterInput");
  let items = document.querySelectorAll(".ul-items li");

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });

  filterInput.addEventListener("input", function () {
    let filterValue = filterInput.value.toLowerCase();
    items.forEach(function (item) {
      let text = item.textContent.toLowerCase();
      if (text.includes(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}
