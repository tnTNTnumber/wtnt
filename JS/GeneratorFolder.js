function _GeneratorFolder_M_fe(_GeneratorFolder_M_T_ve) { /*Main*/
	/*Title*/
	var _GeneratorFolder_M_I_ve = [0,0,0]; /*Iteration*/
	document.body.innerHTML = '<div class="_D1_ce"></div>';
	document.getElementsByClassName('_D1_ce')[0].innerHTML = '<h1>'+_GeneratorFolder_M_T_ve+'</h1>';
	for(_GeneratorFolder_M_I_ve[2]; _GeneratorFolder_M_I_ve[2]<_LA_ve.length-1; _GeneratorFolder_M_I_ve[2]++) {
		document.getElementsByClassName('_D1_ce')[0].innerHTML += '<p><span><span><a class="_C_ce '+_LA_ve[_GeneratorFolder_M_I_ve[2]][0]+'" href="'+_LA_ve[_GeneratorFolder_M_I_ve[2]][1]+'">'+_LA_ve[_GeneratorFolder_M_I_ve[2]][2]+'</a></span><span class="_FT_ce '+_LA_ve[_GeneratorFolder_M_I_ve[2]][3]+'"></span></span></p>';
	};
	for(_GeneratorFolder_M_I_ve[1]; _GeneratorFolder_M_I_ve[1]<_FT_ve.length-1; _GeneratorFolder_M_I_ve[1]++) {
		for(_GeneratorFolder_M_I_ve[0]; _GeneratorFolder_M_I_ve[0]<document.getElementsByClassName('_FT_'+_FT_ve[_GeneratorFolder_M_I_ve[1]][0]+'_ce').length; _GeneratorFolder_M_I_ve[0]++) {
			document.getElementsByClassName('_FT_'+_FT_ve[_GeneratorFolder_M_I_ve[1]][0]+'_ce')[_GeneratorFolder_M_I_ve[0]].innerHTML = _FT_ve[_GeneratorFolder_M_I_ve[1]][1];
		};
		_GeneratorFolder_M_I_ve[0] = 0;
	};
	_GeneratorFolder_M_I_ve[1] = 0;
};
