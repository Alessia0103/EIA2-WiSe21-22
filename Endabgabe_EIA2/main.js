"use strict";
var Doenerbude;
(function (Doenerbude) {
    let landingPage;
    let startbutton;
    let gemuese = document.getElementById("gemuese");
    let draggedPlayer;
    let listenToMouseMove = false; // For switching the player
    Doenerbude.playerInformation = [
        //Mitarbeiter
        { x: 135, y: 275, team: "Ali 1" },
        { x: 180, y: 100, team: "Ali 2" }
    ];
    let moveables = [];
    let allPlayers = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // Get the canvas and rendering context
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Doenerbude.crc2 = canvas.getContext("2d");
        landingPage = document.getElementById("settings");
        startbutton = document.getElementById("startbutton");
        startbutton.addEventListener("click", startSimulation);
        // Install event-listeners on canvas to be able to shoot the ball, switch players or see their details
        canvas.addEventListener("mousedown", handleCanvasClick);
        canvas.addEventListener("mousemove", dragPlayer);
        canvas.addEventListener("mouseup", switchPlayer);
    }
    function startSimulation() {
        // Hide settings container
        landingPage.style.display = "none";
        gemuese.classList.remove("is-hidden");
        Doenerbude.doenerladen = new Doenerbude.Laden();
        createPeopleonField();
        window.setInterval(drawUpdate, 20);
    }
    function createPeopleonField() {
        const mitarbeiter = new Doenerbude.Ali(new Doenerbude.Vector(300, 300));
        moveables.push(mitarbeiter);
    }
    function drawUpdate() {
        Doenerbude.doenerladen.draw();
        for (let moveable of moveables) {
            moveable.draw();
        }
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map