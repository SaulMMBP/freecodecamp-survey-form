function myOnLoad() {
    funs.setOcupaciones();

}

const funs = {
    setOcupaciones: () => {
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
    },

    getFormData: () => {
        let form = document.getElementById('form');
        let formData = new FormData(form);
        let formDataObj = {};

        formData.forEach((value, key) => {
            if(key != 'language') {
                formDataObj[key] = value;
            }
        });

        formDataObj['language'] = formData.getAll('language');

        console.log(formDataObj);
    }
}