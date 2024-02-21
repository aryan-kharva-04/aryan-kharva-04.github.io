// Display date and time
document.getElementById("time").innerHTML = new Date();

// Greet user function  
function greetUser() {
  const name = document.getElementById("nameInput").value;
  const mood = document.getElementById("moodInput").value;

  document.getElementById("greeting").innerHTML = 
    `Koala Komputers welcomes you, ${name}! We're glad you are ${mood}!`; 
}

// Get polygon name function
function polygonName() {

  // Get favorite number input by user
  const num = Math.abs(Math.round(document.getElementById("favNumInput").value));

  // Array of polygon names
  const polygonNames = [
    "Pick a number between 1 and 10 please.",
    "monogon",
    "digon", 
    "trigon",
    "tetragon",
    "pentagon",
    "hexagon",
    "heptagon", 
    "octagon",
    "nonagon",
    "decagon" 
  ];

  // Display polygon name for number entered. if it's more than 10, then send the following alert:
  alert(polygonNames[num] || "Pick a number between 1 and 10 please."); 

}

// Koala functions
function custService() {
    const name = document.getElementById("nameInput").value;

    alert(`${name} has called Koala Komputers customer support. 
    How can we help you today? Please hold while we connect you with the next available Koala agent.`);
  
}

function giftCard() {
  // Get the name and amount entered
  const name = document.getElementById("nameInput").value;
  const amount = prompt("Enter desired gift card amount:");

  // Confirm purchase 
  if(confirm(`Thank you ${name}! We will charge $${amount} to your card ending in 1234. Is this OK?`)) {
    alert("Payment successful! Enjoy your Koala Komputers gift card!");
  } else {
    alert("Payment cancelled"); 
  }
}

function koalaJoke() {
  // Array of koala jokes 
  const jokes = [
    "What do you call a koala who does karate? A karateala!",
    "What do koalas order at restaurants? Euca-lattes!",
    "Why can't koalas become doctors? They can't get the koalafications!"
   ];
 
   // Get random joke
   const randomIndex = Math.floor(Math.random() * jokes.length);
   const joke = jokes[randomIndex];
 
   // Tell joke
   alert(joke);
  
}

function donateKoala() {
  // Get name of donor
  const name = document.getElementById("nameInput").value;

  // Ask for donation amount
  const amount = prompt("Please enter donation amount:");

  // Confirm donation
  if(confirm(`Thank you ${name} for your $${amount} donation to Koalas Without Trees! 
  Would you like a tax receipt emailed to you?`)) {

    alert("Thank you for supporting your local koala conservation! Your donation receipt has been emailed.");
  
  } else {

    alert("Donation cancelled - koalas appreciate your consideration.");

  }
}
