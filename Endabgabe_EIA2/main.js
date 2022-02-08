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
    let buttonClickSal = 2;
    let buttonClickOn = 2;
    let buttonClickFlei = 2;
    let buttonClickTom = 2;
    let buttonClickGur = 2;
    Doenerbude.playerInformation = [
        //Mitarbeiter
        { x: 135, y: 275, team: "mitarbeiter" },
        { x: 180, y: 100, team: "mitarbeiter" }
    ];
    let moveables = [];
    //let allPlayers: Ali[] = [];
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
        //createpeople();
        Doenerbude.dali = new Doenerbude.Ali(new Doenerbude.Vector(300, 300), teamAColor);
        moveables.push(Doenerbude.dali);
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
        if (buttonClickSal == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            window.alert("Ups dein Salat ist leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
        buttonClickSal--;
    });
    doneButtonFlei.addEventListener("click", function () {
        if (buttonClickFlei == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            window.alert("Ups dein Fleisch ist leer bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
        buttonClickFlei--;
    });
    doneButtonTom.addEventListener("click", function () {
        if (buttonClickTom == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            window.alert("Ups deine Tomaten sind leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
        buttonClickTom--;
    });
    doneButtonGur.addEventListener("click", function () {
        if (buttonClickGur == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            window.alert("Ups deine Gurken sind leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
        buttonClickGur--;
    });
    doneButtonZwi.addEventListener("click", function () {
        if (buttonClickOn == 1) {
            gemuese.classList.add("is-hidden");
            canvas.classList.add("is-hidden");
            text.classList.remove("is-hidden");
            redo.classList.remove("is-hidden");
            window.alert("Ups deine Zwiebeln sind leer, bitte Lade die Seite neu um zur Startseite zu gelangen!");
        }
        buttonClickOn--;
    });
    neu.addEventListener("click", function () {
        location.reload();
    });
    redo.addEventListener("click", function () {
        location.reload();
    });
    plus.addEventListener("click", function () {
        let images = new Array("Emojis/cucumber-apple.png", "Emojis/tomato-apple.png", "Emojis/cut-of-meat-apple.png", "Emojis/onion-apple.png", "Emojis/green-salad-apple.png");
        let index = 0;
        const zutat1 = document.getElementById("random_img");
        index = Math.floor(Math.random() * images.length);
        document.getElementById("random_img").src = images[index];
        zutat1.classList.remove("is-hidden");
        let images2 = new Array("Emojis/cucumber-apple.png", "Emojis/tomato-apple.png", "Emojis/cut-of-meat-apple.png", "Emojis/onion-apple.png", "Emojis/green-salad-apple.png");
        let index2 = 0;
        const zutat2 = document.getElementById("random_img2");
        index2 = Math.floor(Math.random() * images2.length);
        document.getElementById("random_img2").src = images2[index2];
        zutat2.classList.remove("is-hidden");
        let images3 = new Array("Emojis/stuffed-flatbread-apple.png", "Emojis/burrito-apple.png", "Emojis/taco-apple.png");
        let index3 = 0;
        const zutat3 = document.getElementById("random_img3");
        index3 = Math.floor(Math.random() * images3.length);
        document.getElementById("random_img3").src = images3[index3];
        zutat3.classList.remove("is-hidden");
    });
    function getUserPreferences() {
        let formData = new FormData(document.forms[0]);
        teamAColor = formData.get("memberColorPicker");
        //teamBColor = <string>formData.get("TeamBColorPicker"); 
    }
    //function createpeople(): void {
    // for (let i: number = 0; i < 3; i++) {
    //allPlayers.push(dali);
    //}}
    function handleCanvasClick(_event) {
        mitarbeiters(_event);
    }
    function mitarbeiters(_event) {
        let xpos = 0;
        let ypos = 0;
        if (_event.offsetX > 180 && _event.offsetX < 1030) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 90 && _event.offsetY < 700) {
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