namespace  Doenerbude {
    export let crc2: CanvasRenderingContext2D;
    export let dali: Ali;
    export let doenerladen: Laden;
    //export let animation: boolean = false;

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
    const plus: Element = (document.getElementById("plus")as HTMLInputElement);
    const text: Element = (document.getElementById("text-redo")as HTMLInputElement);
    let teamAColor: string = "66b2ff";
    //let teamBColor: string = "ff3333";
    let buttonClick: number = 2;
    let buttonDone: Boolean = false;
    //let pushed: Boolean = false;
    //let draggedPlayer: Ali | undefined;
    //let listenToMouseMove: boolean = false; // For switching the player

    export interface PlayerInformation {
        x: Number;
        y: Number;
        team: string;
    }
    export let playerInformation: PlayerInformation[] = [
    //Mitarbeiter
    { x: 135, y: 275, team: "mitarbeiter" },
    { x: 180, y: 100, team: "mitarbeiter" }
    ];

    let moveables: Moveable[] = [];
    let allPlayers: Ali[] = [];
    
    

    window.addEventListener("load", handleLoad); 

    function handleLoad(): void {

            // Get the canvas and rendering context
            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

            landingPage = <HTMLDivElement>document.getElementById("settings");
            startbutton = <HTMLDivElement>document.getElementById("startbutton");

            startbutton.addEventListener("click", startSimulation);

             // Install event-listeners on canvas to be able to shoot the ball, switch players or see their details
            canvas.addEventListener("click", handleCanvasClick); 
            
            //canvas.addEventListener("mousemove", dragPlayer);
            //canvas.addEventListener("mouseup", switchPlayer);
    }

   

    function startSimulation(): void {

        // Hide settings container
        landingPage.style.display = "none";
        canvas.classList.remove("is-hidden");
        
        gemuese.classList.remove("is-hidden");

        getUserPreferences();

        doenerladen = new Laden();
        
        createpeople();

        window.setInterval(drawUpdate, 20);

        window.setInterval(function (): void {
            //if (animation == true) 
               animationUpdate();
        },                 20);
}
  
    function drawUpdate(): void {

    doenerladen.draw();

    for (let moveable of moveables) {
        moveable.draw(); 
    
    }
    
}

    doneButtonSal.addEventListener("click", function (): void {
       

        if (buttonClick == 1) {
        buttonDone = true;
        gemuese.classList.add("is-hidden");
        canvas.classList.add("is-hidden");
        text.classList.remove("is-hidden");
        redo.classList.remove("is-hidden");
        
        window.alert("Die Simulation ist leider vorbei, bitte Lade die Seite neu um zur Startseite zu gelangen!");

    }
        buttonClick--;
    });

    doneButtonFlei.addEventListener("click", function (): void {

    if (buttonClick == 1) {
        buttonDone = true;
        gemuese.classList.add("is-hidden");
        canvas.classList.add("is-hidden");
        text.classList.remove("is-hidden");
        redo.classList.remove("is-hidden");
        
        window.alert("Die Simulation ist leider vorbei, bitte Lade die Seite neu um zur Startseite zu gelangen!");

    }
    buttonClick--;
    });

    doneButtonTom.addEventListener("click", function (): void {

        if (buttonClick == 1) {
            buttonDone = true;
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            
            window.alert("Die Simulation ist leider vorbei, bitte Lade die Seite neu um zur Startseite zu gelangen!");
    
        }
        buttonClick--;
        });

    doneButtonGur.addEventListener("click", function (): void {

            if (buttonClick == 1) {
                buttonDone = true;
                gemuese.classList.add("is-hidden");
                canvas.classList.add("is-hidden");
                text.classList.remove("is-hidden");
                redo.classList.remove("is-hidden");
                
                window.alert("Die Simulation ist leider vorbei, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        
            }
            buttonClick--;
            });
    doneButtonZwi.addEventListener("click", function (): void {

            if (buttonClick == 1) {
                buttonDone = true;
                gemuese.classList.add("is-hidden");
                canvas.classList.add("is-hidden");
                text.classList.remove("is-hidden");
                redo.classList.remove("is-hidden");
                    
                window.alert("Die Simulation ist leider vorbei, bitte Lade die Seite neu um zur Startseite zu gelangen!");
            
            }
            buttonClick--;
            });

    neu.addEventListener("click", function (): void {
    location.reload();
});
    redo.addEventListener("click", function (): void {
    location.reload();
});

    plus.addEventListener("click", function(): void {
    let images: string [] =  new Array("cucumber.png", "tomato.png", "meat.png", "onion.png", "salad.png");
    let index: number = 0;
    const zutat1: Element = (document.getElementById("random_img")as HTMLInputElement);
    
    index = Math.floor(Math.random() * images.length);
    (document.getElementById("random_img")as HTMLInputElement).src = images[index];
    zutat1.classList.remove("is-hidden");

    let images2: string [] =  new Array("salad.png", "cucumber.png", "tomato.png", "meat.png", "onion.png");
    let index2: number = 0;
    const zutat2: Element = (document.getElementById("random_img2")as HTMLInputElement);
    
    index2 = Math.floor(Math.random() * images2.length);
    (document.getElementById("random_img2")as HTMLInputElement).src = images2[index2];
    zutat2.classList.remove("is-hidden");
   

    
     });

    function getUserPreferences(): void {

        let formData: FormData = new FormData(document.forms[0]); 
        teamAColor = <string>formData.get("memberColorPicker"); 
        //teamBColor = <string>formData.get("TeamBColorPicker"); 
    }

    function createpeople(): void {
        for (let i: number = 0; i < 3; i++) {

            dali  = new Ali(new Vector(300, 300), teamAColor);
            
            moveables.push(dali); 
            allPlayers.push(dali);

    }}
    function handleCanvasClick(_event: MouseEvent): void {
            mitarbeiters(_event);
             }
    

    function mitarbeiters(_event: MouseEvent): void {
        let xpos: number = 0;
        let ypos: number = 0;

        if (_event.offsetX > 180 && _event.offsetX < 1030) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 0 && _event.offsetY < 700) {
            ypos = _event.offsetY;
        }

        if (xpos > 0 && ypos > 0) {
            dali.destination = new Vector(xpos, ypos);
            dali.startMoving = true;
            //animation = true;
            console.log("HI");
        }

    }

    function animationUpdate(): void { 
        for ( let moveable of moveables) {
            moveable.move();
        }
    }
    

    
    }
   

    

    


