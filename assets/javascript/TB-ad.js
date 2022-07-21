(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TB_ad_atlas_1", frames: [[0,1109,532,232],[0,0,1279,1107]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["TB_ad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TBslideshowbg1 = function() {
	this.initialize(ss["TB_ad_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,153,0,0.996)").s().p("AAcGxIg9AAIgBgEIgWhlIgBAAQgegGgagIIgPAQIg+A/IAAAAIg2gfIADgLQAPgwANgvIAAAAQgUgSgSgUQgGABgIACQgvAQgvANIAAAAIgfg2QAJgHAIgJIA+g9QgFgPgEgQIgJgfIAAgBIhmgXIAAAAIAAg9IBkgZIADgCQAHgfAKgcIAAAAIg/g+IgQgPIAfg2IAAAAIBeAcIAMAEQASgVAWgTIAAAAIgahiIgDgKIA1gfIAAAAIA8BAIAQAQQAagHAdgHIABAAIAXhlIABgFIA9AAIABAAIAZBjIACAHQAcAGAZAIIABAAIA9hAIAPgQIA1AfQgNAvgOAxIgDAKQAYATAUAXIAAAAIBfgdIAMgEIAfA3IAAAAIhAA9IgPAQQAIAbAGAgIAAAAIBmAXIAEABIAAA9IAAAAIgGACIhkAZIAAABQgFAggLAcIASARIA/A9IAAABQgQAagPAcIgHgCQgvgPgwgOQgGgCABgDIAAAAQgUAWgXAVIACAHQAOAxANAwIAAAAIg1AfIgPgPIg7hBIgBAAQgbAJgdAGIgBAEQgLAygOAxIAAABIAAABgAjQCyQgBAiAhgFQAHgBADgEQAEgEADgGIAAAAQACgIgCgIQgEgJgGgEIgGgCIgJgBQgTAAgFASgAChCwQAAAXAUAEIAAAAQAVgBAFgRIAAAAIAAgEIAAgBQAAgKgGgFQgEgEgFgCIgJgBQgRAAgFASgAgXixQgbADgWAJQgrATgcAjQgbAigJA1QgCAGABAHIAAABQAAADgBACQABA8AXAmQAZAnAlAYQAmAZA7AAQAfAAAXgIQAugQAfggQAeghAMgxQAJghgGgkQgJg1gcgiQgcgigrgTQgdgNglAAQgMAAgPACgAjOi5QAAANAEAHQAFAHAKACQAYAFAIgTQAGgSgMgLQgDgEgGgBIgKgBQgUAAgGAUgACci7QAAAgAggEQAFAAAEgDIAAgBQAJgGAAgOIAAgBIgBgFQgCgGgDgDQgEgGgKgBIgFgBQgUAAgFATg");
	this.shape.setTransform(43.15,43.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,86.3,86.6), null);


(lib.Scene_1_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(228,17.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_text, null, null);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TBslideshowbg1();
	this.instance.setTransform(0,0,0.1689,0.1355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-76,502,152);


(lib.gear1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(43.1,43.2,1,1,0,0,0,43.1,43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:43.3,rotation:5.2941,x:43.05,y:43.35},0).wait(1).to({rotation:10.5882,y:43.3},0).wait(1).to({rotation:15.8824},0).wait(1).to({rotation:21.1765},0).wait(1).to({rotation:26.4706,x:43.1},0).wait(1).to({rotation:31.7647,x:43.05},0).wait(1).to({rotation:37.0588,y:43.25},0).wait(1).to({rotation:42.3529,y:43.3},0).wait(1).to({rotation:47.6471,y:43.25},0).wait(1).to({rotation:52.9412,y:43.3},0).wait(1).to({rotation:58.2353,x:43.1,y:43.25},0).wait(1).to({rotation:63.5294,x:43.05},0).wait(1).to({rotation:68.8235,x:43},0).wait(1).to({rotation:74.1176,x:43.05},0).wait(1).to({rotation:79.4118,y:43.2},0).wait(1).to({rotation:84.7059,x:43.1},0).wait(1).to({rotation:90},0).wait(1).to({rotation:95.2941,x:43.05,y:43.15},0).wait(1).to({rotation:100.5882,x:43.1},0).wait(1).to({rotation:105.8824},0).wait(1).to({rotation:111.1765},0).wait(1).to({rotation:116.4706,y:43.2},0).wait(1).to({rotation:121.7647,y:43.15},0).wait(1).to({rotation:127.0588,x:43.15},0).wait(1).to({rotation:132.3529,x:43.1},0).wait(1).to({rotation:137.6471,x:43.15},0).wait(1).to({rotation:142.9412,x:43.1},0).wait(1).to({rotation:148.2353,x:43.15,y:43.2},0).wait(1).to({rotation:153.5294,y:43.15},0).wait(1).to({rotation:158.8235,y:43.1},0).wait(1).to({rotation:164.1176,y:43.15},0).wait(1).to({rotation:169.4118,x:43.2},0).wait(1).to({rotation:174.7059,y:43.2},0).wait(1).to({rotation:180},0).wait(1).to({rotation:185.2941,y:43.15},0).wait(1).to({rotation:190.5882,y:43.2},0).wait(1).to({rotation:195.8824},0).wait(1).to({rotation:201.1765},0).wait(1).to({rotation:206.4706,x:43.15},0).wait(1).to({rotation:211.7647,x:43.2},0).wait(1).to({rotation:217.0588,y:43.25},0).wait(1).to({rotation:222.3529,y:43.2},0).wait(1).to({rotation:227.6471,y:43.25},0).wait(1).to({rotation:232.9412,y:43.2},0).wait(1).to({rotation:238.2353,x:43.15,y:43.25},0).wait(1).to({rotation:243.5294,x:43.2},0).wait(1).to({rotation:248.8235,x:43.25},0).wait(1).to({rotation:254.1176,x:43.2},0).wait(1).to({rotation:259.4118,y:43.3},0).wait(1).to({rotation:264.7059,x:43.15},0).wait(1).to({rotation:270,x:43.2},0).wait(1).to({rotation:275.2941,x:43.25},0).wait(1).to({rotation:280.5882,x:43.2},0).wait(1).to({rotation:285.8824},0).wait(1).to({rotation:291.1765},0).wait(1).to({rotation:296.4706,y:43.25},0).wait(1).to({rotation:301.7647,y:43.3},0).wait(1).to({rotation:307.0588,x:43.15},0).wait(1).to({rotation:312.3529,x:43.2},0).wait(1).to({rotation:317.6471,x:43.15},0).wait(1).to({rotation:322.9412,x:43.2},0).wait(1).to({rotation:328.2353,x:43.15,y:43.25},0).wait(1).to({rotation:333.5294,y:43.3},0).wait(1).to({rotation:338.8235,y:43.35},0).wait(1).to({rotation:344.1176,y:43.3},0).wait(1).to({rotation:349.4118,x:43.1},0).wait(1).to({rotation:354.7059,y:43.25},0).wait(1).to({rotation:360,y:43.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,87.8,87.8);


(lib.gear6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gear1("synched",0);
	this.instance.setTransform(51.1,51.3,1.1849,1.1849,0,0,0,43.1,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:43.2,scaleX:1.185,scaleY:1.185,rotation:3.0252,y:51.2,startPosition:1},0).wait(1).to({rotation:6.0504,startPosition:2},0).wait(1).to({rotation:9.0756,x:51.15,startPosition:3},0).wait(1).to({rotation:12.1008,x:51.1,startPosition:4},0).wait(1).to({rotation:15.1261,x:51.15,startPosition:5},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:18.1513,startPosition:6},0).wait(1).to({rotation:21.1765,x:51.1,startPosition:7},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:24.2017,x:51.15,startPosition:8},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:27.2269,y:51.15,startPosition:9},0).wait(1).to({rotation:30.2521,y:51.2,startPosition:10},0).wait(1).to({rotation:33.2773,startPosition:11},0).wait(1).to({rotation:36.3025,x:51.2,startPosition:12},0).wait(1).to({rotation:39.3277,x:51.15,startPosition:13},0).wait(1).to({rotation:42.3529,x:51.2,startPosition:14},0).wait(1).to({rotation:45.3782,x:51.15,startPosition:15},0).wait(1).to({rotation:48.4034,x:51.2,y:51.25,startPosition:16},0).wait(1).to({rotation:51.4286,x:51.25,y:51.2,startPosition:17},0).wait(1).to({rotation:54.4538,startPosition:18},0).wait(1).to({rotation:57.479,startPosition:19},0).wait(1).to({rotation:60.5042,startPosition:20},0).wait(1).to({rotation:63.5294,startPosition:21},0).wait(1).to({rotation:66.5546,startPosition:22},0).wait(1).to({rotation:69.5798,startPosition:23},0).wait(1).to({rotation:72.605,y:51.25,startPosition:24},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:75.6303,x:51.2,y:51.2,startPosition:25},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:78.6555,x:51.25,startPosition:26},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:81.6807,y:51.25,startPosition:27},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:84.7059,x:51.3,startPosition:28},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:87.7311,x:51.25,y:51.3,startPosition:29},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:90.7563,x:51.3,y:51.2,startPosition:30},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:93.7815,x:51.25,startPosition:31},0).wait(1).to({rotation:96.8067,y:51.25,startPosition:32},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:99.8319,x:51.3,y:51.2,startPosition:33},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:102.8571,y:51.25,startPosition:34},0).wait(1).to({rotation:105.8824,x:51.25,startPosition:35},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:108.9076,startPosition:36},0).wait(1).to({rotation:111.9328,startPosition:37},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:114.958,x:51.3,y:51.3,startPosition:38},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:117.9832,startPosition:39},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:121.0084,startPosition:40},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:124.0336,startPosition:41},0).wait(1).to({rotation:127.0588,x:51.25,startPosition:42},0).wait(1).to({rotation:130.084,x:51.3,startPosition:43},0).wait(1).to({rotation:133.1092,startPosition:44},0).wait(1).to({rotation:136.1345,y:51.35,startPosition:45},0).wait(1).to({rotation:139.1597,x:51.25,y:51.3,startPosition:46},0).wait(1).to({rotation:142.1849,startPosition:47},0).wait(1).to({rotation:145.2101,y:51.35,startPosition:48},0).wait(1).to({rotation:148.2353,x:51.3,y:51.4,startPosition:49},0).wait(1).to({rotation:151.2605,x:51.25,y:51.35,startPosition:50},0).wait(1).to({rotation:154.2857,x:51.3,y:51.4,startPosition:51},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:157.3109,x:51.25,y:51.35,startPosition:52},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:160.3361,x:51.2,y:51.4,startPosition:53},0).wait(1).to({rotation:163.3613,x:51.25,y:51.35,startPosition:54},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:166.3866,startPosition:55},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:169.4118,y:51.4,startPosition:56},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:172.437,x:51.2,y:51.35,startPosition:57},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:175.4622,x:51.25,y:51.4,startPosition:58},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:178.4874,x:51.2,startPosition:59},0).wait(1).to({rotation:181.5126,startPosition:60},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:184.5378,startPosition:61},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:187.563,startPosition:62},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:190.5882,startPosition:63},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:193.6134,x:51.15,y:51.45,startPosition:64},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:196.6387,startPosition:65},0).wait(1).to({rotation:199.6639,x:51.2,y:51.4,startPosition:66},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:202.6891,startPosition:67},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:205.7143,x:51.15,y:51.45,startPosition:68},0).wait(1).to({rotation:208.7395,x:51.1,y:51.4,startPosition:0},0).wait(1).to({rotation:211.7647,x:51.15,startPosition:1},0).wait(1).to({rotation:214.7899,x:51.1,startPosition:2},0).wait(1).to({rotation:217.8151,x:51.15,startPosition:3},0).wait(1).to({rotation:220.8403,startPosition:4},0).wait(1).to({rotation:223.8655,x:51.1,startPosition:5},0).wait(1).to({rotation:226.8908,y:51.35,startPosition:6},0).wait(1).to({rotation:229.916,x:51.05,y:51.45,startPosition:7},0).wait(1).to({rotation:232.9412,y:51.4,startPosition:8},0).wait(1).to({rotation:235.9664,startPosition:9},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:238.9916,y:51.45,startPosition:10},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:242.0168,x:51.1,y:51.4,startPosition:11},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:245.042,x:51.05,startPosition:12},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:248.0672,y:51.45,startPosition:13},0).wait(1).to({rotation:251.0924,x:51.1,y:51.4,startPosition:14},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:254.1176,x:51.05,startPosition:15},0).wait(1).to({rotation:257.1429,y:51.35,startPosition:16},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:260.1681,x:51.1,startPosition:17},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:263.1933,x:51.05,y:51.4,startPosition:18},0).wait(1).to({rotation:266.2185,x:51.1,y:51.35,startPosition:19},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:269.2437,startPosition:20},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:272.2689,x:51.05,startPosition:21},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:275.2941,y:51.3,startPosition:22},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:278.3193,x:51.1,startPosition:23},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:281.3445,startPosition:24},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:284.3697,x:51.05,y:51.35,startPosition:25},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:287.395,y:51.3,startPosition:26},0).wait(1).to({rotation:290.4202,startPosition:27},0).wait(1).to({rotation:293.4454,startPosition:28},0).wait(1).to({rotation:296.4706,startPosition:29},0).wait(1).to({rotation:299.4958,y:51.25,startPosition:30},0).wait(1).to({rotation:302.521,startPosition:31},0).wait(1).to({rotation:305.5462,x:51.1,startPosition:32},0).wait(1).to({rotation:308.5714,x:51.05,y:51.2,startPosition:33},0).wait(1).to({rotation:311.5966,x:51.1,y:51.25,startPosition:34},0).wait(1).to({rotation:314.6218,x:51.05,startPosition:35},0).wait(1).to({rotation:317.6471,x:51.1,startPosition:36},0).wait(1).to({rotation:320.6723,startPosition:37},0).wait(1).to({rotation:323.6975,x:51.05,y:51.2,startPosition:38},0).wait(1).to({rotation:326.7227,x:51.1,y:51.25,startPosition:39},0).wait(1).to({rotation:329.7479,y:51.15,startPosition:40},0).wait(1).to({rotation:332.7731,x:51.05,y:51.2,startPosition:41},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:335.7983,x:51.15,startPosition:42},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:338.8235,x:51.1,startPosition:43},0).wait(1).to({rotation:341.8487,x:51.15,startPosition:44},0).wait(1).to({scaleX:1.185,scaleY:1.185,rotation:344.8739,x:51.1,y:51.15,startPosition:45},0).wait(1).to({rotation:347.8992,x:51.15,y:51.2,startPosition:46},0).wait(1).to({rotation:350.9244,x:51.1,startPosition:47},0).wait(1).to({rotation:353.9496,x:51.15,y:51.15,startPosition:48},0).wait(1).to({rotation:356.9748,startPosition:49},0).wait(1).to({scaleX:1.1849,scaleY:1.1849,rotation:360,x:51.05,y:51.2,startPosition:50},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.8,104.2,104.1);


(lib.gear5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gear1("synched",0);
	this.instance.setTransform(8.15,8.2,0.1536,0.1536,14.9945,0,0,42.2,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:43.1,regY:43.2,rotation:-5.0052,x:8.3,y:8.25,startPosition:1},0).wait(1).to({rotation:-25.0052,x:8.35,startPosition:2},0).wait(1).to({rotation:-45.0052,x:8.45,y:8.15,startPosition:3},0).wait(1).to({rotation:-65.0052,x:8.4,y:8.1,startPosition:4},0).wait(1).to({rotation:-85.0051,x:8.35,y:8.05,startPosition:5},0).wait(1).to({rotation:-105.0051,x:8.3,y:7.95,startPosition:6},0).wait(1).to({rotation:-125.0051,x:8.2,startPosition:7},0).wait(1).to({rotation:-145.0051,x:8.15,y:7.9,startPosition:8},0).wait(1).to({rotation:-165.0051,x:8.05,y:7.95,startPosition:9},0).wait(1).to({rotation:-185.0051,x:7.95,y:8,startPosition:10},0).wait(1).to({rotation:-205.0051,startPosition:11},0).wait(1).to({rotation:-225.0051,x:7.85,y:8.1,startPosition:12},0).wait(1).to({rotation:-245.0051,x:7.9,y:8.15,startPosition:13},0).wait(1).to({rotation:-265.005,y:8.2,startPosition:14},0).wait(1).to({rotation:-285.005,x:7.95,y:8.3,startPosition:15},0).wait(1).to({rotation:-305.005,x:8.05,y:8.35,startPosition:16},0).wait(1).to({rotation:-325.005,x:8.1,y:8.45,startPosition:17},0).wait(1).to({rotation:-345.005,x:8.2,y:8.3,startPosition:18},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1.1,14.3,14.1);


(lib.gear4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gear1("synched",0);
	this.instance.setTransform(14.7,14.7,0.2771,0.2771,14.9958,0,0,42.8,42.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:43.1,regY:43.2,rotation:30.6511,x:14.65,y:14.9,startPosition:1},0).wait(1).to({rotation:46.3033,y:14.85,startPosition:2},0).wait(1).to({rotation:61.9554,x:14.6,y:14.9,startPosition:3},0).wait(1).to({rotation:77.6076,x:14.55,y:14.75,startPosition:4},0).wait(1).to({rotation:93.2598,x:14.5,y:14.7,startPosition:5},0).wait(1).to({rotation:108.912,x:14.55,startPosition:6},0).wait(1).to({rotation:124.5641,x:14.5,y:14.65,startPosition:7},0).wait(1).to({rotation:140.2163,startPosition:8},0).wait(1).to({rotation:155.8685,x:14.55,y:14.6,startPosition:9},0).wait(1).to({rotation:171.5207,x:14.6,y:14.55,startPosition:10},0).wait(1).to({rotation:187.1729,y:14.5,startPosition:11},0).wait(1).to({rotation:202.825,x:14.65,startPosition:12},0).wait(1).to({rotation:218.4772,x:14.7,startPosition:13},0).wait(1).to({rotation:234.1294,x:14.75,startPosition:14},0).wait(1).to({rotation:249.7816,y:14.55,startPosition:15},0).wait(1).to({rotation:265.4338,x:14.8,y:14.6,startPosition:16},0).wait(1).to({rotation:281.0859,x:14.85,y:14.65,startPosition:17},0).wait(1).to({rotation:296.7381,y:14.7,startPosition:18},0).wait(1).to({rotation:312.3903,x:14.9,startPosition:19},0).wait(1).to({rotation:328.0425,y:14.75,startPosition:20},0).wait(1).to({rotation:343.6946,x:14.8,y:14.8,startPosition:21},0).wait(1).to({rotation:359.3468,x:14.75,startPosition:22},0).wait(1).to({rotation:374.999,startPosition:23},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,2.3,24.8,24.9);


(lib.gear3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gear1("synched",0);
	this.instance.setTransform(21.5,21.6,0.4067,0.4067,14.9972,0,0,42.4,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:43.1,regY:43.2,rotation:4.7132,x:21.7,y:21.95,startPosition:1},0).wait(1).to({rotation:-5.5725,x:21.8,y:21.9,startPosition:2},0).wait(1).to({rotation:-15.8582,x:21.85,y:21.8,startPosition:3},0).wait(1).to({rotation:-26.1439,x:21.95,y:21.75,startPosition:4},0).wait(1).to({rotation:-36.4297,y:21.7,startPosition:5},0).wait(1).to({rotation:-46.7154,y:21.6,startPosition:6},0).wait(1).to({rotation:-57.0011,x:22,y:21.5,startPosition:7},0).wait(1).to({rotation:-67.2868,x:21.95,startPosition:8},0).wait(1).to({rotation:-77.5725,x:21.85,y:21.4,startPosition:9},0).wait(1).to({rotation:-87.8582,x:21.8,y:21.3,startPosition:10},0).wait(1).to({rotation:-98.1439,x:21.75,y:21.25,startPosition:11},0).wait(1).to({rotation:-108.4296,x:21.7,y:21.2,startPosition:12},0).wait(1).to({rotation:-118.7153,x:21.65,y:21.15,startPosition:13},0).wait(1).to({rotation:-129.0011,x:21.55,startPosition:14},0).wait(1).to({rotation:-139.2868,x:21.45,startPosition:15},0).wait(1).to({rotation:-149.5725,x:21.4,y:21.1,startPosition:16},0).wait(1).to({rotation:-159.8582,x:21.35,y:21.15,startPosition:17},0).wait(1).to({rotation:-170.1439,x:21.25,y:21.2,startPosition:18},0).wait(1).to({rotation:-180.4296,x:21.15,y:21.25,startPosition:19},0).wait(1).to({rotation:-190.7153,y:21.3,startPosition:20},0).wait(1).to({rotation:-201.001,x:21.1,y:21.35,startPosition:21},0).wait(1).to({rotation:-211.2868,x:21.05,y:21.45,startPosition:22},0).wait(1).to({rotation:-221.5725,y:21.5,startPosition:23},0).wait(1).to({rotation:-231.8582,x:21,y:21.6,startPosition:24},0).wait(1).to({rotation:-242.1439,y:21.7,startPosition:25},0).wait(1).to({rotation:-252.4296,x:21.05,y:21.75,startPosition:26},0).wait(1).to({rotation:-262.7153,x:21.1,y:21.8,startPosition:27},0).wait(1).to({rotation:-273.001,y:21.85,startPosition:28},0).wait(1).to({rotation:-283.2867,x:21.2,y:21.95,startPosition:29},0).wait(1).to({rotation:-293.5724,x:21.25,y:22.05,startPosition:30},0).wait(1).to({rotation:-303.8582,x:21.3,startPosition:31},0).wait(1).to({rotation:-314.1439,x:21.4,y:22.1,startPosition:32},0).wait(1).to({rotation:-324.4296,x:21.5,startPosition:33},0).wait(1).to({rotation:-334.7153,x:21.6,startPosition:34},0).wait(1).to({rotation:-345.001,x:21.7,y:21.95,startPosition:35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,3.2,36.8,36.8);


(lib.gear2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gear1("synched",0);
	this.instance.setTransform(37.4,37.5,0.8667,0.8667,0,0,0,43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:43.2,scaleX:0.8668,scaleY:0.8668,rotation:5.0704,y:37.6,startPosition:1},0).wait(1).to({rotation:10.1408,x:37.35,startPosition:2},0).wait(1).to({rotation:15.2113,x:37.4,startPosition:3},0).wait(1).to({rotation:20.2817,x:37.35,startPosition:4},0).wait(1).to({rotation:25.3521,startPosition:5},0).wait(1).to({rotation:30.4225,startPosition:6},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:35.493,startPosition:7},0).wait(1).to({rotation:40.5634,x:37.4,startPosition:8},0).wait(1).to({rotation:45.6338,x:37.35,startPosition:9},0).wait(1).to({rotation:50.7042,y:37.55,startPosition:10},0).wait(1).to({rotation:55.7746,startPosition:11},0).wait(1).to({rotation:60.8451,startPosition:12},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:65.9155,startPosition:13},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:70.9859,startPosition:14},0).wait(1).to({rotation:76.0563,y:37.5,startPosition:15},0).wait(1).to({rotation:81.1268,y:37.55,startPosition:16},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:86.1972,x:37.4,startPosition:17},0).wait(1).to({rotation:91.2676,x:37.35,y:37.45,startPosition:18},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:96.338,x:37.45,y:37.5,startPosition:19},0).wait(1).to({rotation:101.4085,x:37.4,y:37.45,startPosition:20},0).wait(1).to({rotation:106.4789,startPosition:21},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:111.5493,y:37.5,startPosition:22},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:116.6197,y:37.45,startPosition:23},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:121.6901,x:37.45,y:37.5,startPosition:24},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:126.7606,x:37.4,startPosition:25},0).wait(1).to({rotation:131.831,x:37.45,startPosition:26},0).wait(1).to({rotation:136.9014,x:37.4,y:37.45,startPosition:27},0).wait(1).to({rotation:141.9718,x:37.45,startPosition:28},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:147.0423,startPosition:29},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:152.1127,x:37.5,startPosition:30},0).wait(1).to({rotation:157.1831,x:37.45,y:37.5,startPosition:31},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:162.2535,startPosition:32},0).wait(1).to({rotation:167.3239,y:37.45,startPosition:33},0).wait(1).to({rotation:172.3944,y:37.5,startPosition:34},0).wait(1).to({rotation:177.4648,x:37.5,startPosition:35},0).wait(1).to({rotation:182.5352,startPosition:36},0).wait(1).to({rotation:187.6056,x:37.45,startPosition:37},0).wait(1).to({rotation:192.6761,y:37.45,startPosition:38},0).wait(1).to({rotation:197.7465,y:37.5,startPosition:39},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:202.8169,startPosition:40},0).wait(1).to({rotation:207.8873,x:37.5,y:37.55,startPosition:41},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:212.9577,x:37.45,startPosition:42},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:218.0282,startPosition:43},0).wait(1).to({rotation:223.0986,x:37.5,startPosition:44},0).wait(1).to({rotation:228.169,startPosition:45},0).wait(1).to({rotation:233.2394,y:37.5,startPosition:46},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:238.3099,y:37.55,startPosition:47},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:243.3803,x:37.45,y:37.5,startPosition:48},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:248.4507,x:37.55,y:37.55,startPosition:49},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:253.5211,x:37.45,y:37.6,startPosition:50},0).wait(1).to({rotation:258.5915,startPosition:51},0).wait(1).to({rotation:263.662,x:37.5,y:37.55,startPosition:52},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:268.7324,x:37.45,startPosition:53},0).wait(1).to({rotation:273.8028,x:37.55,y:37.6,startPosition:54},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:278.8732,x:37.5,startPosition:55},0).wait(1).to({rotation:283.9437,y:37.55,startPosition:56},0).wait(1).to({rotation:289.0141,y:37.6,startPosition:57},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:294.0845,startPosition:58},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:299.1549,startPosition:59},0).wait(1).to({rotation:304.2254,x:37.45,y:37.55,startPosition:60},0).wait(1).to({rotation:309.2958,x:37.5,y:37.6,startPosition:61},0).wait(1).to({rotation:314.3662,x:37.45,startPosition:62},0).wait(1).to({rotation:319.4366,x:37.5,startPosition:63},0).wait(1).to({rotation:324.507,x:37.45,startPosition:64},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,rotation:329.5775,startPosition:65},0).wait(1).to({rotation:334.6479,startPosition:66},0).wait(1).to({rotation:339.7183,x:37.5,y:37.55,startPosition:67},0).wait(1).to({rotation:344.7887,x:37.4,y:37.6,startPosition:68},0).wait(1).to({rotation:349.8592,y:37.55,startPosition:0},0).wait(1).to({rotation:354.9296,y:37.6,startPosition:1},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,rotation:360,x:37.35,y:37.55,startPosition:2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.6,76.5,76.39999999999999);


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.gear6();
	this.instance.setTransform(158.8,76.1,1,1,0,0,0,51.1,51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_6, null, null);


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.gear5();
	this.instance.setTransform(107.05,60.6,1,1,0,0,0,8.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_5, null, null);


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.gear4();
	this.instance.setTransform(95.05,76.55,1,1,0,0,0,14.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_4, null, null);


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.gear3();
	this.instance.setTransform(77.45,54.25,1,1,0,0,0,21.5,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_3, null, null);


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.gear2();
	this.instance.setTransform(40.05,91.7,1,1,0,0,0,37.4,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_2, null, null);


// stage content:
(lib.TBad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(250,75);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.setTransform(361,75.4,1,1,0,0,0,361,75.4);
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 0
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.setTransform(158.8,76.2,1,1,0,0,0,158.8,76.2);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 1
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(1));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.setTransform(107.2,60.8,1,1,0,0,0,107.2,60.8);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 2
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(1));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.setTransform(95.1,76.7,1,1,0,0,0,95.1,76.7);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 3
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(1));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.setTransform(77.7,54.7,1,1,0,0,0,77.7,54.7);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 4
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.setTransform(40.1,91.9,1,1,0,0,0,40.1,91.9);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 5
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.setTransform(108,75,1,1,0,0,0,108,75);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 6
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(249,74,252,77);
// library properties:
lib.properties = {
	id: '17963928EF78E2488E101B22F0FFD7FB',
	width: 500,
	height: 150,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"assets/images/TB_ad_atlas_1.png", id:"TB_ad_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['17963928EF78E2488E101B22F0FFD7FB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;