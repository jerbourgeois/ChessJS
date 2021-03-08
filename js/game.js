import Piece from "./piece.js";

//Array of every game tile
var tiles;

initializeGame();

//Initialize all pieces and place them in starting positions
function initializeGame(){
    tiles = [
        [new Piece(0, 0, 'Rook'), new Piece(1, 0, 'Knight'), new Piece(2, 0, 'Bischop'), new Piece(3, 0, 'Queen'), new Piece(4, 0, 'King'), new Piece(5, 0, 'Bischop'), new Piece(6, 0, 'Knight'), new Piece(7, 0, 'Rook')],
        [new Piece(0, 1, 'Pawn'), new Piece(1, 1, 'Pawn'), new Piece(2, 1, 'Pawn'), new Piece(3, 1, 'Pawn'), new Piece(4, 1, 'Pawn'), new Piece(5, 1, 'Pawn'), new Piece(6, 1, 'Pawn'), new Piece(7, 1, 'Pawn')],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [new Piece(0, 1, 'Pawn'), new Piece(1, 1, 'Pawn'), new Piece(2, 1, 'Pawn'), new Piece(3, 1, 'Pawn'), new Piece(4, 1, 'Pawn'), new Piece(5, 1, 'Pawn'), new Piece(6, 1, 'Pawn'), new Piece(7, 1, 'Pawn')],
        [new Piece(0, 0, 'Rook'), new Piece(1, 0, 'Knight'), new Piece(2, 0, 'Bischop'), new Piece(3, 0, 'Queen'), new Piece(4, 0, 'King'), new Piece(5, 0, 'Bischop'), new Piece(6, 0, 'Knight'), new Piece(7, 0, 'Rook')],
    ]
}

