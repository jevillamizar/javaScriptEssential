let count = 0; // Initialize count to 0
let previousCount = null; // Variable to store the previous count value

function increaseCount() {
  count++; // Increment the count by 1
  previousCount = count; // Store the previous count value
    displayCount(); // Update the displayed count
    checkCountValue(); // Check if count matches specific values
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  } else if (previousCount!== null && previousCount > 0 && count === 0) {
    alert("Your Instagram post lost all followers!");
  }
}

function resetCount() {
    if (count > 0) {
        count = 0; // Reset count to 0
        displayCount(); // Update the displayed count
        checkCountValue(); // Check if count matches specific values (to alert if followers are lost)
    }  
}