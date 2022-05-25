function validarNombre() {
    let x = document.forms["contacto"]["username"].value;
    if (x == "") {
      alert("El nombre de usuario no puede estar vacío");
      return false;
    }
  }
  function validarEmail() {
    let x = document.forms["contacto"]["mail"].value;
    if (x == "") {
      alert("El email de contacto no puede estar vacío");
      return false;
    }
  }
  function validarDescripcion() {
    let x = document.forms["contacto"]["descripcion"].value;
    if (x == "") {
      alert("Un formulario de contacto vacío es un poco inutil, no crees?");
      return false;
    }
  }
function validarFormulario() {
    let existeNombre = validarNombre();
    let existeEmail = validarEmail();
    let existeDescripcion = validarDescripcion();

    return (existeNombre && existeEmail && existeDescripcion)
}