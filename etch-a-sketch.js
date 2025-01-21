const container = document.querySelector("#container");
const greyscale = document.querySelector("#greyscale");
const colors = document.querySelector("#colors");
const clear = document.querySelector("#clear");
const resizeGrid = document.querySelector("#resize");
const divs = [];
let currentMode = null;

createGrid(16);

container.addEventListener("mouseover", (event) => {  // event delegation
  if (event.target.classList == ("div")) {

    if (currentMode === "greyscale") {   
      const randomGrey = Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`;
    } else if (currentMode === "colors") {
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
  }
})

greyscale.addEventListener("click", () => {
  currentMode = "greyscale";
})


colors.addEventListener("click", () => {
  currentMode = "colors";
})

clear.addEventListener("click", () => {
  currentMode = null; // clear all modes
  divs.forEach((div) => {
    div.style.backgroundColor =  "rgb(243, 236, 236)"
  })
})

function createGrid (size) {
  divs.length = 0;
  container.innerHTML = "";
  const divSize = 750/size;

  for (let i = 0; i < (size * size); i++) { // Create divs
    const div = document.createElement("div");
    div.style.width = `${divSize - 2}px`;
    div.style.height = `${divSize - 2}px`;
    div.classList.add("div");
    divs.push(div);
    container.appendChild(div);
  }

}

resizeGrid.addEventListener("click", () => {
  const gridSize = parseInt(prompt("Enter grid size (Max 100):"));
  if (isNaN(gridSize) || gridSize > 100 || gridSize <= 0) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  createGrid(gridSize);
})