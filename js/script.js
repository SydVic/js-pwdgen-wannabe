// raccolta dati forniti dall'utente
const userName = prompt("Qual'è il tuo nome?");
console.log(userName, typeof(userName));

const userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname, typeof(userSurname));

const userFavoriteColour = prompt("E il tuo colore preferito?");
console.log(userFavoriteColour, typeof(userFavoriteColour));

// concatenazione dei dati forniti
const userPassword= `La tua password è: ${userName}${userSurname}${userFavoriteColour}21`;
//const userPassword = userName + userSurname + userFavoriteColour + '21';


// inserimento stringa in HTML
document.getElementById('user-password').innerHTML = userPassword;