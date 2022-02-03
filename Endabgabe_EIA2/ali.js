"use strict";
var Doenerbude;
(function (Doenerbude) {
    class Ali extends Doenerbude.Moveable {
        constructor(_position) {
            super(_position);
            this.startMoving = false;
            this.radius = 40;
        }
        draw() {
            Doenerbude.crc2.save();
            // Circle
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = "#2F5373"; // yellow
            Doenerbude.crc2.fill();
        }
        move() {
            if (this.destination) {
                let direction = new Doenerbude.Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
                let distance = 0;
                // Je größer die Distanz zwischen ball und klick, desto größer ist der radius um den klickpunkt, aus dem eine zufällige Zielposition gewählt wird
                if (this.startMoving == true) { // wenn geklickt wur
                    // Precision depends on distance too
                    // The bigger the distance is, the less precise is the player
                    distance += (Math.random() - 0.5) * (0.25 * direction.length);
                    this.destination.x += distance;
                    this.destination.y += distance;
                    this.startMoving = false;
                }
            }
        }
    }
    Doenerbude.Ali = Ali;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=ali.js.map