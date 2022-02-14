"use strict";
var Doenerbude;
(function (Doenerbude) {
    //Fleisch
    const fleisch = document.getElementById("fleisch-theke");
    const aufflei = document.getElementById("buttonflei");
    const counterflei = document.getElementById("counterflei");
    var fleischzahl = 0;
    var fleischges = 10;
    var fleischkitchen = 10;
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
        fleischzahl++;
        fleischges--;
        fleischElemente();
        fleischele();
        buttonfleisch();
        fleischzah();
    });
    function fleischElemente() {
        document.querySelector(".fleisch").innerHTML = "" + fleischges;
    }
    function fleischzah() {
        document.querySelector(".fleischzahl").innerHTML = "Anzahl Fleisch verkauft: " + fleischzahl;
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
            fleischkitchen = 0;
            aufflei.classList.add("is-hidden");
            counterflei.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                fleisch.classList.remove("is-hidden");
                counterflei.classList.add("is-hidden");
                fleischElemente();
                fleischele();
            }, 5000);
        }
    });
    function fleischele() {
        document.querySelector(".fleischküche").innerHTML = "" + fleischkitchen;
    }
    //Tomate
    const tomate = document.getElementById("tomate-theke");
    const aufTom = document.getElementById("buttontom");
    const counterTom = document.getElementById("countertom");
    var tomatezahl = 0;
    var tomatekitchen = 10;
    var tomateges = 10;
    var icontom = false;
    var buttontom = false;
    tomate.addEventListener("click", function () {
        //console.log("Hello world!");
        if (tomateges == 1) {
            icontom = true;
            tomate.classList.add("is-hidden");
            aufTom.classList.remove("is-hidden");
            window.alert("Bitte Tomaten Auffüllen!");
        }
        tomatezahl++;
        tomateges--;
        tomatenZah();
        tomatenElemente();
        buttontomaten();
    });
    function tomatenElemente() {
        document.querySelector(".tomate").innerHTML = "" + tomateges;
    }
    function tomatenZah() {
        document.querySelector(".tomatezahl").innerHTML = "Anzahl Tomaten verkauft: " + tomatezahl;
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
            tomatekitchen = 0;
            aufTom.classList.add("is-hidden");
            counterTom.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                tomate.classList.remove("is-hidden");
                counterTom.classList.add("is-hidden");
                tomatenElemente();
                tomatenele();
            }, 5000);
        }
    });
    function tomatenele() {
        document.querySelector(".tomateküche").innerHTML = "" + tomatekitchen;
    }
    //Salat
    const salad = document.getElementById("salad-theke");
    const aufSalad = document.getElementById("buttonsal");
    const counter = document.getElementById("counter");
    var saladzahl = 0;
    var saladges = 10;
    var saladkitchen = 10;
    var iconsalad = false;
    var buttonSalad = false;
    salad.addEventListener("click", function () {
        //console.log("Hello world!");
        if (saladges == 1) {
            iconsalad = true;
            salad.classList.add("is-hidden");
            aufSalad.classList.remove("is-hidden");
            window.alert("Bitte Salat Auffüllen!");
        }
        saladzahl++;
        saladges--;
        saladzah();
        ListederElemente();
        buttonsalat();
    });
    function ListederElemente() {
        document.querySelector(".salad").innerHTML = "" + saladges;
    }
    function saladzah() {
        document.querySelector(".saladzahl").innerHTML = "Anzahl Salat verkauft: " + saladzahl;
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
            saladkitchen = 0;
            aufSalad.classList.add("is-hidden");
            counter.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                salad.classList.remove("is-hidden");
                counter.classList.add("is-hidden");
                ListederElemente();
                ListederEle();
            }, 5000);
        }
    });
    function ListederEle() {
        document.querySelector(".saladküche").innerHTML = "" + saladkitchen;
    }
    //Zwiebel
    const zwiebel = document.getElementById("zwiebel-theke");
    const aufZwieb = document.getElementById("buttonzwi");
    const counterZwi = document.getElementById("counterzwi");
    var zwiebelzahl = 0;
    var zwiebelges = 10;
    var zwiebelnkitchen = 10;
    var iconzwi = false;
    var buttonZwi = false;
    //Zwiebeln 
    zwiebel.addEventListener("click", function () {
        //console.log("Hello world!");
        if (zwiebelges == 1) {
            iconzwi = true;
            zwiebel.classList.add("is-hidden");
            aufZwieb.classList.remove("is-hidden");
            window.alert("Bitte Zwiebel Auffüllen!");
        }
        zwiebelzahl++;
        zwiebelges--;
        ZwiebelZah();
        ZwiebelElemente();
        buttonZwiebel();
    });
    function ZwiebelElemente() {
        document.querySelector(".zwiebel").innerHTML = "" + zwiebelges;
    }
    function ZwiebelZah() {
        document.querySelector(".zwiebelzahl").innerHTML = "Anzahl Zwiebel verkauft: " + zwiebelzahl;
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
            zwiebelnkitchen = 0;
            aufZwieb.classList.add("is-hidden");
            counterZwi.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                zwiebel.classList.remove("is-hidden");
                counterZwi.classList.add("is-hidden");
                ZwiebelElemente();
                ZwiebelEle();
            }, 5000);
        }
    });
    function ZwiebelEle() {
        document.querySelector(".zwiebelküche").innerHTML = "" + zwiebelnkitchen;
    }
    //Gurke
    const gurke = document.getElementById("gurke-theke");
    const aufGur = document.getElementById("buttongur");
    const countergur = document.getElementById("countergur");
    var gurkezahl = 0;
    var gurkeges = 10;
    var gurkekitchen = 10;
    var icongur = false;
    var buttongur = false;
    //Gurke
    gurke.addEventListener("click", function () {
        //console.log("Hello world!");
        if (gurkeges == 1) {
            icongur = true;
            gurke.classList.add("is-hidden");
            aufGur.classList.remove("is-hidden");
            window.alert("Bitte Gurken Auffüllen!");
        }
        gurkezahl++;
        gurkeges--;
        GurkeZah();
        GurkeElemente();
        buttonGuerke();
    });
    function GurkeElemente() {
        document.querySelector(".gurke").innerHTML = "" + gurkeges;
    }
    function GurkeZah() {
        document.querySelector(".gurkezahl").innerHTML = "Anzahl Gurken verkauft: " + gurkezahl;
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
            gurkekitchen = 0;
            aufGur.classList.add("is-hidden");
            countergur.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                gurke.classList.remove("is-hidden");
                countergur.classList.add("is-hidden");
                GurkeElemente();
                GurkeEle();
            }, 5000);
        }
    });
    function GurkeEle() {
        document.querySelector(".gurkeküche").innerHTML = "" + gurkekitchen;
    }
    Doenerbude.doener = document.getElementById("doener");
    Doenerbude.yufka = document.getElementById("yufka");
    Doenerbude.taco = document.getElementById("taco");
    var doenerzahl = 0;
    var yufkazahl = 0;
    var tacozahl = 0;
    var totaleges;
    Doenerbude.doener.addEventListener("click", function () {
        doenerzahl++;
        totaleges = (doenerzahl) * 4 + (yufkazahl) * 3 + (tacozahl) * 2;
        doenerele();
        total();
    });
    function doenerele() {
        document.querySelector(".doenerzahl").innerHTML = "Anzahl Döner verkauft: " + doenerzahl;
    }
    Doenerbude.yufka.addEventListener("click", function () {
        yufkazahl++;
        totaleges = (doenerzahl) * 4 + (yufkazahl) * 3 + (tacozahl) * 2;
        yufkaele();
        total();
    });
    function yufkaele() {
        document.querySelector(".yufkazahl").innerHTML = "Anzahl Yufka verkauft: " + yufkazahl;
    }
    Doenerbude.taco.addEventListener("click", function () {
        tacozahl++;
        totaleges = (doenerzahl) * 4 + (yufkazahl) * 3 + (tacozahl) * 2;
        tacoele();
        total();
    });
    function tacoele() {
        document.querySelector(".tacozahl").innerHTML = "Anzahl Taco verkauft: " + tacozahl;
    }
    function total() {
        document.querySelector(".total").innerHTML = "Total: " + totaleges + " Euro";
    }
})(Doenerbude || (Doenerbude = {}));
//# sourceMappingURL=gem%C3%BCse.js.map