let boton = document.getElementById('sumar')
let respuesta = document.getElementById('respuesta')

boton.addEventListener('click',hacerSuma);

function hacerSuma(){
    let segundaLista=parseFloat(document.getElementById('segundaLista').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s=segundaLista*n2;
    respuesta.innerHTML=`Su consumo es de ${s} Watts en ${n2} minutos`;
}

function mostrarLista() {
    var seleccion = document.getElementById("opcion").value;
    var segundaLista = document.getElementById("segundaLista");
  
    if (seleccion === "opcion1") {
        primeraLista.style.display = "block";
      } else {
        primeraLista.style.display = "none";
      }
    
    if (seleccion === "opcion2") {
      segundaLista.style.display = "block";
    } else {
      segundaLista.style.display = "none";
    }
    
    if (seleccion === "opcion3") {
        terceraLista.style.display = "block";
      } else {
        terceraLista.style.display = "none";
      }

      if (seleccion === "opcion4") {
        cuartaLista.style.display = "block";
      } else {
        cuartaLista.style.display = "none";
      }

      if (seleccion === "opcion5") {
        quintaLista.style.display = "block";
      } else {
        quintaLista.style.display = "none";
      }

      if (seleccion === "opcion6") {
        sextaLista.style.display = "block";
      } else {
        sextaLista.style.display = "none";
      }
  }