//Botones de Filtros, dependiendo del clic sobre el boton cambia el method y action del submit
var formulario0 = document.getElementById('formulario-0');
document.getElementById('Filtrar').addEventListener('click', (e) => {
   e.preventDefault()
   if (!fcodigo.value == "") {
      formulario0.setAttribute('action', '/filtrarCodigo/' + fcodigo.value);
      formulario0.setAttribute('method', 'post');
      formulario0.submit();
   }
   if (!fdescripcion.value == "") {
      formulario0.setAttribute('action', '/filtrarDescripcion/' + fdescripcion.value);
      formulario0.setAttribute('method', 'post');
      formulario0.submit();
   }
});
document.getElementById('Visualizar').addEventListener('click', (e) => {
   e.preventDefault()
   trabajarRegistro()
});
document.getElementById('Refrescar').addEventListener('click', (e) => {
   e.preventDefault()
   formulario0.setAttribute('action', '/renovar');
   formulario0.setAttribute('method', 'get');
   formulario0.submit();
});
document.getElementById('Salir').addEventListener('click', (e) => {
   e.preventDefault()
   formulario0.setAttribute('action', '/');
   formulario0.setAttribute('method', 'get');
   formulario0.submit();
});
//Validar si pierde el campo el focus
function campoLostfocus(){
   document.getElementById('codigo').readOnly = true;
   formulario1.setAttribute('action', '/consultar/' + codigo.value);
   formulario1.setAttribute('method', 'post');
   formulario1.submit();
}
//Botones de campos, dependiendo del clic sobre el boton cambia el method y action del submit
var formulario1 = document.getElementById('formulario-1');
document.getElementById('Agregar').addEventListener('click', (e) => {
   e.preventDefault()
   formulario1.setAttribute('action', '/agregar');
   formulario1.setAttribute('method', 'post');
   formulario1.submit();
});
document.getElementById('Modificar').addEventListener('click', (e) => {
      e.preventDefault();
      formulario1.setAttribute('action', '/modificar/' + codigo.value);
      formulario1.setAttribute('method', 'post');
      formulario1.submit();
});
document.getElementById('Actualizar').addEventListener('click', (e) => {
   e.preventDefault();
   formulario1.setAttribute('action', '/actualizar/' + codigo.value);
   formulario1.setAttribute('method', 'post');
   formulario1.submit();
});
document.getElementById('Eliminar').addEventListener('click', (e) => {
   e.preventDefault();
   formulario1.setAttribute('action', '/eliminar/' + codigo.value);
   formulario1.setAttribute('method', 'post');
   formulario1.submit();
});
document.getElementById('Renovar').addEventListener('click', (e) => {
   e.preventDefault()
   formulario1.setAttribute('action', '/renovar');
   formulario1.setAttribute('method', 'get');
   formulario1.submit();
});
//Trabajar con la seleccion
function trabajarRegistro() {
   var span = document.getElementById("contenido-0-tabla");
   var inputs = span.getElementsByTagName("input");
   for (var i = 0; i < inputs.length; ++i) {
      if (inputs[i].checked) {
         document.getElementById("codigo").value = document.getElementById("contenido-0-area").rows[i+1].cells[1].innerText;
         formulario1.setAttribute('action', '/consultar/' + document.getElementById("contenido-0-area").rows[i+1].cells[1].innerText);
         formulario1.setAttribute('method', 'post');
         formulario1.submit();
      }
   }
}
