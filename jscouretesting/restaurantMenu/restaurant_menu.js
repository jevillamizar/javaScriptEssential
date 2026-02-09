var breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
var mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
var dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

let pricesVisible = false;

function showPrices() {
    const breakfastPrices = [5.99, 7.99, 4.99, 6.99];
    const mainCoursePrices = [14.99, 12.99, 10.99, 15.99];
    const dessertPrices = [4.99, 3.99, 2.99, 5.49];     

    breakfastMenu.forEach((item, index) => {
        breakfastMenu[index] = `${item} - $${breakfastPrices[index].toFixed(2)}`;       
    });
    mainCourseMenu.forEach((item, index) => {
        mainCourseMenu[index] = `${item} - $${mainCoursePrices[index].toFixed(2)}`;       
    });
    dessertMenu.forEach((item, index) => {
        dessertMenu[index] = `${item} - $${dessertPrices[index].toFixed(2)}`;       
    });
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('dessertMenuItems').innerHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

    pricesVisible = true;
    updateButtonsVisibility();
}

function hidePrices() {
    breakfastMenu.forEach((item, index) => {
        breakfastMenu[index] = item.split(' - ')[0];       
    });
    mainCourseMenu.forEach((item, index) => {
        mainCourseMenu[index] = item.split(' - ')[0];       
    });
    dessertMenu.forEach((item, index) => {
        dessertMenu[index] = item.split(' - ')[0];       
    });
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('dessertMenuItems').innerHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');     

    pricesVisible = false;
    updateButtonsVisibility();
}

function updateButtonsVisibility() {
    const showButton = document.getElementById('showPricesButton');
    const hideButton = document.getElementById('hidePricesButton');
    
    if (pricesVisible) {
        showButton.style.display = 'none';
        hideButton.style.display = 'block'; // o 'block' según tu diseño
    } else {
        showButton.style.display = 'block'; // o 'block' según tu diseño
        hideButton.style.display = 'none';
    }
}

// Inicializar la visibilidad de los botones
updateButtonsVisibility();