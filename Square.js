import { field } from "./app.js"
import { FigureFactory } from "./FigureFactory.js"

export class Square{
    constructor(options){
        this.square = document.createElement("div")

        this.position = options.position
        this.styles = options.styles
        this.setStylesSquare()

        this.figure = new FigureFactory(this.position).createFigure(this)
    }

    setStylesSquare(){
        const {x,y} = this.position
        this.square.style.backgroundColor  = this.styles.colors[(x+y)%2]
        this.square.classList.add("square")
        this.square.dataset.x = x
        this.square.dataset.y = y
    }

    appendToField(){
        field.appendChild(this.square)
    }
}