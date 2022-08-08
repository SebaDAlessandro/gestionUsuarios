let botonAdicional = document.querySelector('#adicionar-paciente')

botonAdicional.addEventListener('click', (event)=>{
    
    event.preventDefault()//previene que no se recargue la pagina al momento de hacer submit

    let form = document.querySelector('#form-adicional')
    let paciente = capturaDatosPaciente(form)
    let errores = validarPaciente(paciente)

    if(errores.length > 0){
        exhibirMensajesError(errores)
        return;
    }

    adicionarPaciente(paciente)
    //receteo los imput del form
    form.reset();

    //receteo los mensajes de errores
    let mensajesErrores = document.querySelector('#mensajes-errores');
    mensajesErrores.innerHTML = ''; /*Para editar el HTML interno de un elemento, basta pasar el nuevo contenido
    por parámetro para la propiedad.*/

});

function adicionarPaciente(paciente) {
    let pacienteTr = contruirTr(paciente);
    let tabla = document.querySelector('#tabla-pacientes');
    tabla.appendChild(pacienteTr);
}

function capturaDatosPaciente(form){
    //captura los datos del formulario
    let paciente ={
        nombre: form.nombre.value,
        peso:form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value),
    }
    
    return paciente;

}

function contruirTr(paciente){

    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(construirTd(paciente.nombre, 'info-nombre'));
    pacienteTr.appendChild(construirTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(construirTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(construirTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(construirTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function construirTd (dato, clase){
    let td = document.createElement('td');
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    let errores = [];

    if(!validarPeso(paciente.peso)){
        errores.push('El peso es incorrecto')
    }
    if(!validarAltura(paciente.altura)){
        errores.push('La altura es incorrecta')
    }
    if(paciente.nombre === ''){
        errores.push('El nombre no puede ser vacío')
    }
    if(paciente.peso === ''){
        errores.push('El peso no puede ser vacío')
    }
    if(paciente.altura === ''){
        errores.push('La altura no puede ser vacía')
    }
    if(paciente.gordura === ''){
        errores.push('El % de gordura no puede ser vacío')
    }
    return errores;
}

function exhibirMensajesError(errores){
    let ul = document.querySelector('#mensajes-errores')
    ul.innerHTML = ''
    errores.forEach(function(error){
        let li = document.createElement('li')
        li.textContent = error;
        ul.appendChild(li)
    })
}

