import Color from './classColor.js';

export default class Leaf {
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
