'use strict';

function visualizeBoard(length, boardString, result) {
  var newBoard;
  if (length <= 10) {
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
        var span$ = $('<span/>');
        var cellValue = boardArray2d[rowIndex][colIndex];

        col$.attr('class', (rowIndex) + '_' + (colIndex));
        span$.html(cellValue);

        col$.append(span$);
        row$.append(col$);
      }
      table$.append(row$);
      newBoard = table$;
    }
  } else {
    newBoard = '<img style="height:100%" src="images/Super Mario - Question Mark Block.jpg" />';
  }
  $("#ttt-visualizer-box").html(newBoard);

  setTimeout(function() {
    $(newBoard).find('span').each(function(index, el) {
      el.className += 'fade';
    });

    var winningType = result['type'];
    var winningElement = result['element'];
    var isReversedDiagonalSearch = result['reversed'];

    // Highlight winning case
    if (winningType && winningElement) {
      var i = winningElement[0];
      var j = winningElement[1];
      switch (winningType) {
        case 'h':
          for (j; j < length && j >= 0; j--) {
            $('.' + i + '_' + j)[0].className += ' bold';
          }
          break;
        case 'v':
          for (j; j < length && j >= 0; j--) {
            $('.' + j + '_' + i)[0].className += ' bold';
          }
          break;
        case 'd':
          if (isReversedDiagonalSearch) {
            /*
             Reverse Diagonal
             Example:
             [[o x]
              [x o]]
             */
            for (j; j < length && j >= 0; j--) {
              $('.' + j + '_' + (length - j - 1))[0].className += ' bold';
            }
          } else {
            /*
             Forward Diagonal
             Example:
             [[x o]
              [  x]]
             */
            for (i; i < length && i >= 0; i--) {
              $('.' + i + '_' + i)[0].className += ' bold';
            }
          }
          break;
      }
    }


//    $(newBoard).find('span').each(function(index, el) {
//      el.className += 'fade';
//    });
  }, 0);

}
