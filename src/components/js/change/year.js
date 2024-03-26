function changeYear(){
    const year = document.querySelector('.yy')
    const yearImput = document.querySelector('.year')

    year.innerHTML = yearImput.value
}

export default changeYear