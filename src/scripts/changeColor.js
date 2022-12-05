const canvas = document.getElementById('colorChecker')
const ctx = canvas.getContext('2d')
const selectedColor = document.getElementById('star')

function pick(event, destination) {
	const bounding = canvas.getBoundingClientRect()
	const x = event.clientX - bounding.left
	const y = event.clientY - bounding.top
	const pixel = ctx.getImageData(x, y, 1, 1)
	const data = pixel.data
	const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`
	destination.style.background = rgba
	return rgba
}
canvas.addEventListener('click', (event) => pick(event, selectedColor))
