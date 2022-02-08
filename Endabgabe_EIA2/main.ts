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
    let buttonClickSal: number = 2;
   
    let buttonClickOn: number = 2;
  
    let buttonClickFlei: number = 2;
   
    let buttonClickTom: number = 2;
    
    let buttonClickGur: number = 2;
   
    
    //let pushed: Boolean = false;
    //let draggedPlayer: Ali | undefined;
    //let listenToMouseMove: boolean = false; // For switching the player

    export interface PlayerInformation {
        x: number;
        y: number;
        team: string;
    }
    export let playerInformation: PlayerInformation[] = [
    //Mitarbeiter
    { x: 135, y: 275, team: "mitarbeiter" },
    { x: 180, y: 100, team: "mitarbeiter" }
    ];

    let moveables: Moveable[] = [];
    //let allPlayers: Ali[] = [];
    
    

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
        
        //createpeople();

        dali = new Ali(new Vector(300, 300), teamAColor);
        moveables.push(dali); 

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

    function getUserPreferences(): void {

        let formData: FormData = new FormData(document.forms[0]); 
        teamAColor = <string>formData.get("memberColorPicker"); 
        //teamBColor = <string>formData.get("TeamBColorPicker"); 
    }

    //function createpeople(): void {
       // for (let i: number = 0; i < 3; i++) {
            //allPlayers.push(dali);

   //}}
    function handleCanvasClick(_event: MouseEvent): void {
            mitarbeiters(_event);
             }
    

    function mitarbeiters(_event: MouseEvent): void {
        let xpos: number = 0;
        let ypos: number = 0;

        if (_event.offsetX > 180 && _event.offsetX < 1030) {
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
        }

    }

    function animationUpdate(): void { 
        for ( let moveable of moveables) {
            moveable.move();
        }
    }
    

    
    }
   

    

    


