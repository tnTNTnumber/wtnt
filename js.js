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
		if(!_3) {
			_3 = [];
		};
		let _7 = '_4 = _4.concat(setTimeout(_0,_2*_8,';
		console.log(_3);
		for(let _6=0; _6<_3.length; _6++) {
			if(typeof _3[_6]==='string') {
				_7 += '`'+_3[_6].replaceAll('|i|', '`+_8+`').replaceAll('|I|', '`+(_8+1)+`').replaceAll('|l|', '`+(_1[1]-_8)+`').replaceAll('|L|', '`+(_1[1]-_8-1)+`').replaceAll('|m|', '`+_1[0]+`').replaceAll('|M|', '`+_1[1]+`').replaceAll('|s|', '`+_1[2]+`').replaceAll('|t|', '`+_2+`')+'`,';
				// iteration
				// Iteration (iteration+1)
				// left
				// Left (left-1)
				// min
				// Max
				// step
				// time
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
		//~ _jChronoFor( function(p) { alert('Param: '+p) }, 5, 1000, ['i=|i|, I=|I|, l=|l|, L=|L|, m=|m|, M=|M|, s=|s|, t=|t|'] )
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

function _jTextareaOutput(_0) {
	if(!_0) {
		_0 = '';
	};
	document.getElementById('textarea').value = _0;
}; function _JTO(_0) { return _jTextareaOutput(_0) };
