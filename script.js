// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/*
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  // TODO: Write your code here
  const userName = prompt("What is your name?");
  if (!userName || !userName.trim()) {
    // check for empty or canceled input
    render("<p class='text-muted'>No name entered.</p>");
    return // exit the function early
  } else {
    render(`<p>Hello ${userName}</p>`);
  }
}

/*
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
  // TODO: Write your code here
  const nums = prompt("Enter a list of numbers, separated by commas:");
  if (!nums) {
    render("<p class='text-muted'>No numbers entered.</p>")
    return;
  }
  const numArray = nums
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));
  const sum = numArray.reduce((a, b) => a + b, 0)

  const avg = sum / numArray.length
  const list = numArray.map(n => `<li class = "list-group-item"> ${n} </li>`).join('')
  render(
    `<p> Average: <strong>${avg}</strong> </p>
    <ul class = "list-group"> ${list} </ul>
  `)

}

/*
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!"
*/
function timeOfDay() {
  // TODO: Write your code here
  const hours = new Date().getHours()

  let msg = ''

  if (hours < 12) {
    msg = "Good morning!";
  } else if (hours > 12 && hours < 15) {
    msg = "Good afternoon!"
  } else if (hours > 15 && hours < 18) {
    msg = "Good evening!"
  } else {
    msg = "Good night!"
  }
  render(`<p> ${msg} </p>`)
}

/*
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  // TODO: Write your code here
}

/*
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  // TODO: Write your code here
  render(`<p class = 'text-muted'> No numbers entered. </p>`)
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)
document.getElementById('btnTitle').addEventListener('click', changeTitle)
document.getElementById('btnText').addEventListener('click', changeTextColor)
document.getElementById('btnBackground').addEventListener('click', randomBackground)
document.getElementById('btnDoubleNum').addEventListener('click', doubleNumber)

/*
  ------------------------------------------
  Student Challenge Section
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one
  to a new button in index.html using addEventListener.
*/

function changeTitle() {
    const titlesArray = [ "Welcome to my page!", "Hello, world!", "JavaScript is fun!", "Have a great day!", "Enjoy coding!", "Mr. Kilgore is the goat" ];
    const randomIndex = Math.floor(Math.random() * titlesArray.length);
    const newTitle = titlesArray[randomIndex];
    document.title = newTitle;
    titleElement = document.getElementById("page-title");
    titleElement.textContent = newTitle;
}

function changeTextColor() {
   //   2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc, fall themed)
    const outputElement = document.getElementById("out");
    const textColors = ["#FF4500", "#FF8C00", "#FFD700", "#8B4513", "#A0522D"];
    const currentColor = outputElement.style.color;
    let nextIndex = textColors.indexOf(currentColor) + 1;
    if (nextIndex >= textColors.length) {
        nextIndex = 0;
    }
    outputElement.style.color = textColors[nextIndex];
}

function randomBackground() {
    //   3) Press the button to change the background color of the output box to a random color.
    const outputElement = document.getElementById("out");
    const bgColors = ["#FF7F50", "#FF6347", "#FF4500", "#FFA500", "#FFD700", "#8B4513", "#A0522D"];
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    const randomColor = bgColors[randomIndex];
    outputElement.style.backgroundColor = randomColor;
}

function doubleNumber() {
    //   4) Ask the user for a number and display that number doubled.
    const userInput = prompt("Please enter a number:");
    const number = parseFloat(userInput);
    if (!isNaN(number)) {
        render(`<p>The double of ${number} is ${number * 2}.</p>`);
    } else {
        render(`<p class="text-muted">Invalid input. Please enter a valid number.</p>`);
    }
}