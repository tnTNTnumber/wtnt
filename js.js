var _ = null;

function _jArrayComma(_0,_1) {
	if(!_0) {
		return `At least one argument is required. For more information type: _jHelp('ArrayComma')`;
	};
	if(!_1) {
		_1 = '';
	};
	let _2 = '';
	for(let _3=0; _3<_0.length-1; _3++) {
		_2 += _0[_3]+_1;
	};
	return _2+_0[_0.length-1];
}; function _JAC(_0,_1) { return _jArrayComma(_0,_1) };

function _jArrayCommaDouble(_0,_1,_2,_3) {
	if(!_0) {
		return `At least one argument is required. For more information type: _jHelp('ArrayCommaDouble')`;
	};
	let _4 = '';
	let _5 = _0[0].length;
	if(_3) {
		for(let _6=0; _6<_0.length; _6++) {
			if(_0[_6].length<_5) {
				_5 = _0[_6].length;
			};
		};
	} else {
		for(let _6=0; _6<_0.length; _6++) {
			if(_0[_6].length>_5) {
				_5 = _0[_6].length;
			};
		};
	};
	for(let _6=0; _6<_0.length; _6++) {
		while(_0[_6].length<_5) {
			_0[_6] = _0[_6].concat('');
		};
	};
	if(!_1) {
		_1 = [];
	};
	while(_1.length<_5) {
		_1 = _1.concat('');
	};
	if(!_2) {
		_2 = ', ';
	};
	for(let _6=0; _6<_5; _6++) {
		for(let _7=0; _7<_0.length; _7++) {
			_4 += _0[_7][_6];
			if(_7!=_0.length-1) {
				_4 += _1[_6];
			};
		};
		if(_6!=_5-1) {
			_4 += _2;
		};
	};
	return _4;
}; function _JACD(_0,_1,_2,_3) { return _jArrayCommaDouble(_0,_1,_2,_3) };

function _jChronoFor(_0,_1,_2,_3) {
	let _5 = String.fromCharCode(13, 10);
	if(typeof _0==='function') {
		if(!_1) {
			_1 = [0,0,1];
		} else if(!(Array.isArray(_1))) {
			if(isNaN(_1)) {
				return `The second parameter must be a number.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, 3)`+_5+`For more information type: _jHelp('ChronoFor')`;
			};
			_1 = [0,_1,1];
		} else if(_1.length==0) {
			_1 = [0,0,1];
		} else if(_1.length==1) {
			if(isNaN(_1[0])) {
				return `The array of second parameter must contain a number.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, [3])`+_5+`For more information type: _jHelp('ChronoFor')`;
			};
			_1 = [0,_1[0],1];
		} else if(_1.length==2) {
			if(isNaN(_1[0])||isNaN(_1[1])) {
				return `The array of second parameter must contain numbers.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, [0, 3])`+_5+`For more information type: _jHelp('ChronoFor')`;
			};
			_1 = [_1[0],_1[1],1];
		} else {
			if(isNaN(_1[0])||isNaN(_1[1])||isNaN(_1[2])) {
				return `The array of second parameter must contain numbers.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, [0, 3, 1])`+_5+`For more information type: _jHelp('ChronoFor')`;
			};
			_1 = [_1[0],_1[1],_1[2]];
		};
		if(!_2) {
			_2 = 1000;
		};
		//~ if(!_2) {
			//~ _2 = [1000,0];
		//~ } else if(!(Array.isArray(_2))) {
			//~ if(isNaN(_2)) {
				//~ return `The third parameter must be a number.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, 3, 1500)`+_5+`For more information type: _jHelp('ChronoFor')`;
			//~ };
			//~ _2 = [_2,0];
		//~ } else if(_2.length==0) {
			//~ _2 = [1000,0];
		//~ } else if(_2.length==1) {
			//~ if(isNaN(_2[0])) {
				//~ return `The array of third parameter must contain a number.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, 3, [1500])`+_5+`For more information type: _jHelp('ChronoFor')`;
			//~ };
			//~ _2 = [_2[0],0];
		//~ } else {
			//~ if(isNaN(_2[0])||isNaN(_2[1])) {
				//~ return `The array of third parameter must contain numbers.`+_5+`Eg: _jChronoFor(function() {alert('Hi!')}, 3, [1000, 800])`+_5+`For more information type: _jHelp('ChronoFor')`;
			//~ };
			//~ _2 = [_2[0],_2[1]];
		//~ };
		if(!_3) {
			_3 = [];
		};
		//~ let _9 = [];
		//~ function _10() {
			//~ return (Math.random()-.5)*_2[1];
		//~ };
		//~ _9.push(_10());
		//~ for(let _6=0; _6<Math.floor((_1[1]-_1[0]); _6=_6+_1[2]) {
		//~ let _7 = '_4 = _4.concat(setTimeout(_0,(_2[0]-_9)*_8,';
		let _7 = '_4 = _4.concat(setTimeout(_0,_2*_8,';
		for(let _6=0; _6<_3.length; _6++) {
			if(typeof _3[_6]==='string') {
				_7 += '`'+_3[_6].replaceAll('|i|', '`+_8+`').replaceAll('|I|', '`+(_8+1)+`').replaceAll('|l|', '`+(_1[1]-_8)+`').replaceAll('|L|', '`+(_1[1]-_8-1)+`').replaceAll('|m|', '`+_1[0]+`').replaceAll('|M|', '`+_1[1]+`').replaceAll('|s|', '`+_1[2]+`').replaceAll('|t|', '`+_2+`')/*.replaceAll('|R|', '`+???+`')*/.replaceAll('|T|', '`+_8*_2+`').replaceAll('|p|', '`+_3+`').replaceAll('|f|', '`+_0+`').replaceAll('|r|', '`+Math.random()+`')+'`,';
				// iteration
				// Iterator (iteration+1)
				// left
				// Left (left-1)
				// min
				// Max
				// step
				// time
				// Range time
				// Time elapsed (theoric, in ms, from the for execution beginning)
				// parameters
				// function
				// random number
			} else {
				_7 += '_3['+_6+'],';
			};
		};
		let _4 = [];
		for(let _8=_1[0]; _8<_1[1]; _8=_8+_1[2]) {
			eval(_7.slice(0, -1)+'));');
		};
		return _4;
	} else {
		return `Is required at least the function that you want to run, and it must be a function. Eg: _jChronoFor( function(i) { alert('Iteration'+i) }, 3, 1000, [' N. \i'] )`;
	};
}; function _JCF(_0,_1,_2,_3) { return _jChronoFor(_0,_1,_2,_3) };

function _jChronoHSL(_0) {
	if(!_0) {
		return `Is required a JSON with at least the element "Elem" that you want to change color. Eg: _jChronoHSL({'Elem': 'document.body.style.backgroundColor' })`;
	};
	let _1 = [
		['Elem',null],
		['Interval',1000],
		['IntervalRange',0],
		['H',127.5],
		['HRange',255],
		['S',50],
		['SRange',100],
		['L',50],
		['LRange',100],
		['Opacity',1],
		['OpacityRange',0],
		['NotReplace',false],
	];
	for(let _2=0; _2<_1.length; _2++) {
		eval(
			`if(!_0.`+_1[_2][0]+`) {
				_0.`+_1[_2][0]+` = _1[_2][1];
			};`
		);
	};
	if(!_0.Elem) {
		return `Is required the element "Elem" that you want to change color. And it cannot be "", "0", "null", "''" or "false". Eg: _jChronoHSL({'Elem': 'document.body.style.backgroundColor' })`;
	};
	if(!_0.NotReplace) {
		return setInterval(function(_0) {
			eval(_0.Elem+` = 'hsla('+(Math.random()*_0.HRange-_0.HRange/2+_0.H)+','+(Math.random()*_0.SRange-_0.SRange/2+_0.S)+'%,'+(Math.random()*_0.LRange-_0.LRange/2+_0.L)+'%,'+(Math.random()*_0.OpacityRange-_0.OpacityRange/2+_0.Opacity)+')';`);
		}, Math.random()*_0.IntervalRange+_0.Interval, _0);
	} else {
		return setInterval(function(_0) {
			eval(_0.Elem+` += ', hsla('+(Math.random()*_0.HRange-_0.HRange/2+_0.H)+','+(Math.random()*_0.SRange-_0.SRange/2+_0.S)+'%,'+(Math.random()*_0.LRange-_0.LRange/2+_0.L)+'%,'+(Math.random()*_0.OpacityRange-_0.OpacityRange/2+_0.Opacity)+')';`);
		}, Math.random()*_0.IntervalRange-_0.IntervalRange/2+_0.Interval, _0);
	};
}; function _JCHSL(_0) { return _jChronoHSL(_0) };

function _jDateGetDayweek(_0,_1) {
	if(!_0||!_0.getDay) {
		_0 = new Date();
	};
	if(_1) {
		return _0.getDay()+1;
	} else {
		return _0.getDay();
	};
}; function _JDGDw(_0,_1) { return _jDateGetDayweek(_0,_1) };

function _jDateGetDayweekName(_0,_1) {
	if(!_0&&_0!=0) {
		_0 = new Date().getDay();
		if(_0==0) {
			_0 = 7;
		};
	};
	if(typeof _0==='number') {
		if(_1) {
			_0 -= 1;
		};
		return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][Math.floor(_0%7)];
	} else if(typeof _0==='string') {
		_0 = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'].indexOf(_0.toLowerCase());
		if(_1) {
			_0 += 1;
		};
		return _0;
	} else {
		return `the first parameter must be a number between 0 and 6 (or, if the second parameters is "true", between 1 and 7) or a name of a week day. For more information use: _jHelp('DateGetDayweekName')`;
	};
}; function _JDGDwN(_0,_1) { return _jDateGetDayweekName(_0,_1) };

function _jDateGetDay(_0) {
	if(!_0||!_0.getDate) {
		_0 = new Date();
	};
	return _0.getDate();
}; function _JDGD(_0) { return _jDateGetDay(_0) };

function _jDateGetMonth(_0,_1) {
	if(!_0||!_0.getMonth) {
		_0 = new Date();
	};
	if(_1) {
		return _0.getMonth()+1;
	} else {
		return _0.getMonth();
	};
}; function _JDGM(_0,_1) { return _jDateGetMonth(_0,_1) };

function _jDateGetMonthName(_0,_1) {
	if(!_0&&_0!=0) {
		_0 = new Date().getMonth();
		if(_0==0) {
			_0 = 12;
		};
	};
	if(typeof _0==='number') {
		if(_1) {
			_0 -= 1;
		};
		return ['January','February','March','April','May','June','July','August','September','October','November','December'][Math.floor(_0%12)];
	} else if(typeof _0==='string') {
		_0 = ['january','february','march','april','may','june','july','august','september','october','november','december'].indexOf(_0.toLowerCase());
		if(_1) {
			_0 += 1;
		};
		return _0;
	} else {
		return `the first parameter must be a number between 0 and 11 (or, if the second parameters is "true", between 1 and 12) or a name of a month. For more information use: _jHelp('DateGetMonthName')`;
	};
}; function _JDGMN(_0,_1) { return _jDateGetMonthName(_0,_1) };

function _jDateGetYear(_0) {
	if(!_0||!_0.getFullYear) {
		_0 = new Date();
	};
	return _0.getFullYear();
}; function _JDGY(_0) { return _jDateGetYear(_0) };

function _jDateGetHours(_0,_1) {
	if(!_0||!_0.getHours) {
		_0 = new Date();
	};
	_0 = _0.getHours();
	if(!_1&&_0<10) {
		_0 = '0'+_0;
	};
	return _0;
}; function _JDGh(_0,_1) { return _jDateGetHours(_0,_1) };

function _jDateGetMinutes(_0,_1) {
	if(!_0||!_0.getMinutes) {
		_0 = new Date();
	};
	_0 = _0.getMinutes();
	if(!_1&&_0<10) {
		_0 = '0'+_0;
	};
	return _0;
}; function _JDGm(_0,_1) { return _jDateGetMinutes(_0,_1) };

function _jDateGetSeconds(_0,_1) {
	if(!_0||!_0.getSeconds) {
		_0 = new Date();
	};
	_0 = _0.getSeconds();
	if(!_1&&_0<10) {
		_0 = '0'+_0;
	};
	return _0;
}; function _JDGs(_0,_1) { return _jDateGetSeconds(_0,_1) };

function _jDateGetMilliseconds(_0,_1) {
	if(!_0||!_0.getMilliseconds) {
		_0 = new Date();
	};
	_0 = _0.getMilliseconds();
	if(!_1&&_0<10) {
		_0 = '00'+_0;
	} else if(!_1&&_0<100) {
		_0 = '0'+_0;
	};
	return _0;
}; function _JDGms(_0,_1) { return _jDateGetMilliseconds(_0,_1) };

function _jDateGetString(_0) {
	if(!_0) {
		_0 = {};
	};
	let _3 = new Date();
	if(_0.Date) {
		if(_0.Date.getTime) {
			_3 = _0.Date;
		};
	};
	if(_0.MN&&!_0.M) {
		_0.M = _JDGMN(_0.MN);
	} else if(!_0.MN&&_0.M) {
		_0.MN = _JDGMN(_0.M);
	};
	if(_0.DwN&&!_0.Dw) {
		_0.Dw = _JDGDwN(_0.DwN);
	} else if(!_0.DwN&&_0.Dw) {
		_0.DwN = _JDGDwN(_0.Dw);
	};
	let _1 = [
		['Date',_3],
		['Y',_JDGY(_3)],
		['M',_JDGM(_3)],
		['MN',_JDGMN(_3.getMonth())],
		['D',_JDGD(_3)],
		['Dw',_JDGDw(_3)],
		['DwN',_JDGDwN(_3.getDay())],
		['h',_JDGh(_3)],
		['m',_JDGm(_3)],
		['s',_JDGs(_3)],
		['ms',_JDGms(_3)],
	];
	for(let _2=0; _2<_1.length; _2++) {
		eval(
			`if(!_0.`+_1[_2][0]+`) {
				_0.`+_1[_2][0]+` = _1[_2][1];
			};`
		);
	};
	return _0.DwN+' '+_0.D+' '+_0.MN+' '+_0.Y+' at '+_0.h+':'+_0.m+':'+_0.s+':'+_0.ms;
}; function _JDGS(_0) { return _jDateGetString(_0) };

function _jHelp(_0,_12) {
	if(!_0) {
		return `Is required the name of the function that you want to have information about. Eg: _jHelp('Help')`;
	};
	let _1 = _2 = [];
	let _3 = _4 = '';
	let _8 = String.fromCharCode(13, 10);
	let _9 = [
		[	['ArrayComma','AC'],
			[
			],
			[
				'( List , Sep )',
			],
			[
				`([1,2,3])`,
				`([1,2,3], '-')`,
			],
		],
		[	['ArrayCommaDouble','ACD'],
			[
			],
			[
				'( [ List_1, List_2, List_3, .. ] , [ Sep_1, Sep_2, Sep_3, .. ] , Comma_Sep , Crop )',
			],
			[
				`([[1,2,3],['a','b','c'],[true,false,null]])`,
				`([[1,2,3],['a','b','c'],[true,false,null]], ['-','·','~'])`,
				`([[1,2,3],['a','b','c'],[true,false,null]], ['-','·','~'], '; ')`,
				`([[1,2,3],['a','b','c'],[true,false,null]], ['-','·','~'], '; ', true)`,
			],
		],
		[	['ChronoFor','CF'],
			[
				`It's a timed "for".`,
			],
			[
				'( Function , i_Values , Interval , [ Param_1, Param_2, Param_3, .. ] )',
				``,
				`Function:`,
				`	It's the function that will be executed.`,
				``,
				`i_Values:`,
				`Desc:`,
				`	Are the "Start", "Stop" and "Step" parameters of an iteration and must be of type "number".`,
				`Syntax:`,
				`	[ i_Min, i_Max, i_Step ] or`,
				`	[ i_Min, i_Max ] or `,
				`	[ i_Num ] or`,
				`	i_Num`,
				`Values:`,
				`	i_Num: number of times that the function will have to be repeated (default: 0)`,
				`	i_Max: max value that the iterator that checks the repetition of the function (default: 0)`,
				`	i_Min: value from which the iterator that checks the repetition of the function (default: 0)`,
				`	i_Step: value by which it is incremented the iterator that checks the repetition of the function (default: 1)`,
				``,
				`Interval:`,
				`	Is the time interval (in ms) for which the function is executed.`,
				``,
				`Params:`,
				`	Are the parameters that will be passed to the function.`,
				`	The strings of these parameters will be parsed and if the following writes are found they will be replaced with the following values:`,
				`Special writes:`,
				`	"|i|" is the iteration, it counts the number of times the function has been repeated (starts from 0).`,
				`	"|I|" is the Iterator, it counts the number of times the function has been repeated (starts from 1).`,
				`	"|l|" is the left, it counts the number of times the function must still be repeated (starts from i_Max - i_Min).`,
				`	"|L|" is the Lefter, it counts the number of times the function must still be repeated (starts from i_Max - i_Min - 1).`,
				`	"|m|" is the min and it's i_Min.`,
				`	"|M|" is the Max and it's i_Max.`,
				`	"|s|" is the step and it's i_Step.`,
				`	"|t|" is the time and it's Interval.`,
				`	"|T|" is the Time elapsed, it's the theoretical time interval (expressed in ms) from which the for started.`,
				`	"|p|" is the parameters and it's the list containing "Param_1", "Param_2", "Param_3", .. .`,
				`	"|f|" is the function and it's Function.`,
				`	"|r|" is the random, it's a random number (between 0 and 1).`,
			],
			[
				`( function() { alert('Hello World!') } )`,
				`( function() { alert('Hello World!') }, 3 )`,
				`( function() { alert('Hello World!') }, [ 3 ] )`,
				`( function() { alert('Hello World!') }, [ 2, 5 ] )`,
				`( function() { alert('Hello World!') }, [ 2, 4, .5 ] )`,
				`( function() { alert('Hello World!') }, 3, 1800 )`,
				`( function() { alert('Hello World!') }, 3, 1000, [] )`,
				`( function(str) { alert(str) }, 3, 1000, ['Hello World!'] )`,
				`( function(n) { alert('Hello for '+n+' time(s)!') }, 3, 1000, ['|I|.'] )`,
				`( function(params) { alert('Params example: '+params) }, 5, 1000, ['i=|i|, I=|I|, l=|l|, L=|L|, m=|m|, M=|M|, s=|s|, t=|t|, T=|T|, p=|p|, f=|f|, r=|r|'] )`,
				`( function(params) { alert('Params example: '+params) }, [ 2, 4, .5 ], 1400, ['i=|i|, I=|I|, l=|l|, L=|L|, m=|m|, M=|M|, s=|s|, t=|t|, T=|T|, p=|p|, f=|f|, r=|r|'] )`,
				`( function(i) { let suffix = null; let plural = 's'; switch(i) { case '1': suffix = 'st'; plural = ''; break; case '2': suffix = 'nd'; break; case '3': suffix = 'rd'; break; default: suffix = 'th'; }; alert('Hello for '+i+suffix+' time'+plural+'!') }, 5, 1000, ['|I|'] )`,
			],
		],
		[	['ChronoHSL','CHSL'],
			[
			],
			[
				`( { 'Elem': Elem , 'Interval': Interval , 'IntervalRange': Interval_Range , 'H': Hue , 'S': Saturation , 'L': Lightness , 'Opacity': Opacity , 'HRange': Hue_Range , 'SRange': Saturation_Range , 'LRange': Lightness_Range , 'OpacityRange': Opacity_Range , 'NotReplace': Not_Replace } )`,
				``,
				`Elem`+_8+`·Desc : a style element. Is it the element that you want to change color ( it is essential and it cannot be "", "0", "null", "''" or "false" ).`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor' })`,
				`Interval`+_8+`·Desc : a number, pre is 1000. It is the time interval, expressed in ms, in which you want to change color.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'Interval': 1400 })`,
				`IntervalRange`+_8+`·Desc : a number, pre is 0. It is the time interval range, expressed in ms, in which the color can change.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'IntervalRange': 1000 })`,
				`H`+_8+`·Desc : a number from 0 to 255, pre is 127.5. It is the color, expressed in hue gradation.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'H': 0 })`,
				`HRange`+_8+`·Desc : a number from 0 to 255, pre is 255. It is the color range.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'HRange': 32 })`,
				`S`+_8+`·Desc : a number from 0 to 100, pre is 50. It is the saturation, expressed as a percentage.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'S': 12.5 })`,
				`SRange`+_8+`·Desc : a number from 0 to 100, pre is 0. It is the saturation range, expressed as a percentage.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'SRange': 12.5 })`,
				`L`+_8+`·Desc : a number from 0 to 100, pre is 50. It is the lightness, expressed as a percentage.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'L': 12.5 })`,
				`LRange`+_8+`·Desc : a number from 0 to 100, pre is 100. It is the lightness range, expressed as a percentage.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'LRange': 12.5 })`,
				`Opacity`+_8+`·Desc : a number from 0 to 1, pre is 1. It is the alpha parameter of HSLA scale, expressed as a unit measure.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'Opacity': 30 })`,
				`OpacityRange`+_8+`·Desc : a number from 0 to 1, pre is 0. It is the alpha parameter range of HSLA scale, expressed as a unit measure.`+_8+`·Eg   : _jChronoHSL({'Elem': 'document.body.style.backgroundColor', 'OpacityRange': 12.5 })`,
				`NotReplace`+_8+`·Desc : "true" or "false", pre is "false". If it is "false" the content of the element "Elem" will be replaced, otherwise if it is "true" it will be added.`+_8+`·Eg   : _jChronoHSL({'Elem': 'Gradient', 'NotReplace': true }) ;document.body.style.background='linear-gradient(var(--gradient))';var GradientChange='to right';Object.defineProperty(this,'Gradient',{get:function(){return GradientChange;},set:function(Value){GradientChange=Value;document.body.style.setProperty('--gradient',Gradient);}});`,
			],
			[
				`({'Elem': 'document.body.style.backgroundColor' })`,
				`({'Elem': 'document.body.style.backgroundColor', 'Interval': 500, 'IntervalRange': 1000 })`,
				`({'Elem': 'document.body.style.backgroundColor', 'H': 239, 'HRange': 32 })`,
				`({'Elem': 'document.body.style.backgroundColor', 'S': 14, 'SRange': 7 })`,
				`({'Elem': 'document.body.style.backgroundColor', 'L': 14, 'LRange': 7 })`,
				`({'Elem': 'document.body.style.backgroundColor', 'Opacity': 0.25, 'OpacityRange': 0.5 })`,
				`({'Elem': 'Gradient', 'NotReplace': true }) ;document.body.style.background='radial-gradient(var(--gradient))';var GradientChange='circle';Object.defineProperty(this,'Gradient',{get:function(){return GradientChange;},set:function(Value){GradientChange=Value;document.body.style.setProperty('--gradient',Gradient);}});`,
			],
		],
		[	['DateGetDayweek','DGDw'],
			[
				`Returns the week day number, in 0-6 format or, if "Type" is true, 1-7 format.`,
			],
			[
				'( Date , Type )',
			],
			[
				`()`,
				`(new Date())`,
				`(_,true)`,
				`(new Date(),true)`,
			],
		],
		[	['DateGetDayweekName','DGDwN'],
			[
				`Returns the week day name.`,
			],
			[
				'( Dayweek , Type )',
			],
			[
				`()`,
				`(0)`,
				`(1,true)`,
				`(_,true)`,
			],
		],
		[	['DateGetDay','DGD'],
			[
				`Returns the day number.`,
			],
			[
				'( Date )',
			],
			[
				`()`,
				`(new Date())`,
			],
		],
		[	['DateGetMonth','DGM'],
			[
				`Returns the month number, in 0-11 format or, if "Type" is true, 1-12 format.`,
			],
			[
				'( Date , Type )',
			],
			[
				`()`,
				`(new Date())`,
				`(_,true)`,
				`(new Date(),true)`,
			],
		],
		[	['DateGetMonthName','DGMN'],
			[
				`Returns the month name.`,
			],
			[
				'( Month , Type )',
			],
			[
				`()`,
				`(0)`,
				`(1,true)`,
				`(_,true)`,
			],
		],
		[	['DateGetYear','DGY'],
			[
				`Returns the year.`,
			],
			[
				'( Date )',
			],
			[
				`()`,
				`(new Date())`,
			],
		],
		[	['DateGetHours','DGh'],
			[
				`Returns the hours, in "hh" format or, if "Type" is true, in type "number".`,
			],
			[
				'( Date , Fill_YoN )',
			],
			[
				`()`,
				`(new Date())`,
				`(_,true)`,
				`(new Date(),true)`,
			],
		],
		[	['DateGetMinutes','DGm'],
			[
				`Returns the minutes, in "mm" format or, if "Type" is true, in type "number".`,
			],
			[
				'( Date , Fill_YoN )',
			],
			[
				`()`,
				`(new Date())`,
				`(_,true)`,
				`(new Date(),true)`,
			],
		],
		[	['DateGetSeconds','DGs'],
			[
				`Returns the minutes, in "ss" format or, if "Type" is true, in type "number".`,
			],
			[
				'( Date , Fill_YoN )',
			],
			[
				`()`,
				`(new Date())`,
				`(_,true)`,
				`(new Date(),true)`,
			],
		],
		[	['DateGetMilliseconds','DGms'],
			[
				`Returns the minutes, in "μμμ" format or, if "Type" is true, in type "number".`,
			],
			[
				'( Date , Fill_YoN )',
			],
			[
				`()`,
				`(new Date())`,
				`(_,true)`,
				`(new Date(),true)`,
			],
		],
		[	['DateGetString','DGS'],
			[
				`Returns a string containing date and time information.`,
			],
			[
				`( { 'Date': Date , 'Y': Year , 'M': Month , 'MN': Month_Name , 'D': Day , 'Dw': Dayweek , 'DwN': Dayweek_Name , 'h': Hours , 'm': Minutes , 's': Seconds , 'ms': Milliseconds } )`,
			],
			[
				`()`,
				`({'Date': new Date() })`,
				`({'M': 6 })`,
				`({'MN': 'My-Month' })`,
				`({'M': 8, 'MN': 'Bad-Month' })`,
				`({'Date': new Date(), 'Y': 134340+'-2ndA.D.', 'M': 1, 'MN': 'Yellowny', 'D': 32, 'Dw': 0, 'DwN': 'Plutoday', 'h': 33, 'm': 77, 's': 99, 'ms': 'lol' })`,
			],
		],
		[	['Help','H'],
			[
			],
			[
				'( Command , Type )',
			],
			[
				`('Help')`,
				`('H')`,
				`('Help', false)`,
				`('H', false)`,
				`('ListCommand', true)`,
				`('LC', true)`,
			],
		],
		[	['TextareaOutput','TO'],
			[
				'This function puts a string in the ".value" of the element which "id" is "textarea".'
			],
			[
				'( String )',
			],
			[
				`()`,
				`('Hello World!')`,
			],
		],
		[	['TextareaRead','TR'],
			[
				'This function returns ".value" of the element which "id" is "textarea".'
			],
			[
				'( )',
			],
			[
				`()`,
			],
		],
	];
	let _11 = [
		[	['ListCommand','LC'],
			[
				'Return the list of commands.',
				`Eg: _jHelp('ListCommand', true)`,
				`Eg: _jHelp('LC', true)`,
				`Eg: _JH('ListCommand', true)`,
				`Eg: _JH('LC', true)`,
			],
		],
		[	['ListParameter','LP'],
			[
				'Return the list of parameters.',
				`Eg: _jHelp('ListParameter', true)`,
				`Eg: _jHelp('LP', true)`,
				`Eg: _JH('ListParameter', true)`,
				`Eg: _JH('LP', true)`,
			],
		],
	];
	if(!_12) {
		let _10 = 0;
		while(true) {
			if(_10>=_9.length) {
				return 'Error!'+_8+_8+'Check if ..'+_8+'you spelled the command name wrong.'+_8+'the command you are looking for exists.'+_8+_8+`For the list of existing commands type: _jHelp('ListCommand', true)`+_8+`For the list of existing commands type: _jHelp('LC', true)`+_8+_8+`For the list of existing parameters type: _jHelp('ListParameter', true)`+_8+`For the list of existing parameters type: _jHelp('LP', true)`;
			};
			if(_0!=_9[_10][0][0]&&_0!=_9[_10][0][1]) {
				_10 += 1;
			} else {
				break;
			};
		};
		_1 = _9[_10][0];
		_2 = _9[_10][3];
		_3 = _9[_10][1];
		_4 = _9[_10][2];
		let _7 = 'Info:'+_8
		for(let _13=0; _13<_3.length; _13++) {
			_7 += _3[_13]+_8;
		};
		_7 += _8+_8+'Syntax:'+_8;
		for(let _13=0; _13<_4.length; _13++) {
			_7 += _4[_13]+_8;
		};
		_7 += _8+_8+'Eg:'+_8;
		for(let _6=0; _6<_2.length; _6++) {
			_7 += '_j'+_1[0]+_2[_6];
			_7 += _8;
		};
		_7 += _8+'Eg:'+_8;
		for(let _6=0; _6<_2.length; _6++) {
			_7 += '_J'+_1[1]+_2[_6];
			if(_6<_2.length-1) {
				_7 += _8;
			};
		};
		return _7;
	} else {
		let _5 = null;
		switch(_0) {
			case 'ListCommand':
			case 'LC':
				_5 = 'List of commands:'+_8+_8;
				for(let _6=0; _6<_9.length; _6++) {
					_5 += _9[_6][0][0]+', '+_9[_6][0][1]+','+_8;
				};
				return _5;
			case 'ListParameter':
			case 'LP':
				_5 = 'List of parameters:'+_8;
				for(let _6=0; _6<_11.length; _6++) {
					_5 += _8+_11[_6][0][0]+', '+_11[_6][0][1]+':'+_8;
					for(let _7=0; _7<_11[_6][1].length; _7++) {
						_5 += _11[_6][1][_7];
						if(_7<_11[_6][1].length-1) {
							_5 += _8;
						};
					};
					if(_6<_11.length-1) {
						_5 += _8;
					};
				};
				return _5;
			default:
				return 'Error!'+_8+_8+'Check if ..'+_8+'you spelled the command name wrong.'+_8+'the command you are looking for exists.'+_8+_8+`For the list of existing commands type: _jHelp('ListCommand', true)`+_8+`For the list of existing commands type: _jHelp('LC', true)`+_8+_8+`For the list of existing parameters type: _jHelp('ListParameter', true)`+_8+`For the list of existing parameters type: _jHelp('LP', true)`;
		};
	};
}; function _JH(_0,_1) { return _jHelp(_0,_1) };

function _jHSL(_0) {
	if(!_0) {
		document.body.style.backgroundColor = 'hsla('+Math.random()*255+','+Math.random()*100+'%,'+Math.random()*100+'%,1)';
		return;
	};
	let _1 = [
		['Elem','document.body.style.backgroundColor'],
		['Interval',0],
		['IntervalRange',0],
		['H',127.5],
		['HRange',255],
		['S',50],
		['SRange',100],
		['L',50],
		['LRange',100],
		['Opacity',1],
		['OpacityRange',0],
		['NotReplace',false],
	];
	for(let _2=0; _2<_1.length; _2++) {
		eval(
			`if(!_0.`+_1[_2][0]+`) {
				_0.`+_1[_2][0]+` = _1[_2][1];
			};`
		);
	};
	if(!_0.NotReplace) {
		_0.NotReplace = '=';
	} else {
		_0.NotReplace = '+=';
	};
	return setTimeout(function(_0) {
		eval(_0.Elem+_0.NotReplace+`'hsla('+(Math.random()*_0.HRange-_0.HRange/2+_0.H)+','+(Math.random()*_0.SRange-_0.SRange/2+_0.S)+'%,'+(Math.random()*_0.LRange-_0.LRange/2+_0.L)+'%,'+(Math.random()*_0.OpacityRange-_0.OpacityRange/2+_0.Opacity)+')';`);
	}, Math.random()*_0.IntervalRange+_0.Interval, _0);
}; function _JHSL(_0) { return _jHSL(_0) };

//~ const capitalizeKeys = (obj) => { /*_jJSONKeyCapitalize*/
  //~ const isObject = o => Object.prototype.toString.apply(o) === '[object Object]'
  //~ const isArray = o => Object.prototype.toString.apply(o) === '[object Array]'
  
  //~ let transformedObj = isArray(obj) ? [] : {}
  
  //~ for (let key in obj) {
    //~ // replace the following with any transform function
    //~ const transformedKey = key.replace(/^\w/, (c, _) => c.toUpperCase())

    //~ if (isObject(obj[key]) || isArray(obj[key])) {
      //~ transformedObj[transformedKey] = capitalizeKeys(obj[key])
    //~ } else {
      //~ transformedObj[transformedKey] = obj[key]
    //~ }
  //~ }
  //~ return transformedObj
//~ } https://newbedev.com/changing-the-case-of-javascript-object-keys

function _jMakePadGestureGrid(_0) {
	if(!_0) {
		_0 = {};
	};
	if(!_0.Function&&!_0.Param) {
		_0.Param = [/*Result*/];
	};
	if(_0.Class&&!_0.Class.length) {
		_0.Class = [_0.Class];
	};
	let _1 = [
		['Elem',document.body],
		['Function',function(Result) {alert(Result);}],
		['Param',[]],
		['Grid',[3,3]],
		['PositionX',false],
		['PositionY',false],
		['DistanceX','-12em'],
		['DistanceY','4%'],
		['PadWidth','15em'],
		['PadHeight','15em'],
		['PadColor',''],
		['PadBorder','2px'],
		['PadBorderColor',''],
		['PadBorderRadius','5%'],
		['PadPadding','5%'],
		['PadOpacity',1],
		['PadOpacityRange',0],
		['GridWidth','68%'],
		['GridHeight','100%'],
		['GridColor',''],
		['GridBorder','0%'],
		['GridBorderColor',''],
		['GridBorderRadius','4%'],
		['GridPadding','-4%'],
		['GridOpacity',1],
		['GridOpacityRange',0],
		['CellsWidth','33%'],
		['CellsHeight','33%'],
		['CellsColor',''],
		['CellsBorder','1px'],
		['CellsBorderColor',''],
		['CellsBorderRadius','0%'],
		['CellsPadding','-4%'],
		['CellsOpacity',.8],
		['CellsOpacityRange',0],
		['BarWidth','18%'],
		['BarHeight','100%'],
		['BarColor',''],
		['BarBorder','5%'],
		['BarBorderColor',''],
		['BarBorderRadius','0%'],
		['BarPadding','-4%'],
		['BarOpacity',.97],
		['BarOpacityRange',.03],
		['Format','auto'], /*auto,standard,std,array,..*/
		['InverseXY','false'],
		['TransDur',800],
		['TransDurRange',50],
		['FullWidth','80%'],
		['FullHeight','80%'],
		['FullOpacity',.95],
		['FullOpacityRange',.01],
		['Id','_jPadGestureGrid'],
		['Class',[]],
	];
	for(let _2=0; _2<_1.length; _2++) {
		eval(
			`if(!_0.`+_1[_2][0]+`) {
				_0.`+_1[_2][0]+` = _1[_2][1];
			};`
		);
	};
	let _2 = ['right','bottom'];
	if(_0.PositionX) {
		_2[0] = 'left';
	};
	if(_0.PositionY) {
		_2[1] = 'top';
	};
	let _4 = '';
	for(let _3=0; _3<_0.Class.length; _3++) {
		_4 += ' '+_0.Class[_3];
	};
	_0.Elem.innerHTML += '<div class="_PA _jPadGestureGrid'+_4+'" id="'+_0.Id+'" style="'+_2[0]+':'+_0.DistanceX+';'+_2[1]+':'+_0.DistanceY+';width:'+_0.PadWidth+';height:'+_0.PadHeight+';background:red;"></div>';
	const _5 = _0.Elem.getElementsByClassName('_jPadGestureGrid')[_0.Elem.getElementsByClassName('_jPadGestureGrid').length-1];
	return _5;
}; function _JMPGG(_0) { return _jMakePadGestureGrid(_0) };
//~ _jMakePadGestureGrid( { 'Function': Function, 'Side': [ 3, 3 ], 'Format': 'auto'||'standard'||'std'||'array'||.., 'InverseXY': false } )

function _jTextareaOutput(_0) {
	if(!_0) {
		_0 = '';
	};
	document.getElementById('textarea').value = _0;
}; function _JTO(_0) { return _jTextareaOutput(_0) };

function _jTextareaRead() {
	if(document&&document.getElementById('textarea')) {
		return document.getElementById('textarea').value;
	};
}; function _JTR() { return _jTextareaRead() };

//~ Made by Angaroni Leonardo,
//~ Instagram: @leo.anga, @wtnt.tk
