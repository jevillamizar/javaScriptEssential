 const myDiv = document.getElementById('myDiv');
 // Adding a mouseover event listener
 myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundColor = 'lightgreen';
});
myDiv.addEventListener('mouseout', () => {
    myDiv.style.backgroundColor = 'lightcoral';
});