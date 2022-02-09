namespace Doenerbude {

    
   //Fleisch
    const fleisch: Element = (document.getElementById("fleisch-theke")as HTMLInputElement); 
    const aufflei: Element = (document.getElementById("buttonflei")as HTMLInputElement);
    const counterflei: Element = (document.getElementById("counterflei")as HTMLInputElement);
    var fleischzahl: number = 0;
    var fleischges: number = 10; 
    var fleischkitchen: number = 10;
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
            fleischzahl++;
            fleischges--;
            fleischElemente() ;
            fleischele();
            buttonfleisch();
            fleischzah();
        });

    function fleischElemente(): void {
        (document.querySelector(".fleisch")as HTMLInputElement).innerHTML = "" + fleischges; }
    function fleischzah(): void {
            (document.querySelector(".fleischzahl")as HTMLInputElement).innerHTML = "Anzahl Fleisch verkauft: " + fleischzahl; }
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
            fleischkitchen = 0;
            aufflei.classList.add("is-hidden");
            counterflei.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                fleisch.classList.remove("is-hidden");
                counterflei.classList.add("is-hidden");
                fleischElemente();
                fleischele();
            },         5000);
        }
     }); 

    function fleischele(): void {
        (document.querySelector(".fleischküche")as HTMLInputElement).innerHTML = "" + fleischkitchen; }
 //Tomate
    const tomate: Element = (document.getElementById("tomate-theke")as HTMLInputElement); 
    const aufTom: Element = (document.getElementById("buttontom")as HTMLInputElement);
    const counterTom: Element = (document.getElementById("countertom")as HTMLInputElement);
    var tomatezahl: number = 0;
    var tomatekitchen: number = 10;
    var tomateges: number = 10; 
    var icontom: boolean = false;
    var buttontom: boolean = false;

    tomate.addEventListener("click", function (): void {
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
            tomatenElemente() ;
            buttontomaten();
        });

    function tomatenElemente(): void {
        (document.querySelector(".tomate")as HTMLInputElement).innerHTML = "" + tomateges; }
    function tomatenZah(): void {
        (document.querySelector(".tomatezahl")as HTMLInputElement).innerHTML = "Anzahl Tomaten verkauft: " + tomatezahl; }
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
            tomatekitchen = 0;
            aufTom.classList.add("is-hidden");
            counterTom.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                tomate.classList.remove("is-hidden");
                counterTom.classList.add("is-hidden");
                tomatenElemente();
                tomatenele();
            },         5000);
        }
     }); 

    function tomatenele(): void {
        (document.querySelector(".tomateküche")as HTMLInputElement).innerHTML = "" + tomatekitchen; }
     
//Salat
    const salad: Element = (document.getElementById("salad-theke")as HTMLInputElement);
    const aufSalad: Element = (document.getElementById("buttonsal")as HTMLInputElement);
    const counter: Element = (document.getElementById("counter")as HTMLInputElement);
    var saladzahl: number = 0;
    var saladges: number = 10; 
    var saladkitchen: number = 10;
    var iconsalad: boolean = false;
    var buttonSalad: boolean = false;

    salad.addEventListener("click", function (): void {
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
            ListederElemente() ;
            buttonsalat();
        });

    function ListederElemente(): void {
        (document.querySelector(".salad")as HTMLInputElement).innerHTML = "" + saladges; }
    function saladzah(): void {
            (document.querySelector(".saladzahl")as HTMLInputElement).innerHTML = "Anzahl Salat verkauft: " + saladzahl; }
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
            saladkitchen = 0;
            aufSalad.classList.add("is-hidden");
            counter.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                salad.classList.remove("is-hidden");
                counter.classList.add("is-hidden");
                ListederElemente();
                ListederEle();
            },         5000);
        }
     });
     
    function ListederEle(): void {
        (document.querySelector(".saladküche")as HTMLInputElement).innerHTML = "" + saladkitchen; }
//Zwiebel
    const zwiebel: Element = (document.getElementById("zwiebel-theke")as HTMLInputElement); 
    const aufZwieb: Element = (document.getElementById("buttonzwi")as HTMLInputElement);
    const counterZwi: Element = (document.getElementById("counterzwi")as HTMLInputElement);
    var zwiebelzahl: number = 0;
    var zwiebelges: number = 10; 
    var zwiebelnkitchen: number = 10;
    var iconzwi: boolean = false;
    var buttonZwi: boolean = false;
     
     //Zwiebeln 
    zwiebel.addEventListener("click", function (): void {
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
            ZwiebelElemente() ;
            buttonZwiebel();
        });

    function ZwiebelElemente(): void {
        (document.querySelector(".zwiebel")as HTMLInputElement).innerHTML = "" + zwiebelges; }
    function ZwiebelZah(): void {
            (document.querySelector(".zwiebelzahl")as HTMLInputElement).innerHTML = "Anzahl Zwiebel verkauft: " + zwiebelzahl; }
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
            zwiebelnkitchen = 0;
            aufZwieb.classList.add("is-hidden");
            counterZwi.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                zwiebel.classList.remove("is-hidden");
                counterZwi.classList.add("is-hidden");
                ZwiebelElemente();
                ZwiebelEle();
            },         5000);
        }
     }); 

    function ZwiebelEle(): void {
        (document.querySelector(".zwiebelküche")as HTMLInputElement).innerHTML = "" + zwiebelnkitchen; }
       //Gurke
    const gurke: Element = (document.getElementById("gurke-theke")as HTMLInputElement); 
    const aufGur: Element = (document.getElementById("buttongur")as HTMLInputElement);
    const countergur: Element = (document.getElementById("countergur")as HTMLInputElement);
    var gurkezahl: number = 0;
    var gurkeges: number = 10; 
    var gurkekitchen: number = 10;
    var icongur: boolean = false;
    var buttongur: boolean = false;

      //Gurke
    gurke.addEventListener("click", function (): void {
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

    function GurkeElemente(): void {
        (document.querySelector(".gurke")as HTMLInputElement).innerHTML = "" + gurkeges; }
    function GurkeZah(): void {
            (document.querySelector(".gurkezahl")as HTMLInputElement).innerHTML = "Anzahl Gurken verkauft: " + gurkezahl; }
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
            gurkekitchen = 0;
            aufGur.classList.add("is-hidden");
            countergur.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                gurke.classList.remove("is-hidden");
                countergur.classList.add("is-hidden");
                GurkeElemente();
                GurkeEle();
            },         5000);
        }
     }); 
    function GurkeEle(): void {
        (document.querySelector(".gurkeküche")as HTMLInputElement).innerHTML = "" + gurkekitchen; }

    
    const doener: Element = (document.getElementById("doener")as HTMLInputElement);
    var doenerzahl: number = 0;

    doener.addEventListener("click", function (): void {
        doenerzahl++;
        doenerele();
        });

    function doenerele(): void {
            (document.querySelector(".doenerzahl")as HTMLInputElement).innerHTML = "Anzahl Döner verkauft: " + doenerzahl; }

    const yufka: Element = (document.getElementById("yufka")as HTMLInputElement);
    var yufkazahl: number = 0;
        
    yufka.addEventListener("click", function (): void {
        yufkazahl++;
        yufkaele();
        });
        
    function yufkaele(): void {
                 (document.querySelector(".yufkazahl")as HTMLInputElement).innerHTML = "Anzahl Yufka verkauft: " + yufkazahl; }

    const taco: Element = (document.getElementById("taco")as HTMLInputElement);
    var tacozahl: number = 0;
                        
    taco.addEventListener("click", function (): void {
        tacozahl++;
        tacoele();
         });
                        
    function tacoele(): void {
                (document.querySelector(".tacozahl")as HTMLInputElement).innerHTML = "Anzahl Taco verkauft: " + tacozahl; }




    
}

