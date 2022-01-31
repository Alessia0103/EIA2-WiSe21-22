namespace Dönerbude {
    //Salat
    const salad: Element = (document.getElementById("salad-theke")as HTMLInputElement);
    const aufSalad: Element = (document.getElementById("buttonsal")as HTMLInputElement);
    const counter: Element = (document.getElementById("counter")as HTMLInputElement);
    var saladges: number = 10; 
    var iconsalad: boolean = false;
    var buttonSalad: boolean = false;

    //Zwiebel
    const zwiebel: Element = (document.getElementById("zwiebel-theke")as HTMLInputElement); 
    const aufZwieb: Element = (document.getElementById("buttonzwi")as HTMLInputElement);
    const counterZwi: Element = (document.getElementById("counterzwi")as HTMLInputElement);
    var zwiebelges: number = 10; 
    var iconzwi: boolean = false;
    var buttonZwi: boolean = false;

    //Gurke
    const gurke: Element = (document.getElementById("gurke-theke")as HTMLInputElement); 
    const aufGur: Element = (document.getElementById("buttongur")as HTMLInputElement);
    const countergur: Element = (document.getElementById("countergur")as HTMLInputElement);
    var gurkeges: number = 10; 
    var icongur: boolean = false;
    var buttongur: boolean = false;

    //Tomate
    const tomate: Element = (document.getElementById("tomate-theke")as HTMLInputElement); 
    const aufTom: Element = (document.getElementById("buttontom")as HTMLInputElement);
    const counterTom: Element = (document.getElementById("countertom")as HTMLInputElement);
    var tomateges: number = 10; 
    var icontom: boolean = false;
    var buttontom: boolean = false;

     //Fleisch
    const fleisch: Element = (document.getElementById("fleisch-theke")as HTMLInputElement); 
    const aufflei: Element = (document.getElementById("buttonflei")as HTMLInputElement);
    const counterflei: Element = (document.getElementById("counterflei")as HTMLInputElement);
    var fleischges: number = 10; 
    var iconflei: boolean = false;
    var buttonflei: boolean = false;

    fleisch.addEventListener("click", function (): void {
        //console.log("Hello world!");
            if (fleischges == 1) {
                iconflei = true;
                fleisch.classList.add("is-hidden");
                aufflei.classList.remove("is-hidden");
                window.alert("Bitte Fleisch Auffüllen!");
            }
            fleischges--;
            fleischElemente() ;
            buttonfleisch();
        });

    function fleischElemente(): void {
        (document.querySelector(".fleisch")as HTMLInputElement).innerHTML = "" + fleischges; }
            //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }

    function buttonfleisch(): void {
        if (iconflei == true) {
            //console.log("hi");
            buttonflei = true;
        }
    }
    aufflei.addEventListener("click", function (): void {
        if (buttonflei == true) {
            fleischges = 10;
            aufflei.classList.add("is-hidden");
            counterflei.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                fleisch.classList.remove("is-hidden");
                counterflei.classList.add("is-hidden");
                fleischElemente();
            },         5000);
        }
     }); 

    tomate.addEventListener("click", function (): void {
        //console.log("Hello world!");
            if (tomateges == 1) {
                icontom = true;
                tomate.classList.add("is-hidden");
                aufTom.classList.remove("is-hidden");
                window.alert("Bitte Tomaten Auffüllen!");
            }
            tomateges--;
            tomatenElemente() ;
            buttontomaten();
        });

    function tomatenElemente(): void {
        (document.querySelector(".tomate")as HTMLInputElement).innerHTML = "" + tomateges; }
            //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }

    function buttontomaten(): void {
        if (icontom == true) {
            //console.log("hi");
            buttontom = true;
        }
    }
    aufTom.addEventListener("click", function (): void {
        if (buttontom == true) {
            tomateges = 10;
            aufTom.classList.add("is-hidden");
            counterTom.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                tomate.classList.remove("is-hidden");
                counterTom.classList.add("is-hidden");
                tomatenElemente();
            },         5000);
        }
     }); 

    salad.addEventListener("click", function (): void {
        //console.log("Hello world!");
            if (saladges == 1) {
                iconsalad = true;
                salad.classList.add("is-hidden");
                aufSalad.classList.remove("is-hidden");
                window.alert("Bitte Salat Auffüllen!");
            }
            saladges--;
            ListederElemente() ;
            buttonsalat();
        });

    function ListederElemente(): void {
        (document.querySelector(".salad")as HTMLInputElement).innerHTML = "" + saladges; }
            //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }

    function buttonsalat(): void {
        if (iconsalad == true) {
            //console.log("hi");
            buttonSalad = true;
        }
    }
    aufSalad.addEventListener("click", function (): void {
        if (buttonSalad == true) {
            saladges = 10;
            aufSalad.classList.add("is-hidden");
            counter.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                salad.classList.remove("is-hidden");
                counter.classList.add("is-hidden");
                ListederElemente();
            },         5000);
        }
     }); 

     
     //Zwiebeln 
    zwiebel.addEventListener("click", function (): void {
        //console.log("Hello world!");
            if (zwiebelges == 1) {
                iconzwi = true;
                zwiebel.classList.add("is-hidden");
                aufZwieb.classList.remove("is-hidden");
                window.alert("Bitte Zwiebel Auffüllen!");
            }
            zwiebelges--;
            ZwiebelElemente() ;
            buttonZwiebel();
        });

    function ZwiebelElemente(): void {
        (document.querySelector(".zwiebel")as HTMLInputElement).innerHTML = "" + zwiebelges; }
            //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }

    function buttonZwiebel(): void {
        if (iconzwi == true) {
            //console.log("hi");
            buttonZwi = true;
        }
    }
    aufZwieb.addEventListener("click", function (): void {
        if (buttonZwi == true) {
            zwiebelges = 10;
            aufZwieb.classList.add("is-hidden");
            counterZwi.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                zwiebel.classList.remove("is-hidden");
                counterZwi.classList.add("is-hidden");
                ZwiebelElemente();
            },         5000);
        }
     }); 
      //Zwiebeln 
    gurke.addEventListener("click", function (): void {
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

    function GurkeElemente(): void {
        (document.querySelector(".gurke")as HTMLInputElement).innerHTML = "" + gurkeges; }
            //document.getElementById("salad").innerHTML = "Tasks for today: " + saladges; }

    function buttonGuerke(): void {
        if (icongur == true) {
            //console.log("hi");
            buttongur = true;
        }
    }
    aufGur.addEventListener("click", function (): void {
        if (buttongur == true) {
            gurkeges = 10;
            aufGur.classList.add("is-hidden");
            countergur.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                gurke.classList.remove("is-hidden");
                countergur.classList.add("is-hidden");
                GurkeElemente();
            },         5000);
        }
     }); 



}

