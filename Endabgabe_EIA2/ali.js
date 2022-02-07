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
                    distance += (Math.random() - 0.1) * (0.01 * direction.length);
                    this.destination.x += distance;
                    this.destination.y += distance;
                    this.startMoving = false;
                }
                direction.scale(1 / 50);
                if (distance < 150) {
                    this.position.add(new Doenerbude.Vector(direction.x * 2, direction.y * 2));
                }
                else {
                    this.position.add(direction);
                }
            }
        }
        isClicked(_clickPosition) {
            let difference = new Doenerbude.Vector(_clickPosition.x - this.position.x, _clickPosition.y - this.position.y);
            return (difference.length < this.radius);
        }
    }
    Doenerbude.Ali = Ali;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=ali.js.map