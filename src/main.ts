import "./style.css";
//Declaro una variable para el turno actual que empieza en cero y cambiará
let turnoActual: number = 0;

//Ahora voy con los elementos del DOM
const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const btnAnterior = document.getElementById("anterior") as HTMLButtonElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;
const btnSiguiente = document.getElementById("siguiente") as HTMLButtonElement;

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

actualizarDisplay();