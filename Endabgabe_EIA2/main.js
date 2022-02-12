"use strict";
var Doenerbude;
(function (Doenerbude) {
    Doenerbude.test = [];
    let lastFrame;
    Doenerbude.dx = 0;
    Doenerbude.dy = 1;
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
    let tamAMood = "#2F7360";
    let buttonClickSal = 2;
    let buttonClickOn = 2;
    let buttonClickFlei = 2;
    let buttonClickTom = 2;
    let buttonClickGur = 2;
    let moveables = [];
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
        canvas.addEventListener("click", mitarbeiter1);
        canvas.addEventListener("click", handleCanvasClick);
    }
    function startSimulation() {
        // Hide settings container
        landingPage.style.display = "none";
        canvas.classList.remove("is-hidden");
        gemuese.classList.remove("is-hidden");
        moodStaff();
        getUserPreferences();
        Doenerbude.doenerladen = new Doenerbude.Laden();
        staff();
        Doenerbude.middleY += Doenerbude.dx;
        Doenerbude.middleX -= Doenerbude.dy;
        Doenerbude.customerSpawnPoint = new Doenerbude.Vector(1150, 300);
        lastFrame = performance.now();
        update();
        setInterval(customerLeave, 4100);
        newCustomer();
        window.setInterval(newCustomer, 3900);
        window.setInterval(drawUpdate, 20);
        window.setInterval(function () {
            animationUpdate();
        }, 20);
    }
    function drawUpdate() {
        Doenerbude.doenerladen.draw();
        for (let moveable of moveables) {
            moveable.draw();
        }
    }
    function newCustomer() {
        if (Doenerbude.test.length < 5) {
            Doenerbude.test.push(new Doenerbude.Human(new Doenerbude.Vector(Doenerbude.customerSpawnPoint.x, Doenerbude.customerSpawnPoint.y)));
            console.log("weg");
        }
    }
    function customerLeave() {
        Doenerbude.test[0].receiveFood();
        console.log("weg");
    }
    function update() {
        let frameTime = performance.now() - lastFrame;
        lastFrame = performance.now();
        for (let person of Doenerbude.test) {
            person.move(frameTime / 1000);
            person.draw();
        }
        window.requestAnimationFrame(update);
    }
    function removeCustomer(_customer) {
        Doenerbude.test.splice(Doenerbude.test.indexOf(_customer), 1);
    }
    Doenerbude.removeCustomer = removeCustomer;
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
    function staff() {
        Doenerbude.dali = new Doenerbude.Ali(new Doenerbude.Vector(300, 300), teamAColor, tamAMood);
        Doenerbude.sali = new Doenerbude.Ali(new Doenerbude.Vector(500, 600), teamAColor, tamAMood);
        moveables.push(Doenerbude.dali);
        moveables.push(Doenerbude.sali);
    }
    function moodStaff() {
        tamAMood = "#BF4A30";
        console.log("color");
    }
    function getUserPreferences() {
        let formData = new FormData(document.forms[0]);
        teamAColor = formData.get("memberColorPicker");
    }
    function handleCanvasClick(_event) {
        if (_event.shiftKey || _event.altKey) {
            mitarbeiter1(_event);
        }
        mitarbeiters(_event);
    }
    function mitarbeiter1(_event) {
        let xpos = 0;
        let ypos = 0;
        if (_event.shiftKey) {
            if (_event.offsetX > 180 && _event.offsetX < 1030) {
                xpos = _event.offsetX;
            }
            if (_event.offsetY > 90 && _event.offsetY < 700) {
                ypos = _event.offsetY;
            }
            if (xpos > 0 && ypos > 0) {
                Doenerbude.sali.destination = new Doenerbude.Vector(xpos, ypos);
                Doenerbude.sali.startMoving = true;
            }
        }
    }
    function mitarbeiters(_event) {
        let xpos = 0;
        let ypos = 0;
        if (_event.altKey) {
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
    }
    function animationUpdate() {
        for (let moveable of moveables) {
            moveable.move(150);
        }
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=main.js.map