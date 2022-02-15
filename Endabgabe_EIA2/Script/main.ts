/*
Dönersimulation
Alessia Carbone
MKB3
Matrikelnummer: 266620
In Zusammenarbeit mit Neele Rauber kreiert
*/


namespace  Doenerbude {

    export let middleX: number;
    export let middleY: number;
    export let test: Human[] = [];
    let lastFrame: number;
    export let crc2: CanvasRenderingContext2D;
    export let dali: Ali;
    export let sali: Ali;
    export let doenerladen: Laden;
    export let customerSpawnPoint: Vector;
    export let dx: number  = 0;
    export let dy: number  = 1;
   
    
    
    let instructionbutton: HTMLSpanElement;
    let instructionBoard: Element;
    let landingPage: HTMLDivElement;
    let startbutton: HTMLDivElement;
    const neu: Element = (document.getElementById("redo")as HTMLInputElement);
    const gemuese: Element = (document.getElementById("gemuese")as HTMLInputElement);
    const canvas: Element = (document.getElementById("canvas")as HTMLInputElement);
    const redo: Element = (document.getElementById("redo-newGame")as HTMLInputElement);
    const doneButtonFlei: Element = (document.getElementById("buttonflei")as HTMLInputElement);
    const doneButtonSal: Element = (document.getElementById("buttonsal")as HTMLInputElement);
    const doneButtonTom: Element = (document.getElementById("buttontom")as HTMLInputElement);
    const doneButtonGur: Element = (document.getElementById("buttongur")as HTMLInputElement);
    const doneButtonZwi: Element = (document.getElementById("buttonzwi")as HTMLInputElement);
    const finishOrder: Element = (document.querySelector("button")as HTMLInputElement);
    const plus: Element = (document.getElementById("plus")as HTMLInputElement);
    const text: Element = (document.getElementById("text-redo")as HTMLInputElement);
    let teamAColor: string = "66b2ff";
    let tamAMood: string = "#1C5948";
    let teamBColor: string = "8C7B7B";
    let teamBMood: string = "#1C5948";
    
    
    
    let buttonClickSal: number = 2;
   
    let buttonClickOn: number = 2;
  
    let buttonClickFlei: number = 2;
   
    let buttonClickTom: number = 2;
    
    let buttonClickGur: number = 2;

    let moveables: Moveable[] = [];
   
    window.addEventListener("load", handleLoad); 

    function handleLoad(): void {
            // Get the canvas and rendering context
            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
            instructionbutton = <HTMLDivElement>document.getElementById("question");
            instructionBoard = <HTMLSpanElement>document.querySelector("#instructionBoard");
           
            landingPage = <HTMLDivElement>document.getElementById("settings");
            startbutton = <HTMLDivElement>document.getElementById("startbutton");
          


            instructionbutton.addEventListener("click", showInstruction);

            startbutton.addEventListener("click", startSimulation);
            canvas.addEventListener("click", mitarbeiter1);
            canvas.addEventListener("click", handleCanvasClick); 
    }

    function startSimulation(): void {
        // Hide settings container
        landingPage.style.display = "none";
        canvas.classList.remove("is-hidden");
        
        gemuese.classList.remove("is-hidden");
        moodStaff();
        moodCustomer();

       
        getUserPreferences();

        doenerladen = new Laden();
        staff();

        middleX = dx;
        middleY = dy;

        customerSpawnPoint = new Vector(1000, 325);
        
        
        lastFrame = performance.now();
        update();

        
        newCustomer();
        window.setInterval(newCustomer, 4900); 

        window.setInterval(drawUpdate, 20);

        window.setInterval(function (): void {
               animationUpdate();
        },                 20);
        
}

    function showInstruction(): void {
        console.log("HI");

        if (instructionBoard.classList.contains("is-hidden")) {
        instructionBoard.classList.remove("is-hidden");
        instructionBoard.classList.add("visible");
    } else if (instructionBoard.classList.contains("visible")) {
        instructionBoard.classList.remove("visible");
        instructionBoard.classList.add("is-hidden");
    }
}


  
    function drawUpdate(): void {
    doenerladen.draw();
    for (let moveable of moveables) {
        moveable.draw(); 
    } 
}
   

    function newCustomer(): void {
    
        if (test.length < 5) {
            test.push(new Human(new Vector(customerSpawnPoint.x, customerSpawnPoint.y), teamBColor, teamBMood));
            
            console.log("weg");
    }
}

    function moodCustomer(): void {

    teamBMood = "#1C5948";
    console.log("color");
} 


    finishOrder.addEventListener("click",  function(): void {
        console.log("red");
        customerLeave();
});
    function customerLeave(): void {
    test[0].receiveFood();
    console.log("weg");
}

    function update(): void {
    
    let frameTime: number = performance.now() - lastFrame;
    lastFrame = performance.now();
    for (let person of test) {
        person.move(frameTime / 1000);
        person.draw();
       
    }
    window.requestAnimationFrame(update);
}

   

    export function removeCustomer(_customer: Human): void {
        test.splice(test.indexOf(_customer), 1);
        
    }
    

    doneButtonSal.addEventListener("click", function (): void {
        if (buttonClickSal == 1) {
        gemuese.classList.add("is-hidden");
        canvas.classList.add("is-hidden");
        text.classList.remove("is-hidden");
        redo.classList.remove("is-hidden");
        
        window.alert("Ups dein Salat ist leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
    }
        buttonClickSal--;
    });

    doneButtonFlei.addEventListener("click", function (): void {
         if (buttonClickFlei == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
        
            window.alert("Ups dein Fleisch ist leer bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
         buttonClickFlei--;
        });

    doneButtonTom.addEventListener("click", function (): void {
        if (buttonClickTom == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            
            window.alert("Ups deine Tomaten sind leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
        buttonClickTom--;
        });

    doneButtonGur.addEventListener("click", function (): void {
        if (buttonClickGur == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
                
            window.alert("Ups deine Gurken sind leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        
            }
        buttonClickGur--;
            });

    doneButtonZwi.addEventListener("click", function (): void {
        if (buttonClickOn == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
                    
            window.alert("Ups deine Zwiebeln sind leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
            
            }
        buttonClickOn--;
            });

    neu.addEventListener("click", function (): void {
    location.reload();
});
    redo.addEventListener("click", function (): void {
    location.reload();
});

    plus.addEventListener("click", function(): void {
    let images: string [] =  new Array("Emojis/cucumber-apple.png", "Emojis/tomato-apple.png", "Emojis/cut-of-meat-apple.png", "Emojis/onion-apple.png", "Emojis/green-salad-apple.png");
    let index: number = 0;
    const zutat1: Element = (document.getElementById("random_img")as HTMLInputElement);
    
    index = Math.floor(Math.random() * images.length);
    (document.getElementById("random_img")as HTMLInputElement).src = images[index];
    zutat1.classList.remove("is-hidden");

    let images2: string [] =  new Array("Emojis/cucumber-apple.png", "Emojis/tomato-apple.png", "Emojis/cut-of-meat-apple.png", "Emojis/onion-apple.png", "Emojis/green-salad-apple.png");
    let index2: number = 0;
    const zutat2: Element = (document.getElementById("random_img2")as HTMLInputElement);
    
    index2 = Math.floor(Math.random() * images2.length);
    (document.getElementById("random_img2")as HTMLInputElement).src = images2[index2];
    zutat2.classList.remove("is-hidden");
    
    let images3: string [] =  new Array("Emojis/stuffed-flatbread-apple.png", "Emojis/burrito-apple.png", "Emojis/taco-apple.png" );
    let index3: number = 0;
    const zutat3: Element = (document.getElementById("random_img3")as HTMLInputElement);
    
    index3 = Math.floor(Math.random() * images3.length);
    (document.getElementById("random_img3")as HTMLInputElement).src = images3[index3];
    zutat3.classList.remove("is-hidden");

    
     });


    function staff(): void {
        
            dali = new Ali(new Vector(300, 300), teamAColor, tamAMood);
            sali = new Ali(new Vector(500, 600), teamAColor, tamAMood);
            moveables.push(dali);
            moveables.push(sali);
         
    }


    function moodStaff(): void {

            tamAMood = "#1C5948";
            console.log("color");
     }        
   


    function getUserPreferences(): void {

        let formData: FormData = new FormData(document.forms[0]); 
        teamAColor = <string>formData.get("memberColorPicker"); 
        teamBColor = <string>formData.get("customerColorPicker");
    }

    function handleCanvasClick(_event: MouseEvent): void {
        if (_event.shiftKey || _event.altKey) {
            mitarbeiter1(_event); 
        }
        mitarbeiters(_event);
             }

    function mitarbeiter1(_event: MouseEvent): void {
        let xpos: number = 0;
        let ypos: number = 0;
        if (_event.shiftKey) {
        if (_event.offsetX > 180 && _event.offsetX < 1030) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 90 && _event.offsetY < 700) {
            ypos = _event.offsetY;
        }

        if (xpos > 0 && ypos > 0) {
            sali.destination = new Vector(xpos, ypos);
            sali.startMoving = true;
            }
    }}
    
    function mitarbeiters(_event: MouseEvent): void {
        let xpos: number = 0;
        let ypos: number = 0;
        
        if (_event.altKey) {
        if (_event.offsetX > 130 && _event.offsetX < 1030) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 90 && _event.offsetY < 700) {
            ypos = _event.offsetY;
        }

        if (xpos > 0 && ypos > 0) {
            dali.destination = new Vector(xpos, ypos);
            dali.startMoving = true;
            //animation = true;
            console.log("HI");
        }}   
    }

    function animationUpdate(): void { 
        for ( let moveable of moveables) {
            moveable.move(150);
        }
    }
    
    

    
    }
   

    

    


