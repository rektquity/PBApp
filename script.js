const images = [];

// List of filenames, comment out 61+ without Zero
const filenames = [
    'images/01_103.png',
    'images/02_67.png',
    'images/03_84.png',
    'images/04_42.png',
    'images/05_33.png',
    'images/06_42.png',
    'images/07_63.png',
    'images/08_54.png',
    'images/09_86.png',
    'images/10_59.png',
    'images/11_68.png',
    'images/12_32.png',
    'images/13_69.png',
    'images/14_33.png',
    'images/15_21.png',
    'images/16_30.png',
    'images/17_33.png',
    'images/18_60.png',
    'images/19_42.png',
    'images/20_69.png',
    'images/21_51.png',
    'images/22_51.png',
    'images/23_69.png',
    'images/24_86.png',
    'images/25_50.png',
    'images/26_60.png',
'images/27_67.png',
'images/28_102.png',
'images/29_79.png',
'images/30_49.png',
'images/31_43.png',
'images/32_50.png',
'images/33_44.png',
'images/34_57.png',
'images/35_43.png',
'images/36_90.png',
'images/37_42.png',
'images/38_72.png',
'images/39_62.png',
'images/40_72.png',
'images/41_70.png',
'images/42_84.png',
'images/43_127.png',
'images/44_118.png',
'images/45_110.png',
'images/46_84.png',
'images/47_92.png',
'images/48_67.png',
'images/49_156.png',
'images/50_123.png',
'images/51_143.png',
'images/52_117.png',
'images/53_118.png',
'images/54_71.png',
'images/55_98.png',
'images/56_67.png',
'images/57_80.png',
'images/58_57.png',
'images/59_62.png',
'images/60_62.png',
'images/61_81.png',
'images/62_60.png',
'images/63_88.png',
'images/64_132.png',
'images/65_36.png',
'images/66_74.png',
'images/67_46.png',
'images/68_45.png',
'images/69_36.png',
'images/70_91.png',
'images/71_63.png',
'images/72_42.png',
'images/73_73.png',
'images/74_60.png',
'images/75_54.png',
'images/76_73.png',
'images/77_99.png',
'images/78_67.png',
'images/79_91.png',
'images/80_94.png',
'images/81_96.png',
'images/82_107.png',
'images/83_116.png',
'images/84_165.png',
'images/85_24.png',
'images/86_63.png',
'images/87_36.png',
'images/88_45.png',
'images/89_86.png',
'images/90_88.png',
'images/91_60.png',
'images/92_75.png',
'images/93_108.png',
'images/94_129.png',
'images/95_63.png',
'images/96_54.png',
    // Add more filenames here
];

filenames.forEach(name => {
    // Split by the underscore to extract both numbers
    const [firstNumber, secondNumber] = name.split('_');
    images.push({ src: name, number: parseInt(secondNumber) });
});

let currentImage;
let correctAnswer = false;
let timer; // Variable to hold the timer interval
let startTime; // Variable to track the starting time

function loadRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImage = images[randomIndex];
    document.getElementById('image').src = currentImage.src;

        // Start the timer when a new image is loaded
    startTime = Date.now();
    correctAnswer = false; // Reset correct answer flag
    document.getElementById('result').textContent = ""; // Reset result message
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value;
    const resultText = document.getElementById('result');

    // Stop the timer and calculate elapsed time
    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1); // Time in seconds to one decimal place

    if (parseInt(userInput) === currentImage.number) {
        resultText.textContent = `Correct! 🎉 ${elapsedTime} seconds`;
        correctAnswer = true; // Set to true if the answer is correct
    } else {
        resultText.textContent = `Wrong!`;
        correctAnswer = false; // Set to false if the answer is incorrect
    }

    // Clear the input field
    document.getElementById('user-input').value = '';
}

// Load the first random image on page load
window.onload = loadRandomImage;

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', () => {
    if (correctAnswer) {
        loadRandomImage(); // Load new image if the answer was already correct
    } else {
        checkAnswer();
    }
});

// Event listener for Enter key in the input field
document.getElementById('user-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (correctAnswer) {
            loadRandomImage(); // Load new image if the answer was already correct
        } else {
            checkAnswer();
        }
    }
});

// Event listener for loading a new image on screen click
document.addEventListener('click', () => {
    if (correctAnswer) {
        loadRandomImage(); // Load new image
    }
});