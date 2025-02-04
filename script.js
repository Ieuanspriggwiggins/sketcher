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
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("play-grid-row");
        for (let j = 0; j < gridSize; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("play-grid-cell");
            gridCell.addEventListener("mouseover", onCellMouseOver);
            gridCell.addEventListener("mousedown", onCellClick);
            gridRow.appendChild(gridCell);
        }
        gridArea.appendChild(gridRow);
    }
}

/**
 * Listener for when the mouse is over a cell. Will only change the cell state if the mouse button is being pressed.
 * @param {Event} event
 */
function onCellMouseOver(event) {
    if (event.buttons) {
        drawCell(event.target);
    }
}

/**
 * Listener function for when a cell is clicked, this avoids issues with the event not firing if clicking after entering a cell with mouseover.
 * @param {Event} event
 */
function onCellClick(event) {
    drawCell(event.target);
}

/**
 * Updates the colour of a cell.
 * @param {*} cell
 */
function drawCell(cell) {
    cell.style.backgroundColor = "black";
}

//Run generate grid to initialize the grid
generateGridArea();
