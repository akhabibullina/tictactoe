document.addEventListener("DOMContentLoaded", function(event) {
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
      // Visualize
      visualizeBoard(length, boardString);

      // Calculate result
      var winner = findWinner(length, boardString);
      showResult(winner || 'undefined');
    } else {
      showValidationErrorMessage();
    }

  });

  function validateLength(length) {
    if (length) {
      return length >= 1 && length <= 100;
    }
    return false;
  }

  // todo: check that the string contains only O, X or space
  // todo: add special check if 1st or last board string el equals space
  function validateBoardString(boardString, length) {
    if (boardString) {
      return boardString.length === Math.pow(length, 2);
    }
  }

  function resetResult() {
    document.querySelector('#result').innerHTML = 'TBD';
  }

  function showResult(winner) {
    document.querySelector('#result').innerHTML = winner;
  }

  function showValidationErrorMessage() {
    alert('Validation Error!');
  }
});
