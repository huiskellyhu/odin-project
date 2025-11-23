function addGrid(size) {
    const gridContainer = document.getElementById("grid-box");

    function createRow() {
        let newRow = document.createElement("div");
        newRow.classList = "row";


        for (let i = 0; i < size; i++) {
            let newBox = document.createElement("div");
            newBox.classList = "square";
            newBox.textContent = "temp";
            newRow.appendChild(newBox);
        }

        gridContainer.appendChild(newRow);
    }

    for (let i = 0; i < size; i++) {
        createRow();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    addGrid(5);
    // TODO: make boxes the same size!
});

