const getComboBoxView = ({
  regionOptions,
  communeOptions,
  candidateOptions,
}) => {
  const comboBoxRegion = document.getElementById("selectComboboxRegion");
  const comboBoxCommune = document.getElementById("selectComboboxCommune");
  const comboBoxCandidate = document.getElementById("selectComboboxCandidate");

  // Limpiar el ComboBox antes de llenarlo
  comboBoxRegion.innerHTML = "";
  comboBoxCommune.innerHTML = "";
  comboBoxCandidate.innerHTML = "";
  // Llenar el ComboBox con las opciones

  console.log(regionOptions, communeOptions, "as");

  regionOptions.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion.id;
    option.textContent = opcion.nombre;
    comboBoxRegion.appendChild(option);
  });

  communeOptions.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion.id;
    option.textContent = opcion.nombre;
    comboBoxCommune.appendChild(option);
  });

  candidateOptions.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion.id;
    option.textContent = opcion.nombre;
    comboBoxCandidate.appendChild(option);
  });
};

export { getComboBoxView };
