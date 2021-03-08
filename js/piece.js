export default class Piece {
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
    }

    get type(){
        return this._type;
    }

    set type(value){
        this._type = value;
    }

    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}