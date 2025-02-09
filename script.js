// Grid and detail displays
const gridArea = document.getElementById("play-grid");
const gridSizeDisplay = document.getElementById("grid-size-display");

//Values for grid, default size 32
let gridSize = 32;

//Control buttons and inputs
const clearGridBtn = document.getElementById("grid-clear-btn");
const showGridBtn = document.getElementById("grid-show-btn");

//event listeners for controls
clearGridBtn.addEventListener("click", generateGridArea);
showGridBtn.addEventListener("change", showGridToggle);

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
            gridCell.classList.add("play-grid-cell-outlined");
            gridCell.addEventListener("mouseover", onCellMouseOver);
            gridCell.addEventListener("mousedown", onCellClick);
            gridRow.appendChild(gridCell);
        }
        gridArea.appendChild(gridRow);
    }
    updateGridSizeDisplay();
}

/**
 * Toggles the grid lines.
 * @param {*} event 
 */
function showGridToggle(event) {
    const gridCells = document.querySelectorAll(".play-grid-cell");
    
    for(let i = 0; i < gridCells.length; i++){
        gridCells[i].classList.toggle("play-grid-cell-outlined");
    }
    
}

/**
 * Updates the grid size from the slider
 * @param {*} element 
 */
function updateGridSizeOnSliderChange(element) {
    const newSize = element.value;
    gridSize = newSize;
    generateGridArea();
}

/**
 * Updates the grid size display element with the current size.
 */
function updateGridSizeDisplay(){
    gridSizeDisplay.innerText = `${gridSize}x${gridSize}`;
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
