"use strict";
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