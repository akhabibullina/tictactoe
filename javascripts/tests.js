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

console.log(findWinner(testLength, hInputO)['winner'] === 'WinnerO');
console.log(findWinner(testLength, hInputX)['winner'] === 'WinnerX');

console.log(findWinner(testLength, vInputO)['winner'] === 'WinnerO');
console.log(findWinner(testLength, vInputX)['winner'] === 'WinnerX');

console.log(findWinner(testLength, dInputO)['winner'] === 'WinnerO');
console.log(findWinner(testLength, dInputX)['winner'] === 'WinnerX');

console.log(findWinner(testLength, inputNull) === null);
console.log(findWinner(testLength, inputDraw)['winner'] === 'CatsGame');