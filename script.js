  function openPage(nombreSeccion,boton,color) { //Pide el nombe de la sección, a que se vincula y el color
    var i, seccion, Botones;
   
    seccion = document.getElementsByClassName("seccion"); //A Tabcont le asigna un array con todos los elementos de la clase "tabcont" (son los div que tienen la info de cada pagina)
    for (i = 0; i < seccion.length; i++) {
      seccion[i].style.display = "none"; //"Desactiva" la visualización del div
    } //Esta funcion "Inicializa" el estilo de las paginas para generar el efecto archivero (No cambia de pestaña al hacer click)
    
    Botones = document.getElementsByClassName("Botones"); //A Botones le asigna un array con los Botones (Son los botones del menu)
    for (i = 0; i < Botones.length; i++) {
      Botones[i].style.backgroundColor = ""; //Le quita el color de fondo a los botones (les pondra transparente)
    }//Sin esta funcion, cuando se cambia de sección pierde el ejecto de archivero

    document.getElementById(nombreSeccion).style.display = "block"; // Hace aparecer la pestaña clickeada
    boton.style.backgroundColor = color; //Le pone su color prevamente asignado
  }
  // A la funcion con el Id = inicio le simula un click, lo que hace que apenas cargue la pagina esta sea la que salga
  document.getElementById("inicio").click();