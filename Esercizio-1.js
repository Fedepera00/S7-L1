const users = [];

// Funzione per creare un nuovo utente

function createUser() {
  // Prende i valori inseriti nei campi del form
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("location").value;
  // Crea un nuovo oggetto User con i dati inseriti e lo aggiunge all'array
  const user = new User(firstName, lastName, age, location);
  users.push(user);

  if (users.length === 2) {
    document.getElementById("comparisonResult").textContent = users[0].compareAge(users[1]);
  }
}

class User {
  // Il costruttore prende i valori di nome, cognome, età e località
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  // Metodo per confrontare l'età con un altro utente
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}
