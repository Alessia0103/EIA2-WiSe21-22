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
    class Moveable {
        constructor(_position) {
            this.position = _position;
            this.velocity = new Doenerbude.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    Doenerbude.Moveable = Moveable;
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=movable.js.map