function changeCardNumber() {
    const number = document.querySelector('.cardNumber')
    const numberInput = document.querySelector('.numberInput')

    number.innerHTML = numberInput.value
}

export default changeCardNumber