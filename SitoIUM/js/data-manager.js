(function(){
    var DataManager = function(options){
        var configs = options || {};
        this.events = configs["enevts"] || {};
        this.responsesCount = 0;
        this.init();
    };
    
    DataManager.NAMES = [
        "AcquaConsumata","EnergiaConsumata","VotoPRS","VotoFCS","VotoPDS","VotoPRS",
        "VotoFCS", "VotoPDS", "FondiInnovazione", "DocumentiDigitali", "TrasportoSostenibile",
        "Orelavoro", "VotoStudenti", "RifiutiRiciclati", "RifornimentiEco"
    ];
    
    var DataManagerPrototype = Object.defineProperties({},{
       init: { writtable: false, configurable: false, enumerable: false,
           value: function(){
               this.getAllData();
           }
       },
       trigger: { writtable: false, configurable: false, enumerable: false,
           value: function(name,data){
               var handler = this.events[name + ''];
               if(handler && typeof handler === "function" ){
                   handler(data);
               }
           }
       },
       getAllData: { writtable: false, configurable: false, enumerable: false,
           value: function(){
               var that = this;
               $(DataManager.NAMES).each(function(){
                   getRowsFromVeryBeginningToNow(this,"tpellegr","DESC",that.onDataRecieved,that.onError);
               });
           }
       },
       onDataRecieved: { writtable: false, configurable: false, enumerable: false,
           value: function(xml){
            $(xml).find('Riga').each(function(){
                             var Nome = $(this).find('Nome').text();
                             var Valore = $(this).find('Valore').text();
                             var Data = $(this).find('Data').text();
                             var Unita = $(this).find('Unita').text();

            console.log("Nome: "+ Nome + "\nValore: " + Valore + "\nUnita " + Unita + "\nData: "+ Data);})
           }
       },
       onError: { writtable: false, configurable: false, enumerable: false,
           value: function(statusError){
               console.error(statusError);
           }
       }
    });
    
    DataManager.prototype = DataManagerPrototype;
    
    window.DataManager = DataManager;
})(window,undefined);
