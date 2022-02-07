"use strict";
var Doenerbude;
(function (Doenerbude) {
    //export let animation: boolean = false;
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
    let teamAColor = "66b2ff";
    //let teamBColor: string = "ff3333";
    let buttonClick = 2;
    let buttonDone = false;
    Doenerbude.playerInformation = [
        //Mitarbeiter
        { x: 135, y: 275, team: "mitarbeiter" },
        { x: 180, y: 100, team: "mitarbeiter" }
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
        canvas.addEventListener("click", handleCanvasClick);
        //canvas.addEventListener("mousemove", dragPlayer);
        //canvas.addEventListener("mouseup", switchPlayer);
    }
    function startSimulation() {
        // Hide settings container
        landingPage.style.display = "none";
        canvas.classList.remove("is-hidden");
        gemuese.classList.remove("is-hidden");
        getUserPreferences();
        Doenerbude.doenerladen = new Doenerbude.Laden();
        createpeople();
        window.setInterval(drawUpdate, 20);
        window.setInterval(function () {
            //if (animation == true) 
            animationUpdate();
        }, 20);
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
    plus.addEventListener("click", function () {
        let images = new Array("cucumber.png", "tomato.png", "meat.png", "onion.png", "salad.png");
        let index = 0;
        const zutat1 = document.getElementById("random_img");
        index = Math.floor(Math.random() * images.length);
        document.getElementById("random_img").src = images[index];
        zutat1.classList.remove("is-hidden");
        let images2 = new Array("salad.png", "cucumber.png", "tomato.png", "meat.png", "onion.png");
        let index2 = 0;
        const zutat2 = document.getElementById("random_img2");
        index2 = Math.floor(Math.random() * images2.length);
        document.getElementById("random_img2").src = images2[index2];
        zutat2.classList.remove("is-hidden");
    });
    function getUserPreferences() {
        let formData = new FormData(document.forms[0]);
        teamAColor = formData.get("memberColorPicker");
        //teamBColor = <string>formData.get("TeamBColorPicker"); 
    }
    function createpeople() {
        for (let i = 0; i < 3; i++) {
            Doenerbude.dali = new Doenerbude.Ali(new Doenerbude.Vector(300, 300), teamAColor);
            moveables.push(Doenerbude.dali);
            allPlayers.push(Doenerbude.dali);
        }
    }
    function handleCanvasClick(_event) {
        mitarbeiters(_event);
    }
    function mitarbeiters(_event) {
        let xpos = 0;
        let ypos = 0;
        if (_event.offsetX > 180 && _event.offsetX < 1030) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 0 && _event.offsetY < 700) {
            ypos = _event.offsetY;
        }
        if (xpos > 0 && ypos > 0) {
            Doenerbude.dali.destination = new Doenerbude.Vector(xpos, ypos);
            Doenerbude.dali.startMoving = true;
            //animation = true;
            console.log("HI");
        }
    }
    function animationUpdate() {
        for (let moveable of moveables) {
            moveable.move();
        }
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map