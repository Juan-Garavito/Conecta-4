import { Manager } from "./components/Manager.js"
import {Players} from "./components/Players.js"

const celdasId = ["col1","col2","col3","col4","col5","col6","col7",
               "row1","row2","row3","row4","row5","row6","dia1_pri",
               "dia2_pri","dia3_pri","dia4_pri","dia5_pri","dia6_pri",
               "dia7_pri","dia8_pri","dia9_pri","dia10_pri","dia1_sec",
               "dia2_sec","dia3_sec","dia4_sec","dia5_sec","dia6_sec",
               "dia7_sec","dia8_sec","dia9_sec","dia10_sec"]     
const celdas = Array.apply(null, document.querySelectorAll(".celda"));
const player1 = new Players({id:"player1"})
const player2 = new Players({id:"player2"})
const manager = new Manager({turno: true, celdas: celdas, celdasId: celdasId})
const soundFicha = new Audio("./app/assets/music/explosion-de-fichas-de-ajedrez-98455.mp3")



document.addEventListener("click",(e)=>{
    if(!manager.setPause()){
        manager.eligeCelda(e,[player1,player2])
        soundFicha.play()
        manager.recorroTablero()
    }
})



