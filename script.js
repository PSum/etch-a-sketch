const container = document.querySelector(".sketchArea");
let etchSize = 32;
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

createArea(etchSize);

