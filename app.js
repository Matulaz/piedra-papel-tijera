//Capturar TAG, ID, class(querySelector)

let piedra = document.getElementById('piedra')
let papel = document.getElementById('papel')
let tijera = document.getElementById('tijera')

let computadora = document.getElementById('computadora')

let resultado = document.getElementById('resultado')

//FUNCIONES

let seleccionPlayerOne = 0
let seleccionComputadora = 2 //despues me preocupo por el Math.random
console.log("de momento la computadora siempre elije PAPEL")

seleccionPiedra = () =>{
    console.log("Has elegido la Piedra")
    seleccionPlayerOne = 1
    jugar()
}


seleccionPapel = () =>{
    console.log("Has elegido el Papel")
    seleccionPlayerOne = 2
    jugar()
}


seleccionTijera = () =>{
    console.log("Has elegido la Tijera")
    seleccionPlayerOne = 3
    jugar()
}

jugar = () =>{
    if(seleccionPlayerOne != seleccionComputadora){

        if (seleccionPlayerOne == 1 && seleccionComputadora == 2){
            console.log("Computadora GANA!!")
        }else {
            if(seleccionPlayerOne == 2 && seleccionComputadora == 1){
                console.log("Computadora GANA!!")
            }else{
                if(seleccionPlayerOne == 3 && seleccionComputadora == 1){
                    console.log('PlayerOne GANA!!')
                }else{
                    if(seleccionPlayerOne == 3 && seleccionComputadora == 2){
                        console.log('PlayerOne GANA!!')
                    }
                }
            }
        }

    } else {
        console.log("es un EMPATE, vuelve a jugar!")
    }
}



//EVENTOS


piedra.addEventListener('click', seleccionPiedra)
papel.addEventListener('click', seleccionPapel)
tijera.addEventListener('click', seleccionTijera)









// seleccionPlayerOne = () =>{
    
    //     let seleccionPiedra = ''
    //     seleccionPiedra = piedra.id
    
    // console.log(seleccionPiedra)
    // console.log(`has hecho click en ${seleccionPiedra}`)
    
    
    // }
    
    // piedra.addEventListener('click', seleccionPlayerOne)
    // papel.addEventListener('click', seleccionPlayerOne)
    // tijera.addEventListener('click', seleccionPlayerOne)