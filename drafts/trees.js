const ctx = canvas.getContext("2d")
//split angle
const sa = deg2rad(20)
const c0 = [136, 0, 21]
const c1 = [0, 176, 0]
//distance couleurs
const dc = [-136, 176, -21]

let counter = 0

/*
    cercle trigonométrique pour les coordonnées !!!
    requestAnimationFrame => temps intervalle entre 2 frames défini par le processeur en fonction de ses disponibilités 
*/

function drawBranch (x, y, angle, len) {
    //zoom dans une fractale => canvas save et restore
    if (len < 4) return;
    ++counter
    const ex = x + Math.cos(angle) * len
    const ey = y + Math.sin(angle) * len
    //min : 4 en len : max (ratio) => progresse en pourcentage sur les trois couleurs => faire un gradient
    const debil = 1 - (len - 4) / (40 - 4)
    const [r, g, b] = [
        c0[0] + dc[0] * debil,
        c0[1] + dc[1] * debil,
        c0[2] + dc[2] * debil
    ]

    //dessiner une branche
    ctx.beginPath()
    ctx.lineWidth = len / 8
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`
    ctx.moveTo(x, y)
    ctx.lineTo(ex, ey)
    ctx.stroke()
    //fruits
    ctx.fillStyle = 'red'
    //40% de chance de dessiner un fruit
    // 4 => longueur min d'une branche => 5, on se retrouve plus près du tronc
    if (len > 4 && len < 5 && Math.random() > .96)
    {   
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fill()
    }
    //if avec math.random() ? 
    requestAnimationFrame(() => drawBranch(ex, ey, angle - sa, len / 1.2))
    requestAnimationFrame(() => drawBranch(ex, ey, angle + sa, len / 1.2))
}

function deg2rad (angle) {
    return angle / 180 * Math.PI
}

function rad2deg (angle) {
    return Math.PI / 180 * angle
}

ctx.fillStyle = '#ddd'
ctx.fillRect(0, 0, 400, 400)
drawBranch(200, 400, deg2rad(270), 40)