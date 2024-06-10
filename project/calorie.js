function addFood() {
    const foodInput = document.getElementById('food');
    const caloriesInput = document.getElementById('calories');
    const foodName = foodInput.value;
    const calorieCount = caloriesInput.value;

    if (foodName && calorieCount) {
        const calorieList = document.getElementById('calorieItems');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${foodName}</span> <span>${calorieCount} calories</span>`;
        calorieList.appendChild(listItem);

        foodInput.value = '';
        caloriesInput.value = '';
    }
}
