"use strict";
var Doenerbude;
(function (Doenerbude) {
    let STATE;
    (function (STATE) {
        STATE[STATE["QUEUE"] = 0] = "QUEUE";
        STATE[STATE["WAITING"] = 1] = "WAITING";
        STATE[STATE["LEAVING"] = 2] = "LEAVING";
    })(STATE || (STATE = {}));
    class Human extends Doenerbude.Moveable {
        constructor(_position, _color, _coloros) {
            super(_position);
            this.velocity.set(-150, 0);
            this.state = STATE.QUEUE;
            this.color = _color;
            this.strokecolore = _coloros;
        }
        draw() {
            Doenerbude.crc2.save();
            Doenerbude.crc2.beginPath();
            Doenerbude.crc2.translate(this.position.x, this.position.y);
            Doenerbude.crc2.arc(0, 0, 30, 0, 360);
            Doenerbude.crc2.stroke();
            Doenerbude.crc2.lineWidth = 10;
            Doenerbude.crc2.strokeStyle = this.strokecolore;
            Doenerbude.crc2.fillStyle = this.color;
            Doenerbude.crc2.fill();
            Doenerbude.crc2.restore();
            setTimeout(() => {
                this.strokecolore = "black";
            }, 35000);
        }
        move(_timeslice) {
            super.move(_timeslice);
            switch (this.state) {
                case STATE.QUEUE:
                    let nextInLine = Doenerbude.test[Doenerbude.test.indexOf(this) - 1];
                    if (this.position.x <= 700) {
                        this.velocity.set(0, 0);
                        this.state = STATE.WAITING;
                        break;
                    }
                    else if (nextInLine) {
                        if ((this.velocity.length * _timeslice) + 150 > new Doenerbude.Vector(nextInLine.position.x - this.position.x, nextInLine.position.y - this.position.y).length) {
                            this.velocity.set(0, 0);
                        }
                        else {
                            this.velocity.set(-150, 0);
                        }
                    }
                    break;
                case STATE.LEAVING:
                    if (this.position.y > Doenerbude.crc2.canvas.height - 0)
                        Doenerbude.removeCustomer(this);
            }
        }
        receiveFood() {
            this.velocity.set(0, 150);
            this.state = STATE.LEAVING;
        }
    }
    Doenerbude.Human = Human;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=customer_human.js.map