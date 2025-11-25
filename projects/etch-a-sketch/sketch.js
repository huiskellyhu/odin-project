function addGrid(size) {
    const gridContainer = document.getElementById("grid-box");

    function createRow() {
        let newRow = document.createElement("div");
        newRow.classList = "row";


        for (let i = 0; i < size; i++) {
            let newBox = document.createElement("button");
            newBox.classList = "square";
            newRow.appendChild(newBox);
        }

        gridContainer.appendChild(newRow);
    }

    for (let i = 0; i < size; i++) {
        createRow();
    }

    // button function
    const buttons = document.querySelectorAll('.square');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('active')){
                button.classList.remove('active');
            } else {
                button.classList.add('active');
            }
        })
    });
}

function resetGrid(){
    const gridContainer = document.getElementById("grid-box");
    gridContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    // accept input size
    const inputSubmit = document.getElementById("input-submit");
    inputSubmit.addEventListener("click", function() {
        resetGrid();
        const inputSize = document.getElementById("input-size");
        let size = parseInt(inputSize.value);
        addGrid(size);

        // add size check !! [1,100]
    });
});

