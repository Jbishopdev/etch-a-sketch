const container = document.querySelector("#container");
const greyscale = document.querySelector("#greyscale");
const colors = document.querySelector("#colors");
const clear = document.querySelector("#clear");
const divs = [];

for (let i = 0; i < 256; i++) { // Create divs
  const div = document.createElement("div");
  div.style.width = "18px";
  div.style.height = "18px";
  div.style.border = "1px solid black";
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