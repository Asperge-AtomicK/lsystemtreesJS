import Color from './classColor.js';

export default class Branch {
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
