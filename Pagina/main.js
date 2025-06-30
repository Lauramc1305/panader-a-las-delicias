document.addEventListener('DOMContentLoaded', () => {
  // Módulo formulario contacto
  const form = document.getElementById('form-contacto');
  const mensaje = document.getElementById('mensaje-confirmacion');

  if (mensaje) mensaje.style.display = 'none';

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const confirmado = confirm('¿Quieres enviar el formulario?');
      if (!confirmado) return;

      if (mensaje) mensaje.style.display = 'block';
      form.reset();
    });
  }

  // Módulo botones menú
  const btnIniciarSesion = document.getElementById('btn-iniciar-sesion');
  const btnRegistrarse = document.getElementById('btn-registrarse');
  const btnCarrito = document.getElementById('btn-carrito');

  if (btnIniciarSesion) {
    btnIniciarSesion.addEventListener('click', () => {
      window.location.href = 'inicio-sesion.html';
    });
  }

  if (btnRegistrarse) {
    btnRegistrarse.addEventListener('click', () => {
      window.location.href = 'registro.html';
    });
  }

  if (btnCarrito) {
    btnCarrito.addEventListener('click', () => {
      window.location.href = 'carrito.html';
    });
  }
});
