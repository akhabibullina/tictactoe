$(document).ready(function() {
  document.querySelector('form').addEventListener('submit', function() {

    var length = $(this).find('input[name="size"]')[0].value;
    var boardString = $(this).find('input[name="board"]')[0].value;

    // todo: validation

    // todo: fix something doesn't work right
    alert(findWinner(length, boardString));

  });
});
