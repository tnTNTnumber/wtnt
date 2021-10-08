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

function _jHelp(_0,_12) {
	if(!_0) {
		return `Is required the name of the function that you want to have information about. Eg: _jHelp('Help')`
	};
	let _1 = _2 = [];
	let _3 = _4 = '';
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
				'( [ List 1, List 2, List 3, .. ] , [ Sep 1, Sep 2, Sep 3, .. ] , Comma Sep , Crop )',
			],
			[
				`([[1,2,3],['a','b','c'],[true,false,null]])`,
				`([[1,2,3],['a','b','c'],[true,false,null]], ['-','·','~'])`,
				`([[1,2,3],['a','b','c'],[true,false,null]], ['-','·','~'], '; ')`,
				`([[1,2,3],['a','b','c'],[true,false,null]], ['-','·','~'], '; ', true)`,
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
	let _8 = String.fromCharCode(13, 10);
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
		let _7 = 'Info:'+_8+_3+_8+_8+_8+'Syntax:'+_8+_4+_8+_8+_8+'Eg:'+_8;
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

// setInterval(function() {document.getElementById('textarea').style.background = 'hsl('+Math.random()*256+','+Math.random()*100+'%,'+Math.random()*100+'%)';},2400)
