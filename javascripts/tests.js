// Tests

// Initial data
var testLength = 3;

var hInputO = 'xxoooxooo'; // WinnerO (h)
var hInputX = 'xxxooxoxo'; // WinnerX (h)

var vInputO = 'xooooxxoo'; // WinnerO (v)
var vInputX = 'oxxxxooxx'; // WinnerX (v)

var dInputO = '  o o o  '; // WinnerX (d)
var dInputX = 'oxxxx  xx'; // WinnerO (d)

var inputNull = 'xxoooxxxo'; // null
var inputDraw = '         '; // CatsGame

console.log(findWinner(testLength, hInputO) === 'WinnerO');
console.log(findWinner(testLength, hInputX) === 'WinnerX');

console.log(findWinner(testLength, vInputO) === 'WinnerO');
console.log(findWinner(testLength, vInputX) === 'WinnerX');

console.log(findWinner(testLength, dInputO) === 'WinnerO');
console.log(findWinner(testLength, dInputX) === 'WinnerX');

console.log(findWinner(testLength, inputNull) === null);
console.log(findWinner(testLength, inputDraw) === 'CatsGame');