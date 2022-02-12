"use strict";
var Doenerbude;
(function (Doenerbude) {
    let STATE;
    (function (STATE) {
        STATE[STATE["QUEUE"] = 0] = "QUEUE";
        STATE[STATE["WAITING"] = 1] = "WAITING";
        STATE[STATE["LEAVING"] = 2] = "LEAVING";
    })(STATE || (STATE = {}));
    class Customer extends Doenerbude.Human {
        constructor(_position) {
            super(_position);
            this.moods = ["pissed", "angry", "unwell", "fine", "happy", "ecstatic"];
            this.velocity.set(150, 0);
            this.mood = this.moods[3];
            this.state = STATE.QUEUE;
        }
        move(_timeslice) {
            super.move(_timeslice);
            switch (this.state) {
                case STATE.QUEUE:
                    let nextInLine = Doenerbude.test[Doenerbude.test.indexOf(this) - 1];
                    if (Doenerbude.dx >= Doenerbude.middleY - 150) {
                        this.velocity.set(0, 0);
                        this.state = STATE.WAITING;
                        break;
                    }
                    else if (nextInLine) {
                        if ((this.velocity.length * _timeslice) + 150 > new Doenerbude.Vector(nextInLine.position.x - this.position.x, nextInLine.position.y - this.position.y).length) {
                            this.velocity.set(0, 0);
                        }
                        else {
                            this.velocity.set(150, 0);
                        }
                    }
                    break;
                case STATE.LEAVING:
                    if (this.position.y > Doenerbude.crc2.canvas.height + 0)
                        Doenerbude.removeCustomer(this);
            }
        }
        receiveFood() {
            this.velocity.set(0, 150);
            this.state = STATE.LEAVING;
        }
    }
    Doenerbude.Customer = Customer;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=customer.js.map