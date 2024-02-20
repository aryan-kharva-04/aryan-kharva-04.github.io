function submitUserInfo() {
    const userName = document.getElementById("userName").value;
    const userFeeling = document.getElementById("userFeeling").value;
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById("favoriteNumber").value)));

    document.getElementById("greetingMessage").innerText = `The My Company welcomes you, ${userName}! We're glad you are doing ${userFeeling}!`;

    let polygonName;
    if (favoriteNumber === 0) {
        polygonName = "Monogon";
    } else if (favoriteNumber === 1) {
        polygonName = "Digon";
    } else if (favoriteNumber === 2) {
        polygonName = "Digon (or Bigon)";
    } else if (favoriteNumber === 3) {
        polygonName = "Trigon";
    } else if (favoriteNumber === 4) {
        polygonName = "Tetragon";
    } else if (favoriteNumber === 5) {
        polygonName = "Pentagon";
    } else if (favoriteNumber === 6) {
        polygonName = "Hexagon";
    } else if (favoriteNumber === 7) {
        polygonName = "Heptagon";
    } else if (favoriteNumber === 8) {
        polygonName = "Octagon";
    } else if (favoriteNumber === 9) {
        polygonName = "Nonagon";
    } else if (favoriteNumber === 10) {
        polygonName = "Decagon";
    } else {
        polygonName = "Polygon with more than 10 sides";
    }

    alert(`Your favorite polygon is: ${polygonName}`);
}

function provideInsult() {
    alert("You smell like a wet dog!");
}

function playWithAnimal() {
    alert("You're playing fetch with the company mascot!");
}

function feedAnimal() {
    alert("Time to feed the company pet!");
}

function teachTrick() {
    alert("The company pet just learned a new trick!");
}

function organizeCompetition() {
    alert("Get ready for the annual company pet race!");
}