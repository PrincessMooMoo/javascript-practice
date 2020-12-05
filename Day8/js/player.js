//tried my best. Couldn't keep typing while watching the instructor write code.
class Player {
    health = 100;
    element = document.createElement('div');
    x = 300;
    y = 400;
    bgColor = 'yellow';
    left = 'ArrowLeft';
    right = 'ArrowRight';
    constructor(x, y, bgColor, left, right) {
        if (x) {
            this.x = x;
        }
        this.y = y;
        this.bgColor = bgColor;


        this.element.style.height = '40px';
        this.element.style.width = '40px';
        document.body.appendChild(this.element);
        this.element.style.backgroundColor = 'yellow';
        this.element.style.display = 'inline-block';
        this.style('border-radius', '50%');
        this.style('position', 'absolute');
        this.style('left', '400px');
        this.render();
        document.body.appendChild(this.element);
        setInterval( () => {
            this.move('ArrowLeft');
        }, 1000);
    }

    move(key){
        if (key ==="ArrowLeft"){
            this.x -= 20;
        }
        if (key === "ArrowRight"){
            this.x += 20;
        }
        this.render();
    }
    style(name, value) {
        this.element.style[name] = value;
    }
    render() {
        this.style('left', this.x + 'px');
        this.style('top', this.y + 'px')
        this.style('backgroundColor', this.bgColor);
    }
}