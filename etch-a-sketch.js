const container = document.querySelector("#container");
const greyscale = document.querySelector("#greyscale");
const colors = document.querySelector("#colors");
const clear = document.querySelector("#clear");
const resizeGrid = document.querySelector("#resize");
const divs = [];


for (let i = 0; i < 256; i++) { // Create divs
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.classList.add("div");
  divs.push(div);
  container.appendChild(div);
}

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
    div.style.backgroundColor = "white";  // Reset to white color
  });
});

function createGrid (size) {
  container.innerHTML = "";
  const divSize = 800/size;

  for (let i = 0; i < (size * size); i++) { // Create divs
    const div = document.createElement("div");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
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