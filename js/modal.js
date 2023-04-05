const openModalbtn1 = document.querySelector('#btn-modal')
const openModalbtn2 = document.querySelector('#btn-modal2')
const none = document.querySelector('.none')
const modalShow1 = document.querySelector('#show-window')
const modalShow2 = document.querySelector('#show-window2')

const modalClose1 = document.querySelector('#modal-close__btn')
const modalClose2 = document.querySelector('#modal-close__btn2')
const body = document.getElementsByTagName('body')[0]


openModalbtn1.onclick = function () {
	modalShow1.classList.remove('none')
	openModalbtn1.blur()
	body.classList.add('scroll-hidden')
}

openModalbtn2.onclick = function () {
	modalShow2.classList.remove('none')
	openModalbtn2.blur()
	body.classList.add('scroll-hidden')
}

modalClose1.onclick = function () {
	modalShow1.classList.add('none')

	body.classList.remove('scroll-hidden')
}

modalClose2.onclick = function () {
	modalShow2.classList.add('none')

	body.classList.remove('scroll-hidden')
}
