
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("number")
const metersToFeet = 3.281
const litersToGallon = 0.264
const kilosToPound = 2.204

function render() {
    firstText = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters`
    secondText = `${inputEl.value} liters = ${feet} gallons | ${inputEl.value} gallons = ${meters} liters`
    thirdText = `${inputEl.value} kilograms = ${feet} pounds | ${inputEl.value} pounds = ${meters} kilograms`
    lengthEl.textContent = firstText
    volumeEl.textContent = secondText
    massEl.textContent = thirdText
}

btnEl.addEventListener("click", function () {
    feet = (inputEl.value * metersToFeet).toFixed(3)
    meters = (inputEl.value / metersToFeet).toFixed(3)
    gallons = (inputEl.value * litersToGallon).toFixed(3)
    liters = (inputEl.value / litersToGallon).toFixed(3)
    pounds = (inputEl.value * kilosToPound).toFixed(3)
    kilos = (inputEl.value / kilosToPound).toFixed(3)
    if (inputEl.value === '') {
        alert("Please insert a number")
    } else {
        render()
        inputEl.value = ''
    }
})

// `${inputEl.value} ${firstUnit} = ${metersToFeet} ${secondUnit} | ${inputEl.value} = ${feetToMeters}`