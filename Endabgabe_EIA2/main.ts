namespace  Doenerbude {
    export let crc2: CanvasRenderingContext2D;
    export let dali: Ali | null;
    export let doenerladen: Laden;

    let landingPage: HTMLDivElement;
    let startbutton: HTMLDivElement;
    let gemuese: Element = (document.getElementById("gemuese")as HTMLInputElement);
    let draggedPlayer: Ali | undefined;
    let listenToMouseMove: boolean = false; // For switching the player

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
            canvas.addEventListener("mousedown", handleCanvasClick); 
            canvas.addEventListener("mousemove", dragPlayer);
            canvas.addEventListener("mouseup", switchPlayer);



    }
    function startSimulation(): void {

        // Hide settings container
        landingPage.style.display = "none";

        
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
    
}}
