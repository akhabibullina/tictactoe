'use strict';

function visualizeBoard(length, boardString) {

  var breakExpr = new RegExp('.{1,' + length + '}', 'g');

  var boardArray1d = boardString.match(breakExpr);
  var boardArray2d = populateArray(length, boardArray1d);

  // Draw table
  var table$ = $('<table/>').attr('id', 'ttt-visualizer-table');
  for (var rowIndex = 0; rowIndex < length; rowIndex++) {
    // Rows
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < length; colIndex++) {
      // Cols
      var col$ = $('<td/>');
      var cellValue = boardArray2d[rowIndex][colIndex];

      col$.attr('class', (rowIndex + 1) + '_' + (colIndex + 1)).html(cellValue);
      row$.append(col$);
    }
    table$.append(row$);
  }
  $("#ttt-visualizer-box").html(table$);
}
