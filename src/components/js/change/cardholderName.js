function changeCardholderName() {
    const name = document.querySelector('.name')
    const cardholderName = document.querySelector('.cardholderNameInput')

    name.innerHTML = cardholderName.value
}

export default changeCardholderName