const questions = [
	{
		question: 'Мне хотелось бы в своей профессиональной деятельности',
		answers: [
			'... общаться с самыми разными людьми;',
			'... снимать фильмы, писать книги, рисовать, выступать на сцене и т.д.',
			'... заниматься расчетами; вести документацию.',
		],
		inclination: ['people', 'aesthetics', 'research'],
	},
	{
		question: 'Меня больше обрадует Нобелевская премия',
		answers: [
			'... за общественную деятельность;',
			'... в области науки;',
			'... в области искусства.',
		],
		inclination: ['practical', 'research', 'aesthetics'],
	},
	{
		question: 'Я скорее соглашусь стать',
		answers: ['... механиком;', '... спасателем;', '... программистом.'],
		inclination: ['practical', 'extreme', 'info'],
	},
	{
		question: 'Будущее людей определяют',
		answers: [
			'... взаимопонимание между людьми;',
			'... научные открытия;',
			'... развитие производства.',
		],
		inclination: ['people', 'info', 'research'],
	},
	{
		question: 'Если я стану руководителем, то в первую очередь займусь',
		answers: [
			'... созданием дружного, сплоченного коллектива;',
			'... разработкой новых технологий;',
			'... сбором и анализом информации.',
		],
		inclination: ['people', 'practical', 'info'],
	},
	{
		question: 'На технической выставке меня больше привлечет',
		answers: [
			'... устройство экспонатов;',
			'... их практическое применение;',
			'... внешний вид экспонатов (цвет, форма).',
		],
		inclination: ['info', 'practical', 'aesthetics'],
	},
	{
		question: 'В людях я ценю, прежде всего',
		answers: ['... дружелюбие;', '... смелость;', '... эрудицию.'],
		inclination: ['people', 'extreme', 'info'],
	},
	{
		question: 'В свободное время мне хотелось бы',
		answers: [
			'... ставить различные опыты, эксперименты;',
			'... писать стихи, сочинять музыку или рисовать;',
			'... тренироваться.',
		],
		inclination: ['research', 'aesthetics', 'practical'],
	},
	{
		question: 'В заграничных поездках меня скорее заинтересует',
		answers: [
			'... возможность знакомства с историей и культурой другой страны;',
			'... экстремальный туризм (альпинизм, виндсерфинг, горные лыжи);',
			'... деловое общение.',
		],
		inclination: ['research', 'extreme', 'people'],
	},
	{
		question: 'В книге или кинофильме меня больше всего привлекает',
		answers: [
			'... возможность следить за ходом мыслей автора;',
			'... художественная форма, мастерство писателя или режиссера;',
			'... сюжет, действия героев.',
		],
		inclination: ['research', 'aesthetics', 'extreme'],
	},
	{
		question: 'Мне интереснее беседовать о',
		answers: [
			'... человеческих взаимоотношениях;',
			'... новой научной гипотезе;',
			'... технических характеристиках новой модели машины, компьютера.',
		],
		inclination: ['people', 'research', 'info'],
	},
	{
		question: 'Если бы в моей школе было всего три кружка, я бы выбрал',
		answers: [
			'... технический;',
			'... музыкальный;',
			'... военно-спортивный.',
		],
		inclination: ['research', 'aesthetics', 'practical'],
	},
	{
		question: 'В школе следует обратить особое внимание на',
		answers: [
			'... улучшение взаимопонимания между учителями и учениками;',
			'... улучшение физической формы учащихся;',
			'... совершенствование образовательных программ.',
		],
		inclination: ['people', 'practical', 'info'],
	},
	{
		question: 'Я с большим удовольствием смотрю',
		answers: [
			'... научно-популярные фильмы;',
			'... программы о культуре и искусстве;',
			'... спортивные программы.',
		],
		inclination: ['info', 'aesthetics', 'practical'],
	},
	{
		question: 'Мне хотелось бы работать',
		answers: [
			'... с людьми;',
			'... с машинами и механизмами;',
			'... с объектами природы.',
		],
		inclination: ['people', 'info', 'extreme'],
	},
	{
		question: 'Школа в первую очередь должна учить',
		answers: [
			'... общению с другими людьми;',
			'... навыкам практической работы;',
			'... навыкам работы с информацией.',
		],
		inclination: ['people', 'practical', 'info'],
	},
	{
		question: 'Главное в жизни',
		answers: [
			'... иметь возможность заниматься творчеством;',
			'... защищать свою страну и ее граждан;',
			'... прогнозировать последствия своих поступков.',
		],
		inclination: ['aesthetics', 'practical', 'research'],
	},
	{
		question: 'Государство должно в первую очередь заботиться о',
		answers: [
			'... защите интересов и прав граждан;',
			'... достижениях в области науки и техники;',
			'... материальном благополучии граждан.',
		],
		inclination: ['people', 'research', 'aesthetics'],
	},
	{
		question: 'Мне больше всего нравятся уроки',
		answers: ['... труда;', '... ОБЖ;', '... информатики.'],
		inclination: ['practical', 'research', 'info'],
	},
	{
		question: 'Мне интереснее было бы',
		answers: [
			'... планировать рекламную кампанию.',
			'... заниматься сбытом товаров;',
			'... изготавливать изделия;',
		],
		inclination: ['aesthetics', 'research', 'practical'],
	},
	{
		question: 'Я предпочитаю читать статьи о',
		answers: [
			'... выдающихся ученых и их открытиях;',
			'... интересных изобретениях;',
			'... жизни и творчестве писателей, художников, музыкантов.',
		],
		inclination: ['extreme', 'info', 'people'],
	},
	{
		question: 'В свободное время я люблю',
		answers: [
			'... читать, думать, рассуждать;',
			'... что-нибудь мастерить, шить, ухаживать за животными, растениями;',
			'... ходить на выставки, концерты, в музеи.',
		],
		inclination: ['aesthetics', 'practical', 'aesthetics'],
	},
	{
		question: 'Меня привлекает работа',
		answers: [
			'... ученого или изобретателя;',
			'... художника или музыканта;',
			'... журналиста или переводчика.',
		],
		inclination: ['extreme', 'aesthetics', 'people'],
	},
	{
		question: 'Я предпочту работать',
		answers: [
			'... в помещении, где много людей;',
			'... в экстремальных условиях;',
			'... в обычном кабинете.',
		],
		inclination: ['people', 'extreme', 'info'],
	},
]

const listContainer = document.querySelector('.answer-list')
const submitBtn = document.querySelector('.yow-button')
const headerContainer = document.querySelector('.quiz-title')
let questionIndex = 0

let people = 0
let info = 0
let aesthetics = 0
let research = 0
let practical = 0
let extreme = 0

showQuestion()
submitBtn.addEventListener('click', checkAnswer)

// inputTextList.addEventListener('change', function(){
// 	inputTextList.classList.remove('error-border')
// })

function showQuestion() {
	questions[questionIndex].question
	const headerTemplate = `<h3 class="quiz-title">%title%</h3>`
	let title = headerTemplate.replace(
		'%title%',
		questions[questionIndex].question
	)
	headerContainer.innerHTML = title
	for (i in questions[questionIndex].answers) {
		let questionTemplate = `
		<label 
		for="answer-${i}"
		class="input-text">
		%answer%<input 
		type="radio" 
		class="yow-answer" 
		id="answer-${i}" 
		name="answer" 
		value = ${questions[questionIndex].inclination[i]}>
		</label>`
		const answerHTML = questionTemplate.replace(
			'%answer%',
			questions[questionIndex].answers[i]
		)
		listContainer.innerHTML += answerHTML
	}
}

function checkAnswer(event) {

	const inputTextList = document.querySelectorAll('.input-text')
	event.preventDefault()
	const selectedAnswer = listContainer.querySelector(
		'input[type="radio"]:checked'
	)
	console.log(selectedAnswer)
	if (selectedAnswer) {
		const answerIndex = selectedAnswer.value
		switch (answerIndex) {
			case 'people':
				people++
				questionIndex++
				clearPage()
				showQuestion()
				break
			case 'aesthetics':
				aesthetics++
				questionIndex++
				clearPage()
				showQuestion()
				break
			case 'research':
				research++
				questionIndex++
				clearPage()
				showQuestion()
				break
			case 'extreme':
				extreme++
				questionIndex++
				clearPage()
				showQuestion()
				break
			case 'info':
				info++
				questionIndex++
				clearPage()
				showQuestion()
				break
			case 'practical':
				practical++
				questionIndex++
				clearPage()
				showQuestion()
				break
			default:
				break
			
		}
	} else {
		inputTextList.forEach(element => {
			// element.classList.add('error-border')
		})
	}
	submitBtn.blur()
}

function clearPage() {
	headerContainer.innerHTML = ''
	listContainer.innerHTML = ''
}
