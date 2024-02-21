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
  // Code same as before 
}

// Koala functions
function sellLaptop() {
  alert("Here is a top-of-the-line EucalyptusBook Pro for you!"); 
}

function provideSupport() {
  alert("Did you check that your laptop is plugged in? *munch munch*");
}

function shareEucTip() {
  alert("The smooth bark Eucalyptus trees are the tastiest!");  
}

function napTime() {
  alert("Time for my 30 hour nap! Zzzz...");
}
