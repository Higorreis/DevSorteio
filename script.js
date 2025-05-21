const inputOne = document.querySelector("#input-one")
const inputTwo = document.querySelector("#input-two")
const button = document.querySelector("#button")
const number = document.querySelector("#number")

button.addEventListener('click', () => {
    try {
        const min = Math.ceil(parseInt(inputOne.value)) 
        const max = Math.floor(parseInt(inputTwo.value))
        number.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min
    } catch (error) {
        console.error(error)
    }
    
})