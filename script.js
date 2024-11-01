// Creating Canvas

const canvas = document.getElementById("calculatorCanvas");
const ctx = canvas.getContext("2d");

// Set the initial theme mode - Dark Mode 
let isDarkMode = false;

// Function to set the theme based on the dark mode flag
function setTheme() {
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Function to toggle the theme
function toggleTheme() {
    isDarkMode = !isDarkMode;
    setTheme();
}

// Add click event listener to the theme toggle button
const themeToggleInput = document.getElementById("toggle-theme");
themeToggleInput.addEventListener("change", toggleTheme);

// Call setTheme to apply the initial theme
setTheme();



// Set the background color of the canvas
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// rectangle block
const blockWidth = 500;
const blockHeight = 150;
const blockX = 0;
const blockY = 0;



ctx.fillStyle = "rgb(75,79,80)"; // Color for the block
ctx.fillRect(blockX, blockY, blockWidth, blockHeight);

//  Y position for the circles
const leftCircleX = 30; // X-coordinate of the left circle
const centerCircleX = 70; // X-coordinate of the center circle
const rightCircleX = 110; // X-coordinate of the right circle
const circleY = 30; // Y-coordinate for all circles
const circleRadius = 10; // Radius of the circles

//  smaller circles with different colors aligned to the top-left
ctx.fillStyle = "rgb(255, 10, 100)";
ctx.beginPath();
ctx.arc(30, circleY, circleRadius, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "rgb(41,230, 67)";
ctx.beginPath();
ctx.arc(110, circleY, circleRadius, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "rgb(254,190, 60)";
ctx.beginPath();
ctx.arc(70, circleY, circleRadius, 0, Math.PI * 2);
ctx.fill();



// 1st four boxes
numBoxesPerRow = 4; // Number of boxes in each row
numRows = Math.ceil(4 / numBoxesPerRow); // Calculate the number of rows
boxWidth = 77;
boxHeight = 88;
boxSpacing = 3.5; // Space between boxes
startX = (canvas.width - (numBoxesPerRow * (boxWidth + boxSpacing) - boxSpacing)) / 100;

// Loop to draw the boxes with the text
for (let i = 0; i < 4; i++) {
    ctx.fillStyle = "rgb(95,96,101)"; // Default color for empty boxes
    row = Math.floor(i / numBoxesPerRow);
    col = i % numBoxesPerRow;
    boxX = startX + col * (boxWidth + boxSpacing);
    boxY = blockHeight - 2.5 + boxSpacing + row * (boxHeight + boxSpacing);
    ctx.fillRect(boxX, boxY, boxWidth + 3, boxHeight + 2);

    // Add text inside the boxes
    ctx.fillStyle = "black";
    ctx.font = "18px SF Pro Display Regular";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    boxText = [" ", " ", "AC", "%"][i];
    ctx.fillText(boxText, boxX + boxWidth / 2, boxY + boxHeight / 2);
}

// 2nd, 3rd, 4th row boxes
numBoxesPerRow = 4; // Number of boxes in each row
numRows = Math.ceil(16 / numBoxesPerRow); // Calculate the number of rows
boxWidth = 77;
boxHeight = 88;
boxSpacing = 3.5; // Space between boxes
startX = (canvas.width - (numBoxesPerRow * (boxWidth + boxSpacing) - boxSpacing)) / 100;

/* The code is drawing a set of boxes with text inside them. */
// Loop to draw boxes with the text number and symbol
for (let i = 0; i < 12; i++) {
    ctx.fillStyle = "rgb(120,122,126)"; // Default color for empty boxes
    row = Math.floor(i / numBoxesPerRow);
    col = i % numBoxesPerRow;
    boxX = startX + col * (boxWidth + boxSpacing);
    boxY = blockHeight + 88.8 + boxSpacing + row * (boxHeight + boxSpacing);
    ctx.fillRect(boxX, boxY, boxWidth + 3, boxHeight + 2);

    ctx.fillStyle = "rgb(201,209,217)";
    ctx.font = "18px SF Pro Display Regular";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    boxText = ["(", "7", "8", "9", ")", "4", "5", "6", "back", "1", "2", "3"][i];
    ctx.fillText(boxText, boxX + boxWidth / 2, boxY + boxHeight / 2);
}
// Column boxes
numBoxesPerColumn = 5; // Number of boxes in each column
numColumns = Math.ceil(5 / numBoxesPerColumn); // AC the number of columns
boxWidth = 79;
boxHeight = 89.9;
boxSpacing = 3.5; // Space between boxes
startY = (canvas.height - (numColumns * (boxHeight + boxSpacing) - boxSpacing)) / 2;
columnSpacing = -2; // Space between columns

for (let i = 0; i < 5; i++) {
    ctx.fillStyle = "rgb(255,159,12)"; // Default color for empty boxes
    col = Math.floor(i / numBoxesPerColumn);
    row = i % numBoxesPerColumn;
    boxX = col + 4.01 * (boxWidth + boxSpacing + columnSpacing);
    boxY = startY - 104 + row * (boxHeight + boxSpacing + columnSpacing);
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

    // Add text inside the boxes
    ctx.fillStyle = "rgb(201,209,217)";
    ctx.font = "18px SF Pro Display Regular";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    boxText = ["/", "X", "-", "+", "="][i];
    ctx.fillText(boxText, boxX + boxWidth / 2, boxY + boxHeight / 2);
}


// Last Row boxes
numBoxesPerRow = 1; // Number of boxes in each row
numRows = Math.ceil(1 / numBoxesPerRow); // Calculate the number of rows
boxWidth = 77;
boxHeight = 88;
boxSpacing = 3.5; // Space between boxes
startX = (canvas.width - (numBoxesPerRow * (boxWidth + boxSpacing) - boxSpacing)) / 100;

// Loop to draw the boxes with the text
for (let i = 0; i <= 1; i++) {
    ctx.fillStyle = "rgb(120, 122, 126)"; // Default color for empty boxes
    const row = Math.floor(i / numBoxesPerRow);
    const col = i % numBoxesPerRow;
    const boxX = startX + col * (boxWidth + boxSpacing);
    const boxY = blockHeight + 363 + boxSpacing + row * (boxHeight + boxSpacing);
    ctx.fillRect(boxX + 239, boxY, boxWidth + 3, boxHeight + 2);

    // Add text inside the boxes
    ctx.fillStyle = "rgb(201,209,217)";
    ctx.font = "16px SF Pro Display Regular";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const boxText = ["."][i];
    ctx.fillText(boxText, boxX + 239 + (boxWidth + 3) / 2, boxY + (boxHeight + 2) / 2);
}

// Last Row boxes
numBoxesPerRow = 1; // Number of boxes in each row
numRows = Math.ceil(1 / numBoxesPerRow); // Calculating the number of rows
boxWidth = 238;
boxHeight = 88;
boxSpacing = 3.5; // Space between boxes
startX = (canvas.width - (numBoxesPerRow * (boxWidth + boxSpacing) - boxSpacing)) / 100;

// Loop to draw the boxes with the text
for (let i = 0; i <= 1; i++) {
    ctx.fillStyle = "rgb(120, 122, 126)"; // Default color for empty boxes
    const row = Math.floor(i / numBoxesPerRow);
    const col = i % numBoxesPerRow;
    const boxX = startX + col * (boxWidth + boxSpacing);
    const boxY = blockHeight + 363 + boxSpacing + row * (boxHeight + boxSpacing);
    ctx.fillRect(boxX - 1, boxY, boxWidth + 3, boxHeight + 2);

    // Add text inside the boxes
    ctx.fillStyle = "rgb(201,209,217)";
    ctx.font = "16px SF Pro Display Regular";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const boxText = ["0"][i];
    ctx.fillText(boxText, boxX + (boxWidth + 3) / 2, boxY + (boxHeight + 2) / 2);
}

const display = {
    x: 10,
    y: 10,
    width: 480,
    height: 40,
};

// Define a variable to store the current input
let currentInput = "";
let storedValue = null; // Variable to store the previous value
let operator = ''; // Variable to store the current operator

// Add click event listener to the canvas
canvas.addEventListener("click", handleCanvasClick);

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check which button was clicked
    if (
        mouseX >= display.x &&
        mouseX <= display.x + display.width &&
        mouseY >= display.y &&
        mouseY <= display.y + display.height
    ) {

    } else {
        // Checking which button was clicked based on its position and size
        checkButtonClick(mouseX, mouseY);
    }
}

function checkButtonClick(x, y) {
    // Defining button positions and sizes
    const buttonPositions = [
        { x: 1, y: 545, width: 237, height: 80, value: "0" },
        { x: 90, y: 445, width: 70, height: 80, value: "1" },
        { x: 160, y: 445, width: 70, height: 80, value: "2" },
        { x: 250, y: 445, width: 70, height: 80, value: "3" },
        { x: 90, y: 345, width: 70, height: 80, value: "4" },
        { x: 160, y: 345, width: 70, height: 80, value: "5" },
        { x: 250, y: 345, width: 70, height: 80, value: "6" },
        { x: 90, y: 245, width: 70, height: 80, value: "7" },
        { x: 160, y: 245, width: 70, height: 80, value: "8" },
        { x: 250, y: 245, width: 70, height: 80, value: "9" },
        { x: 250, y: 145, width: 70, height: 80, value: "%" },
        { x: 150, y: 145, width: 70, height: 80, value: "Clear" },
        { x: 320, y: 145, width: 70, height: 80, value: "/" },
        { x: 320, y: 245, width: 70, height: 80, value: "X" },
        { x: 320, y: 345, width: 70, height: 80, value: "-" },
        { x: 320, y: 445, width: 70, height: 80, value: "+" },
        { x: 320, y: 545, width: 70, height: 80, value: "=" },
        { x: 250, y: 545, width: 70, height: 80, value: "." },
        { x: 1, y: 245, width: 70, height: 80, value: "(" },
        { x: 1, y: 345, width: 70, height: 80, value: ")" },
        { x: 1, y: 445, width: 70, height: 80, value: "Back" },
    ];

    // Checking which button was clicked
    for (const button of buttonPositions) {
        if (
            x >= button.x &&
            x <= button.x + button.width &&
            y >= button.y &&
            y <= button.y + button.height
        ) {
            // Handle the button click based on its value
            const buttonValue = button.value;
            handleButtonInput(buttonValue);
            break; // Exit the loop once the button is found
        }
    }
}


let operatorClicked = false;

function handleButtonInput(value) {
    if (value === "Back") {
        // Handle backspace, remove the last character from the current input
        currentInput = currentInput.slice(0, -1);
        operatorClicked = false; // Reset the flag
    } else if (value === "=") {
        try {
            // Replace "X" with "*" for multiplication and evaluate the expression
            const result = eval(currentInput.replace(/X/g, "*"));
            currentInput = result.toString();
            operatorClicked = false; // Reset the flag
        } catch (error) {
            // Handle malformed expressions
            currentInput = "Invalid Expression";
        }
    } else if (value === "Clear") {
        // Clear the entire expression
        currentInput = "";
        operatorClicked = false; // Reset the flag
    } else {
        // Append the clicked value to the current input
        // Replace "X" with "*" for multiplication
        currentInput += value === "X" ? "*" : value;
        // If the clicked value is an operator, set the operatorClicked flag
        if (["+", "-", "*", "/", "%"].includes(value)) {
            operatorClicked = true;
        } else {
            operatorClicked = false;
        }
    }
    drawDisplay();
}


function calculate() {
    const number = parseFloat(currentInput);
    if (!isNaN(number)) {
        switch (operator) {
            case "+":
                storedValue += number;
                break;
            case "-":
                storedValue -= number;
                break;
            case "X":
                storedValue *= number;
                break;
            case "/":
                if (number !== 0) {
                    storedValue /= number;
                } else {
                    currentInput = "Invalid Expression";
                }
                break;
        }
        currentInput = storedValue.toString();
    }
    drawDisplay();
}

function drawDisplay() {
    // Clear the display area
    ctx.clearRect(display.x, display.y, display.width, display.height);

    // Draw the provided rectangle block
    ctx.fillStyle = "rgb(75, 79, 80)";
    ctx.fillRect(blockX, blockY, blockWidth, blockHeight);

    // Display the full expression including digits and operators
    const fullExpression = currentInput + (operator ? ' ' + operator : '');

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(fullExpression, blockX + 390, blockY + 50 + blockHeight / 2);

    // Draw the circles
    const circleY = 30; // Keep the Y position constant
    const circleRadius = 12; // Adjust the radius as needed

    ctx.fillStyle = "rgb(255, 55, 100)";
    ctx.beginPath();
    ctx.arc(30, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgb(41, 185, 67)";
    ctx.beginPath();
    ctx.arc(110, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgb(254, 178, 60)";
    ctx.beginPath();
    ctx.arc(70, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fill();

}



