function changeCvc() {
    const cvc = document.querySelector('.cvc')
    const cvcImput = document.querySelector('.cvcInput')

    cvc.innerHTML = cvcImput.value
}

export default changeCvc