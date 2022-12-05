// get Random COlour
function generateRandomColor() {
	let maxVal = 0xffffff // 16777215
	let randomNumber = Math.random() * maxVal
	randomNumber = Math.floor(randomNumber)
	randomNumber = randomNumber.toString(16)
	let randColor = randomNumber.padStart(6, 0)
	return `#${randColor.toUpperCase()}`
}

//drawing 1 star
const canvas = document.getElementById('star')
const ctx = canvas.getContext('2d')
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

const c = document.getElementById('colorChecker')
const ctx1 = c.getContext('2d')

let elem = 0
for (let i = 0; i < 5; i++) {
	getStar()
	let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
	ctx1.putImageData(imgData, elem, 0)
	elem += 220
	/* console.log(ctx1.putImageData) */
}
//очистка канваса 1 где рисуются звезды
ctx.clearRect(0, 0, canvas.width, canvas.height)
