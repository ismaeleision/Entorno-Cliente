/*
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2"); 
const numeros = document.querySelectorAll(".numero");
const operaciones = document.querySelectorAll(".operacion");
const igual = document.querySelector(".igual");
const borrarTodo = document.querySelector(".borrar_todo");
const borraUltimo = document.querySelector(".borrar_sub_result");
*/

const display1 = document.getElementById("display-1");
const display2= document.getElementById("display-2");
const numero1 = document.getElementById("1");
const numero2 = document.getElementById("2");
const numero3 = document.getElementById("3");
const numero4 = document.getElementById("4");
const numero5 = document.getElementById("5");
const numero6 = document.getElementById("6");
const numero7 = document.getElementById("7");
const numero8 = document.getElementById("8");
const numero9 = document.getElementById("9");
const numero0 = document.getElementById("0");
const operacion = document.getElementById("/")

let dis1Num = "";
let dis2Num = "";
let result = null;
let ultimaOperacion = "";
let tienePunto = false;

// cada vez que hago click en un numero se muestra en la consola de la calculadora
numeros.forEach((numero) => {
    numero.addEventListener("click", (e) => {
        //si el numero no tiene punto se le puede añadir "." una sola vez 
        if (e.target.innerText === "." && !tienePunto) {
            tienePunto = true;
        } else if (e.target.innerText === "." && tienePunto) {
            return;
        }
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
    });
});

// cada vez que hago click en una operacion se muestra en la consola de la calculadora
operaciones.forEach((operacion) => {
    operacion.addEventListener("click", (e) => {
        if (!dis2Num) return;
        tienePunto = false;
        const operacionName = e.target.innerText;

        if (dis1Num && dis2Num && ultimaOperacion) {
            mathOperacion();
        } else {
            result = parseFloat(dis2Num);
        }
        
        limpiarVar(operacionName);
        ultimaOperacion = operacionName;
    });
});

// Escribe en el display1 el calculo, y limpia el display2 
function limpiarVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1.innerText = dis1Num;
    display2.innerText = "";
    dis2Num = ""; 
}

// Calcula dependiendo de la última operación que introducimos 
function mathOperacion() {
    switch (ultimaOperacion) {
        case "x":
            result = parseFloat(result) * parseFloat(dis2Num);
            break;
        case "+":
            result = parseFloat(result) + parseFloat(dis2Num);
            break;
        case "-":
            result = parseFloat(result) - parseFloat(dis2Num);
            break;
        case "/":
            result = parseFloat(result) / parseFloat(dis2Num);
            break; 
        case "%":
            result = parseFloat(result) % parseFloat(dis2Num);
            break;
        default:
            break;
    }
}

// Igual
igual.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    tienePunto = false;
    mathOperacion();
    limpiarVar();
    display2.innerText = result; 
    dis2Num = result;
    dis1Num = "";
});

// Borra todo
borrarTodo.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1.innerText = "";
    display2.innerText = "";
    result = ""; 
});

borraUltimo.addEventListener("click", () => {
    display2.innerText = "";
    dis2Num = "";
});

// FUNCIONA CON TECLADO

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickNumero(e.key);  
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperacion(e.key);
    } else if (e.key === "*") {
        clickOperacion("x"); 
    } else if (e.key == "Enter" || e.key === "=") {
        clickIgual();
    } 
});

// Función para cuando pulsar en un numero
function clickNumero(key) {
    numeros.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}

// Función para cuando pulsar en una operación
function clickOperacion(key) {
    operaciones.forEach((operacion) => {
        if (operacion.innerText === key) {
            operacion.click();
        }
    });
}

// Función para cuando pulsar el igual
function clickIgual() {
    igual.click();
}
