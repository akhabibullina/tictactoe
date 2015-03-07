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
    function generateNewBoard(length)
    {
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
      // Visualize
      visualizeBoard(length, boardString);

      // Calculate result
      var winner = findWinner(length, boardString);
      showResult(winner || 'undefined');
    } else {
      showInvalidFields(isValidLength, isValidBoardString);
    }

  });

  function validateLength(length) {
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (length) {
      return isNumber(length) && length >= 1 && length <= 100;
    }
    return false;
  }

  // todo: check that the string contains only O, X or space
  // todo: add special check if 1st or last board string el equals space
  function validateBoardString(boardString, length) {
    if (boardString) {
      return boardString.length === Math.pow(length, 2);
    }
    return false;
  }

  function showInvalidFields(isValidLength,isValidBoardString) {
    if (!isValidLength) {
      document.querySelector('input[name="size"]').style.border = '1px solid red';
    };
    if (!isValidBoardString) {
      document.querySelector('input[name="board"]').style.border = ' 1px solid red';
    };
  }

  function hideInvalidFields() {
    document.querySelector('input[name="size"]').style.border = '1px solid gray';
    document.querySelector('input[name="board"]').style.border = '1px solid gray';
  }

  function resetResult() {
    hideInvalidFields();
    document.querySelector('#result').innerHTML = 'TBD';
  }

  function showResult(winner) {
    document.querySelector('#result').innerHTML = winner;
  }

  function showValidationErrorMessage() {
    alert('Validation Error!');
  }
});
