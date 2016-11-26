const FILES = 3;
        const COLUMNES = 3;
//1forma

        var tauler = [];
for (i = 0; i < FILES; i++) {
    tauler[i] = [];
    for (j = 0; j < COLUMNES; j++) {
        tauler[i][j] = " ";
    }
}

var guanyador = 0;

//2forma

//var tauler1 = new Array(FILES);
//for (i=0; i<FILES; i++){
//    tauler1[i] = new Array(COLUMNES).fill(" ");
//}


//===============================FI DE LA PARTIDA=====================================//

function revisarVictoria() {

    var contO, contX;


    //================================MIREM LES FILES=========================================//

    for (var i = 0; i < FILES; i++) {

        contO = 0;
        contX = 0;

        //=========================================================//

        for (var j = 0; j < COLUMNES; j++) {
            if (tauler[i][j] == "O") {

                contO++;

            }
            if (tauler[i][j] == "X") {
                contX++;

            }

        }

        //=======================================================//

        if (contO == FILES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn = document.getElementById(k + "." + l);
                    btn.setAttribute("disabled", "true");




                }
            }

            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has perdut!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            guanyador=1;
            

            return;


        } //else {



        if (contX == FILES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn1 = document.getElementById(k + "." + l);
                    btn1.setAttribute("disabled", "true");




                }
            }



            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has guanyat!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            guanyador=1;

            return;


        }



        //}


    }


    //================================MIREM LES COLUMNES=========================================//


    for (var i = 0; i < COLUMNES; i++) {

        contO = 0;
        contX = 0;

        //=========================================================//

        for (var j = 0; j < FILES; j++) {
            if (tauler[j][i] == "O") {

                contO++;
                console.log(contO);

            }
            if (tauler[j][i] == "X") {
                contX++;
                console.log(contX);

            }

        }




        if (contO == COLUMNES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn2 = document.getElementById(k + "." + l);
                    btn2.setAttribute("disabled", "true");




                }
            }

            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has perdut!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            guanyador=2;

            return;


        }



        if (contX == COLUMNES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn3 = document.getElementById(k + "." + l);
                    btn3.setAttribute("disabled", "true");




                }
            }



            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has guanyat!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
             guanyador=2;

            return;


        }


    }
    
    
    //=================================================================== MIREM DIAGONALS =====================================================================//
    
    //====Esquerra a Dreta====//
    
  /*  
         for (var i =0; i < FILES; i++){
             for(var j =0; j<COLUMNES-1; j++){
                 
                 if (tauler[i][j] == "O") {

                contO++;

            }
            if (tauler[i][j] == "X") {
                contX++;

            }
                 
             }
         

      

                

        //=======================================================//

        if (contO == FILES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn = document.getElementById(k + "." + l);
                    btn.setAttribute("disabled", "true");




                }
            }

            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has perdut!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            
            

            return;


        } //else {



        if (contX == FILES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn1 = document.getElementById(k + "." + l);
                    btn1.setAttribute("disabled", "true");




                }
            }



            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has guanyat!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            

            return;


        }



        //}


    }

    

    //==== Dreta a Esquerra ====//
    
    
         for (var i =0; i < FILES; i++){
             for(var j =COLUMNES-1; j<COLUMNES; j++){
                 
                 if (tauler[i][j] == "O") {

                contO++;

            }
            if (tauler[i][j] == "X") {
                contX++;

            }
                 
             }
         

      

                

        //=======================================================//

        if (contO == FILES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn = document.getElementById(k + "." + l);
                    btn.setAttribute("disabled", "true");




                }
            }

            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has perdut!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            
            

            return;


        } //else {



        if (contX == FILES) {
            for (var k = 0; k < FILES; k++) {
                for (var l = 0; l < COLUMNES; l++) {
                    var btn1 = document.getElementById(k + "." + l);
                    btn1.setAttribute("disabled", "true");




                }
            }



            var fi = document.createElement("h2");
            fi.appendChild(document.createTextNode("Has guanyat!!!"));
            var divH2 = document.getElementById("div1");
            divH2.appendChild(fi);
            

            return;


        }





    }

*/


}

function ferJugada() {

    for (i = 0; i < FILES; i++) {
        for (j = 0; j < COLUMNES; j++) {
            if (tauler[i][j] == " ") {
                tauler[i][j] = "O";
                var btn = document.getElementById(i + "." + j);
                btn.innerHTML = "O";
                btn.disabled = true;
                btn.style.background = "#F6E3CE";
                btn.style.color = "blue";

                return;


            }
        }
        
        
    }

    revisarVictoria();

}

window.onload = function () {

    var taula = document.createElement("table");

    for (i = 0; i < FILES; i++) {

        var fila = taula.insertRow();

        for (j = 0; j < COLUMNES; j++) {

            var cela = fila.insertCell();
            var btn = document.createElement("button");
            //cela.setAttribute("id", i+"."+j);

            cela.appendChild(document.createTextNode(tauler[i][j]));



            btn.setAttribute("id", i + "." + j);
            cela.appendChild(btn);

            (function (f, c) {
                btn.onclick = function () {
                    tauler[f][c] = "X";
                    event.target.innerHTML = "X";
                    event.target.disabled = true;
                    this.style.background = "paleturquoise"; //Canviar el color despres de clicar
                   
                    
                   
                    ferJugada();
                    revisarVictoria();

                  
                            
                        
                    
                
                        
                       
                        
                    
                    
                }
            })(i, j);


        }
    }



    var divTaula = document.getElementById("raya");
    divTaula.appendChild(taula);




}



