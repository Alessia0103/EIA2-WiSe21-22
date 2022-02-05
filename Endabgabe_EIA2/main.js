"use strict";
var Doenerbude;
(function (Doenerbude) {
    let landingPage;
    let startbutton;
    const neu = document.getElementById("redo");
    const gemuese = document.getElementById("gemuese");
    const canvas = document.getElementById("canvas");
    const redo = document.getElementById("redo-newGame");
    const doneButtonFlei = document.getElementById("buttonflei");
    const doneButtonSal = document.getElementById("buttonsal");
    const doneButtonTom = document.getElementById("buttontom");
    const doneButtonGur = document.getElementById("buttongur");
    const doneButtonZwi = document.getElementById("buttonzwi");
    const plus = document.getElementById("plus");
    const text = document.getElementById("text-redo");
    let images = ["salad.png", "onion.png", "cucumber.png", "tomato.png", "meat.png"];
    let image = [Math.floor(Math.random() * images.length)];
    let buttonClick = 2;
    let buttonDone = false;
    let pushed = false;
    var zutate = [];
    Doenerbude.playerInformation = [
        //Mitarbeiter
        { x: 135, y: 275, team: "Ali 1" },
        { x: 180, y: 100, team: "Ali 2" }
    ];
    let moveables = [];
    //let allPlayers: Ali[] = [];
    plus.addEventListener("click", function () {
        console.log("HI");
        let imag = document.getElementById("ausgabe").innerHTML = "<img src=" + image + ">";
    });
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
        //canvas.addEventListener("mousedown", handleCanvasClick); 
        //canvas.addEventListener("mousemove", dragPlayer);
        //canvas.addEventListener("mouseup", switchPlayer);
    }
    function startSimulation() {
        // Hide settings container
        landingPage.style.display = "none";
        canvas.classList.remove("is-hidden");
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
    doneButtonSal.addEventListener("click", function () {
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
    doneButtonFlei.addEventListener("click", function () {
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
    doneButtonTom.addEventListener("click", function () {
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
    doneButtonGur.addEventListener("click", function () {
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
    doneButtonZwi.addEventListener("click", function () {
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
    neu.addEventListener("click", function () {
        location.reload();
    });
    redo.addEventListener("click", function () {
        location.reload();
    });
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map