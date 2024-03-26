function changeMonth(){
    const monthImput = document.querySelector('.month')
    const month = document.querySelector('.mm')

    month.innerHTML = monthImput.value
}

export default changeMonth