/*
Dönersimulation
Alessia Carbone
MKB3
Matrikelnummer: 266620
In Zusammenarbeit mit Neele Rauber kreiert
*/

//Inspiration für die Kunden von Amlie Dell'Oro


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
            
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 20, 0, 360);
            crc2.fillStyle = this.strokecolore;
            crc2.fill();
            crc2.restore();

            //Average Mood
            crc2.beginPath();
            crc2.rect(825, 150, 180, 10);
            crc2.closePath();
            crc2.fillStyle = this.strokecolore;
            crc2.fill();


            setTimeout(() => {
                this.strokecolore = "#A63C3C";
            },         15000);
            
            
            
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
    