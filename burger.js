export function initializeMenu() {
  let hamMenu = document.querySelector(".ham-menu");
  let offScreenMenu = document.querySelector(".off-screen-menu");

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
}
