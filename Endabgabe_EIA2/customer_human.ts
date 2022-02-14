namespace Doenerbude { 

    enum STATE {
        QUEUE,
        WAITING,
        LEAVING
    }
    
    export class Human extends Moveable { 
        public state: STATE;
        public strokecolore: string;
        public color: string;
    
      

        constructor(_position: Vector, _color: string, _coloros: string ) {
            super(_position);
            this.velocity.set(-150, 0);
            this.state = STATE.QUEUE;
            this.color = _color;
            this.strokecolore = _coloros;
           
        }

    public draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 30, 0, 360);
            
            crc2.stroke();
            crc2.lineWidth = 10;
            crc2.strokeStyle = this.strokecolore;
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();


            setTimeout(() => {
                this.strokecolore = "black";
            },         35000);
            
        }
    
    public move(_timeslice: number): void {
        
        super.move(_timeslice);
        switch (this.state) {
        
                case STATE.QUEUE: 
                let nextInLine: Human = test[test.indexOf(this) - 1];
                if (this.position.x <= 700) {
                        this.velocity.set(0, 0);
                        this.state = STATE.WAITING;
                        break;
                }
                else if (nextInLine) {
                    if ((this.velocity.length * _timeslice) + 150 > new Vector(nextInLine.position.x - this.position.x,  nextInLine.position.y - this.position.y).length) {
                       this.velocity.set(0, 0);
                }
                else {
                    this.velocity.set(-150, 0);
                }
    
            }
                break;
            case STATE.LEAVING: 
            
            if (this.position.y > crc2.canvas.height - 0)
            removeCustomer(this);
      
    }
    }
        public receiveFood(): void {
            this.velocity.set(0, 150);
            this.state = STATE.LEAVING;
    
        }}}
    