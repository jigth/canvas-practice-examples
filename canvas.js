const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
const w = canvas.width
const h = canvas.height

// Drawing 8 white rectangles
// BEGIN
ctx.fillStyle = '#fff'
ctx.fillRect(w * .4, h * .1, 200, 200)
ctx.fillRect(w * .3, h * .2, 200, 200)
ctx.fillRect(w * .2, h * .3, 200, 256)
ctx.fillRect(w * .1, h * .4, 200, 200)

ctx.fillRect(w * .1, h * .1, 200, 200)
ctx.fillRect(w * .2, h * .2, 200, 200)
ctx.fillRect(w * .3, h * .3, 200, 256)
ctx.fillRect(w * .4, h * .4, 200, 200)
// END


// Drawing descriptive text
// BEGIN
ctx.fillStyle = 'green'
ctx.fillText("Some random text here", w * .4, h * .5)
ctx.fillText("Now some lines...", w * .15, h * .3)
// END


// Drawing some orange lines
/// Blue line
//// BEGIN
ctx.strokeStyle = 'blue'
ctx.beginPath()
ctx.moveTo(w * .2, h * .4)
ctx.lineTo(w * .45, h * .4)
ctx.lineTo(w * .4, h * .1)
ctx.stroke()
//// END
/// Red line
//// BEGIN
ctx.strokeStyle = 'red'
ctx.beginPath()
ctx.moveTo(w * .25, h * .45)
ctx.lineTo(w * .4, h * .45)
ctx.lineTo(w * .43, h * .12)
ctx.stroke()
//// END
