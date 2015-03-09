'use strict';
document.addEventListener("DOMContentLoaded", function(event) {

  document.querySelector('#generate-board').addEventListener('click', function(e) {
    // Cancel form events
    e.preventDefault();
    e.stopPropagation();

    // Get form values
    var length = +(document.querySelector('input[name="size"]').value); // convert to num
    var boardField = document.querySelector('input[name="board"]');

    // Validate
    var isValidLength = validateLength(length);

    if (isValidLength) {
      var newBoardString = generateNewBoard(length);
      boardField.value = newBoardString;
    } else {
      showInvalidFields(isValidLength,'');
    }

    /*
     Generate a string of 3 random characters
     */
    function generateNewBoard(length) {
      var text = "";
      var possible = 'xo ';

      for( var i=0; i < Math.pow(length, 2); i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    return newBoardString;
  });

  document.querySelector('form').addEventListener('submit', function(e) {

    // Cancel form events
    e.preventDefault();
    e.stopPropagation();
    resetResult();

    // Get form values
    var length = +($(this).find('input[name="size"]')[0].value); // convert to num
    var boardString = '' + ($(this).find('input[name="board"]')[0].value); // convert to string

    // Validate
    var isValidLength = validateLength(length);
    var isValidBoardString = validateBoardString(boardString, length);

    if (isValidLength && isValidBoardString) {
      // Calculate result
      var result = findWinner(length, boardString);
      // Visualize
      visualizeBoard(length, boardString, result);
      // Show the winner
      showResult(result['winner'] || 'We could not define the winner :)');
    } else {
      showInvalidFields(isValidLength, isValidBoardString);
    }

  });

  function resetResult() {
    hideInvalidFields();
    document.querySelector('#result').innerHTML = 'See result soon';
  };

  function showResult(winner) {
    document.querySelector('#result').innerHTML = winner;
  };

});
