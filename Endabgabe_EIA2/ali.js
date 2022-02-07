"use strict";
var Doenerbude;
(function (Doenerbude) {
    class Ali extends Doenerbude.Moveable {
        constructor(_position, _color) {
            super(_position);
            this.startMoving = false;
            this.radius = 40;
            this.color = _color;
        }
        draw() {
            Doenerbude.crc2.save();
            // Circle
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            Doenerbude.crc2.closePath();
            Doenerbude.crc2.fillStyle = this.color; // yellow
            Doenerbude.crc2.fill();
        }
        move() {
            if (this.destination) {
                let direction = new Doenerbude.Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
                let distance = 0;
                if (this.startMoving == true) {
                    this.destination.x -= distance;
                    this.destination.y -= distance;
                    this.startMoving = false;
                }
                direction.scale(1 / 50);
                if (distance < 300) {
                    this.position.add(new Doenerbude.Vector(direction.x * 6, direction.y * 6));
                }
                else {
                    this.position.add(direction);
                }
            }
        }
    }
    Doenerbude.Ali = Ali;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=ali.js.map