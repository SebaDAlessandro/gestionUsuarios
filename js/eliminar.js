let tabla = document.querySelector('#tabla-pacientes')

tabla.addEventListener('dblclick', (e)=>{
    e.target.parentNode.classList.add('fadeOut') //con parentNode subimos de jerarquia 
    setTimeout(()=>{
        e.target.parentNode.remove();
    },500)
})


