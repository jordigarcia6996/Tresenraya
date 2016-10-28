const F = 3;
const C = 3;
var matriu = [
    
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
    
];

window.onload = function () {
    
    var divTaula = document.getElementById("raya");

    var taula = document.createElement("table");
    
    for (i=0; i<F; i++){
        
        var fila = document.createElement("tr");

        taula.appendChild(fila);
        
        for (j=0; j<C; j++){
            
            var cela = document.createElement("td");
            cela.setAttribute("id", i+"."+j);

            cela.appendChild(document.createTextNode(matriu[i][j]));
            
            fila.appendChild(cela);
        }
    }
    
    divTaula.appendChild(taula);
    
    
//================================================ OMPLIR CASELLES =================================================================//
    
    var casella1 = document.getElementById("0.0");
    
    // CASELLA 1
    casella1.onclick=function(){
        matriu[0][0]="X";
        document.getElementById("0.0").innerHTML=matriu[0][0]; // També es podria posar "X"
    }
    
    
    // CASELLA 2
    var casella2 = document.getElementById("0.1");
    
    casella2.onclick=function(){
        matriu[0][1]="X";
        document.getElementById("0.1").innerHTML=matriu[0][1];
    }
    
    
    // CASELLA 3
    var casella3 = document.getElementById("0.2");
    
    casella3.onclick=function(){
        matriu[0][2]="X";
        document.getElementById("0.2").innerHTML=matriu[0][2];
    }
    
    
    // CASELLA 4
    var casella4 = document.getElementById("1.0");
    
    casella4.onclick=function(){
        matriu[1][0]="X";
        document.getElementById("1.0").innerHTML=matriu[1][0];
    }
    
    
    // CASELLA 5
    var casella5 = document.getElementById("1.1");
    
    casella5.onclick=function(){
        matriu[1][1]="X";
        document.getElementById("1.1").innerHTML=matriu[1][1];
    }
    
    
    // CASELLA 6
    var casella6 = document.getElementById("1.2");
    
    casella6.onclick=function(){
        matriu[1][2]="X";
        document.getElementById("1.2").innerHTML=matriu[1][2];
    }
    
    
    // CASELLA 7
    var casella7 = document.getElementById("2.0");
    
    casella7.onclick=function(){
        matriu[2][0]="X";
        document.getElementById("2.0").innerHTML=matriu[2][0];
    }
    
    
    // CASELLA 8
    var casella8 = document.getElementById("2.1");
    
    casella8.onclick=function(){
        matriu[2][1]="X";
        document.getElementById("2.1").innerHTML=matriu[2][1]; 
    }
    
    
    
    // CASELLA 9
    var casella9 = document.getElementById("2.2");
    
    casella9.onclick=function(){
        matriu[2][2]="X";
        document.getElementById("2.2").innerHTML=matriu[2][2];
    }
    
    
//============================================================== FINALITZACIÓ DE LA PARTIDA =======================================================================//
    
    if (matriu[0][0] == "X" && matriu[0][1] == "X" && matriu[0][2] == "X" && 
       matriu[1][0] == "X" && matriu[1][1] == "X" && matriu[1][2] == "X" && matriu[2][0] == "X" &&
       matriu[2][1] == "X" && matriu[2][2] == "X") {
        alert("Partida finalitzada!!");


    }
}
