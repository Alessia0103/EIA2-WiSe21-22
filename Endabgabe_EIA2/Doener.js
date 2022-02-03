"use strict";
var Doenerbude;
(function (Doenerbude) {
    class Laden {
        draw() {
            //Canvas "Grundriss von dem Laden"
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.fillRect(50, 50, Doenerbude.crc2.canvas.width, Doenerbude.crc2.canvas.height);
            Doenerbude.crc2.moveTo(1, 1);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.save();
            Doenerbude.crc2.translate(0, 0);
            //Küche hinter der Theke 
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(-30, 50, 200, 900);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "#A2635C";
            Doenerbude.crc2.fill();
            Doenerbude.crc2.save();
            Doenerbude.crc2.translate(25, 25);
            //Theke zum bedienen 
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(380, 25, 250, 500);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "#A2635C";
            Doenerbude.crc2.fill();
            //Brett auf er Theke zum bedienen 
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(380, 170, 130, 250);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "#D59A8A";
            Doenerbude.crc2.fill();
            //Menü 
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(1000, 20, 300, 700);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "#D59A8A";
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten Nr.1
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(885 / 2, 180 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten Nr.2
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(1140 / 2, 180 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten Nr.3
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(1140 / 2, 420 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten Nr.4
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(1140 / 2, 660 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten Nr.5
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(1140 / 2, 900 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten in der Küche Nr.1
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(120 / 2, 900 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten in der Küche Nr.2
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(120 / 2, 660 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten in der Küche Nr.3
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(120 / 2, 420 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten in der Küche Nr.4
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(120 / 2, 180 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            // Bowls für die Zutaten in der Küche Nr.4
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(120 / 2, 1140 / 2, 50, 0, 2 * Math.PI, false);
            Doenerbude.crc2.fillStyle = "#F2DDCC";
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fill();
            //Fenster
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(400, 670, 500, 10);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "#B3E0F2";
            Doenerbude.crc2.fill();
            //Türrahmen oben
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(970, 200, 30, 10);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "black";
            Doenerbude.crc2.fill();
            //Türrahmen unten
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(970, 400, 30, 10);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "black";
            Doenerbude.crc2.fill();
            Doenerbude.crc2.restore();
            Doenerbude.crc2.restore();
        }
    }
    Doenerbude.Laden = Laden;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=Doener.js.map