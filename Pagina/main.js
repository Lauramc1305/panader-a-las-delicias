document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const mensaje = document.getElementById('mensaje-confirmacion');

  mensaje.style.display = 'none';

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const confirmado = confirm('¿Quieres enviar el formulario?');
    if (!confirmado) return;

   
    mensaje.style.display = 'block';

    form.reset();
  });
});
