import Alerts from "./Alerts.js"

export class Manager{
    constructor(obj){
        this.turno = obj.turno
        this.celdas = obj.celdas
        this.celdasId = obj.celdasId
        this.numFichasPlay1 = 0
        this.numFichasPlay2 = 0
        this.pause = false
    }

    eligeCelda(e, players){
        let celda
        let column

        if(e.target.parentNode != document ){
            column = e.target.parentNode.classList[0] == "content_column" ? e.target.parentNode.childNodes:
            e.target.parentNode.classList[0] == "content" ? e.target.childNodes :
            e.target.parentNode.classList[0] == "celda" ? e.target.parentNode.parentNode.childNodes : null
        }
       
        
        if(column == undefined || column == null){
            Alerts({mensaje: "selecciona una Columna", id: ".fallo", ocultar: true, sound: new Audio("./app/assets/music/negative_beeps-6008.mp3")})
            return
        }            
          
        column.forEach(element => {
            if(element.nodeType != 3){
                if(element.childNodes.length == 0){
                    celda = element
                }
            }
        });

        if(celda == undefined || celda == null ){
            Alerts({mensaje: "Columna Llena", id: ".fallo", ocultar: true, sound: new Audio("./app/assets/music/negative_beeps-6008.mp3") })
            return
        }

        this.pintar(celda,players)
    }

    pintar(celda,players){
        if(this.turno){
            players[0].jugar(celda)
            this.turno = !this.turno
        }else{
            players[1].jugar(celda)
            this.turno = !this.turno
        }

        this.pause = true
        const time = setTimeout(()=>{
            this.pause = false
            setTimeout(time)
        },1500)
    }

    recorroTablero(){
        for (let i = 0; i <= this.celdasId.length; i++) {
            this.numFichasPlay1  = 0
            this.numFichasPlay2 = 0
            this.celdas.map(celda => {
               if(celda.classList[2] == this.celdasId[i]){
                    this.detectoGanador(celda)
               }
               if(celda.classList[3] == this.celdasId[i]){
                this.detectoGanador(celda)
               }
               if(celda.classList[4] == this.celdasId[i]){
                this.detectoGanador(celda)
               }
               if(celda.classList[5] == this.celdasId[i]){
                    this.detectoGanador(celda)
               }
            });  
        }
        
            
        
 
    }

    detectoGanador(celda){
        if(celda.childNodes.length > 0){
            if(celda.childNodes[0].classList[0] == "player1"){ 
                this.numFichasPlay1 += 1
                this.numFichasPlay2 = 0  
            }else if(celda.childNodes[0].classList[0] == "player2"){
                this.numFichasPlay2 += 1
                this.numFichasPlay1 = 0
            }
            

            if(this.numFichasPlay1 == 4){
                this.pause = true
                Alerts({mensaje: "Gana el Player Uno", id: ".ganador", ocultar: false, sound: new Audio("./assets/music/applause-87939.mp3")})
            }else if(this.numFichasPlay2 == 4){
                this.pause = true
                Alerts({mensaje: "Gana el Player Dos", id: ".ganador", ocultar: false, sound: new Audio("./assets/music/applause-87939.mp3")})
            }
        }else if(celda.childNodes.length == 0){
            this.numFichasPlay1 = 0
            this.numFichasPlay2 = 0
        }
    }

    setPause(){
        return this.pause
    }
}
