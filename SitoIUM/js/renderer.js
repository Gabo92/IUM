/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(window,undefined){
    window.Renderer = function(options){
        var configs = options || {};
        this.libri = [];
        this.scene = document.getElementById("scene");
        this.factor = configs["factor"] || 3;
        this.robot = new X3DResource("robot");
        this.lampada = new X3DResource("lampada");
        this.libreria = new X3DResource("libreria");
        this.omino = new X3DResource("omino");
        this.autobus = new X3DResource("autobus");
        this.macchina = new X3DResource("macchina");
        this.albero = new X3DResource("albero");
        this.lavello = new X3DResource("lavello");
        this.pavimento = new X3DResource("pavimento");
        this.cestino = new X3DResource("cestino");
        this.barile = new X3DResource("barile");
        this.universita = new X3DResource("universita");
        this.cartellini = new X3DResource("cartellini");
        this.foglietto = new X3DResource("foglietto");
        this.tavolo = new X3DResource("tavolo");
        this.muro_destro = new X3DResource("muro_destro");
        this.muro_sinistro = new X3DResource("muro_sinistro");
        this.muro_frontale = new X3DResource("muro_frontale");
        this.soffitto = new X3DResource("soffitto");
        this.addElementsToScene();
    };
    
    window.Renderer.MAX_LIBRI = 45;
    
    Object.defineProperties(window.Renderer.prototype, {
        addElementsToScene: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                this.muro_destro.addResource("muro_destro","models/wall.x3d");
                this.muro_sinistro.addResource("muro_sinistro","models/wall.x3d");
                this.muro_frontale.addResource("muro_frontale","models/wall.x3d");
                this.soffitto.addResource("soffitto","models/soffitto.x3d");
                this.pavimento.addResource("pavimento","models/pavimento.x3d");
                this.libreria.addResource("libreria","models/libreria.x3d");
                this.lampada.addResource("lampada","models/lampada.x3d");
                this.omino.addResource("omino", "models/Omino.x3d");
                this.autobus.addResource("autobus","models/Autobus.x3d");
                this.macchina.addResource("macchina","models/Macchina2.x3d");
                this.albero.addResource("albero","models/Albero.x3d");
                this.lavello.addResource("lavello","models/lavello1.x3d");
                this.cestino.addResource("cestino","models/Cestino.x3d");
                this.barile.addResource("barile","models/barile.x3d");
                this.robot.addResource("robot","models/robot.x3d");
                this.universita.addResource("universita","models/universita2.x3d");
                this.cartellini.addResource("cartellini","models/Cartellini.x3d");
                this.tavolo.addResource("tavolo","models/tavolo.x3d");
                this.muro_destro.appendToScene(this.scene);
                this.muro_sinistro.appendToScene(this.scene);
                this.muro_frontale.appendToScene(this.scene);
                this.soffitto.appendToScene(this.scene);
                this.pavimento.appendToScene(this.scene);
                this.libreria.appendToScene(this.scene);
                this.lavello.appendToScene(this.scene);
                this.cestino.appendToScene(this.scene);
                this.universita.appendToScene(this.scene);
                this.cartellini.appendToScene(this.scene);
                this.autobus.appendToScene(this.scene);
            }
        },
        render: { writtable: false, configurable: false, enumerable: false,
            value: function(dataManager,year){
                var data = dataManager.data[year];
                console.log("Refreshing the scene ...");
                this.muro_destro.setAttributes({
                    translation: "-10 -0.2 -2".scaleByFactor(this.factor),
                    scale: "1 1 0.2".scaleByFactor(this.factor),
                    rotation: "0 1 0 1.57"
                });

                this.muro_sinistro.setAttributes({
                    translation: "6 -0.2 -2".scaleByFactor(this.factor),
                    scale: "1 1 0.2".scaleByFactor(this.factor),
                    rotation: "0 1 0 1.57"
                });

                this.muro_frontale.setAttributes({
                    translation: "-2 -0.2 -10".scaleByFactor(this.factor),
                    scale: "1 1 0.2".scaleByFactor(this.factor)
                });

                this.soffitto.setAttributes({
                    translation: "-2 3.8 -2".scaleByFactor(this.factor),
                    scale: "1 1 1".scaleByFactor(this.factor)
                });
                
                this.pavimento.setAttributes({
                    translation: "-2 -4 -2".scaleByFactor(this.factor),
                    scale: "1 1 1".scaleByFactor(this.factor)
                });
                
                this.libreria.setAttributes({
                    translation: "4 -4.05 -9.5".scaleByFactor(this.factor),
                    scale: "2.5 2.5 2.5".scaleByFactor(this.factor),
                    rotation: "0 1 0 -3.14"
                });
                
                this.lavello.setAttributes({
                    translation: "-8.8 -3 -4.5".scaleByFactor(this.factor),
                    scale: "1 1 1".scaleByFactor(this.factor),
                    rotation: "0 1 0 4.71"
                });
                
                this.cestino.setAttributes({
                    translation: "-9 -3.97 0".scaleByFactor(this.factor),
                    scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "0 1 0 0.3"
                });
                
                this.universita.setAttributes({
                    translation: "-2 -3.97 -8.7".scaleByFactor(this.factor),
                    rotation: "0 1 0 -3.14",
                    scale: "0.7 0.7 0.7".scaleByFactor(this.factor)
                });
                
                this.cartellini.setAttributes({
                    translation: "5.7 -3 -6.5".scaleByFactor(this.factor),
                    scale: "0.2 0.2 0.2".scaleByFactor(this.factor),
                    rotation: "0 1 0 4.71"
                });
                
                this.autobus.setAttributes({
                    translation: "-4 -3.9 -3".scaleByFactor(this.factor),
                    scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "1 0 0 -1.57"
                });
                
                this.clearLibri();
                if(data && data["Materiali"]){
                    this.generateLibri(data["Materiali"].values.reverse()[0] || 0);
                }
                this.renderLibri();
            }
        },
        
        clearLibri: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                for(var i=0; i < this.libri.length; i++){
                    this.libri[i].remove();
                }
                this.libri = [];
            }
        },
        
        generateLibri: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var libro;
                for(var i=0; i < number; i++){
                    libro = new X3DResource("libro" + i);
                    this.libri.push(libro);
                    libro.addResource("libro","models/libro.x3d");
                    libro.appendToScene(this.scene);
                }
            }
        },
    
        renderLibri: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var x = 2.91;
                var y = 0.355;
                var count = 0;
                for(var j=0; count< this.libri.length; j++){
                    x = 2.91;
                    for(var i=1; i<10 && count < this.libri.length; i++){
                        this.libri[count].setAttributes({
                            translation: (x + " " + y + " -9.5").scaleByFactor(this.factor),
                            scale: "0.5 0.5 0.5".scaleByFactor(this.factor),
                            rotation: "-0.25 1 -0.25 -1.57"
                        });
                        if(i % 3 === 0){
                            x += 0.6;
                        }else{
                            x += 0.18;
                        }
                        count++;
                    }
                    y += -0.95;
                }
            }
        }
    });
})(window,undefined);