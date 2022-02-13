namespace Doenerbude { 
    
    export class Ali extends Moveable {
            
           
            public destination: Vector; 
            public startMoving: boolean = false;
            public radius: number = 40;
            public x: number;
            public y: number;
            
            public strokecolor: string;
            private color: string;
    
            constructor(_position: Vector, _color: string, _colors: string) {
                super(_position);
                this.color = _color;
                this.velocity.set(150, 0);
                this.strokecolor = _colors;
                
            }
         
    public draw(): void {
        crc2.save();

        // Circle
        crc2.beginPath();
        crc2.arc(this.position.x, this.position.y, this.radius , 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.lineWidth = 10;
        crc2.strokeStyle = this.strokecolor;
        crc2.fillStyle = this.color;
        crc2.fill();

        setTimeout(() => {
            this.strokecolor = "#BF4A30";
        },         3500);
    
    }
    

public move(): void {
        
    if (this.destination) {

        let direction: Vector = new Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
        let distance: number = 0;

       
        if (this.startMoving == true) { 

            this.destination.x -= distance;
            this.destination.y -= distance;
            this.velocity.set(150, 0);
            this.startMoving = false;
        }
        direction.scale(1 / 50);

        if (distance < 300) {
            this.position.add(new Vector(direction.x * 6, direction.y * 6));
        } else {
            this.position.add(direction);
        }
        setTimeout(() => {
            this.velocity.set(150, 0);
        },         3500);
    }}}}
