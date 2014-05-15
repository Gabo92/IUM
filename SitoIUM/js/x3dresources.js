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
        useResource: function(resource){
           var shape = document.createElement("Shape");
           shape.setAttribute("USE",resource);
           this.transform.appendChild(shape);
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
	var i;
	for(i=0;i<nums.length;i++){
		nums[i] = parseFloat(nums[i]) * factor;
	}
	return nums.join(" ");
};
