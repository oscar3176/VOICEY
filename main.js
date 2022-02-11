function preload() {
    draw_apple = loadImage("apple.jpg");
    draw_mango = loadImage("mango.jpg");
    draw_papaya = loadImage("papaya.jpg");
}

function setup() {
    canvas = createCanvas(900, 600);
}

x = 0;
y = 0;
drawApple = "";
drawMango = "";
drawPapaya = "";
apple_size = Math.floor(Math.random() * 150);
mango_size = Math.floor(Math.random() * 200);
papaya_size = Math.floor(Math.random() * 250);

var SpeechRecognition = window.webkitSpeechRecognition;
var recogniton = new SpeechRecognition;

function start() {
    
    
    apple_size = Math.floor(Math.random() * 150);
    mango_size = Math.floor(Math.random() * 150);
    papaya_size = Math.floor(Math.random() * 150);

    document.getElementById("status").innerHTML = "Syestem is lisenting you can speak";
    recogniton.start();
}

recogniton.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("status").innerHTML = "Speech has been recognized as " + content;
    if (content == "Apple") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started Drawing Apple";
        drawApple = "set";
    }
    if (content == "mango") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started Drawing Mango";
        drawMango = "set";
    }
    if (content == "papaya") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started Drawing Papaya";
        drawPapaya = "set";
    }
;}

function draw() {
    if (drawApple == "set") {
        image(draw_apple, x, y, apple_size, apple_size);
        document.getElementById("status").innerHTML = "APPLE IS DRAWN!!!";
        drawApple = "";
    }

    if (drawMango == "set") {
        image(draw_mango, x, y, mango_size, mango_size);
        document.getElementById("status").innerHTML = "MANGO IS DRAWN!!!";
        drawMango = "";
    }

    
    if (drawPapaya == "set") {
        image(draw_papaya, x, y, papaya_size, papaya_size);
        document.getElementById("status").innerHTML = "PAPAYA IS DRAWN!!!";
        drawPapaya = "";
    }
}