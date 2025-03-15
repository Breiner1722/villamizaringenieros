document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado correctamente.");

    // Seleccionamos los botones de contacto
    const openContactFormBtns = document.querySelectorAll("#openContactForm, .openContactForm");
    
    // Verificamos si los botones existen
    if (openContactFormBtns.length === 0) {
        console.error("No se encontraron botones para abrir el formulario.");
        return;
    }

    // Crear el formulario emergente
    const contactForm = document.createElement("div");
    contactForm.classList.add("overlay", "hidden"); 
    contactForm.innerHTML = `
        <div class="form-popup">
            <h2>Contacto</h2>
            <form>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Mensaje:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
                <button type="button" id="closeForm">Cerrar</button>
            </form>
        </div>
    `;

    document.body.appendChild(contactForm);

    // Seleccionar el botón de cerrar dentro del modal
    const closeFormBtn = contactForm.querySelector("#closeForm");

    // Evento para abrir el formulario
    openContactFormBtns.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Formulario abierto.");
            contactForm.classList.remove("hidden");
            contactForm.classList.add("active");
        });
    });

    // Evento para cerrar el formulario al hacer clic en "Cerrar"
    closeFormBtn.addEventListener("click", function () {
        console.log("Formulario cerrado con el botón.");
        contactForm.classList.add("hidden");
        contactForm.classList.remove("active");
    });

    // Cerrar el formulario al hacer clic fuera de él
    contactForm.addEventListener("click", function (event) {
        if (event.target === contactForm) {
            console.log("Formulario cerrado al hacer clic fuera.");
            contactForm.classList.add("hidden");
            contactForm.classList.remove("active");
        }
    });
});


