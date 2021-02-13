function _GeneratorClock_fe(_GeneratorClock_E_ve,_GeneratorClock_S_ve,_GeneratorClock_M_ve) { /*Generator Clock*/
	/*Element*/
	/*Side*/
	/*Margin*/
	_GeneratorClock_E_ve.innerHTML += '<div id="_GeneratorClock_D1_de" style="background:rgba(33,33,33,0.2);bottom:calc('+_GeneratorClock_M_ve+'*1.6180339887498948);height:calc('+_GeneratorClock_S_ve+'*4);position:absolute;right:calc('+_GeneratorClock_M_ve+'*1.6180339887498948);width:calc('+_GeneratorClock_S_ve+'*4);"></div>';
	_GeneratorClock_D1_ve = document.getElementById('_GeneratorClock_D1_de'); /*Div 1*/
	_GeneratorClock_DO_ve = new Date(); /*Date Old*/
	_GeneratorClock_DO_ve = _GeneratorClock_DO_ve.toLocaleTimeString();
	_GeneratorClock_DN_ve = _GeneratorClock_DO_ve; /*Date New*/
	_GeneratorClock_SC_ve = setInterval(function() { /*Set Clock*/
		_GeneratorClock_DT_ve = new Date(); /*Date Temporanely*/
		_GeneratorClock_DN_ve = _GeneratorClock_DT_ve.toLocaleTimeString();
		if(_GeneratorClock_DO_ve!=_GeneratorClock_DN_ve) {
			setInterval(_GeneratorClock_Clock_fe,1000);
			clearInterval(_GeneratorClock_SC_ve);
		};
	},1);
};

function _GeneratorClock_Clock_fe() { /*Generator Clock /Clock*/
	_GeneratorClock_D_ve = new Date(); /*Date*/
	_GeneratorClock_D_T_ve = _GeneratorClock_D_ve.toLocaleTimeString(); /*Date /Time*/
};
