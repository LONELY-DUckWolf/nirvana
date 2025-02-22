const imgList = document.querySelector(".gallery")
const allChilds = imgList.querySelectorAll('.galerry-item')
let ff = 0
const firstEl = allChilds[ff]

firstEl.style.visibility = 'visible'

document.addEventListener("keydown", (event) => {
  if (event.code === 'ArrowRight') {
      if (ff < allChilds.length - 1) {
          allChilds[ff].style.visibility = 'hidden'; 
          ff++; 
          allChilds[ff].style.visibility = 'visible'; 
      }
  }

  if (event.code === 'ArrowLeft') {  
      if (ff > 0) {  
          allChilds[ff].style.visibility = 'hidden'; 
          ff--; 
          allChilds[ff].style.visibility = 'visible'; 
      }
  }
});


const getControls = document.querySelector("#controls");
const getInp = getControls.querySelector("input");
const getRender = getControls.querySelector("button[data-action='render']");
const getDestroy = getControls.querySelector("button[data-action='destroy']");
const getBox = document.querySelector("#boxes");

function createBoxes(amount) {
  getBox.innerHTML = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");
    const red = Math.random() * (255 - 0) + 0;
    const green = Math.random() * (255 - 0) + 0;
    const blue = Math.random() * (255 - 0) + 0;
    createBox.style.backgroundColor = `rgba(${red},${green},${blue})`;
    createBox.style.width = `${size}px`;
    createBox.style.height = `${size}px`;
    getBox.appendChild(createBox);
    size += 10;
  }
}

getRender.addEventListener("click", (event) => {
  const amount = getInp.value;
  createBoxes(amount);
});

getDestroy.addEventListener("click", (event) => {
  getBox.innerHTML = "";
});


