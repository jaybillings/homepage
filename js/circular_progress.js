/* 
 * Code retrieved from http://jsfiddle.net/oskar/Aapn8/ on 22 Jan 2014
 * Modified for modularity and to use jQuery by Jessica Billings on 22 Jan 2014
 */

var circularProgress = function (range, canvas, color, thickness, maxVal) {
	var range = $("#" + range);
	if (!range) {
		console.log('Invalid range parameter given');
		return;
	}
	
	var bg = document.getElementById(canvas);
	if (!bg) {
		console.log('Invalid canvas parameter given');
		return;
	}
	
	var ctx = bg.getContext('2d');
	var imd = null;
	var circ = Math.PI * 2;
	var quart = Math.PI / 2;

	ctx.beginPath();
	ctx.strokeStyle = color || '#99CC33';
	ctx.lineCap = 'square';
	ctx.closePath();
	ctx.fill();
	ctx.lineWidth = thickness || 10.0;

	imd = ctx.getImageData(0, 0, 240, 240);

	var draw = function(current) {
	    ctx.putImageData(imd, 0, 0);
	    ctx.beginPath();
	    ctx.arc(120, 120, 70, -(quart), ((circ) * current) - quart, false);
	    ctx.stroke();
	}

	range.bind("mouseenter mouseleave", function() {
		draw(this.value / 100);
	});

	var myFx = new Fx({
	    duration: 8000,
	    transition: 'bounce:out',
	    onStep: function(step){
	        draw(step / 100);
	        range.set('value', step);
	    }
	});

	myFx.set = function(now){
	    var ret = Fx.prototype.set.call(this, now);
	    this.fireEvent('step', now);
	    return ret;
	};

	myFx.start(0, maxVal);
}
