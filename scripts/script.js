document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje de bienvenida
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Gerardo's Portfolio";
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '20px';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translateX(-50%)';
    welcomeMessage.style.padding = '10px';
    welcomeMessage.style.backgroundColor = '#333';
    welcomeMessage.style.color = '#fff';
    welcomeMessage.style.borderRadius = '5px';
    welcomeMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    welcomeMessage.style.transition= '3.3s';
    document.body.appendChild(welcomeMessage);
  
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      welcomeMessage.style.display = 'none';
    }, 3000);
  
    // Función para copiar el correo electrónico
    const emailButton = document.querySelector('.email-button');
    emailButton.addEventListener('click', function() {
      const email = 'gamayamolina@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        emailButton.textContent = 'Copied';
        setTimeout(() => {
          emailButton.textContent = 'Copy Email';
        }, 5000);
      }).catch(err => {
        console.log('Failed to copy email: ', err);
      });
  
      // Añadir y quitar las clases de animación
      emailButton.classList.add('bounce');
      emailButton.classList.add('halo');
      setTimeout(() => {
        emailButton.classList.remove('bounce');
        emailButton.classList.remove('halo');
      }, 600); // Duración de la animación de halo
    });
  });
  