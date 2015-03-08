'use strict';
var lengthInput, boardInput;

var minSize = 1;
var maxSize = 100;
var allowedChars = 'xo ';

document.addEventListener("DOMContentLoaded", function(event) {
  lengthInput = document.querySelector('input[name="size"]');
  boardInput = document.querySelector('input[name="board"]');
});

function validateLength(length) {
  if (length) {
    return isNumeric(length) && length >= minSize && length <= maxSize;
  }
  return false;
};

function validateBoardString(boardString, length) {
  if (boardString) {
    return hasAllowedCharsOnly(boardString) && (boardString.length === Math.pow(length, 2));
  }
  return false;
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function hasAllowedCharsOnly(str) {
  return !str.match('[^' + allowedChars + ']');
};

function showInvalidFields(isValidLength, isValidBoardString) {
  if (!isValidLength) {
    lengthInput.setAttribute('class', 'error');
    document.querySelector('#invalid-length').style.visibility = 'visible';
  }
  if (!isValidBoardString) {
    boardInput.setAttribute('class', 'error');
    document.querySelector('#invalid-board').style.visibility = 'visible';
  }
};

function showValidationError(isValidLength, isValidBoardString) {
  if (!isValidLength) {
    lengthInput.setAttribute('class', 'error');
    document.querySelector('#invalid-length').style.visibility = 'visible';
  }
  if (!isValidBoardString) {
    boardInput.setAttribute('class', 'error');
    document.querySelector('#invalid-board').style.visibility = 'visible';
  }
}

function hideInvalidFields() {
  lengthInput.removeAttribute('class');
  boardInput.removeAttribute('class');

  document.querySelector('#invalid-length').style.visibility = 'hidden';
  document.querySelector('#invalid-board').style.visibility = 'hidden';
};
