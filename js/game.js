let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['O','X'];


function handleMove(position){
  if(board[position] == ''){
    board[position] = symbols[playerTime]

    if (playerTime == 0) {
      playerTime = 1
    } else {
      playerTime = 0
    }
  }
}