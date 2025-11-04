import "./style.css";
//Declaro una variable para el turno actual que empieza en cero y cambiará
let turnoActual: number = 0;

//Ahora voy con los elementos del DOM
const numeroTurno = document.getElementById("numero-turno") as HTMLElement;

const btnReset = document.getElementById("reset") as HTMLButtonElement;
const inputTurno = document.getElementById("nuevo-turno") as HTMLInputElement;
const btnCambiar = document.getElementById("cambiar") as HTMLButtonElement;

//Creo todas las funciones de los botones, y llamo a los eventos
function actualizarDisplay(): void {
    numeroTurno.textContent = turnoActual.toString().padStart(2, "0");
}

const anterior = () => {
    turnoActual = turnoActual - 1; //aquí entiendo que tendré que poner que reste pero no de negativo

    const elementoNumeroTurno = document.getElementById("numero-turno");

    if (elementoNumeroTurno !== null && elementoNumeroTurno !==undefined && elementoNumeroTurno instanceof HTMLHeadingElement){
        elementoNumeroTurno.textContent = turnoActual.toString().padStart(2,"0");
}
}
    
    const btnAnterior = document.getElementById("anterior");
    if (btnAnterior !==null && btnSiguiente !== undefined && btnAnterior instanceof HTMLButtonElement) {
        btnAnterior.addEventListener("click", () => {
        anterior();
        })
    } else {
        console.log("error");
    }

function anteriorTurno(): void {
    if (turnoActual > 0) {
        turnoActual--;
        actualizarDisplay();
    } 
}

btnAnterior.addEventListener("click", anteriorTurno);


function resetTurno (): void{
    turnoActual = 0;
    actualizarDisplay();
}

btnReset.addEventListener("click", resetTurno);


const siguiente = () => {
    turnoActual = turnoActual + 1;

    const elementoNumeroTurno = document.getElementById("numero-turno")

    if (elementoNumeroTurno !== null && elementoNumeroTurno !== undefined && elementoNumeroTurno instanceof HTMLHeadingElement) {
        elementoNumeroTurno.textContent = turnoActual.toString().padStart(2, "0");
    }
}

const btnSiguiente = document.getElementById("siguiente");

if (btnSiguiente !== null && btnSiguiente !== undefined && btnSiguiente instanceof HTMLButtonElement) {
    btnSiguiente.addEventListener("click", () => {
        siguiente();
    })
} else {
    console.log("error");
}



btnSiguiente.addEventListener("click", siguienteTurno);



function cambiarTurno (): void {
    const nuevoTurno = parseInt(inputTurno.value);

    if (!isNaN(nuevoTurno) && nuevoTurno >=0) {
        turnoActual = nuevoTurno;
        actualizarDisplay();
    } else{
        alert("Por favor introduce un nuevo número válido mayor o igual a 0.");
    }
    inputTurno.value = ""; //Limpia el campo de texto
}

btnCambiar.addEventListener("click", cambiarTurno);

//actualiza el display con el numero resultante tras ejecutar todo
actualizarDisplay();