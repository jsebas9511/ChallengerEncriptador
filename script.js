const textArea = document.querySelector(".input_padron");
const mensaje = document.querySelector(".cuadro_salida");
const copia = document.querySelector(".boton-copiar");
copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.querySelector(".input_padron").value;
    let validador = textoEscrito.match(/^[a-z," "]*$/);

    if(!validador || validador === 0) {
        alert("Solo ingresar letras en minusculas y sin acentos, revisa la tecla Bloq Mayús");
        location.reload();
        return true;
    }
}

function botonEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    
    }
}

//Llaves de encriptacion
// La letra "e" es convertida en "enter"`
// La letra "i" es convertida en "imes"`
// La letra "a" es convertida en "ai"`
// La letra "o" es convertida en "ober"`
// La letra "u" es convertida en "ufat"`
// El espacio " " es convertido en "ibai"

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", "ibai"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}