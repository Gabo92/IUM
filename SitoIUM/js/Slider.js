$(function() {
    $(document).ready(function(){
        var select = $( "#anni" );
        var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
          min: 1,
          max: 3,
          range: "min",
          value: select[ 0 ].selectedIndex + 1,
          slide: function( event, ui ) {
            select[ 0 ].selectedIndex = ui.value - 1;
            if(dataManager.ready){
                renderer.render(window.dataManager,$("#anni").val());
            }

            switch(window.focused){
                default :{break;}
                case "innovazioneCamera":{
                        clickInnovazione();
                        break;
                }
                case "governanceCamera":{
                        clickGovernance();
                        break;
                }
                case "pol_personaleCamera":{
                        clickPolitichePersonale();
                        break;
                }
                case "pol_studentiCamera":{
                        clickPoliticheStudenti();
                        break;
                }
                case "materialiCamera":{
                        clickMateriali();
                        break;
                }
                case "energiaCamera":{
                        clickEnergia();
                        break;
                }
                case "acquaCamera":{
                        clickAcqua();
                        break;
                }
                case "rifiutiCamera":{
                        clickRifiuti();
                        break;
                }
                case "supplychainCamera":{
                        clickSupplyChain();
                        break;
                }
                case "mobilitaCamera":{
                        clickMobilita();
                        break;
                }
            }
          }
        });
        $( "#anni" ).change(function() {
            slider.slider( "value", this.selectedIndex + 1 );
            if(dataManager.ready){
                renderer.render(window.dataManager,$(this).val());
            }
        });
    });
  });