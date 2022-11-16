import { Square } from "./Square.js"

export const field = document.getElementById("field")

const colsAndLines = 8
export const squares = new Map()

export const optionsSquare = {
    width:70,
    height:70
}

initField()

function initField(){
    for (let i = 0; i < colsAndLines; i++) {
        const columns = new Map()
        for (let j = 0; j < colsAndLines; j++) {
            const options = {
                position:{x:i,y:j},
                styles:{
                    colors:["#c8bb87","#585858"]
                }
            }
            const square = new Square(options)
            square.appendToField()
            columns.set(j,square)
        }
        squares.set(i,columns)
    }
    field.style.width = `${optionsSquare.width * colsAndLines}px`
    field.style.height = `${optionsSquare.height * colsAndLines}px`
}

for (let i = 0; i < colsAndLines; i++) {
    for (let j = 0; j < colsAndLines; j++) {
        if(squares.get(i).get(j).figure !== undefined){
            squares.get(i).get(j).figure.figure.addEventListener("click",(event)=>moving(squares.get(i).get(j).figure))  
        
        }
    }
}

function moving(figure){
    figure.move(2,7)
}