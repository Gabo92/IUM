$(function() {
    var select = $( "#anni" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 3,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;

        switch(window.focused){
            case "defaultCamera":{break;}
            case "innovazioneCamera":{
                    cameraInnovazione();
                    break;
            }
            case "governanceCamera":{
                    cameraGovernance();
                    break;
            }
            case "politichepersonaleCamera":{
                    cameraPolitichePersonale();
                    break;
            }
            case "politichestudentiCamera":{
                    cameraPoliticheStudenti();
                    break;
            }
            case "materialiCamera":{
                    cameraMateriali();
                    break;
            }
            case "energiaCamera":{
                    cameraEnergia();
                    break;
            }
            case "acquaCamera":{
                    cameraAcqua();
                    break;
            }
            case "rifiutiCamera":{
                    cameraRifiuti();
                    break;
            }
            case "supplychainCamera":{
                    cameraSupplyChain();
                    break;
            }
            case "mobilitaCamera":{
                    cameraMobilita();
                    break;
            }
        }
      }
    });
    $( "#anni" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
  });