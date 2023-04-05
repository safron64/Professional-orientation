let yowAnswer = document.querySelectorAll('.input-text')
for (let i = 0; i < yowAnswer.length; i++) {
    yowAnswer[i].addEventListener('click', function () {
        for (let j = 0; j < yowAnswer.length; j++) {
            yowAnswer[j].classList.remove('active')
            yowAnswer[j].classList.add('disabled')
        }
        this.classList.remove('disabled')
        this.classList.add('active')
    })
}


const submitBtnn = document.querySelector('.yow-button')

submitBtnn.addEventListener('click', function(){
    let yowAnswer = document.querySelectorAll('.input-text')

for (let i = 0; i < yowAnswer.length; i++) {
    yowAnswer[i].addEventListener('click', function () {
        for (let j = 0; j < yowAnswer.length; j++) {
            yowAnswer[j].classList.remove('active')
            yowAnswer[j].classList.add('disabled')
        }
        this.classList.remove('disabled')
        this.classList.add('active')
    })
}
})
