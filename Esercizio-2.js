// Seleziona i campi di input e il bottone per l'interazione

let petNameField = document.getElementById("petName-field");
let ownerNameField = document.getElementById("ownerName-field");
let speciesField = document.getElementById("species-field");
let breedField = document.getElementById("breed-field");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];
// Definizione della classe Pet
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  // Metodo per verificare se un altro animale ha lo stesso proprietario
  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
// Funzione per aggiornare la lista visualizzata con i nuovi animali
const renderList = function () {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = "Nome: " + pet.petName + ", proprietario: " + pet.ownerName;
    petList.appendChild(newLi);
  });
}; // Aggiunge un nuovo animale all'array pets quando si clicca sul bottone
addButton.onclick = function () {
  let nuovoAnimale = new Pet(petNameField.value, ownerNameField.value, speciesField.value, breedField.value);
  pets.push(nuovoAnimale);
  renderList();
  petNameField.value = "";
  ownerNameField.value = "";
  speciesField.value = "";
  breedField.value = "";
};
