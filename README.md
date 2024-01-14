# Flames Calculator

## Overview

The Flames Calculator is a simple JavaScript-based application that calculates the relationship compatibility between two individuals based on their names. The core algorithm uses a Circular Queue to iteratively eliminate characters from the names until a result is obtained.

## Features

- Circular Queue Implementation in JavaScript.
- Calculation of character differences between two names.
- Dynamic web page integration for user input and result display.

## Technologies Used

- HTML
- CSS
- JavaScript

## Circular Queue Implementation

The Circular Queue is implemented using a linked list structure with a Node class. The queue is initialized with numbers 1 to 6, and characters are eliminated in a circular manner based on the difference in character occurrences between the input names.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter the names of two individuals in the input fields.
3. Click the "Submit" button to calculate the Flames result.
4. The result will be stored in session storage and the user will be redirected to the `result.html` page for display.

## Project Structure

- `index.html`: The main HTML file containing the input form.
- `result.html`: Displays the result after the calculation.
- `styles.css`: CSS file for styling.
- `main.js`: JavaScript file containing the Circular Queue implementation and algorithm logic.

## Getting Started

To run the project locally, simply clone the repository and open the `index.html` file in a web browser.

```bash
git clone https://github.com/dhananjai-dj/Flames_Calculator.git
cd flames-calculator
