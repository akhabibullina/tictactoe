# Tic Tac Toe Board Analyzer

Given the following parameters for input:

- The length of a side of a tic tac toe board (e.g. can be 5, for a 5x5 game). The maximum size is 100x100.

- A 2 dimensional array representing the tic tac toe board
The spaces are filled with X’s, O’s or blanks

Return one of the following results as either an enum (if available in the language) or a string:

- WinnerX: A winner X (there are N X’s in a row, where N is the length of a side -- can be on a row, column or diagonal)
- WinnerO: A winner O
- CatsGame: A cats game (no winner and no spaces left)
- None of the above

### Version
0.0.1

### Tech

The repository code contains the following javascript files:
- main.js
- tictactoe.js
- visualizer.js

Code uses an open source projects to work properly:
* [jQuery] - duh

### Installation

1. Clone repository:
```sh
$ git clone https://github.com/akhabibullina/tictactoe.git
```
2. Open index.html in the browser


### Development

Want to contribute? Great!

Fork the repo and make a change in your file and instantanously see your updates!

### Todo's

 - Improve validation
 - Improve visualizer's GUI
 - Fix the problem in analyzer algorithm

License
----

MIT