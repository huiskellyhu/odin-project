document.addEventListener('DOMContentLoaded', () => {
    const addItems = document.getElementById("add");

    addItems.addEventListener('click', function(event) {
        event.preventDefault();

        const shoppingList = document.getElementById("shopping-list");
        const itemInput = document.getElementById('item');
        
        console.log(itemInput.value);
        if (itemInput.value === '') {
        alert('Cannot add empty item!');
        return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = itemInput.value;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            shoppingList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        shoppingList.appendChild(listItem);
        itemInput.value = '';
    });

});