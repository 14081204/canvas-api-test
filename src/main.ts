/*class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}*/

window.onload = () => {
    /*var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();*/

    //rect
    /*var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    var rect = canvas.getContext("2d");
    rect.fillStyle="#FF0000";
    rect.fillRect(0,0,150,150);*/

    //angel
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;*/
    /*var angel=canvas.getContext("2d");
    angel.strokeStyle="#00FF00"
    angel.moveTo(0,160);
    angel.lineTo(160,160);
    angel.lineTo(0,320);
    angel.stroke();*/

    //circle
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;*/
    /*var circle=canvas.getContext("2d");
    circle.fillStyle="#FF0000";
    circle.beginPath();
    circle.arc(30,240,30,0,Math.PI,true);//x,y,r,start,line,direction
    circle.closePath();
    circle.fill();*/

    //colorchange
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;*/
    /*var colorchange=canvas.getContext("2d");
    var grd=colorchange.createLinearGradient(0,330,175,50);//线形渐变 x0,y0,x1,y1
    grd.addColorStop(0,"#FF0000");
    grd.addColorStop(1,"#000000");
    colorchange.fillStyle=grd;
    colorchange.fillRect(0,330,175,50);*/

    //showimage
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;
    var showimage=canvas.getContext("2d");
    var img=new Image();
    img.src="src/flower.jpg";
    img.onload = () => {
        //showimage.clearRect(0, 0, canvas.width, canvas.height);
        showimage.drawImage(img,160,0);
    }*/

    

    var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    var context2D=canvas.getContext("2d");
    var stage = new DisplayObjectContainer();

    setInterval(() => {
        context2D.clearRect(0, 0, canvas.width, canvas.height);
        stage.draw(context2D);
    },100)

    var image = document.createElement("img");
    image.src = "flower.jpg";
    var textField = new textField();
    textField.x = 20;
    textField.y = 20;
    textField.text = "Hello World";
    textField.color = "#00FF00";

    var Bitmap = new imageBitmap();
    Bitmap.Image = image;
    Bitmap.x = 0;
    Bitmap.y = 0;

    image.onload = () => {
        stage.addChild(Bitmap);
        stage.addChild(textField);
    }
};
