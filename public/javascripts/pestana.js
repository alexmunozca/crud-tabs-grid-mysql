//Funcion que activa la pestaña cuando se da clic en el titulo de la pestaña
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
                  tabck.style.fontWeight="bolder";
                  tabck.style.borderBottomColor = "white";
               } else {
                  tabdiv.style.display = "none";
                  tabck.style.fontWeight="normal";
                  tabck.style.borderBottomColor = "black";
               }
            }
         }
      }
   } catch (e) {
      alert("Error al activar una pestaña. " + e.message);
   }
}
//Revisa el Id de la table para ver que pestaña se va a activar 
var pestana = document.getElementById("consulta");
if (pestana === null) {
   activarTab(document.getElementById("descripcion-1"));
} else {
   activarTab(document.getElementById("descripcion-0"));
}


