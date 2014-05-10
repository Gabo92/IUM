function X3DResource(id){
	this.children = {};
	this.transform = document.createElement("Transform");
	this.transform.setAttribute("id",id);
	this.transform.setAttribute("DEF",id + "_transform");
	this.attributes = {};
}

X3DResource.prototype = {
	setAttributes: function(attributes){
		for(attr in attributes){
			this.attributes[attr] = attributes[attr];
			this.transform.setAttribute(attr.toString(),attributes[attr]);
		}
	},
	addResource: function(def,url){
		var inline = document.createElement("Inline");
		inline.setAttribute("DEF",def);
		inline.setAttribute("url",url);
		this.transform.appendChild(inline);
		this.children[def] = inline;
	},
	setChildAttributes: function(def,attributes){
		if(this.children[def]){
			for(attr in attributes){
				this.children[def].setAttribute(attr.toString(),attributes[attr]);
			}
		}
	},
	getElement: function(){
		return this.transform;
	},
        remove: function(){
            this.transform.parentNode.removeChild(this.transform);
        },
        appendToScene: function(scene){
            scene.appendChild(this.transform);
        }
};

String.prototype.scaleByFactor = function(factor){
	var nums = this.split(" ");
	var result = "";
	var i;
	for(i=0;i<nums.length;i++){
		nums[i] = parseFloat(nums[i]) * factor;
	}
	return nums.join(" ");
};

function loadResources(){
	var scene = document.getElementById("scene");
	var factor =  3;
	var robot = new X3DResource("robot");
	var lampada = new X3DResource("lampada");
	var libreria = new X3DResource("libreria");
	var omino = new X3DResource("omino");
	var autobus = new X3DResource("autobus");
	var macchina = new X3DResource("macchina");
	var albero = new X3DResource("albero");
	var lavello = new X3DResource("lavello");
	var pavimento = new X3DResource("pavimento");
	var cestino = new X3DResource("cestino");
	var barile = new X3DResource("barile");
	var universita = new X3DResource("universita");
	var cartellini = new X3DResource("cartellini");
	var foglietto = new X3DResource("foglietto");
	var tavolo = new X3DResource("tavolo");
	var muro_destro = new X3DResource("muro_destro");
	var muro_sinistro = new X3DResource("muro_sinistro");
	var muro_frontale = new X3DResource("muro_frontale");
	var soffitto = new X3DResource("soffitto");
	var libri = [];
	var i,j,x;
	var y = 0.355;
	var count = 0;
	var libNum = 10;
        muro_destro.setAttributes({
		translation: "-10 -0.2 -2".scaleByFactor(factor),
		scale: "1 1 0.2".scaleByFactor(factor),
		rotation: "0 1 0 1.57"
	});
	muro_destro.addResource("muro_destro","models/wall.x3d");
	scene.appendChild(muro_destro.getElement());

	muro_sinistro.setAttributes({
		translation: "6 -0.2 -2".scaleByFactor(factor),
		scale: "1 1 0.2".scaleByFactor(factor),
		rotation: "0 1 0 1.57"
	});
	muro_sinistro.addResource("muro_sinistro","models/wall.x3d");
	scene.appendChild(muro_sinistro.getElement());

	muro_frontale.setAttributes({
		translation: "-2 -0.2 -10".scaleByFactor(factor),
		scale: "1 1 0.2".scaleByFactor(factor)
	});
	muro_frontale.addResource("muro_frontale","models/wall.x3d");
	scene.appendChild(muro_frontale.getElement());

	soffitto.setAttributes({
		translation: "-2 3.8 -2".scaleByFactor(factor),
		scale: "1 1 1".scaleByFactor(factor)
	});
	soffitto.addResource("soffitto","models/soffitto.x3d");
        scene.appendChild(soffitto.getElement());
        
	for(j=0;j<5 && count<libNum;j++){
		x = 2.91;
		for(i=1;i<10 && count<libNum;i++){
			libri[i] = new X3DResource("libro" + i);
			libri[i].addResource("libro","models/libro.x3d");
			scene.appendChild(libri[i].getElement());
			libri[i].setAttributes({
				translation: (x + " " + y + " -9.5").scaleByFactor(factor),
				scale: "0.5 0.5 0.5".scaleByFactor(factor),
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
	libreria.setAttributes({
		translation: "4 -4.05 -9.5".scaleByFactor(factor),
		scale: "2.5 2.5 2.5".scaleByFactor(factor),
		rotation: "0 1 0 -3.14"
	});
	libreria.addResource("libreria","models/libreria.x3d");
	scene.appendChild(libreria.getElement());

	lampada.setAttributes({
		translation: "0 2.7 -10".scaleByFactor(factor),
		scale: "1 1 1".scaleByFactor(factor),
		rotation: "0 1 0 1.57"
	});
	lampada.addResource("lampada","models/lampada.x3d");
        scene.appendChild(lampada.getElement());

	omino.setAttributes({
		translation: "-2 -4 -4".scaleByFactor(factor),
		scale: "0.1 0.1 0.1".scaleByFactor(factor),
		rotation: "0.5 0 0 -1.57"
	});
	omino.addResource("omino", "models/Omino.x3d");
	scene.appendChild(omino.getElement());

	autobus.setAttributes({
		translation: "-2 -4 -3".scaleByFactor(factor),
		scale: "0.05 0.05 0.05".scaleByFactor(factor)
	});
	autobus.addResource("autobus","models/Autobus.x3d");
	scene.appendChild(autobus.getElement());

	macchina.setAttributes({
		translation: "-4 -3.9 -3".scaleByFactor(factor),
		scale: "0.05 0.05 0.05".scaleByFactor(factor),
		rotation: "1 0 0 -1.57"
	});
	macchina.addResource("macchina","models/Macchina2.x3d");
	scene.appendChild(macchina.getElement());

	albero.setAttributes({
		translation: "4.5 -3.9 -3".scaleByFactor(factor),
		scale: "0.03 0.03 0.05".scaleByFactor(factor),
		rotation: "1 0 0 -1.57"
	});
	albero.addResource("albero","models/Albero.x3d");
	scene.appendChild(albero.getElement());

	lavello.setAttributes({
		translation: "-8 -3 -8.8".scaleByFactor(factor),
		scale: "1 1 1".scaleByFactor(factor),
		rotation: "0 1 0 -3.14"
	});
	lavello.addResource("lavello","models/lavello1.x3d");
	scene.appendChild(lavello.getElement());

	pavimento.addResource("pavimento","models/pavimento.x3d");
	pavimento.setAttributes({
		translation: "-2 -4 -2".scaleByFactor(factor),
		scale: "1 1 1".scaleByFactor(factor)
	});
	scene.appendChild(pavimento.getElement());

	cestino.setAttributes({
		translation: "-9 -3.97 -6".scaleByFactor(factor),
		scale: "0.05 0.05 0.05".scaleByFactor(factor),
		rotation: "0 1 0 0.3"
	});
	cestino.addResource("cestino","models/Cestino.x3d");
	scene.appendChild(cestino.getElement());

	barile.setAttributes({
		translation: "2 -4 -4".scaleByFactor(factor),
		scale: "0.06 0.06 0.06".scaleByFactor(factor)
	});
	barile.addResource("barile","models/barile.x3d");
	scene.appendChild(barile.getElement());

	robot.setAttributes({
		translation: "3.5 -3.8 -6".scaleByFactor(factor),
		rotation: "0 1 0 90.2",
		scale: "0.2 0.2 0.2".scaleByFactor(factor)
	});
	robot.addResource("robot","models/robot.x3d");
	scene.appendChild(robot.getElement());

	universita.setAttributes({
		translation: "0 -4 -8.7".scaleByFactor(factor),
		rotation: "0 1 0 -3.14",
		scale: "0.5 1.2 0.6".scaleByFactor(factor)
	});
	universita.addResource("universita","models/universita.x3d");
	scene.appendChild(universita.getElement());

	cartellini.setAttributes({
		translation: "-5.5 -4 -9.5".scaleByFactor(factor),
		scale: "0.2 0.2 0.2".scaleByFactor(factor),
		rotation: "0 0 0 1.57"
	});
	cartellini.addResource("cartellini","models/Cartellini.x3d");
	scene.appendChild(cartellini.getElement());


	tavolo.setAttributes({
		translation: "0 -4 0".scaleByFactor(factor)
	});
	tavolo.addResource("tavolo","models/tavolo.x3d");
	scene.appendChild(tavolo.getElement());
}
