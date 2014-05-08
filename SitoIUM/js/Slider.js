$(function() {
    var select = $( "#anni" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 3,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      
        var defaultFocus = document.getElementById("defaultCamera").getAttribute("set_bind");
        var innovazioneFocus = document.getElementById("innovazioneCamera").getAttribute("set_bind");
        var governanceFocus = document.getElementById("governanceCamera").getAttribute("set_bind");
        //var politichepersonaleFocus = document.getElementById("politichepersonaleCamera").getAttribute("set_bind");
        //var politicheStudentifocus = document.getElementById("politichestudentiCamera").getAttribute("set_bind");
        var materialiFocus = document.getElementById("materialiCamera").getAttribute("set_bind");
        //var energiaFocus = document.getElementById("energiaCamera").getAttribute("set_bind");
        var acquaFocus = document.getElementById("acquaCamera").getAttribute("set_bind");
        //var rifiutiFocus = document.getElementById("rifiutiCamera").getAttribute("set_bind");
        //var supplychainFocus = document.getElementById("supplychainCamera").getAttribute("set_bind");
        //var mobilitaFocus = document.getElementById("mobilitaCamera").getAttribute("set_bind");

        if(defaultFocus == "false"){
            if(innovazioneFocus == "true"){
                cameraInnovazione();
            }
            else if(governanceFocus == "true"){
                cameraGovernance();
            }
            /*else if(politichepersonaleFocus == "true"){
                cameraPolitichePersonale();
            }
            else if(politicheStudentifocus == "true"){
                cameraPoliticheStudenti();
            }*/
            else if(materialiFocus == "true"){
                cameraMateriali();
            }
            /*else if(energiaFocus == "true"){
                cameraEnergia();
            }*/
            else if(acquaFocus == "true"){
                cameraAcqua();
            }
            /*else if(rifiutiFocus == "true"){
                cameraRifiuti();
            }
            else if(supplychainFocus == "true"){
                cameraSupplyChain();
            }
            else if(mobilitaFocus == "true"){
                cameraMobilita();
            }*/
        }
      }
    });
    $( "#anni" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
  });