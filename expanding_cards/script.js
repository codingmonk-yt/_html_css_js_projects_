const panels = document.querySelectorAll(".panel");

// console.log(panels); // NodeList
// console.log(panels[0]); // => first panel

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
