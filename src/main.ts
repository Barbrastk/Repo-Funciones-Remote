import "./style.css";
//Declaro una variable para el turno actual que empieza en cero y cambiará
let turnoActual: number = 0;


//Botón Anterior
const anterior = () => {
    if (turnoActual >0) {
       turnoActual = turnoActual -1; 
    }

    const elementoNumeroTurno = document.getElementById("numero-turno");

    if (elementoNumeroTurno !== null && elementoNumeroTurno !==undefined && elementoNumeroTurno instanceof HTMLHeadingElement){
        elementoNumeroTurno.textContent = turnoActual.toString().padStart(2,"0");
}
}
    
    const btnAnterior = document.getElementById("anterior");
    if (btnAnterior !==null && btnAnterior !== undefined && btnAnterior instanceof HTMLButtonElement) {
        btnAnterior.addEventListener("click", () => {
        anterior();
        })
    } else {
        console.log("Error: botón anterior no encontrado");
    }

//Botón Reset
    const resetTurno = () => {
        turnoActual = 0;

        const elementoNumeroTurno = document.getElementById("numero-turno");

        if (elementoNumeroTurno !==null && elementoNumeroTurno !== undefined && elementoNumeroTurno instanceof HTMLHeadingElement){

         elementoNumeroTurno.textContent = turnoActual
            .toString()
            .padStart(2, "0");
        }
    };

const btnReset = document.getElementById("reset");

if (btnReset !==null && btnReset !==undefined && btnReset instanceof HTMLButtonElement){
    btnReset.addEventListener("click", () =>{
    resetTurno();        
    });    
} else {
    console.log("Error: botón reset no encontrado");
}
    
//Botón Siguiente
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
    console.log("Error: botón siguiente no encontrado");
}


//Botón Cambiar Turno 
const cambiarTurno = () => {
    const inputTurno = document.getElementById("nuevo-turno");

    if (inputTurno !== null && inputTurno !==undefined && inputTurno instanceof HTMLInputElement) {
        const nuevoTurno = parseInt(inputTurno.value);
        
        if (!isNaN(nuevoTurno) && nuevoTurno >= 0) {
            turnoActual = nuevoTurno;

            const elementoNumeroTurno = document.getElementById("numero-turno");
           
            if (elementoNumeroTurno !== null && elementoNumeroTurno !== undefined && elementoNumeroTurno instanceof HTMLHeadingElement) 
                {
                elementoNumeroTurno.textContent = turnoActual
                .toString()
                .padStart(2, "0");
            }
    } else {
        alert("Por favor introduce un número válido (mayor o igual a 0).");
    }
    inputTurno.value = "";
}
};
    const btnCambiar = document.getElementById("cambiar");

if (btnCambiar !== null && btnCambiar !== undefined && btnCambiar instanceof HTMLButtonElement) 
    {
    btnCambiar.addEventListener("click", () => {
        cambiarTurno();
    });
} else {
    console.log("Error: botón cambiar no encontrado");
}