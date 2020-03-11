// "https://dog.ceo/api/breeds/image/random/4"
// 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    getPictures()
    getBreeds()
    let selector = document.getElementById('breed-dropdown')
        selector.addEventListener("change", filterBreeds)
})



function getPictures() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => imageGetter(json))
}

function imageGetter(json) {
    let imageArea = document.getElementById('dog-image-container')
    json.message.forEach(imageURL => {
        let imageNew = document.createElement('img')
        imageNew.src = imageURL
        imageNew.style.height = '200px'
        imageArea.appendChild(imageNew)
    })
}


function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => breedGetter(json))
}


function breedGetter(json) {
    let breedArea = document.getElementById('dog-breeds')
    let breeds = (Object.keys(json.message))
    let allBreeds = breeds.forEach(breed => {
        let breedNew = document.createElement('li')
        breedNew.innerText = breed
        breedNew.addEventListener("click", () => {
            event.target.style.color = 'red'
        })
        breedArea.appendChild(breedNew)
    })
}

function filterBreeds(event) {
    let allTheBreeds = function getBreedsForFilter() {
        return fetch('https://dog.ceo/api/breeds/list/all')
            .then(resp => resp.json())
    }
    debugger
    let breedsArray = Array.from(allTheBreeds)
    let breedsList = document.getElementById('dog-breeds')
        breedsList.innerHTML = ''
    // debugger   
    let letter = event.target.value
    breedsArray.forEach( breed => {
        if (breed.innerText.charAt(0) === letter) {
            // let breedNew = document.createElement('li')
            // breedNew.innerText = breed
            breedsList.appendChild(breed)
        }
    })

    // if letter === 'a'

}

