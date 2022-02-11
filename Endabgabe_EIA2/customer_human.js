"use strict";
var Doenerbude;
(function (Doenerbude) {
    class Human extends Doenerbude.Moveable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            Doenerbude.crc2.save();
            Doenerbude.crc2.fillStyle = "yellow";
            Doenerbude.crc2.translate(this.position.x, this.position.y);
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.arc(0, 0, 30, 0, 360);
            Doenerbude.crc2.fill();
            Doenerbude.crc2.restore();
        }
        updateMood(_addend) {
            this.mood = this.moods[this.moods.indexOf(this.mood) + _addend];
        }
    }
    Doenerbude.Human = Human;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=customer_human.js.map