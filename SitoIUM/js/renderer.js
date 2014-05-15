/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(window,undefined){
    window.Renderer = function(options){
        var configs = options || {};
        this.libri = [];
        this.robots = [];
        this.alberi = [];
        this.barili = [];
        this.macchine = [];
        this.buses = [];
        this.lampade = [];
        this.studentiverdi = [];
        this.studentirossi = [];
        this.fogliettiterra = [];
        this.foglietti = [];
        this.scene = document.getElementById("scene");
        this.factor = configs["factor"] || 3;
        this.libreria = new X3DResource("libreria");
        this.autobus = new X3DResource("autobus");
        this.macchina = new X3DResource("macchina");
        this.albero = new X3DResource("albero");
        this.lavello = new X3DResource("lavello");
        this.acqua = new X3DResource("acqua");
        this.pavimento = new X3DResource("pavimento");
        this.cestino = new X3DResource("cestino");
        this.cestinox = new X3DResource("cestino2");
        this.barile = new X3DResource("barile");
        this.universita = new X3DResource("universita");
        this.cartellini = new X3DResource("cartellini");
        this.foglietto = new X3DResource("foglietto");
        this.tavolo = new X3DResource("tavolo");
        this.muro_destro = new X3DResource("muro_destro");
        this.muro_sinistro = new X3DResource("muro_sinistro");
        this.muro_frontale = new X3DResource("muro_frontale");
        this.soffitto = new X3DResource("soffitto");
        this.tunnel1 = new X3DResource("tunnel");
        this.tunnel2 = new X3DResource("tunnel");
        this.tunnel3 = new X3DResource("tunnel");
        this.tunnel4 = new X3DResource("tunnel");
        this.addElementsToScene();
    };
    
    window.Renderer.MAX_LIBRI = 45;
    window.Renderer.MAX_ALBERI = 12;
    window.Renderer.MAX_VEICOLI = 5;
    window.Renderer.MAX_ROBOTS = 9;
    window.Renderer.MAX_LAMPADE = 6;
    window.Renderer.MAX_STUDENTI = 10;
    window.Renderer.MAX_FOGLIETTI = 4;
    
    Object.defineProperties(window.Renderer.prototype, {
        addElementsToScene: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                this.muro_destro.addResource("muro_destro","models/wall.x3d");
                this.muro_sinistro.addResource("muro_sinistro","models/wall.x3d");
                this.muro_frontale.addResource("muro_frontale","models/wall.x3d");
                this.soffitto.addResource("soffitto","models/soffitto.x3d");
                this.pavimento.addResource("pavimento","models/pavimento.x3d");
                this.libreria.addResource("libreria","models/libreria.x3d");
                this.lavello.addResource("lavello","models/lavello1.x3d");
                this.acqua.addResource("acqua","models/water.x3d");
                this.cestino.addResource("cestino","models/Cestino.x3d");
                this.cestinox.addResource("cestino","models/Cestino2.x3d");
                this.universita.addResource("universita","models/universita2.x3d");
                this.cartellini.addResource("cartellini","models/Cartellini.x3d");
                this.tunnel1.addResource("tunnel1","models/tunnel.x3d");
                this.tunnel2.addResource("tunnel2","models/tunnel.x3d");
                this.tunnel3.addResource("tunnel3","models/tunnel.x3d");
                this.tunnel4.addResource("tunnel4","models/tunnel.x3d");
                this.muro_destro.appendToScene(this.scene);
                this.muro_sinistro.appendToScene(this.scene);
                this.muro_frontale.appendToScene(this.scene);
                this.soffitto.appendToScene(this.scene);
                this.pavimento.appendToScene(this.scene);
                this.libreria.appendToScene(this.scene);
                this.lavello.appendToScene(this.scene);
                this.acqua.appendToScene(this.scene);
                this.cestino.appendToScene(this.scene);
                this.cestinox.appendToScene(this.scene);
                this.universita.appendToScene(this.scene);
                this.cartellini.appendToScene(this.scene);
                this.tunnel1.appendToScene(this.scene);
                this.tunnel2.appendToScene(this.scene);
                this.tunnel3.appendToScene(this.scene);
                this.tunnel4.appendToScene(this.scene);
                this.generateLibri();
                this.generateAlberi();
                this.generateVeicoli();
                this.generateRobots();
                this.generateLampade();
                this.generateStudenti();
                this.generateFoglietti();
            }
        },
        render: { writtable: false, configurable: false, enumerable: false,
            value: function(dataManager,year){
                var data = dataManager.data[year];
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
                    translation: "-9 -3.97 -9".scaleByFactor(this.factor),
                    scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "0 1 0 0.4"
                });
                
                this.cestinox.setAttributes({
                    translation: "-7.5 -3.97 -9".scaleByFactor(this.factor),
                    scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "0 1 0 0.3"
                });
                
                this.universita.setAttributes({
                    translation: "-2 -3.97 -9".scaleByFactor(this.factor),
                    rotation: "0 1 0 -3.14",
                    scale: "0.7 0.7 0.7".scaleByFactor(this.factor)
                });
                
                this.cartellini.setAttributes({
                    translation: "5.7 -3 -6.5".scaleByFactor(this.factor),
                    scale: "0.2 0.2 0.2".scaleByFactor(this.factor),
                    rotation: "0 1 0 4.71"
                });
                
                this.tunnel1.setAttributes({
                    translation: "5 -3.9 -2.55".scaleByFactor(this.factor),
                    scale: "0.1 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "-1 0 0 1.57"
                });
                
                this.tunnel2.setAttributes({
                    translation: "-9.1 -3.9 -2.55".scaleByFactor(this.factor),
                    scale: "0.1 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "-1 0 0 1.57"
                });
                
                this.tunnel3.setAttributes({
                    translation: "5 -3.9 -4".scaleByFactor(this.factor),
                    scale: "0.1 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "-1 0 0 1.57"
                });
                
                this.tunnel4.setAttributes({
                    translation: "-9.1 -3.9 -4".scaleByFactor(this.factor),
                    scale: "0.1 0.05 0.05".scaleByFactor(this.factor),
                    rotation: "-1 0 0 1.57"
                });
                
                this.renderLibri(this.calculateNumber(dataManager,data,"Materiali",Renderer.MAX_LIBRI));
                this.renderAlberi(this.calculateNumber(dataManager,data,"Supply Chain",Renderer.MAX_ALBERI));
                this.renderVeicoli(this.calculateNumber(dataManager,data,"Mobilita",Renderer.MAX_VEICOLI));
                this.renderRobots(this.calculateNumber(dataManager,data,"Innovazione",Renderer.MAX_ROBOTS));
                this.renderLampade(this.calculateNumber(dataManager,data,"Energia",Renderer.MAX_LAMPADE));
                this.renderFoglietti(this.calculateNumber(dataManager,data,"Politiche Personale",Renderer.MAX_FOGLIETTI));

                if(data && data["Rifiuti"]){
                    var values = data["Rifiuti"].values || [];
                    this.renderCestini(values);
                }
                
                if(data && data["Politiche Studenti"]){
                    var values = data["Politiche Studenti"].values || [];
                    this.renderStudenti(values);
                }
                
                if(data && data["Governance"]){
                    var values = data["Governance"].values || [];
                    var media = 0;
                    for(var i = 0; i < values.length; i++){
                        media += values[i];
                }
    
                    media /= values.length;
                    this.renderUniversita(media/10);
                }
                
                if(data && data["Acqua"]){
                    var values = data["Acqua"].values || [];
                    this.renderAcqua(values);
                }
            }
        },
        
        calculateNumber: { writtable: false, configurable: false, enumerable: false,
            value: function(dataManager,data,type,maximum){
                var number = 0;
                if(data && data[type]){
                    var minmax = dataManager.getMinMax(type);
                    var min = minmax[0];
                    var max = minmax[1];
                    var values = data[type].values || [];
                    for(var i=0; i<values.length; i++){
                        number += values[i];
                    }
                    if(values.length > 0){
                        number = number / values.length;
                    }
                    number -= min;
                    number = number * maximum / (max-min);
                    number = Math.max(number,1);
                }
                return number;
            }
        },

        generateLibri: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var libro;
                var x = 2.91;
                var y = 0.355;
                var count = 0;                
                for(var j=0; count< Renderer.MAX_LIBRI; j++){
                    x = 2.91;
                    for(var i=1; i<10 && count < Renderer.MAX_LIBRI; i++){
                        libro = new X3DResource("libro" + i);
                        libro.addResource("libro","models/libro.x3d");
                        libro.setAttributes({
                            translation: (x + " " + y + " -9.5").scaleByFactor(this.factor),
                            scale: "0.5 0.5 0.5".scaleByFactor(this.factor),
                            rotation: "-0.25 1 -0.25 -1.57",
                            render: false
                        });
                        libro.appendToScene(this.scene);
                        this.libri.push(libro);
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
        },
        
        generateAlberi: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var albero;
                var barile;
                var countalberi = 0;
                var countbarili = 0;
                var xalberi = -9;
                var xbarili = -7.5;
                var z = -1;
                for(var i=0; i < 3 && countalberi < Renderer.MAX_ALBERI; i++){
                    for(var j=0; j < 4 && countalberi < Renderer.MAX_ALBERI; j++){
                        albero = new X3DResource("albero" + i);
                        albero.addResource("albero","models/Albero.x3d");
                        albero.setAttributes({
                            translation: (xalberi + " -3.9 " + z).scaleByFactor(this.factor),
                            scale: "0.02 0.02 0.035".scaleByFactor(this.factor),
                            rotation: "1 0 0 -1.57",
                            render: false
                        });
                        albero.appendToScene(this.scene);
                        this.alberi.push(albero);
                        z += 0.5;
                        countalberi++;
                    }
                    z = -1;
                    xalberi += 0.5;
                }
                z = -1;
                for(var i=0; i < 3 && countbarili < Renderer.MAX_ALBERI; i++){
                    for(var j=0; j < 4 && countbarili < Renderer.MAX_ALBERI; j++){
                        barile = new X3DResource("barile" + i);
                        barile.addResource("barile","models/barile.x3d");
                        barile.setAttributes({
                            translation: (xbarili + " -3.9 " + z).scaleByFactor(this.factor),
                            scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                            render: true
                        });
                        barile.appendToScene(this.scene);
                        this.barili.push(barile);
                        z += 0.5;
                        countbarili++;
                    }
                    z = -1;
                    xbarili += 0.5;
                }
            }
        },
        
        generateVeicoli: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var macchina;
                var autobus;
                var xmacchina = -4;
                var xautobus = 0;

                for(var i=0; i < Renderer.MAX_VEICOLI; i++){
                    macchina = new X3DResource("macchina" + i);
                    macchina.addResource("macchina","models/Macchina2.x3d");
                    macchina.setAttributes({
                        translation: (xmacchina + " -3.9 -4").scaleByFactor(this.factor),
                        scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                        rotation: "1 0 0 -1.57",
                        render: false
                    });
                    macchina.appendToScene(this.scene);
                    this.macchine.push(macchina);
                    xmacchina += 1.5;
                }

                for(var i=0; i < Renderer.MAX_VEICOLI; i++){
                    autobus = new X3DResource("autobus" + i);
                    autobus.addResource("autobus","models/Autobus.x3d");
                    autobus.setAttributes({
                        translation: (xautobus + " -3.9 -2.5").scaleByFactor(this.factor),
                        scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                        render: false
                    });
                    autobus.appendToScene(this.scene);
                    this.buses.push(autobus);
                    xautobus += 1.5;
                }           
            }
        },
        
        generateRobots: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var robot;
                var count = 0;

                var x = 2.5;
                var z = -1;
                for(var i=0; i < 3 && count < Renderer.MAX_ROBOTS; i++){
                    for(var j=0; j < 3 && count < Renderer.MAX_ROBOTS; j++){
                        robot = new X3DResource("robot" + i);
                        robot.addResource("robot","models/robot.x3d");
                        robot.setAttributes({
                            translation: (x + " -3.9 " + z).scaleByFactor(this.factor),
                            scale: "0.25 0.25 0.25".scaleByFactor(this.factor),
                            rotation: "0 1 0 1.57",
                            render: false
                        });
                        robot.appendToScene(this.scene);
                        this.robots.push(robot);
                        z += 1;
                        count++;
                    }
                    z = -1;
                    x += 1;
                }
            }
        },
        
        generateLampade: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var lampada;
                var count = 0;

                var x = -4.25;
                var z = -2;
                for(var i=0; i < 2 && count < Renderer.MAX_LAMPADE; i++){
                    for(var j=0; j < 3 && count < Renderer.MAX_LAMPADE; j++){
                        lampada = new X3DResource("lampada" + i);
                        lampada.addResource("lampada","models/lampada.x3d");
                        lampada.setAttributes({
                            translation: (x + " 3.25 " + z).scaleByFactor(this.factor),
                            rotation: "0 1 0 1.57",
                            scale: "0.3 0.3 0.3".scaleByFactor(this.factor),
                            render: false
                        });
                        lampada.appendToScene(this.scene);
                        this.lampade.push(lampada);
                        z += 1.5;
                        count++;
                    }
                    z = -2;
                    x += 4.5;
                }
            }
        },
        
        generateStudenti: { writtable: false, configurable: false, enumerable: false,
            value: function(){
                var studente;
                var count = 0;

                var x = -3.1;
                var z = -5.7;
                for(var i=0; i < 5 && count < Renderer.MAX_STUDENTI; i++){
                    for(var j=0; j < 2 && count < Renderer.MAX_STUDENTI; j++){
                        studente = new X3DResource("studenteverde" + i);
                        studente.addResource("studenteverde","models/studenteVerde.x3d");
                        studente.setAttributes({
                            translation: (x + " -3.97 " + z).scaleByFactor(this.factor),
                            rotation: "-1 0 0 1.57",
                            scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                            render: false
                        });
                        studente.appendToScene(this.scene);
                        this.studentiverdi.push(studente);
                        z += 0.5;
                        count++;
                    }
                    z = -5.7;
                    x += 0.5;
                }
                
                x = -1.1;
                z = -5.2;
                count = 0;
                
                for(var i=0; i < 5 && count < Renderer.MAX_STUDENTI; i++){
                    for(var j=0; j < 2 && count < Renderer.MAX_STUDENTI; j++){
                        studente = new X3DResource("studenterosso" + i);
                        studente.addResource("studenterosso","models/studenteRosso.x3d");
                        studente.setAttributes({
                            translation: (x + " -3.97 " + z).scaleByFactor(this.factor),
                            rotation: "-1 0 0 1.57",
                            scale: "0.05 0.05 0.05".scaleByFactor(this.factor),
                            render: false
                        });
                        studente.appendToScene(this.scene);
                        this.studentirossi.push(studente);
                        z -= 0.5;
                        count++;
                    }
                    z = -5.2;
                    x -= 0.5;
                }
            } 
        },
        
        generateFoglietti: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var foglietto;
                var x = 7.5;
                var y = -1.8;              
                for(var i=0; i < Renderer.MAX_FOGLIETTI; i++){
                    foglietto = new X3DResource("foglietto" + i);
                    foglietto.addResource("foglietto","models/Foglietto.x3d");
                    foglietto.setAttributes({
                        translation: ("5.7 " + y + " -1.7").scaleByFactor(this.factor),
                        scale: "0.2 0.2 0.2".scaleByFactor(this.factor),
                        rotation: "0 -1 0 1.57",
                        render: false
                    });
                    foglietto.appendToScene(this.scene);
                    this.foglietti.push(foglietto);
                    y -= 0.7;
                }
                
                for(var i=0; i < Renderer.MAX_FOGLIETTI; i++){
                    foglietto = new X3DResource("fogliettoterra" + i);
                    foglietto.addResource("fogliettoterra","models/Foglietto.x3d");
                    foglietto.setAttributes({
                        translation: (x + " -3.63 -3.85").scaleByFactor(this.factor),
                        scale: "0.2 0.2 0.2".scaleByFactor(this.factor),
                        rotation: "-1 0 0 1.78",
                        render: false
                    });
                    foglietto.appendToScene(this.scene);
                    this.fogliettiterra.push(foglietto);
                    x -= 0.7;
                }
            }
        },
        
    
        renderLibri: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                for(var i=0; i < this.libri.length; i++){
                    this.libri[i].setAttributes({render: i < number});
                }
            }
        },
        
        renderAlberi: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var numbarili = Renderer.MAX_ALBERI - number;
                for(var i=0; i < this.alberi.length; i++){
                    this.alberi[i].setAttributes({render: i < number});
                }
                for(var i=0; i < this.barili.length; i++){
                    this.barili[i].setAttributes({render: i < numbarili});
                }
            }
        },
        
        renderVeicoli: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var nummacchine = Renderer.MAX_VEICOLI - number;
                for(var i=0; i < this.buses.length; i++){
                    this.buses[i].setAttributes({render: i < number});
                }
                for(var i=0; i < this.macchine.length; i++){
                    this.macchine[i].setAttributes({render: i < nummacchine});
                }
            }
        },
        
        renderFoglietti: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var fogliettiterra = Renderer.MAX_FOGLIETTI - number;
                for(var i=0; i < this.foglietti.length; i++){
                    this.foglietti[i].setAttributes({render: i < number});
                }
                for(var i=0; i < this.fogliettiterra.length; i++){
                    this.fogliettiterra[i].setAttributes({render: i < fogliettiterra});
                }
            }
        },
        
        renderRobots: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                for(var i=0; i < this.robots.length; i++){
                    this.robots[i].setAttributes({render: i < number});
                }
            }
        },
        
        renderLampade: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                console.log("Lampade: " + number);
                for(var i=0; i < this.lampade.length; i++){
                    this.lampade[i].setAttributes({render: i < number});
                }
            }
        },
        
        renderCestini: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var valorebuono = 0.03 + 0.05*(number/100);
                var valorecattivo = 0.03 + 0.05*((100-number)/100);
                
                this.cestino.setAttributes({scale: (valorebuono + " " + valorebuono + " " + valorebuono).scaleByFactor(this.factor)});
                this.cestinox.setAttributes({scale: (valorecattivo + " " + valorecattivo + " " + valorecattivo).scaleByFactor(this.factor)});
            }
        },
        
        renderUniversita: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                this.universita.setAttributes({scale: (number + " " + number + " " + number).scaleByFactor(this.factor)});
            }
        },
        
        renderAcqua: { writtable: false, configurable: false, enumerable: false,
            value: function(number){
                var y = -3.5 + 1.7*(number/100);
                this.acqua.setAttributes({translation: ("-8.8 " + y +" -4.5").scaleByFactor(this.factor),
                                          scale: "1 1 1".scaleByFactor(this.factor),
                                          rotation: "0 -1 0 1.57"});
            }
        },
        
        renderStudenti: { writtable: false, configurable: false, enumerable: false,
            value: function(number)
            {
                var rossi = Renderer.MAX_STUDENTI - number;
                for(var i=0; i < this.studentiverdi.length; i++){
                    this.studentiverdi[i].setAttributes({render: i < number});
                }
                for(var i=0; i < this.studentirossi.length; i++){
                    this.studentirossi[i].setAttributes({render: i < rossi});
                }
            }
        }
    });
})(window,undefined);
