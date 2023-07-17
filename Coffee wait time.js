console.log('Coffee wait time');

const coffeeNumber = document.querySelector('input'); // number of coffees being ordered
const submitBtn = document.querySelector('button');
const waitTimeResult = document.getElementById('wait-time'); // will display the calculated wait time

// Function calculates the wait time for a coffee order.
function coffeeWaitTime(coffeeNum) {
    if (coffeeNum <= 0) {
        return;
    }
    if (coffeeNum <= 3) {
        return '2 - 5 minutes';
    };

    if (coffeeNum >= 4 && coffeeNum <= 7) {
        return '5 - 9 minutes';
    };

    if (coffeeNum > 7) {
        return '10 - 15 minutes';
    };
    // coffeeNumber.value = '';  // this doesn't work??
};

// function will display calculated wait time on screen
function appendWaitTime() {
    const coffeeNum = coffeeNumber.value; // provides the parameter for the callback function
    const resultBox = document.getElementById('wait-time');
    const result = document.createElement('p');
    result.setAttribute('id', 'wait-time-result'); // for CSS purposes
    result.innerText = coffeeWaitTime(coffeeNum); // displays the calculated wait time on the result paragraph element
    resultBox.append(result);
};

// "Submit order" button
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const coffeeNum = coffeeNumber.value; // provides the parameter for the callback function
    coffeeWaitTime(coffeeNum); // callback function for calculating wait time
    appendWaitTime(); // callback function for displaying the calculated wait time on the page
    coffeeNumber.value = '';
});