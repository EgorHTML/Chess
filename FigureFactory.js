import { Pawn } from "./Figures.js"
import { squares } from "./app.js"

export class FigureFactory{
    constructor(position){
        this.position = position
        
    }

    createFigure(placeDiv){
        const location = {
            placeDiv, position:this.position
        }
        
        if(this.position.x === 1) {
            const name = "pawn"
            return new BlackFigure(location,name).create()
        }
        else if(this.position.x === 6){
            const name = "pawn"
            return new WhiteFigure(location,name).create()
        }

        return undefined
    }

    init(color,name){
        this.figure = document.createElement("div")
        this.figure.dataset.x = this.position.position.x
        this.figure.dataset.y = this.position.position.y
        this.figure.classList.add("figure",`${color}__${name}`)
        this.place.appendChild(this.figure)
    }

    createTeamFigure(name,color){
        if(name==="pawn"){
            this.init(color,name)
            return new Pawn(color,this.position,this.figure)
        }
    }
}

class WhiteFigure extends FigureFactory{
    constructor(place,name){
        super(place, name)
        this.name = name
        this.place = place.placeDiv.square
        this.color = "white"

    }

    create(){
        return this.createTeamFigure(this.name,this.color)
    }
}

class BlackFigure extends FigureFactory{
    constructor(place,name){
        super(place, name)
        this.name = name
        this.place = place.placeDiv.square
        this.color = "black"

    }
    
    create(){
        return this.createTeamFigure(this.name,this.color)
    }
}

