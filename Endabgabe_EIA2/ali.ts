namespace Doenerbude { 
    
    export class Ali extends Moveable {
    
            public destination: Vector; // Position of the mouse click where the ball should move 
            public startMoving: boolean = false;
            public radius: number = 40;
    
            constructor(_position: Vector) {
                super(_position);
            }
         
    public draw(): void {
        crc2.save();

        // Circle
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, this.radius , 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#2F5373"; // yellow
        crc2.fill();
    }

public move(): void {
        
    if (this.destination) {

        let direction: Vector = new Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
        let distance: number = 0;

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
    }}
