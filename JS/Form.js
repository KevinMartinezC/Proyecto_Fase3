const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');
console.log(inputs);
function cargar(){
    document.getElementById('btnGuardar').addEventListener('click',guardar,false);
    document.getElementById('btnModificar').addEventListener('click',modificar ,false);
}
const expresiones = {
	usuario : /^\d{8}-\d{1}$/,
	nombre  : /^(?:[a-zA-Z]+\.?\s)+[a-zA-Z]+$/,
	correo  : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[6-7]{1}[0-9]{3}-[0-9]{4}|^[2]{1}[0-9]{3}-[0-9]{4}$/
}

const campos = {
	usuario : false,
	nombre  : false,
	correo  : false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario": 
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre": 
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo": 
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono": 
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
let guardar = () => {
	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.correo && campos.telefono && terminos.checked ){
		let datos = localStorage.info== null?[]:JSON.parse(localStorage.info);

		let documento = document.querySelector("#txtDocumento").value;
		let nombre    = document.querySelector("#txtNombre").value;
		let correo    = document.querySelector("#txtCorreo").value;
		let pais      = document.querySelector("#txtPais").value;

		datos.push({
			'documento': documento,
			'nombre'   : nombre,
			'correo'   : correo,
			'pais'     : pais
		});
	
		localStorage.info = JSON.stringify(datos);
        listar();
	
		alert("Se guardo");
	}else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
	
}
let listar = () => {
    let datos  = localStorage.info== null?[]:JSON.parse(localStorage.info);
    let tabla  = document.querySelector("#tblDatos");
        tabla.innerHTML = "";
    datos.forEach(element => {
        tabla.innerHTML += `
            <tr>
                <td>${element.documento}</td>
                <td>${element.nombre}</td>
                <td>${element.correo}</td>
                <td>${element.pais}</td>
                <td>
                <button class = "btn btn-primary" value = "${element.documento}" onclick = "editar(this.value)">Editar</button>
                <button class = "btn btn-danger" value  = "${element.documento}" onclick = "eliminar(this.value)">Eliminar</button>
                </td>    
            </tr>
        `;
    });
}

let editar = (doc) => {

    let datos = localStorage.info== null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector("#txtDocumento");
    let nombre    = document.querySelector("#txtNombre");
    let correo    = document.querySelector("#txtCorreo");
    let pais      = document.querySelector("#txtPais");
    let id        = document.querySelector("#txtId");

    let btnGuardar   = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    let resultado      = datos.find(e => e.documento == doc);
    let resultadoIndex = datos.findIndex(e => e.documento == doc);

    if(resultado != undefined){

        btnGuardar.style.display   = "none";
        btnModificar.style.display = "block";

        documento.value = resultado.documento;
        nombre.value    = resultado.nombre;
        correo.value    = resultado.correo;
        pais.value      = resultado.pais;

        id.value = resultadoIndex;
    }else{
        alert("No lo encontro");
    }
}


let modificar = () => {

    let datos = localStorage.info== null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector("#txtDocumento").value;
    let nombre    = document.querySelector("#txtNombre").value;
    let correo    = document.querySelector("#txtCorreo").value;
    let pais      = document.querySelector("#txtPais").value;
    let id        = document.querySelector("#txtId").value;

    let btnGuardar   = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    datos[id].documento = documento;
    datos[id].nombre    = nombre;
    datos[id].correo    = correo;
    datos[id].pais      = pais;

    btnGuardar.style.display   = "block";
    btnModificar.style.display = "none";

    localStorage.info = JSON.stringify(datos);

    listar();

    alert("Se modifico");
}


let eliminar = (doc) => {

    let datos = localStorage.info == null?[]:JSON.parse(localStorage.info);

    let resultadoIndex = datos.findIndex(e => e.documento == doc);

    if(resultadoIndex != -1){

        datos.splice(resultadoIndex, 1);

        localStorage.info = JSON.stringify(datos);

        listar();
    }else{
        alert("No lo encontro");
    }
}

if(window.addEventListener){
    window.addEventListener("load", cargar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", cargar);
    }

