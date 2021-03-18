const ctx = canvas.getContext("2d")
// split angle
// const sa = deg2rad(20)
let sa = deg2rad(20)

function drawBranch (x, y, angle, len) {
    //zoom dans une fractale => canvas save et restore
    if (len < 4) return;
    const ex = x + Math.cos(angle) * len
    const ey = y + Math.sin(angle) * len
    //plus on est court, plus on est rouge. Plus on est à droite, plus on rouge
    const color = (255 - len / 40 * 255) * (x / 400)
    ctx.beginPath()
    ctx.lineWidth = len / 8
    ctx.strokeStyle = `rgb(${color}, 0, 0)`
    ctx.moveTo(x, y)
    ctx.lineTo(ex, ey)
    ctx.stroke()
    requestAnimationFrame(() => drawBranch(ex, ey, angle - sa, len / 1.2))
    requestAnimationFrame(() => drawBranch(ex, ey, angle + sa, len / 1.2))
}

function deg2rad (angle) {
    return angle / 180 * Math.PI
}

function rad2deg (angle) {
    return Math.PI / 180 * angle
}

function changeAngle(angle) {
    // console.log(rotateAngle.value)
    sa = deg2rad(angle)
    // console.log(sa)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#ddd'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawBranch(canvas.width/2, canvas.height/2, deg2rad(270), 40)
}

function changeLen(len) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#ddd'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawBranch(canvas.width/2, canvas.height, deg2rad(270), len)
}

ctx.fillStyle = '#ddd'
// ctx.fillRect(0, 0, 400, 400)
ctx.fillRect(0, 0, canvas.width, canvas.height)
// drawBranch(200, 400, deg2rad(270), 40)
drawBranch(canvas.width/2, canvas.height, deg2rad(270), 40)