import { validateForm } from "../model/validateFormModel.js";
import { getComboBoxView } from "../view/getComboBox.js";
import { getComboBoxModel } from "../model/getComboBoxModel.js";

const getComboBoxControllers = () => {
  const data = getComboBoxModel();
  getComboBoxView(data);
};

function inicializarFormulario() {
  function onSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const aliasInput = document.getElementById("alias");
    const rutInput = document.getElementById("rut");
    const emailInput = document.getElementById("email");
    const comboBoxCommune = document.getElementById("selectComboboxCommune");
    const comboBoxRegion = document.getElementById("selectComboboxRegion");

    const name = nameInput.value.trim();
    const alias = aliasInput.value.trim();
    const rut = rutInput.value.trim();
    const email = emailInput.value.trim();

    comboBoxRegion.addEventListener("change", () => {
      // Manejar el cambio de selección si es necesario
      const seleccionado = comboBox.value;
      console.log("Seleccionado:", seleccionado);
    });

    comboBoxCommune.addEventListener("change", () => {
      // Manejar el cambio de selección si es necesario
      const seleccionado = comboBox.value;
      console.log("Seleccionado:", seleccionado);
    });

    // Validar usando la función del modelo
    const error = validateForm(name, alias, rut, email);

    if (error) {
      alert(error);
    } else {
      alert("¡Formulario válido! ¡Enviar al servidor!");
    }
  }

  const form = document.getElementById("formVote");
  form.addEventListener("submit", function (event) {
    onSubmit(event);
  });
}

export { inicializarFormulario, getComboBoxControllers };
