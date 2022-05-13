function myOnLoad() {
    setOcupations();
}

function setOcupations() {
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
        if (value != "" && key != 'language') {
            formDataObj[key] = value;
        }
    });

    return formDataObj;
}

function setPopUp(formDataObjt) {
    let str;
    let language;
    let lanStr = "";

    if (formDataObjt.hasOwnProperty('language')) {
        language = formDataObjt['language'];
        delete formDataObjt['language'];
        lanStr = "<br>language: " + "[" + language + "]";
    }

    str = JSON.stringify(formDataObjt).replace(/\{|\}|,|\"|:/g, (match) => {
        if (match.indexOf('{') != -1 || match.indexOf('}') != -1 || match.indexOf('"') != -1) {
            return "";
        } else if (match.indexOf(',') != -1) {
            return "<br>";
        } else if (match.indexOf(':') != -1) {
            return ": ";
        }
    });


    document.getElementById('details').innerHTML = str + lanStr;
}

function openPopUp() {
    let overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup');
    let data = getFormData();

    overlay.classList.add('active');
    popup.classList.add('active');

    setPopUp(data);
}

function closePopUp() {
    let overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup');

    overlay.classList.remove('active');
    popup.classList.remove('active');
}

function openCloseDetails() {
    let details = document.getElementById("details");
    let arrow = document.getElementById("arrow");

    if (!details.classList.contains('active')) {
        details.classList.add('active');
        arrow.classList.add('active');
    } else {
        details.classList.remove('active');
        arrow.classList.remove('active');
    }

}