import './main.scss'
import { drawStar } from './scripts/drawStar.js'
import { pick } from './scripts/changeColor.js'

main()
function main() {
	const selectedColor = document.getElementById('star')
	const canvas = document.getElementById('colorChecker')
	canvas.addEventListener('click', (event) => pick(event, selectedColor))
	drawStar()
}
