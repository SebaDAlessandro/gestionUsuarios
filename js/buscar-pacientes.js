let botonBuscar = document.querySelector('#buscar-paciente')

botonBuscar.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest;
    xhr.open('GET','https://alura-es-cursos.github.io/api-pacientes/pacientes111.json');
    xhr.addEventListener('load',()=>{
        let errorAjax = document.querySelector('#error-ajax');
        if(xhr.status === 200){
            errorAjax.classList.add('invisible')
            let respuesta = xhr.responseText
            let pacientes = JSON.parse(respuesta)
    
            pacientes.forEach((p)=>{
                adicionarPaciente(p);
            })
        }else{
            errorAjax.classList.remove('invisible')
        }

    })
    xhr.send()
})