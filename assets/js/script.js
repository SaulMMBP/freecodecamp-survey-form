function myOnLoad() {
    setOcupaciones();
}

function setOcupaciones() {
    let ocupations = ["Administrador", "Acariciador de perritus uwu",
        "Ama de Casa", "Científico", "Carpintero", "Docente", "Dentista",
        "Electricista", "Estudiante", "Ganadero", "Historiador", "Joyero",
        "Jubilado", "Mecánico", "Maquinista", "Nutricionista", "Obrero",
        "Operador", "Panadero", "Paramédico", "Quiropráctico", "Repartidor",
        "Relojero", "Secretaria", "Sociólogo", "Técnico", "Torero",
        "Vendedor Ambulante", "Veterinario", "Zapatero", "Otro"];

    let selectElement = document.getElementById("ocupation");

    ocupations.forEach((ocupation) => {
        let option = document.createElement("option")
        option.innerHTML = ocupation;
        selectElement.appendChild(option);
    })
}

function getFormData() {
    let form = document.getElementById('form');
    let formData = new FormData(form);
    let formDataObj = {};

    formData.forEach((value, key) => {
        if (key != 'language') {
            formDataObj[key] = value;
        }
    });

    formDataObj['language'] = formData.getAll('language');

    console.log(formDataObj);
    return formDataObj;
}

function openPopUp() {
    let overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        cerrar = document.getElementById('btn-cerrar-popup');
    let data = getFormData();

    overlay.classList.add('active');
    popup.classList.add('active');

    setPopUp(data);

    cerrar.addEventListener('click', () => {
        overlay.classList.remove('active');
        popup.classList.remove('active');
    })
}

function setPopUp(formDataObjt) {
    let saludo, mensaje, result;
    let name = formDataObjt['name'],
        language = formDataObjt['language'];

    saludo = "Hola " + name;
    mensaje = (language != []) ? language.join(', ') : "";
    result = (mensaje != "") ? saludo + "<br><br>" + "Sé buen chico y sigue programando en<br>" + mensaje : saludo;

    document.getElementById('result').innerHTML = result;
}
