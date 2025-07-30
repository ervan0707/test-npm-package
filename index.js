/**
 * A basic npm package for GitHub registry
 */

/**
 * Greets a user with a custom message
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name = "World") {
  return `Hello, ${name}! This is a test npm package from GitHub registry.`;
}

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  greet,
  add,
};
