/*
import Color from './classColor.js'
import Branch from './classBranch.js'
import Leaf from './classLeaf.js'

ranger le dossier + webpack pour porjet site 
*/

class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    getRed() {
        return this.red;
    }

    setRed(red) {
        if (red >= 0 && red < 256)
        {
            this.red = red;
        }
        else 
        {
            this.red = 0;
        }
    }

    getGreen() {
        return this.green;
    }

    setGreen(green) {
        if (green >= 0 && green < 256)
        {
            this.green = green;
        }
        else 
        {
            this.green = 0;
        }
    }

    getBlue() {
        return this.blue;
    }

    setBlue(blue) {
        if (blue >= 0 && blue < 256)
        {
            this.blue = blue;
        }
        else 
        {
            this.blue = 0;
        }
    }
}

class Branch {
    constructor(lenght, width) {
        this.setLenght(lenght)
        this.setWidth(width)
        this.color = new Color(140, 64, 75)
    }

    getLenght() {
        return this.lenght;
    }

    setLenght(lenght) {
        if (lenght >= 0.5 && lenght <= 100)
        {
            this.lenght = lenght;
        }
        else 
        {
            this.lenght = 50;
        }
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        if (width >= 0.1 && width <= 10)
        {
            this.width = width;
        }
        else 
        {
            this.width = 1;
        }
    }

    getColor() {
        return this.color;
    }

    setColor(red, green, blue) {
        this.color.setRed(red);
        this.color.setGreen(green);
        this.color.setBlue(blue);
    }

}

class Leaf {
    constructor(lenght, width) {
        this.setLenght(lenght)
        this.setWidth(width)
        this.color = new Color(28, 133, 43)
    }

    getLenght() {
        return this.lenght;
    }

    setLenght(lenght) {
        if (lenght >= 1 && lenght <= 5)
        {
            this.lenght = lenght;
        }
        else 
        {
            this.lenght = 5;
        }
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        if (width >= 1 && width <= 5)
        {
            this.width = width;
        }
        else 
        {
            this.width = 3;
        }
    }

    getColor() {
        return this.color;
    }

    setColor(red, green, blue) {
        this.color.setRed(red);
        this.color.setGreen(green);
        this.color.setBlue(blue);
    }
}

const ctx = canvas.getContext('2d')

const _PRESETS = [
    {
        axiom : 'F',
        rules : [
            {
                a : 'F',
                b : 'FF+[+F-F-F]-[-F+F+F]'
            }
        ]
    },
    {
        axiom : 'X',
        rules : [
            {
                a : 'F',
                b : 'FF'
            },
            {
                a : 'X',
                b : 'F+[-F-XF-X][+FF][--XF[+X]][++F-X]'
            }
        ]
    },
    {
        axiom : 'F',
        rules : [
            {
                a : 'F',
                b : 'F > F[+F]F[-F]F'
            }
        ]
    },
    {
        axiom : 'X',
        rules : [
            {
                a : 'F',
                b : 'FX[FX[+XF]]'
            },
            {
                a : 'X',
                b : 'FF[+XZ++X-F[+ZX]][-X++F-X]'
            },
            {
                a : 'Z',
                b : '[+F-X-F][++ZX]'
            }
        ]
    }

]

// preset index
let pIndex, sentence, angle, ratio

const branches = new Branch(+branchLen.min, +branchWidth.min)
const leaves = new Leaf(5, 3)

let bAlpha = 1.

function hexToDec( hexstring ) {
    const index = parseInt(hexstring.substring(1), 16)
    /*
    console.log(parseInt(hexstring.substring(1), 16))
    console.log(index >> 16)
    console.log((index >> 8) & 0xff)
    console.log((index >> 0) & 255)
    */
    return {
        red: index >> 16,
        green: (index >> 8) & 0xff,
        blue: (index >> 0) & 255 // 255 = 0xff = 0b1111_1111
    }
}


function setup() {
    choosePreset()
}

function deg2rad (angle) {
    return angle / 180 * Math.PI
}

function resetCanvas() {
    branches.setLenght(+branchLen.value)

    ctx.resetTransform()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#f7cfef'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function resetAxiom() {
    sentence = _PRESETS[pIndex].axiom
}


function choosePreset() {
    resetCanvas()
    pIndex = +preset.value
    sentence = _PRESETS[pIndex].axiom

    branches.setLenght(+branchLen.value)
    branches.setWidth(+branchWidth.value)
    
    ratio = +branchRatio.value
    angle = +branchAngle.value
}

function changeLen() {
    branches.setLenght(+branchLen.value)
    resetAxiom()
}

function changeRatio() {
    ratio = +branchRatio.value
    changeLen()
}

function changeWidth() {
    branches.setWidth(+branchWidth.value)
    changeLen()
}

function changeAngle() {
    angle = +branchAngle.value
    changeLen()
}

function changeBranchColor() {
    let color = hexToDec(branchColor.value)
    console.log('color', color)
    // Ecrire plus simplement ? expression lambda ? 
    branches.setColor(color.red, color.green, color.blue)
    changeLen()
}

function changeBranchAlpha() {
    bAlpha = +branchAlpha.value
    changeLen()
}

function changeLeafColor() {
    let color = hexToDec(leafColor.value)
    // console.log('color', color)
    leaves.setColor(color.red, color.green, color.blue)
    // console.log('apres', leaves.color)
    changeLen()
}

function changeLeafLenght() {
    leaves.setLenght(+leafLen.value)
    changeLen()
}

function changeLeafWidth() {
    leaves.setLenght(+leafWidth.value)
    changeLen()
}


function draw()
{
    //dessine toute la phrase
    resetCanvas()

    let len = branches.getLenght()
    branches.setLenght(len * ratio)

    ctx.translate(canvas.width/2, canvas.height)

    for (let i = 0; i < sentence.length; i++)
    {
        let tempChar = sentence.charAt(i)
        if (tempChar == 'F')
        {
            ctx.beginPath()
            ctx.lineWidth = branches.getLenght() / branches.getWidth()
            ctx.strokeStyle = `rgba(${branches.color.red}, ${branches.color.green}, ${branches.color.blue}, ${bAlpha})`
            ctx.moveTo(0, 0)
            ctx.lineTo(0, -branches.getLenght())
            ctx.stroke()
            ctx.translate(0, -branches.getLenght())
        }
        else if (tempChar == '+')
        {
            ctx.rotate(deg2rad(angle))
        }
        else if (tempChar == '-')
        {
            ctx.rotate(deg2rad(-angle))
        }
        else if (tempChar == '[')
        {
            ctx.save()
        }
        else if (tempChar == ']')
        {
            //feuilles
            ctx.fillStyle = `rgb(${leaves.color.red}, ${leaves.color.green}, ${leaves.color.blue})`
            ctx.globalAlpha = 0.75
            ctx.scale(leaves.width, leaves.lenght);

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1, -1);
            ctx.lineTo(0, -4);
            ctx.lineTo(-1, -1);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fill();

            
            ctx.restore()
        }
    }
}

function generateSentence() {
    let newSentence = ''
    // sentence.lenght
    for (let i = 0; i < sentence.length; i++)
    {
        let found = false
        let tempChar = sentence.charAt(i) // sentence[i]
        // const rule = _PRESETS[pIndex].rules.find(r => r=== tempChar)
        // rule && (newSentence += rule)
        // !rule && (newSentence += tempChar)
        for (let j = 0; j < _PRESETS[pIndex].rules.length; j++)
        {
            if (tempChar == _PRESETS[pIndex].rules[j].a)
            {
                //console.log("règle")
                found = true
                newSentence += _PRESETS[pIndex].rules[j].b
                break;
            }
        }
        if (!found)
        {
            newSentence += tempChar
        }
    }
    sentence = newSentence
    //console.log(sentence)

    requestAnimationFrame(draw)
}

setup()