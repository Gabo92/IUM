$(function() {
    var select = $( "#anni" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 4,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
      }
    });
    $( "#anni" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
  });