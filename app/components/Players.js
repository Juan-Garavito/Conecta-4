export class Players{
    constructor(obj){
        this.id = obj.id
    }

    jugar(celda){
        let circle = document.createElement("div")
        circle.classList.add(this.id)
        celda.appendChild(circle)
    }

    getData(){
        return this.id
    }

}