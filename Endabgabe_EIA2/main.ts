namespace  Doenerbude {
    export let crc2: CanvasRenderingContext2D;
    export let dali: Ali | null;
    export let doenerladen: Laden;

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
    let images: string[] = ["salad.png", "onion.png", "cucumber.png", "tomato.png", "meat.png" ];
    let image: number[] = [Math.floor(Math.random() *  images.length)];
    let buttonClick: number = 2;
    let buttonDone: Boolean = false;
    let pushed: Boolean = false;

    var zutate: number[] = [];
    //let draggedPlayer: Ali | undefined;
    //let listenToMouseMove: boolean = false; // For switching the player

    export interface PlayerInformation {
        x: number;
        y: number;
        team: string;
    }
    export let playerInformation: PlayerInformation[] = [
    //Mitarbeiter
    { x: 135, y: 275, team: "Ali 1" },
    { x: 180, y: 100, team: "Ali 2" }
    ];

    let moveables: Moveable[] = [];
    //let allPlayers: Ali[] = [];
    
    plus.addEventListener("click", function(): void {
    console.log("HI");

    let imag: HTMLElement | null = document.getElementById("ausgabe").innerHTML = "<img src=" + image + ">"; 
     });

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
            //canvas.addEventListener("mousedown", handleCanvasClick); 
            //canvas.addEventListener("mousemove", dragPlayer);
            //canvas.addEventListener("mouseup", switchPlayer);
    }

   

    function startSimulation(): void {

        // Hide settings container
        landingPage.style.display = "none";
        canvas.classList.remove("is-hidden");
        
        gemuese.classList.remove("is-hidden");
        doenerladen = new Laden();
        
        
        createPeopleonField();
        window.setInterval(drawUpdate, 20);
}
    function createPeopleonField(): void {
    const mitarbeiter: Ali = new Ali(new Vector(300, 300));
    moveables.push(mitarbeiter);
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
    
    
    
    }
   

    

    


