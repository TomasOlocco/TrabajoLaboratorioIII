function MSeguir() 
  var btn = document.getElementById("btnSeguir");
  if (btn.innerHTML == "Seguir") {
    btn.innerHTML = "Dejar de Seguir";
    btn.classList.add("Siguiendo");
  } else {
    btn.innerHTML = "Seguir";
    btn.classList.remove("Siguiendo");
  }