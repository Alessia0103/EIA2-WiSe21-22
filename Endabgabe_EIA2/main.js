"use strict";
var Dönerbude;
(function (Dönerbude) {
    //Salat
    const salad = document.getElementById("salad-theke");
    const aufSalad = document.getElementById("buttonsal");
    const counter = document.getElementById("counter");
    var saladges = 10;
    var iconsalad = false;
    var buttonSalad = false;
    //Zwiebel
    const zwiebel = document.getElementById("zwiebel-theke");
    const aufZwieb = document.getElementById("buttonzwi");
    const counterZwi = document.getElementById("counterzwi");
    var zwiebelges = 10;
    var iconzwi = false;
    var buttonZwi = false;
    //Gurke
    const gurke = document.getElementById("gurke-theke");
    const aufGur = document.getElementById("buttongur");
    const countergur = document.getElementById("countergur");
    var gurkeges = 10;
    var icongur = false;
    var buttongur = false;
    //Tomate
    const tomate = document.getElementById("tomate-theke");
    const aufTom = document.getElementById("buttontom");
    const counterTom = document.getElementById("countertom");
    var tomateges = 10;
    var icontom = false;
    var buttontom = false;
    //Fleisch
    const fleisch = document.getElementById("fleisch-theke");
    const aufflei = document.getElementById("buttonflei");
    const counterflei = document.getElementById("counterflei");
    var fleischges = 10;
    var iconflei = false;
    var buttonflei = false;
    fleisch.addEventListener("click", function () {
        //console.log("Hello world!");
        if (fleischges == 1) {
            iconflei = true;
            fleisch.classList.add("is-hidden");
            aufflei.classList.remove("is-hidden");
            window.alert("Bitte Fleisch Auffüllen!");
        }
        fleischges--;
        fleischElemente();
        buttonfleisch();
    });
    function fleischElemente() {
        document.querySelector(".fleisch").innerHTML = "" + fleischges;
    }
    //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }
    function buttonfleisch() {
        if (iconflei == true) {
            //console.log("hi");
            buttonflei = true;
        }
    }
    aufflei.addEventListener("click", function () {
        if (buttonflei == true) {
            fleischges = 10;
            aufflei.classList.add("is-hidden");
            counterflei.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                fleisch.classList.remove("is-hidden");
                counterflei.classList.add("is-hidden");
                fleischElemente();
            }, 5000);
        }
    });
    tomate.addEventListener("click", function () {
        //console.log("Hello world!");
        if (tomateges == 1) {
            icontom = true;
            tomate.classList.add("is-hidden");
            aufTom.classList.remove("is-hidden");
            window.alert("Bitte Tomaten Auffüllen!");
        }
        tomateges--;
        tomatenElemente();
        buttontomaten();
    });
    function tomatenElemente() {
        document.querySelector(".tomate").innerHTML = "" + tomateges;
    }
    //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }
    function buttontomaten() {
        if (icontom == true) {
            //console.log("hi");
            buttontom = true;
        }
    }
    aufTom.addEventListener("click", function () {
        if (buttontom == true) {
            tomateges = 10;
            aufTom.classList.add("is-hidden");
            counterTom.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                tomate.classList.remove("is-hidden");
                counterTom.classList.add("is-hidden");
                tomatenElemente();
            }, 5000);
        }
    });
    salad.addEventListener("click", function () {
        //console.log("Hello world!");
        if (saladges == 1) {
            iconsalad = true;
            salad.classList.add("is-hidden");
            aufSalad.classList.remove("is-hidden");
            window.alert("Bitte Salat Auffüllen!");
        }
        saladges--;
        ListederElemente();
        buttonsalat();
    });
    function ListederElemente() {
        document.querySelector(".salad").innerHTML = "" + saladges;
    }
    //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }
    function buttonsalat() {
        if (iconsalad == true) {
            //console.log("hi");
            buttonSalad = true;
        }
    }
    aufSalad.addEventListener("click", function () {
        if (buttonSalad == true) {
            saladges = 10;
            aufSalad.classList.add("is-hidden");
            counter.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                salad.classList.remove("is-hidden");
                counter.classList.add("is-hidden");
                ListederElemente();
            }, 5000);
        }
    });
    //Zwiebeln 
    zwiebel.addEventListener("click", function () {
        //console.log("Hello world!");
        if (zwiebelges == 1) {
            iconzwi = true;
            zwiebel.classList.add("is-hidden");
            aufZwieb.classList.remove("is-hidden");
            window.alert("Bitte Zwiebel Auffüllen!");
        }
        zwiebelges--;
        ZwiebelElemente();
        buttonZwiebel();
    });
    function ZwiebelElemente() {
        document.querySelector(".zwiebel").innerHTML = "" + zwiebelges;
    }
    //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }
    function buttonZwiebel() {
        if (iconzwi == true) {
            //console.log("hi");
            buttonZwi = true;
        }
    }
    aufZwieb.addEventListener("click", function () {
        if (buttonZwi == true) {
            zwiebelges = 10;
            aufZwieb.classList.add("is-hidden");
            counterZwi.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                zwiebel.classList.remove("is-hidden");
                counterZwi.classList.add("is-hidden");
                ZwiebelElemente();
            }, 5000);
        }
    });
    //Zwiebeln 
    gurke.addEventListener("click", function () {
        //console.log("Hello world!");
        if (gurkeges == 1) {
            icongur = true;
            gurke.classList.add("is-hidden");
            aufGur.classList.remove("is-hidden");
            window.alert("Bitte Gurken Auffüllen!");
        }
        gurkeges--;
        GurkeElemente();
        buttonGuerke();
    });
    function GurkeElemente() {
        document.querySelector(".gurke").innerHTML = "" + gurkeges;
    }
    //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }
    function buttonGuerke() {
        if (icongur == true) {
            //console.log("hi");
            buttongur = true;
        }
    }
    aufGur.addEventListener("click", function () {
        if (buttongur == true) {
            gurkeges = 10;
            aufGur.classList.add("is-hidden");
            countergur.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                gurke.classList.remove("is-hidden");
                countergur.classList.add("is-hidden");
                GurkeElemente();
            }, 5000);
        }
    });
})(Dönerbude || (Dönerbude = {}));
//# sourceMappingURL=main.js.map