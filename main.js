const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
var rotation = 0;


function shapeOpen() {
    
    shapeBody1();

    if(rotation < Math.PI/2) {
        rotation += 0.02;
        requestAnimationFrame(shapeOpen);
    }
}

function shapeClose() {
    
    shapeBody1();

    if(rotation > 0) {
        rotation -= 0.02;
        requestAnimationFrame(shapeClose);
    }
}

function shapeBody1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height/2 + 5);
    ctx.clearRect(canvas.width/2, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.fillStyle = 'black';
    ctx.translate(150, 80);
    ctx.scale(-1, -1);
    ctx.rotate(rotation);
    ctx.fillRect(20, 10, 9, 5);
    ctx.clearRect(22, 10, 5, 3);
    ctx.fillRect(0, 0, 50, 10);
    ctx.restore();
}

function shapeBody() {
    ctx.save();
    ctx.fillStyle = 'grey';
    ctx.fillRect(100, canvas.height/2 + 5, 50, 70);
    ctx.restore();
}

openBtn.addEventListener('click', function() {
    shapeOpen();
});

closeBtn.addEventListener('click', function() {
    shapeClose();
});


shapeBody1();
shapeBody();