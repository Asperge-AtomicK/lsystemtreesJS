export default class Color {
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
