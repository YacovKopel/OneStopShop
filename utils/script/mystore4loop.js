// Get inputted information
let input = document.getElementById('next');

// Create an empty array to store the output
let output = [];

// Iterate over the inputted information
for (let i = 0; i < input.length; i++) {
  // Check if the element meets the criteria
  if (input[i] % 2 === 0) {
    // If the criteria is met, add the element to the output array
    output.push(input[i]);
  }
}

// Return the output
console.log(output); // [2, 4, 6, 8, 10]