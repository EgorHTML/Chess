import { squares } from "./app.js"

export class Pawn{
    constructor(color,position,figure){
        this.color = color
        this.position = position.position
        this.figure = figure
        this.moveTo = {
            x:this.position.x+1,
            y:this.position.y
        }
    }

    move(x,y){
        if(Number(x)===Number(this.moveTo["x"]) && Number(y)===Number(this.moveTo["y"])){
            const square = squares.get(Number(x)).get(Number(y))
            square.square.appendChild(this.figure)
        }
    }
}