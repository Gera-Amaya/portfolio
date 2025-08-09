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

    //Dark Mode
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.onclick = function() {
        document.body.classList.toggle('dark-mode');
  
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
  }
});



 // Cambiar el idioma del sitio web
  const languageSelect = document.getElementById('language-select');

  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      const selectedLanguage = e.target.value;
      // Cambiar el texto a español o inglés
      if (selectedLanguage === 'es') {
        document.querySelectorAll('.project h3, .about-me').forEach((element) => {
          element.textContent = getSpanishText(element.textContent);
        });
        document.querySelectorAll('h2').forEach((element) => {
          if (element.textContent === 'PROJECTS') {
            element.textContent = 'PROYECTOS';
          } else if (element.textContent === 'About Me') {
            element.textContent = 'Acerca de mí';
          }
        });
      } else if (selectedLanguage === 'en') {
        document.querySelectorAll('.project h3, .about-me').forEach((element) => {
          element.textContent = getEnglishText(element.textContent);
        });
        document.querySelectorAll('h2').forEach((element) => {
          if (element.textContent === 'PROYECTOS') {
            element.textContent = 'PROJECTS';
          } else if (element.textContent === 'Acerca de mí') {
            element.textContent = 'About Me';
          }
        });
      }
    });
  } else {
    console.log('El elemento #language-select no existe');
  }

// Función para obtener el texto en español
function getSpanishText(text) {
  const translations = {
    'Educational platform designed to connect students and teachers.': 'Plataforma educativa diseñada para conectar a estudiantes y profesores.',
    'Barbershop website.': 'Sitio web de barbería.',
    'Application for scheduling appointments.': 'Aplicación para programar citas.',
    'Cloud-based Inventory Management System.': 'Sistema de gestión de inventario basado en la nube.',
    'I have worked on projects ranging from educational platforms to appointment management applications and cloud-based inventory systems. Each of these has allowed me to strengthen my technical and design skills while learning to solve complex problems with creativity and precision.': 'He trabajado en proyectos que van desde plataformas educativas hasta aplicaciones de gestión de citas y sistemas de inventario basados en la nube. Cada uno de estos proyectos me ha permitido fortalecer mis habilidades técnicas y de diseño mientras aprendo a resolver problemas complejos con creatividad y precisión.',
    'My focus is on developing efficient and visually appealing applications, always prioritizing the user experience. Additionally, I value collaboration and continuous learning, qualities that drive me to improve with every project I undertake.': 'Mi enfoque está en desarrollar aplicaciones eficientes y visualmente atractivas, siempre priorizando la experiencia del usuario. Además, valoro la colaboración y el aprendizaje continuo, cualidades que me impulsan a mejorar con cada proyecto que emprendo.',
  };
  return translations[text.trim()] || text;
}

// Función para obtener el texto en inglés
function getEnglishText(text) {
  const reverseTranslations = {
    'Plataforma educativa diseñada para conectar a estudiantes y profesores.': 'Educational platform designed to connect students and teachers.',
    'Sitio web de barbería.': 'Barbershop website.',
    'Aplicación para programar citas.': 'Application for scheduling appointments.',
    'Sistema de gestión de inventario basado en la nube.': 'Cloud-based Inventory Management System.',
    'He trabajado en proyectos que van desde plataformas educativas hasta aplicaciones de gestión de citas y sistemas de inventario basados en la nube. Cada uno de estos proyectos me ha permitido fortalecer mis habilidades técnicas y de diseño mientras aprendo a resolver problemas complejos con creatividad y precisión.': 'I have worked on projects ranging from educational platforms to appointment management applications and cloud-based inventory systems. Each of these has allowed me to strengthen my technical and design skills while learning to solve complex problems with creativity and precision.',
    'Mi enfoque está en desarrollar aplicaciones eficientes y visualmente atractivas, siempre priorizando la experiencia del usuario. Además, valoro la colaboración y el aprendizaje continuo, cualidades que me impulsan a mejorar con cada proyecto que emprendo.': 'My focus is on developing efficient and visually appealing applications, always prioritizing the user experience. Additionally, I value collaboration and continuous learning, qualities that drive me to improve with every project I undertake.',
  };
  return reverseTranslations[text.trim()] || text;
}



