// Constants
const gridArea = document.getElementById("play-grid");

//Values for grid
let gridSize = 32;

/**
 * Generates a grid from the gridsize specified.
 * grid is separated into rows of cells.
 */
function generateGridArea() {
    gridArea.innerHTML = ""; // Empty the HTML grid before generating it
    for(let i = 0; i < gridSize; i++){
        const gridRow = document.createElement("div");
        gridRow.classList.add("play-grid-row");
        for(let j = 0; j < gridSize; j++){
            const gridCell = document.createElement("div");
            gridCell.classList.add("play-grid-cell");
            gridCell.addEventListener("mouseover", onCellMouseOver);
            gridCell.addEventListener("mousedown", onCellClick);
            gridRow.appendChild(gridCell);
        }
        gridArea.appendChild(gridRow);
    }
}

function onCellMouseOver(event) {
    if(event.buttons){
        const cell = event.target;
        cell.style.backgroundColor = "black";
    }
}

function onCellClick(event) {
    const cell = event.target;
    cell.style.backgroundColor = "black";
}

//Run generate grid to initialize the grid
generateGridArea();