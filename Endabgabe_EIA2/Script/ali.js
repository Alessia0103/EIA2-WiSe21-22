"use strict";
/*
Dönersimulation
Alessia Carbone
MKB3
Matrikelnummer: 266620
In Zusammenarbeit mit Neele Rauber kreiert
*/
var Doenerbude;
(function (Doenerbude) {
    class Ali extends Doenerbude.Moveable {
        constructor(_position, _color, _colors) {
            super(_position);
            this.startMoving = false;
            this.radius = 40;
            this.color = _color;
            this.velocity.set(150, 0);
            this.strokecolor = _colors;
        }
        draw() {
            Doenerbude.crc2.save();
            // Circle
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.stroke();
            Doenerbude.crc2.lineWidth = 10;
            Doenerbude.crc2.strokeStyle = this.strokecolor;
            Doenerbude.crc2.fillStyle = this.color;
            Doenerbude.crc2.fill();
            //Average Mood
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.rect(825, 100, 180, 10);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = this.strokecolor;
            Doenerbude.crc2.fill();
            setTimeout(() => {
                this.strokecolor = "#BF4A30";
            }, 350000);
        }
        move() {
            if (this.destination) {
                let direction = new Doenerbude.Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
                let distance = 0;
                if (this.startMoving == true) {
                    this.destination.x -= distance;
                    this.destination.y -= distance;
                    this.velocity.set(150, 0);
                    this.startMoving = false;
                }
                direction.scale(1 / 50);
                if (distance < 300) {
                    this.position.add(new Doenerbude.Vector(direction.x * 6, direction.y * 6));
                }
                else {
                    this.position.add(direction);
                }
                setTimeout(() => {
                    this.velocity.set(150, 0);
                }, 3500);
            }
        }
    }
    Doenerbude.Ali = Ali;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=ali.js.map