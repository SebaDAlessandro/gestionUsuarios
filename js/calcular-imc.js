let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector('.info-peso')
    let peso = tdPeso.textContent
    
    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent
    
    let dtImc = paciente.querySelector('.info-imc')

    let pesoValido = validarPeso(peso);
    let alturaValida = validarAltura(altura);
    
    
    if(!pesoValido){
        tdPeso.textContent = 'verificar dato'
        pesoValido = false;
        paciente.classList.add('paciente-icorrecto')
    }
    
    if(!alturaValida){
        tdAltura.textContent = 'verificar dato'
        alturaValida = false;
        paciente.classList.add('paciente-icorrecto')
    }
    
    if(pesoValido && alturaValida){
        dtImc.textContent = calcularIMC(peso, altura)
    }

}

function calcularIMC(peso, altura){
    let imc =  peso / (altura * altura)
    return imc.toFixed(2)
}

function validarPeso(peso){
    if(peso>=0 && peso<600){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura>=0 && altura<2.8){
        return true;
    }else{
        return false;
    }
}
