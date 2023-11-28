document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
    darkMode();
});

function darkMode(){
    const prefiereDarkMode = window.matchMedia('{prefers-color-scheme:dark}');
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change',function(){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    })

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode');
    });
}

function eventListeners() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.addEventListener('click', navegacionResponsive);

    //Muestra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', seleccionarMetodo));

    
}

function navegacionResponsive() {
    console.log('desde navegacionResponsive');
    navegacion.classList.toggle('mostrar');
}

function seleccionarMetodo(e) { 
    const contactoDiv = document.querySelector('#contacto');

    if (e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
        <label for="telefono">Número de Teléfono</label>
        <input type="tel" placeholder="Tu teléfono" id="telefono" name="contacto[telefono]">

        <p>Elija la fecha y la hora para la llamada.</p>

        <label for="fecha">Fecha</label>
        <input type="date" id="fecha" name="contacto[fecha]">
        <label for="horaº">Hora</label>
        <input type="time" id="hora" min="09:00" max="18:00" name="contacto[hora]">

        `;
    } else { 
        contactoDiv.innerHTML = `
        <label for="email">E-Mail</label>
        <input type="email" placeholder="Tu E-Mail" id="email" name="contacto[email]" required>

        `;
    }
}