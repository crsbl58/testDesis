import { validateRut } from "../utlis/validate.js";

function validateForm(name, alias, rut, email) {
  if (name === "" || alias === "" || rut === "" || email === "") {
    return "Por favor, completa todos los campos.";
  }

  const expressionMail = /\S+@\S+\.\S+/;
  if (!validateRut(rut)) {
    return "Por favor, ingresa un rut válido ej: 18181478-0";
  }
  if (!expressionMail.test(email)) {
    return "Por favor, ingresa un correo electrónico válido.";
  }

  return false;
}

export { validateForm };
