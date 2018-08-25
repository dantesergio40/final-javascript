
         


         var calculadora ={
                 init:  function() {


          //variable para operaciones
               var operandoA; 
               var operandoB; 
               var operacion;
             

              //variables
               
        var display = document.getElementById("display");         
        var on = document.getElementById("on");
        var signo = document.getElementById("sign");
        var raiz = document.getElementById("raiz");
        var division = document.getElementById("dividido");
        var multiplicacion = document.getElementById("por");  
        var punto = document.getElementById("punto");
        var igual = document.getElementById("igual");
        var suma = document.getElementById("mas");
        var resta = document.getElementById("menos");
        var uno = document.getElementById("1");
        var dos = document.getElementById("2");
        var tres = document.getElementById("3");
        var cuatro = document.getElementById("4");
        var cinco = document.getElementById("5");
        var seis = document.getElementById("6");
        var siete = document.getElementById("7");
        var ocho = document.getElementById("8");
        var nueve = document.getElementById("9");
        var cero = document.getElementById("0");
        
         display.innerHTML = "";
         
         // INICIAR CALCULADORA 
        on.onclick = function(e){
            display.innerHTML =  "0";
        }
        on.addEventListener("mousedown", function(){
            on.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         on.addEventListener("mouseout", function(){
            on.setAttribute("style", "transform:scale(1 , 1)")
        }) 

      
        //evento escribir numero en pantalla
        
        function escribir(numero){
            if(display.textContent == "0"){
                display.textContent = ""
            }
          display.innerHTML =(display.textContent += numero).substr(0,8);
        }

        //eventos de numeros

        uno.onclick = function(e){
           escribir(1);
        } 
        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
        uno.addEventListener("mouseout", function(){
            uno.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        dos.onclick = function(e){
          escribir(2);
        }
        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
        dos.addEventListener("mouseout", function(){
            dos.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        tres.onclick = function(e){
           escribir(3);
        }
        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         tres.addEventListener("mouseout", function(){
            tres.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        cuatro.onclick = function(e){
           escribir(4);
        }
        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style", "transform:scale(0.95 , 0.95)")
        })
         cuatro.addEventListener("mouseout", function(){
            cuatro.setAttribute("style", "transform:scale(1 , 1)")
        })  
        cinco.onclick = function(e){
            escribir(5);
        }
        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style", "transform:scale(0.95 , 0.95)")
        })
         cinco.addEventListener("mouseout", function(){
            cinco.setAttribute("style", "transform:scale(1 , 1)")
        })  
        seis.onclick = function(e){
            escribir(6);
        }
        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         seis.addEventListener("mouseout", function(){
            seis.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        siete.onclick = function(e){
            escribir(7);
        }
        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         siete.addEventListener("mouseout", function(){
            siete.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        ocho.onclick = function(e){
            escribir(8);
        }
        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         ocho.addEventListener("mouseout", function(){
            ocho.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        nueve.onclick = function(e){
            escribir(9);
        }
        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         nueve.addEventListener("mouseout", function(){
            nueve.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        cero.onclick = function(e){
            escribir(0);
        }
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         cero.addEventListener("mouseout", function(){
            cero.setAttribute("style", "transform:scale(1 , 1)")
        }) 

    


        //eventos de operacion
        division.onclick = function(e){
           operandoA = display.textContent;
           operacion = "/";
           vaciar() ;
        }
        division.addEventListener("mousedown", function(){
            division.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         division.addEventListener("mouseout", function(){
            division.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        multiplicacion.onclick = function(e){
           operandoA = display.textContent;
           operacion = "*";
           vaciar() ;
        }
        multiplicacion.addEventListener("mousedown", function(){
            multiplicacion.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         multiplicacion.addEventListener("mouseout", function(){
            multiplicacion.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        resta.onclick = function(e){
           operandoA = display.textContent;
           operacion = "-";
           vaciar() ;
        }
        resta.addEventListener("mousedown", function(){
            resta.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         resta.addEventListener("mouseout", function(){
            resta.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        suma.onclick = function(e){
           operandoA = display.textContent;
           operacion = "+";
           vaciar() ;
        }
        suma.addEventListener("mousedown", function(){
            suma.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         suma.addEventListener("mouseout", function(){
            suma.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        punto.onclick = function(e){
            var coma = display.textContent.indexOf(".");
            if ( coma == -1){
                display.innerHTML = display.textContent += ".";
            }
        }
        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         punto.addEventListener("mouseout", function(){
            punto.setAttribute("style", "transform:scale(1 , 1)")
        }) 
        igual.onclick = function(e){
            operandoB = display.textContent;
            resolver();
        }
        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style", "transform:scale(0.95 , 0.95)")
        })
         igual.addEventListener("mouseout", function(){
            igual.setAttribute("style", "transform:scale(1 , 1)")
        })  
        signo.onclick = function(e){

           //cambiarSigno: function(){
            var sinSigno = display.textContent
            var sig = sinSigno.indexOf("-");
            if ( sig == -1){
                 display.innerHTML = "-" + sinSigno
            }else{
              sinSigno = sinSigno.substr(1,sinSigno.length)
              display.textContent = sinSigno
            }
         }                   
        
        signo.addEventListener("mousedown", function(){
            signo.setAttribute("style", "transform:scale(0.95 , 0.95)")
        }) 
         signo.addEventListener("mouseout", function(){
            signo.setAttribute("style", "transform:scale(1 , 1)")
        }) 

        function vaciar(){
            display.textContent = "";
        }

        function reIniciar(){
           display.textContent = "0";
           operandoA = 0;
           operandoB = 0;
           operacion = "";
        }

        function resolver(){
            var result = 0 ;
            switch(operacion){
                case "+":
                result = parseFloat(operandoA) + parseFloat(operandoB);
                break;

                case "-":
                result = parseFloat(operandoA) - parseFloat(operandoB);
                break;

                case "*":
                result = parseFloat(operandoA) * parseFloat(operandoB);
                break;

                case "/":
                result = parseFloat(operandoA) / parseFloat(operandoB);
                break;
            }
            reIniciar(),
            display.textContent = result;
        }
    }
}   
calculadora.init();     