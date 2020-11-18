//var arrayFrutas = ["", "", "", "", "", "", "", "", "", "", ""];
//var arrayNombres = ["Plátano", "Cereza", "Uva", "Piña", "Paraguaya", "Manzana", "Pera", "Naranja", "Melocotón", "Kiwi", "Higo"]
//var arrayPrecios = [1, 0.70, 0.60, 0.90, 2.30, 0.80, 1.80, 1.70, 1.30, 1.40, 1.50]


//Eventos
window.onload = () => {
    let pedir = document.getElementById("realizarPedido");
    let borrarform = document.getElementById("borrarForm");
    let frutas = document.getElementsByTagName("img");

    borrarform.addEventListener("click", borrarFormulario, false);

    frutas[0].addEventListener("click", sumar.bind("platano"), false);
    frutas[1].addEventListener("click", sumar.bind("manzana"), false);
    frutas[2].addEventListener("click", sumar.bind("uvas"), false);
    frutas[3].addEventListener("click", sumar.bind("melocoton"), false);
    frutas[4].addEventListener("click", sumar.bind("pera"), false);
    frutas[5].addEventListener("click", sumar.bind("paraguaya"), false);
    frutas[6].addEventListener("click", sumar.bind("piña"), false);
    frutas[7].addEventListener("click", sumar.bind("kiwi"), false);
    frutas[8].addEventListener("click", sumar.bind("cerezas"), false);
    frutas[9].addEventListener("click", sumar.bind("higo"), false);
    frutas[10].addEventListener("click", sumar.bind("naranja"), false);

    pedir.addEventListener("submit", camposLLenos, false);
}


//Aquí van las clases de las frutas de temporada y la clase padre fruta

//Esta es la clase padre
class fruta {
    constructor(nombre, kilos, precio) {
        this.nombre = nombre;
        this.kilos = kilos;
        this.precio = precio;
    }
}

//Esta es la clase hija "verano" que tendrá nuevas propiedades
class verano extends fruta {
    constructor(nombre, kilos, precio, proximidad, region) {
        super(nombre, kilos, precio);
        this.proximidad = proximidad;
        this.region = region;
    }
}

//Esta es la clase hija "invierno" que tendrá una nueva propiedad
class invierno extends fruta {
    constructor(nombre, kilos, precio, nevera) {
        super(nombre, kilos, precio);
        this.nevera = nevera;
    }
}

//Función para borrar el formulario
function borrarFormulario() {
    let campos = document.getElementsByClassName("datos");
    let radios = document.getElementsByClassName("radio");
    for (i = 0; i < campos.length; i++) {
        campos[i].value = null;
    }

    for (y = 0; y < radios.length; y++) {
        radios[y].checked = false;
    }
}

//Funcion que comprueba si existe tarjeta cliente
function tarjetaCliente() {
    let tarjeta = document.getElementById("tarjetasi");

    if (tarjeta.checked) {
        let fieldset = document.getElementById("fieldset");
        let label = document.createElement("label")
        label.innerHTML = "Introduce el codigo cliente: "
        let input = document.createElement("input[type='text']")
        fieldset.appendChild(label);
        fieldset.appendChild(input);
    }
}

//Comprobaciones
function camposLLenos(event) {
    let inputsForm = document.getElementsByClassName("datos");
    let labelInputs = document.getElementsByTagName("labelDatos");
    let todobien = false;

    for (i = 0; inputsForm.length; i++) {
        console.log(inputsForm[i]);
        if (!inputsForm[i].validity.valid) {
            labelInputs[i].className = "campoErroneo";
            event.preventDefault();
        } else {
            todobien = true;
        }
    }

    if (todobien == true) {
        abrirVentana();
    }

}


//Funcion que abre la ventana de confirmacion
function abrirVentana() {
    window.open("../HTML/emergente.html", "emergente", "width=500px height=300px");
}

//Funciones para las frutas de verano e invierno. Spoiler: No sirven para nada
function getVerano() {
    /*for (i = 0; i < arrayObjetos.length; i++) {
        if (arrayObjetos[i].kilos > 0 && arrayObjetos[i].proximidad) {
            ventana.document.write("Las/Los " + arrayObjetos[i].nombre + " son fruta de verano, de " + arrayObjetos[i].proximidad + " y están recogidas en " + arrayObjetos[i].region + ".<br>")
        }
    }*/
}

function getInvierno() {
    /*for (i = 0; i < arrayObjetos.length; i++) {
        if (arrayObjetos[i].kilos > 0 && arrayObjetos[i].nevera) {
            ventana.document.write("Las/Los " + arrayObjetos[i].nombre + " son frutas de inverno y es recomendable conservarlas " + arrayObjetos[i].nevera + " de la nevera.<br>")
        }
    }*/
}

//Objetos fruta
var platano = new verano("Plátano", 0, 1, "lejanía", "Canarias");
var manzana = new invierno("Manzana", 0, 0.8, "fuera");
var uvas = new invierno("Uvas", 0, 0.60, "dentro");
var melocoton = new verano("Melocotón", 0, 1.30, "lejanía", "Barcelona");
var pera = new invierno("Pera", 0, 1.8, "dentro");
var paraguaya = new verano("Paraguaya", 0, 2.3, "Lejanía", "Paraguay");
var pina = new verano("Piña", 0, 0.9, "lejanía", "Venezuela");
var kiwi = new verano("Kiwi", 0, 1.4, "lejanía", "Australia");
var cereza = new verano("Cereza", 0, 0.7, "cercanía", "Badajoz");
var higo = new verano("Higo", 0, 1.5, "cercanía", "Salamanca");
var naranja = new invierno("Naranja", 0, 1.7, "fuera");

//Array Objetos Fruta
var arrayObjetos = [platano, manzana, uvas, melocoton, pera, paraguaya, pina, kiwi, cereza, higo, naranja];

//Funcion que borrará todo después de que pasen 10 segundos al pulsa el boton de resumen de la compra
function borrar() {
    setTimeout(contenido, 10000);
}

function contenido() {
    let textarea = document.getElementById("resumen");
    textarea.innerHTML = "";
    let compra = document.getElementById("compra");
    compra.innerHTML = "";

    for (i = 0; i < arrayObjetos.length; i++) {
        arrayObjetos[i].kilos = 0;
    }
}

//Sumar los kilos de los objetos cuando se pulsa la imagen de la fruta
//Ademas se encarga de señalar las veces que has repetido la misma fruta
function sumar(fruta) {
    //let kilos = prompt("¿cuántos Kilos quieres?");
    fruta = this.toString();
    let arrayParrafos = document.getElementById("compra").getElementsByTagName("p");
    let kilos = document.getElementById(fruta).value
    kilos = Number(kilos)
    let copia = kilos;

    copia = Math.round(copia)



    if (kilos !== copia) {
        return alert("Debes introducir un número entero");
    }

    switch (fruta) {
        case "platano":
            arrayObjetos[0].kilos = arrayObjetos[0].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='platano'>" + platano.nombre + " ---- " + platano.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "platano") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "manzana":
            arrayObjetos[1].kilos = arrayObjetos[1].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='manzana'>" + manzana.nombre + " ---- " + manzana.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "manzana") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "uvas":
            arrayObjetos[2].kilos = arrayObjetos[2].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='uvas'>" + uvas.nombre + " ---- " + uvas.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "uvas") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "melocoton":
            arrayObjetos[3].kilos = arrayObjetos[3].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='melocoton'>" + melocoton.nombre + " ---- " + melocoton.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "melocoton") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "pera":
            arrayObjetos[4].kilos = arrayObjetos[4].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='pera'>" + pera.nombre + " ---- " + pera.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "pera") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "paraguaya":
            arrayObjetos[5].kilos = arrayObjetos[5].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='paraguaya'>" + paraguaya.nombre + " ---- " + paraguaya.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "paraguaya") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "piña":
            arrayObjetos[6].kilos = arrayObjetos[6].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='piña'>" + piña.nombre + " ---- " + piña.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "piña") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "kiwi":
            arrayObjetos[7].kilos = arrayObjetos[7].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='kiwi'>" + kiwi.nombre + " ---- " + kiwi.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "kiwi") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "cerezas":
            arrayObjetos[8].kilos = arrayObjetos[8].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='cerezas'>" + cerezas.nombre + " ---- " + cerezas.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "cerezas") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "higo":
            arrayObjetos[9].kilos = arrayObjetos[9].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='higo'>" + higo.nombre + " ---- " + higo.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "higo") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
        case "naranja":
            arrayObjetos[10].kilos = arrayObjetos[10].kilos + kilos;
            document.getElementById("compra").innerHTML += "<p name='naranja'>" + naranja.nombre + " ---- " + naranja.kilos + "</p>"

            for (i = 0; i < arrayParrafos.length; i++) {
                arrayParrafos[i].removeAttribute("style");
            }

            for (i = 0; i < arrayParrafos.length; i++) {
                if (arrayParrafos[i].getAttribute("name") == "naranja") {
                    arrayParrafos[i].style.backgroundColor = "green"
                }
            }

            break;
    }
}

function mostrarResumen() {
    //let textarea = document.getElementById("resumen");
    let fecha = new Date();
    let resumen = resumir();
    let precioTotal = precioGeneral();
    //textarea.appendChild(fecha);
    //textarea.appendChild(resumen);
    //textarea.appendChild(precioTotal);

    return fecha + resumen + precioTotal;

}

//Junta todo los datos que necesitamos
function resumir() {
    let resumen = new Array();
    let final;
    for (i = 0; i < arrayObjetos.length; i++) {
        resumen[i] = "<p>" + arrayObjetos[i].nombre + " ------ " + arrayObjetos[i].kilos + "Kg" + " ------ " + Number(arrayObjetos[i].precio).toFixed(2) + "€ " + " ------ " + Number(arrayObjetos[i].precio * arrayObjetos[i].kilos).toFixed(2) + "€</p>";
        resumen.sort(function(elem1, elem2) {
            if (elem1.toLocaleLowerCase() > elem2.toLocaleLowerCase()) {
                return -1;
            }
            if (elem1.toLocaleLowerCase() < elem2.toLocaleLowerCase()) {
                return +1;
            }
            return 0;
        });
        final = resumen.join("\n");
    }

    return final;

}

//Esta función nos dará el resultado monetario final
function precioGeneral() {
    pesoTotal = 0;
    for (i = 0; i < arrayObjetos.length; i++) {
        pesoTotal = pesoTotal + arrayObjetos[i].kilos;
    }

    precioTotal = 0;
    for (i = 0; i < arrayObjetos.length; i++) {
        if (arrayObjetos[i].kilos > 0) {
            precioTotal = precioTotal + (arrayObjetos[i].precio * arrayObjetos[i].kilos);
        }
    }

    return "\n\nPrecio total: " + parseFloat(Math.floor(precioTotal)).toFixed(2) + " €\nPrecio medio: " + parseFloat(precioTotal / pesoTotal).toFixed(3) + " €/Kg";
}