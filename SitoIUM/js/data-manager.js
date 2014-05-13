(function(){
    var DataManager = function(options){
        var configs = options || {};
        this.events = configs["events"] || {};
        this.responsesCount = 0;
        this.data = {};
        this.getAllData();
        this.ready = false;
    };
    
    DataManager.NAMES = [
        "AcquaConsumata","EnergiaConsumata","VotoPRS","VotoFCS","VotoPDS","VotoPRS",
        "VotoFCS", "VotoPDS", "FondiInnovazione", "DocumentiDigitali", "TrasportoSostenibile",
        "Orelavoro", "VotoStudenti", "RifiutiRiciclati", "RifornimentiEco"
    ];
    
    var DataManagerPrototype = Object.defineProperties({},{
        trigger: { writtable: false, configurable: false, enumerable: false,
            value: function(name,data){
                var handler = this.events[name + ''];
                if(handler && typeof handler === "function" ){
                    handler(data);
                }else{
                    console.log("Handler not found");
                }
            }
        },
        getAllData: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var that = this;
                $(DataManager.NAMES).each(function(){
                    getRowsFromVeryBeginningToNow(
                        this,
                        "tpellegr",
                        "DESC",
                        function(xml){ that.onDataRecieved(xml); },
                        function(statusError){ that.onError(statusError);}
                    );
                });
            }
        },
        onDataRecieved: { writtable: false, configurable: false, enumerable: false,
            value: function(xml){
                var that = this;
                $(xml).find("Riga").each(function(){
                    var year = $(this).find("Data").text().split("-")[0] + '';
                    var type = $(this).find("Tipo").text().replace(/à/g,"a");
                    var unity = $(this).find("Unita").text();
                    var value = $(this).find("Valore").text();
                    that.data[year] = that.data[year] || {};
                    that.data[year][type] = that.data[year][type] || {}
                    that.data[year][type].unity = unity;
                    that.data[year][type].values = that.data[year][type].values || [];
                    that.data[year][type].values.push(Number(value));
                });
                this.responsesCount++;
                if(this.responsesCount === DataManager.NAMES.length){
                    this.trigger("onReady",this.data);
                    this.ready = true;
                }
            }
        },
        onError: { writtable: false, configurable: false, enumerable: false,
            value: function(statusError){
                console.error(statusError);
                this.responsesCount++;
                if(this.responsesCount === DataManager.NAMES.length){
                    this.trigger("onReady",this.data);
                    this.ready = true;
                }
            }
        },
        getMinMax: { writtable: false, configurable: false, enumerable: false,
            value: function(type){
               var result = [Infinity,-Infinity];
               var values;
               for(year in this.data){
                   values = this.data[year][type].values || [];
                   result[0] = Math.min(result[0],values.sort()[0]);
                   result[1] = Math.max(result[1],values.reverse()[0]);
               }
               result[0] = result[0] === -Infinity ? 0 : result[0];
               result[1] = result[1] === Infinity ? 0 : result[1];
               return result;
            }
        }
    });
    
    DataManager.prototype = DataManagerPrototype;
    
    window.DataManager = DataManager;
})(window,undefined);
