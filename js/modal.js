const openModalbtn = document.querySelector('#btn-modal')
const none = document.querySelector('.none')
const modalShow = document.querySelector('#show-window')
const ModalClose = document.querySelector('#modal-close__btn')
const body = document.getElementsByTagName('body')[0];


showWindow = () => {
	modalShow.classList.remove('none')
	openModalbtn.blur()
	body.classList.add('scroll-hidden')
}

closeModal = () => {
	modalShow.classList.add('none')
	body.classList.remove('scroll-hidden')
}

openModalbtn.addEventListener('click', showWindow)
ModalClose.addEventListener('click', closeModal)