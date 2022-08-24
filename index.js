var boxColor = '#00996611'

var starColor = '#ffffff1f'

var boxCount = 15
var fillerCount = 100
var starCount = 10
var smallstarCount = 20

function gen() {
        
        
   

    //setting up canvas
    var canvas0 = document.getElementById('canv0');
    var canvas1 = document.getElementById('canv1');

    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;

    canvas0.width = wWidth;
    canvas0.height = wHeight;
    canvas1.width = wWidth;
    canvas1.height = wHeight;

    var c0 = canvas0.getContext('2d');
    var c1 = canvas1.getContext('2d');


    // generatin background/filler stars
    for (var a = 0; a < fillerCount; a++) {

        var xx = Math.random() * wWidth
        var yy = Math.random() * wHeight

        s = 0.001

        for (var e = 0; e < 8; e++) {
            c1.beginPath();
            c1.arc(xx, yy, s + e / 4, 0, Math.PI * 2, false);
            c1.fillStyle = starColor;
            c1.fill();
        }
    }

    for (var a = 0; a < boxCount; a++) {

        var rW = Math.random() * 200 + 200
        var rH = Math.random() * 200 + 200

        var rX = Math.random() * wWidth - rW / 2
        var rY = Math.random() * wHeight - rH / 2

        box(rX, rY, rH, rW)

        star(rX, rY, rH, rW)
    }

    // generating boxes 
    function box(rX, rY, rH, rW){
        c0.beginPath();
        c0.rect(rX, rY, rW, rH);
        c0.fillStyle = boxColor;
        c0.fill();
    }

    // generating stars inside boxes
    function star(rX, rY, rH, rW) {
        for (var a = 0; a < starCount; a++) {
            var xx = Math.random() * (rX + rW - rX) + rX;
            var yy = Math.random() * (rY + rH - rY) + rY;

            var s = Math.random() * 2

            for (var e = 0; e < 8; e++) {
                c1.beginPath();
                c1.arc(xx, yy, s + e / 4, 0, Math.PI * 2, false);
                c1.fillStyle = starColor;
                c1.fill();
            }
        }

        for (var a = 0; a < smallstarCount; a++) {
            var xx = Math.random() * (rX + rW - rX) + rX;
            var yy = Math.random() * (rY + rH - rY) + rY;

            s = 0.001

            for (var e = 0; e < 8; e++) {
                c1.beginPath();
                c1.arc(xx, yy, s + e / 4, 0, Math.PI * 2, false);
                c1.fillStyle = starColor;
                c1.fill();
            }
        }
    }
}

colors = false

function toggleColor() {
    if (colors) {
        document.getElementById('canv0').style.display = 'none'
    } else {
        document.getElementById('canv0').style.display = 'block'
    }
    colors = !colors
}
