/**
 * A basic npm package for GitHub registry
 */


/**
 * Greets a user with a custom message and timestamp
 * @param {string} name - The name to greet
 * @param {boolean} includeTime - Whether to include current time
 * @returns {string} A greeting message
 */




function greets(name = "World", includeTime = false) {
  const timeStamp = includeTime ? ` at ${new Date().toLocaleTimeString()}` : '';
  return `Hello,, ${name}! This is a test npm package from GitHub registry${timeStamp}.`;
}

/**
 * Performs mathematical operations on two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Operation to perform: 'add', 'subtract', 'multiply', 'divide'
 * @returns {number} The result of the operation
 */
function calculate(a, b, operation = 'add') {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : new Error('Division by zero');
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

/**
 * Creates a formatted string with package info
 * @param {string} version - Package version
 * @returns {string} Formatted package information
 */
function getPackageInfo(version = '1.0.0') {
  return `GitHub NPM Package - Version: ${version} | Built on: ${new Date().toDateString()}`;
}
module.exports = {
  greet,
  calculate,
  getPackageInfo,
  // Keep backward compatibility
  add: (a, b) => calculate(a, b, 'add'),
};
