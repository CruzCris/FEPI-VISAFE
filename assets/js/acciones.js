const progressBar = document.getElementById('progress-bar');
const violenceType = document.getElementById('violence-type');
const btnAnonymous = document.getElementById('btn-anonymous');
const btnWithData = document.getElementById('btn-with-data');
const formAnonymous = document.getElementById('form-anonymous');
const formWithData = document.getElementById('form-with-data');

// Configuración de colores por nivel
const levels = [
  { level: 1, color: 'green', width: '20%' },
  { level: 2, color: 'yellow', width: '40%' },
  { level: 3, color: 'orange', width: '60%' },
  { level: 4, color: 'red', width: '80%' },
  { level: 5, color: 'darkred', width: '100%' }
];

violenceType.addEventListener('change', () => {
  const value = parseInt(violenceType.value);
  const level = levels.find(l => l.level === value);

  if (level) {
    // Actualizar barra de progreso
    progressBar.style.width = level.width;
    progressBar.style.backgroundColor = level.color;
    progressBar.setAttribute('aria-valuenow', value * 20);

    // Habilitar botones según el nivel
    if (value <= 3) {
      btnAnonymous.disabled = false;
      btnWithData.disabled = false;
    } else {
      btnAnonymous.disabled = true;
      btnWithData.disabled = false;
      formAnonymous.classList.add('d-none'); // Ocultar formulario anónimo
      formAnonymous.reset(); // Resetear formulario anónimo
    }
  } else {
    // Resetear si no se selecciona nivel
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = 'green';
    btnAnonymous.disabled = true;
    btnWithData.disabled = true;
  }
});

// Mostrar formularios al hacer clic en los botones
btnAnonymous.addEventListener('click', () => {
  formAnonymous.classList.remove('d-none');
  formWithData.classList.add('d-none');
  formWithData.reset();
});

btnWithData.addEventListener('click', () => {
  formWithData.classList.remove('d-none');
  formAnonymous.classList.add('d-none');
  formAnonymous.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const btnSubmitAnonymous = document.getElementById("btn-submit-anonymous");
    const btnSubmitWithData = document.getElementById("btn-submit-with-data");
    const generatedCodeElement = document.getElementById("generated-code");

    // Función para generar código aleatorio
    function generateRandomCode() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 8; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code.slice(0, 4) + "-" + code.slice(4);
    }

    // Manejar envío del Formulario Anónimo
    btnSubmitAnonymous.addEventListener("click", function () {
        const code = generateRandomCode();
        generatedCodeElement.textContent = code;
        const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
        confirmationModal.show();
    });

    // Manejar envío del Formulario Con Datos
    btnSubmitWithData.addEventListener("click", function () {
        const code = generateRandomCode();
        generatedCodeElement.textContent = code;
        const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
        confirmationModal.show();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnSubmitAnonymous = document.getElementById("btn-submit-anonymous");
    const btnSubmitWithData = document.getElementById("btn-submit-with-data");
    const generatedCodeElement = document.getElementById("generated-code");

    // Función para generar código aleatorio
    function generateRandomCode() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 8; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code.slice(0, 4) + "-" + code.slice(4);
    }

    // Función para validar archivos
    function validateFile(fileInput) {
        if (fileInput.files.length === 0) {
            alert("Por favor, adjunta un archivo.");
            return false;
        }

        const file = fileInput.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (!allowedTypes.includes(file.type)) {
            alert("Formato de archivo no permitido. Solo se aceptan imágenes, PDF o Word.");
            return false;
        }

        return true;
    }

    // Manejar envío del Formulario Anónimo
    btnSubmitAnonymous.addEventListener("click", function () {
        const fileInput = document.getElementById("anonymous-file");
        if (!validateFile(fileInput)) return;

        const code = generateRandomCode();
        generatedCodeElement.textContent = code;
        const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
        confirmationModal.show();
    });

    // Manejar envío del Formulario Con Datos
    btnSubmitWithData.addEventListener("click", function () {
        const fileInput = document.getElementById("with-data-file");
        if (!validateFile(fileInput)) return;

        const code = generateRandomCode();
        generatedCodeElement.textContent = code;
        const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
        confirmationModal.show();
    });
});
