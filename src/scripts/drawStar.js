import { generateRandomColor } from './randomColor.js'

//drawing 1 star
const canvas = document.getElementById('star')
const ctx = canvas.getContext('2d')

const ctx1 = document.getElementById('colorChecker').getContext('2d')

let elem = 0
function getStar() {
	ctx.fillStyle = generateRandomColor() //variable
	ctx.beginPath()
	ctx.moveTo(108, 6)
	ctx.lineTo(141, 70)
	ctx.lineTo(218, 78.3)
	ctx.lineTo(162, 131)
	ctx.lineTo(175, 205)
	ctx.lineTo(108, 170)
	ctx.lineTo(41.2, 205)
	ctx.lineTo(55, 131)
	ctx.lineTo(1, 78)
	ctx.lineTo(75, 68)
	ctx.lineTo(108, 6)
	ctx.closePath()
	ctx.fill()
}

for (let i = 0; i < 5; i++) {
	getStar()
	let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
	ctx1.putImageData(imgData, elem, 0)
	elem += 220
}

//очистка канваса 1 где рисуются звезды
ctx.clearRect(0, 0, canvas.width, canvas.height)
