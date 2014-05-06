(function(){
    var DataManager = function(options){
        var configs = options || {};
        this.events = configs["enevts"] || {};
        this.init();
    };
    
    var DataManagerPrototype = Object.defineProperties({},{
       init: { writtable: false, configurable: false, enumerable: false,
           value: function(){
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
                getRowsFromVeryBeginningToNow("AcquaConsumata","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("EnergiaConsumata","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("VotoPRS","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("VotoFCS","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("VotoPDS","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("FondiInnovazione","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("DocumentiDigitali","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("TrasportoSostenibile","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("OreLavoro","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("VotoStudenti","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("RifiutiRiciclati","tpellegr","DESC",parseXML,onError);
                getRowsFromVeryBeginningToNow("RifornimentiEco","tpellegrs","DESC",parseXML,onError);
           }
       },
       onDataRecieved: { writtable: false, configurable: false, enumerable: false,
           value: function(xml){
               $(xml).find('Riga').each(function(){
				var Nome = $(this).find('Nome').text();
				var Valore = $(this).find('Valore').text();
				var Data = $(this).find('Data').text();
				var Unita = $(this).find('Unita').text();
				
               alert("Nome: "+ Nome + "\nValore: " + Valore + "\nUnita " + Unita + "\nData: "+ Data);})
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
