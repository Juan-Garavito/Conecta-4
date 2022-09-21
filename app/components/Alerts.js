export default function Alerts(obj){
    const {mensaje, id, ocultar = false, sound = null} = obj
    const modal = document.querySelector(id)
    modal.classList.remove("ocultar")
    modal.classList.add("mostrar")
    modal.innerHTML = mensaje
    if(sound != null || sound != undefined)
        sound.play()

    if(ocultar){
        const time = setTimeout(()=>{
            modal.classList.remove("mostrar")
            modal.classList.add("ocultar")
            clearTimeout(time)
        },2500)
    }
}

