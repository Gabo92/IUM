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
               
           }
       },
       onDataRecieved: { writtable: false, configurable: false, enumerable: false,
           value: function(xml){
               
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
