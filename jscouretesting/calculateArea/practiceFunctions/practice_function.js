let amount1;
let amount2;
let amount3;

function calculateAmount() {
 amount1 = parseFloat(document.getElementById('grocey1').value);
 amount2 = parseFloat(document.getElementById('grocey2').value);
 amount3 = parseFloat(document.getElementById('grocey3').value);  

    let totalAmount = amount1 + amount2 + amount3;
    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}