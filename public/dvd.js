// https://github.com/AlessioMaddaluno/bouncing-dvd-logo

let speed = 20;
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

const counter = document.getElementById('counter')
let count = 0

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

function minMaxRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //COPILOT MY BELOVED

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'cats/1.jpg';
    dvd.img.height = 800
    dvd.img.width = 800

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    //pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        //ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(85, 86, 89, 1)";
        //Draw DVD Logo and his background
        //ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        updoot()
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        updoot()
    }    
}

//Pick a random color in RGB format
function updoot(){
    count++
    counter.innerHTML = `<b>hits: ${count}</b>`
    dvd.img.src = `cats/${minMaxRandom(1, 10)}.jpg`
}