namespace Doenerbude {

        export class Laden {

        draw(): void {
//Canvas "Grundriss von dem Laden"
        crc2.beginPath();
        crc2.fillStyle = "#F2DDCC";
        crc2.fillRect(50, 50, crc2.canvas.width, crc2.canvas.height);
        crc2.moveTo(1, 1);
        crc2.closePath();
            
        
        
//Küche hinter der Theke 
        crc2.beginPath();
        crc2.rect(-30, 50, 200, 900);
        crc2.closePath();
        crc2.fillStyle = "#A2635C";
        crc2.fill();

        crc2.save();
        crc2.translate(25, 25);
//Theke zum bedienen 
        crc2.beginPath();
        crc2.rect(380, 25, 250, 500);
        crc2.closePath();
        crc2.fillStyle = "#A2635C";
        crc2.fill();
//Brett auf er Theke zum bedienen 
        crc2.beginPath();
        crc2.rect(380, 170, 130, 250);
        crc2.closePath();
        crc2.fillStyle = "#D59A8A";
        crc2.fill();
//Menü 
        crc2.beginPath();
        crc2.rect(1000, 25, 300, 680);
        crc2.closePath();
        crc2.fillStyle = "#D59A8A";
        crc2.fill();
// Bowls für die Zutaten Nr.1
        crc2.beginPath();
        crc2.arc(885 / 2, 180 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.2
        crc2.beginPath();
        crc2.arc(1140 / 2, 180 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.3
        crc2.beginPath();
        crc2.arc(1140 / 2, 420 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.4
        crc2.beginPath();
        crc2.arc(1140 / 2, 660 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.5
        crc2.beginPath();
        crc2.arc(1140 / 2, 900 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();

// Bowls für die Zutaten in der Küche Nr.1
        crc2.beginPath();
        crc2.arc(120 / 2, 900 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten in der Küche Nr.2
        crc2.beginPath();
        crc2.arc(120 / 2, 660 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten in der Küche Nr.3
        crc2.beginPath();
        crc2.arc(120 / 2, 420 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
 // Bowls für die Zutaten in der Küche Nr.4
        crc2.beginPath();
        crc2.arc(120 / 2, 180 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten in der Küche Nr.4
        crc2.beginPath();
        crc2.arc(120 / 2, 1140 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();

//Fenster
        crc2.beginPath();
        crc2.rect(400, 670, 500, 10);
        crc2.closePath();
        crc2.fillStyle = "#B3E0F2";
        crc2.fill();

//Türrahmen oben
        crc2.beginPath();
        crc2.rect(970, 200, 30, 10);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
//Türrahmen unten
        crc2.beginPath();
        crc2.rect(970, 400, 30, 10);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.restore();
        crc2.restore();
//Einstellugnen
        crc2.beginPath();
        crc2.rect(1025, 50, 290, 120);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();

        }
    }
}
