const container = document.querySelector(".sketchArea");
let etchSize = 32;
let isMouseDown = false;
colorGlobal = "black";
container.style.gridTemplateColumns = `repeat(${etchSize}, 1fr)`
container.style.gridTemplateRows = `repeat(${etchSize}, 1fr)`


function createArea (gridSize) {
    let arraySize = gridSize * gridSize;
    for (let i = 0; i < arraySize; i++){
        let box = document.createElement("div");
        // box.style.backgroundColor = "blue";
        box.className = "sketchBox";
        container.appendChild(box);
    }
}

function changeColor(event) {
    if (isMouseDown == true){
    event.target.style.backgroundColor = colorGlobal;
    } 
}

createArea(etchSize);

let divItems = document.querySelectorAll(".sketchBox");
let greyButton = document.querySelector("#buttonGrey");
let whiteButton = document.querySelector("#buttonWhite");
let eraseButton = document.querySelector("#buttonErase");
let blackButton = document.querySelector("#buttonBlack");

blackButton.addEventListener("click", function () {
    colorGlobal = "black";
})

greyButton.addEventListener("click", function () {
    colorGlobal = "grey";
})

whiteButton.addEventListener("click", function () {
    colorGlobal = "white";
})

// Add a mousedown event listener to set the isMouseDown flag to true
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

// Add a mouseup event listener to set the isMouseDown flag to false
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});


divItems.forEach(function (div){
    div.addEventListener('mouseover', changeColor);
    eraseButton.addEventListener("click", function () {
        div.style.backgroundColor = "white";
    })
})


