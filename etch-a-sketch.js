const container = document.querySelector("#container");
const greyscale = document.querySelector("#greyscale");
const colors = document.querySelector("#colors");
const clear = document.querySelector("#clear");
const shade = document.querySelector("#shade");
const resizeGrid = document.querySelector("#resize");
const divs = [];


createGrid(16);


greyscale.addEventListener("click", () => {
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      const randomGrey = Math.floor(Math.random() * 256); // Now ranges from 0 to 255
      div.style.backgroundColor = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`;
    });  
  });
})

colors.addEventListener("click", () =>{
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      const randomRed = Math.floor(Math.random() * 256); // Now ranges from 0 to 255
      const randomGreen = Math.floor(Math.random() * 256); // Now ranges from 0 to 255
      const randomBlue = Math.floor(Math.random() * 256); // Now ranges from 0 to 255
      div.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });  
  });
})


clear.addEventListener("click", () => {
  divs.forEach((div) => {
    div.style.backgroundColor = "rgb(243, 236, 236)";  // Reset to white color
  });
});

function createGrid (size) {
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
  if (gridSize <= 100 && gridSize > 0) {
    createGrid(gridSize);
  }
})