import "./style.css";
//Declaro una variable para el turno actual que empieza en cero y cambiará
let turnoActual: number = 0;

//Ahora voy con los elementos del DOM
const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const btnAnterior = document.getElementById("anterior") as HTMLButtonElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;
const btnSiguiente = document.getElementById("siguiente") as HTMLButtonElement;
const inputTurno = document.getElementById("nuevo-turno") as HTMLInputElement;
const btnCambiar = document.getElementById("cambiar") as HTMLButtonElement;

//Creo las funciones
function actualizarDisplay(): void {
    numeroTurno.textContent = turnoActual.toString().padStart(2, "0");
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


function siguienteTurno (): void {
    turnoActual++;
    actualizarDisplay();
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

actualizarDisplay();