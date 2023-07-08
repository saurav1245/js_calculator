// Get the screen display element
const screenDisplay = document.querySelector('.screen');
 // Get all the buttons
const buttons = document.querySelectorAll('button');
 // Initialize calculation array
 let calculation = [];
 // Function to perform the calculation
 function calculate(button) {
    const value = button.textContent;
     // If CLEAR button is clicked, reset the calculation array and display '0' on the screen
     if (value === "CLEAR") {
        calculation = [];
        screenDisplay.textContent = '0';
    } 
    // If = button is clicked, evaluate the calculation array and display the result on the screen
    else if (value === "=") {
        screenDisplay.textContent = eval(calculation.join(''));
    } 
    // For other buttons, add the value to the calculation array and display the updated calculation on the screen
    else {
        calculation.push(value);
        screenDisplay.textContent = calculation.join('');
    }
}
 // Add event listener to each button
 buttons.forEach(button => button.addEventListener('click', (event) => calculate(event.target)));