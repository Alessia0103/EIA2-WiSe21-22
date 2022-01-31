namespace Dönerbude {
    window.addEventListener("load", start);
    let crc2: CanvasRenderingContext2D;
    

    function start(_event: Event): void {
        
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        box();

        function box(): void {
//Canvas "Grundriss von dem Laden"
        crc2.beginPath();
        crc2.fillStyle = "#F2DDCC";
        crc2.fillRect(50, 50, crc2.canvas.width, crc2.canvas.height);
        crc2.moveTo(1, 1);
        crc2.closePath();
            
        crc2.save();
        crc2.translate(0, 0);
//Küche hinter der Theke 
        crc2.beginPath();
        crc2.rect(-30, 50, 200, 900);
        crc2.closePath();
        crc2.fillStyle = "#A2635C";
        crc2.fill();
//Theke zum bedienen 
        crc2.beginPath();
        crc2.rect(400, 50, 250, 500);
        crc2.closePath();
        crc2.fillStyle = "#A2635C";
        crc2.fill();
//Brett auf er Theke zum bedienen 
        crc2.beginPath();
        crc2.rect(400, 170, 130, 250);
        crc2.closePath();
        crc2.fillStyle = "#D59A8A";
        crc2.fill();
// Bowls für die Zutaten Nr.1
        crc2.beginPath();
        crc2.arc(940 / 2, 220 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.2
        crc2.beginPath();
        crc2.arc(1190 / 2, 220 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.3
        crc2.beginPath();
        crc2.arc(1190 / 2, 460 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.4
        crc2.beginPath();
        crc2.arc(1190 / 2, 700 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten Nr.5
        crc2.beginPath();
        crc2.arc(1190 / 2, 940 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();

// Bowls für die Zutaten in der Küche Nr.1
        crc2.beginPath();
        crc2.arc(170 / 2, 940 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten in der Küche Nr.2
        crc2.beginPath();
        crc2.arc(170 / 2, 700 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten in der Küche Nr.3
        crc2.beginPath();
        crc2.arc(170 / 2, 460 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
 // Bowls für die Zutaten in der Küche Nr.4
        crc2.beginPath();
        crc2.arc(170 / 2, 220 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();
// Bowls für die Zutaten in der Küche Nr.4
        crc2.beginPath();
        crc2.arc(170 / 2, 1180 / 2, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F2DDCC";
        crc2.closePath();
        crc2.fill();

//Fenster
        crc2.beginPath();
        crc2.rect(400, 690, 500, 10);
        crc2.closePath();
        crc2.fillStyle = "#B3E0F2";
        crc2.fill();

//Türrahmen oben
        crc2.beginPath();
        crc2.rect(1270, 200, 30, 10);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
//Türrahmen unten
        crc2.beginPath();
        crc2.rect(1270, 400, 30, 10);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        }
    }
}
