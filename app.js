//Capturar TAG, ID, class(querySelector)

let piedra = document.getElementById('piedra')
let papel = document.getElementById('papel')
let tijera = document.getElementById('tijera')

let computadora = document.getElementById('computadora')

let resultado = document.getElementById('resultado')

//FUNCIONES

let seleccionPlayerOne = 0
let seleccionComputadora = 0 
let historico = []

//Math.random para la seleccion de la computadora
//--------------------------------------------------------

seleccionRandom = () =>{

    seleccionComputadora = Math.floor(Math.random()*3)

    switch(seleccionComputadora){
        case 0: computadora.innerHTML='Piedra';
                computadoraPiedra.innerHTML = '<button id="piedra" type="button" class="btn btn-primary btn-lg"><img src="./img/piedra.png" alt="La buena Piedra"></button>'
        break;
        case 1: computadora.innerHTML='Papel'
                computadoraPapel.innerHTML = '<button id="papel" type="button" class="btn btn-primary btn-lg"><img src="./img/avion-de-papel.png" alt="Papel"></button>'
        break;
        case 2: computadora.innerHTML='Tijera'
                computadoraTijera.innerHTML = '<button id="tijera" type="button" class="btn btn-primary btn-lg"><img src="./img/tijeras.png" alt="Tijera"></button>'
        break;
        default: 'ha ocurrido un error!'
    }

    return seleccionComputadora

}


//Seleccion del jugador-----------------------------------

seleccionPiedra = () =>{
    seleccionPlayerOne = 0
    spanPlayerOne.innerHTML = 'Piedra'
    seleccionRandom()
    jugar()
}


seleccionPapel = () =>{
    seleccionPlayerOne = 1
    spanPlayerOne.innerHTML = 'Papel'
    seleccionRandom()
    jugar()
}


seleccionTijera = () =>{
    seleccionPlayerOne = 2
    spanPlayerOne.innerHTML = 'Tijera'
    seleccionRandom()
    jugar()
}


// Funcion para que de comienzo al juego (condicionales--------------)

jugar = () =>{
    if(seleccionPlayerOne != seleccionComputadora){

        if (seleccionPlayerOne == 0 && seleccionComputadora == 1){
            resultado.innerHTML="Computadora GANA!!"
        }else {
            if(seleccionPlayerOne == 1 && seleccionComputadora == 0){
                resultado.innerHTML="PlayerOne GANA!!"
            }else{
                if(seleccionPlayerOne == 2 && seleccionComputadora == 0){
                    resultado.innerHTML='Computadora GANA!!'
                }else{
                    if(seleccionPlayerOne == 2 && seleccionComputadora == 1){
                        resultado.innerHTML='PlayerOne GANA!!'
                    }else{
                        if(seleccionPlayerOne == 1 && seleccionComputadora == 2){
                            resultado.innerHTML="Computadora GANA!!"
                        }else{
                            if(seleccionPlayerOne == 0 && seleccionComputadora == 2){
                                resultado.innerHTML="PlayerOne GANA!!"
                            }
                        }
                    }
                }
            }
        }

    } else {
        resultado.innerHTML="es un EMPATE, vuelve a jugar!"
    }

    decoResultado()
}

//Target al CSS para empezar a darle color al juego-----------

decoResultado = ()=>{
    if(resultado.innerHTML == 'PlayerOne GANA!!'){
        document.body.style.backgroundColor = 'green'
    } else{
        if (resultado.innerHTML == 'Computadora GANA!!'){
            document.body.style.backgroundColor = 'red'
        }else{
            document.body.style.backgroundColor = 'grey'
        }

}
}


//EVENTOS


piedra.addEventListener('click', seleccionPiedra)
papel.addEventListener('click', seleccionPapel)
tijera.addEventListener('click', seleccionTijera)


