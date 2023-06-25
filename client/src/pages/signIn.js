
const signUpButton = document.getElementById("sign-up-button");

const addSignature = (person) => {

  const element = document.querySelector('.sign-container');
  const signs = document.createElement("p")
  signs.textContent = "🖊️ " + person.name + " from " + person.local + " supports this!"
  
  element.appendChild(signs);
  toggleModal(person);
}
