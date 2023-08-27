const container = document.querySelector(".sketchArea");

let etchSize = 10;

for (let i = 0; i < etchSize; i++) {
    const newDiv = document.createElement("div");
    // newDiv.textContent = `${i + 1}`;
    newDiv.className = "horizontal"
    for (let x = 0; x<etchSize; x++) {
        const vertDiv = document.createElement("div");
        // vertDiv.textContent = `${i + 1}.${x + 1}`;
        vertDiv.className = "vertical";

        newDiv.appendChild(vertDiv);

    }
    container.appendChild(newDiv);
}
