'use strict';

/**
 * Given the parameters return the winner of the tictactoe game.
 *
 * @param length Number
 * @param boardString String representing the tic tac toe board Example: 'xxoooxooo'
 * @returns {String} Return one of the following results:
 *
 * WinnerX:  A winner X (there are N X’s in a row, where N is the length of a side -- can be on a row, column or diagonal)
 * WinnerO:  A winner O
 * CatsGame: A cats game (no winner and no spaces left) None of the above
 */
function findWinner(length, boardString) {

  var fillEnum = {x: 'x', o: 'o', space: ' '};
  var winnerEnum = {'x': 'WinnerX', 'o': 'WinnerO', 'c': 'CatsGame'};
  var hasSpace = false;
  var breakExpr = new RegExp('.{1,' + length + '}', 'g');

  var boardArray1d = boardString.match(breakExpr);
  var boardArray2d = populateArray(length, boardArray1d);

  var winner = getWinner(boardArray2d);

  return winner;


  /**
   * Get the winner for the board given as a parameter.
   *
   * @param board 2d array which will be analysed.
   * @returns {*} String containing the winner or catsgame if no winner defined; null otherwise.
   */
  function getWinner(board) {

    if (board.length === 1) {
      return winnerEnum[board[0]] || winnerEnum['c'];
    }

    /*
     Example: [0, 1, 2] => [2, 1, 0]
     */
    var reverseBoard = function(hLine) {
      return hLine.reverse();
    };

    /*
     [0], [1], [2],         [0], [3], [6],
     [3], [4], [5],    =>   [1], [4], [7],
     [6], [7], [6]          [2], [5], [8]
     */
    function TransMatrix(A) {
      var m = A.length, n = A[0].length, AT = [];
      for (var i = 0; i < n; i++)
      { AT[i] = [];
        for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
      }
      return AT;
    }

    var hWinner = hSearch(board);
    var vWinner = hSearch(TransMatrix(board));
    var dWinner = dSearch(board) || dSearch(board.map(reverseBoard));

    // Define result
    return hWinner
      || vWinner
      || dWinner
      || (hasSpace ? winnerEnum['c'] : null);
  }

  /**
   * Horizontal search for the winner: for ex., the entire line is taken by X.
   *
   * @param board 2d array
   * @returns {*} String containing the winner name; undefined otherwise.
   */
  function hSearch(board) {
    top:
      for (var i = 0; i < length; i++) {
        var hPrev = board[i][0];           // first: [0, 0] then: [1, 0], [2, 0], etc
        var hLineLength = 1;

        // Run through the line values vertically
        for (var j = 1; j < length; j++) {

          var hNext = board[i] [j];        // then: [0, 1], [0, 2], [0, 3], etc

          if ((fillEnum.space === hPrev) || (fillEnum.space === hNext)) {
            hasSpace = true;
          }

          if (!(hPrev === hNext)) {
            continue top;
          }

          if (++hLineLength === length) {
            return winnerEnum[hPrev];
          }

        }
      }
  }

  /**
   * Diagonal search for the winner: for ex., the entire diagonal line is taken by X.
   *
   * @param board 2d array
   * @returns {*} String containing the winner name; undefined otherwise.
   */
  function dSearch(board) {

    var dLineLength = 1;
    var dPrev = board[0][0];          // first: [0, 0] then: [1, 1], [2, 2], etc

    for (var i = 1; i < length; i++) {

      // Run through the line values diagonally
      var dNext = board[i][i];        // then: [1, 0], [2, 0], [3, 0], etc

      if ((fillEnum.space === dPrev) || (fillEnum.space === dNext)) {
        hasSpace = true;
      }

      if (!(dPrev === dNext)) {
        return;
      }

      if (++dLineLength === length) {
        return winnerEnum[dPrev];
      }

    }
  }

};

/**
 * Public Functions
 * @type {string}
 */

/**
 *
 * @param boardArray1d 1-dimensional array to be converted to 2-dimensional.
 *    Example:
 *
 *  [
 *   ["x","x","o"], // line 0
 *   ["o","o","x"], // line 1
 *   ["o"," ","o"]  // line 2
 *  ]
 *
 * @returns {Array} 2-dimensional array converted from 1-dimensional.
 */
function populateArray(length, boardArray1d) {
  var boardArray2d = new Array(length);
  var hBoardLine   = new Array(length);

  for (var hLineNum = 0; hLineNum < boardArray1d.length; hLineNum++) {
    var hLineString = boardArray1d[hLineNum];
    for (var i = 0; i < hLineString.length; i++) {
      hBoardLine[i] = hLineString[i];
    }

    boardArray2d[hLineNum] = hBoardLine.splice(0); // copy array
  }
  return boardArray2d;
}

