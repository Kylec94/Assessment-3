const buttonColor = e => {
    alert("is blue")
}
let buttonFavColor = document.getElementById('color')
buttonFavColor.addEventListener('click', buttonColor)

const buttonPlace = e => {
    alert('is Japan so far')
}

let buttonFavPlace = document.getElementById('place')
buttonFavPlace.addEventListener('click', buttonPlace)

const buttonRitual = e => {
    alert('ingesting copious amounts of caffeine in the morning and going to the gym')
}

let buttonFavRitual = document.getElementById('ritual')
buttonFavRitual.addEventListener('click', buttonRitual)