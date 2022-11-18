function activarTab(pestaña) {
   try {
      var pestañaActual = pestaña.id;
      if (pestañaActual) {
         var tr = pestaña.parentNode || pestaña.parentElement;
         var tbody = tr.parentNode || tr.parentElement;
         var table = tbody.parentNode || tbody.parentElement;
         var desde = table.getAttribute("minino");
         var hasta = table.getAttribute("maximo");
         var idTab = pestañaActual.split("descripcion-");
         var numTab = parseInt(idTab[1]);
         var esteTabDiv = document.getElementById("contenido-" + numTab);
         for (var i = desde; i <= hasta; i++) {
            var tabdiv = document.getElementById("contenido-" + i);
            if (tabdiv) {
               var tabck = document.getElementById("descripcion-" + i);
               if (tabdiv.id == esteTabDiv.id) {
                  tabdiv.style.display = "block";
                  tabck.style.color = "slategrey";
                  tabck.style.backgroundColor = "rgb(235, 235, 225)";
                  tabck.style.borderBottomColor = "rgb(235, 235, 225)";
               } else {
                  tabdiv.style.display = "none";
                  tabck.style.color = "white";
                  tabck.style.backgroundColor = "gray";
                  tabck.style.borderBottomColor = "gray";
               }
            }
         }
      }
   } catch (e) {
      alert("Error al activar una pestaña. " + e.message);
   }
}

activarTab(document.getElementById("descripcion-0"));
