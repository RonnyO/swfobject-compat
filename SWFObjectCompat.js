var SWFObject = new Class({
	options: {
		version: '9.0.0',
		expressInstallSwfurl: 'http://s.mcstatic.com/Flash/expressInstall.swf',
		flashvars: {},
		params: swfobject.defaultParams,
		attributes: {},
		callbackFn: null
	},
	initialize: function(){
		var fields = ['swf', 'id', 'width', 'height', 'version', 'backgroundcolor', 'quality'];
		var args = Array.from(arguments);
		fields.each(function(field, i){
			switch(field){
				case 'quality':
					this.options.params.quality = args[i] != null ? args[i] : null;
					break;
				case 'backgroundcolor':
					this.options.params.bgcolor = args[i] != null ? args[i] : null;
					break;
				default: 
					this.options[field] = args[i] || null;
					break;
			}
		}.bind(this));
	},
	addParam: function(key, value){
		this.options.params[key] = value;
	},
	write: function(wrapperDivID){
		var o = this.options;
		new Element('div#'+o.id).inject(wrapperDivID);
		swfobject.embedSWF(o.swf, o.id, o.width, o.height, o.version, o.expressInstallSwfurl, o.flashvars, o.params, o.attributes, o.callbackFn);
	}
});