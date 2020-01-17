let bandNumber = 1

const takeNumber = function (bandName) {
    console.log(bandNumber, bandName);
    bandNumber++;
}

const scum = takeNumber("Galactic Scum")
const under = takeNumber("Underdogs")
const maybe = takeNumber("Maybe")