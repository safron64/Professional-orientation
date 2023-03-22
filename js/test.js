const answers = []
const answerDivs = document.querySelectorAll('.answer')
const aizButton = document.querySelector('#aiz-test__submit')
const radios = document.querySelectorAll('input[type="radio"]')
const radioContainer = document.querySelector('.question')
let result = document.querySelector('.result')
const selectedAnswers = []

radios.forEach(radio => {
	radio.addEventListener('change', checkRadios)
})
aizButton.addEventListener('click', getSelectedAnswers)

function checkRadios() {
	checkedCount = 0

	radios.forEach(radio => {
		if (radio.checked) {
			checkedCount++
		}
	})
	if (checkedCount === answerDivs.length) {
		aizButton.classList.remove('none')
	} else {
		aizButton.classList.add('none')
	}
	result.innerHTML = ''

}

function getSelectedAnswers() {
	const radioGroups = document.querySelectorAll('.answer')

	radioGroups.forEach(group => {
		const selectedRadio = group.querySelector('input[type="radio"]:checked')
		if (selectedRadio) {
			const selectedLabel = group.querySelector(
				'input[type="radio"]:checked + label'
			).innerText
			selectedAnswers.push(selectedLabel)
		}
	})

	showResult()
	aizButton.classList.add('none')
}

function showResult() {
	let extravers = 0
	let neuroticism = 0

	let indexesExtraversY = [0, 2, 7, 9, 12, 16, 21, 24, 26, 38, 43, 45, 48, 52]
	let indexesExtraversN = [4, 14, 19, 28, 31, 33, 36, 40, 50]
	let indexesNeuriticismY = [
		1, 3, 6, 8, 10, 13, 15, 18, 20, 22, 25, 28, 30, 32, 34, 37, 39, 42, 44,
		46, 49, 51, 54, 56,
	]

	for (let i = 0; i < indexesExtraversY.length; i++) {
		if (selectedAnswers[indexesExtraversY[i]] === 'Да') {
			extravers++
		}
	}

	for (let i = 0; i < indexesExtraversN.length; i++) {
		if (selectedAnswers[indexesExtraversN[i]] === 'Нет') {
			extravers++
		}
	}

	for (let i = 0; i < indexesNeuriticismY.length; i++) {
		if (selectedAnswers[indexesNeuriticismY[i]] === 'Да') {
			neuroticism++
		}
	}

	
	let resultsTemplate = `<p class = 'result-message'>Вы <span>%takoy%</span> и Ваш тип темперамента <span>%vottakoy%</span></p>`

	if (extravers >= 12 && neuroticism <= 12) {
		let finalMessage = resultsTemplate
			.replace('%takoy%', 'Экстраверт')
			.replace('%vottakoy%', 'Сангвиник')
		result.innerHTML = finalMessage
	}

	if (extravers >= 12 && neuroticism >= 12) {
		let finalMessage = resultsTemplate
			.replace('%takoy%', 'Экстраверт')
			.replace('%vottakoy%', 'Холерик')
		result.innerHTML = finalMessage
	}
	if (extravers <= 12 && neuroticism >= 12) {
		let finalMessage = resultsTemplate
			.replace('%takoy%', 'Интроверт')
			.replace('%vottakoy%', 'Флегматик')
		result.innerHTML = finalMessage
	}
	if (extravers <= 9 && neuroticism <= 9) {
		let finalMessage = resultsTemplate
			.replace('%takoy%', 'Интроверт')
			.replace('%vottakoy%', 'Меланхолик')
		result.innerHTML = finalMessage
	}


}
