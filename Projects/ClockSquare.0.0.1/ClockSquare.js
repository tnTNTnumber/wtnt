function _GeneratorClock_fe(_GeneratorClock_E__ve,_GeneratorClock_S__ve,_GeneratorClock_M__ve) { /*Generator Clock*/
	/*Element /*/
	/*Side /*/
	/*Margin /*/
	_GeneratorClock_E_ve = _GeneratorClock_E__ve;
	_GeneratorClock_S_ve = _GeneratorClock_S__ve;
	_GeneratorClock_M_ve = _GeneratorClock_M__ve;
	_GeneratorClock_WindowSizes_fe();
	_GeneratorClock_RS_se = 'calc('+_GeneratorClock_S_ve+'*4)'; /*Real Side*/
	_GeneratorClock_RM_se = 'calc('+_GeneratorClock_M_ve+'*1.6180339887498948)'; /*Real Margin*/
	_GeneratorClock_E_ve.innerHTML += '<div id="_GeneratorClock_D1_de"><div id="_GeneratorClock_DClock_de" onclick="_GeneratorClock_ClockOnClick_fe();" onmouseleave="_GeneratorClock_ClockOnMouseLeave_fe();" onmouseover="_GeneratorClock_ClockOnMouseOver_fe();" style="background:rgba(33,33,33,0.2);height:'+_GeneratorClock_RS_se+';left:calc('+_GeneratorClock_WW_ve+'px - '+_GeneratorClock_RS_se+' - '+_GeneratorClock_RM_se+');position:absolute;top:calc('+_GeneratorClock_WH_ve+'px - '+_GeneratorClock_RS_se+' - '+_GeneratorClock_RM_se+');transition-duration:1.4s;width:'+_GeneratorClock_RS_se+';"></div></div>';
	_GeneratorClock_D1_ve = document.getElementById('_GeneratorClock_D1_de'); /*Div 1*/
	_GeneratorClock_DClock_ve = document.getElementById('_GeneratorClock_DClock_de'); /*Div Clock*/
	_GeneratorClock_ClockDraw_fe();
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
	_GeneratorClock_ClockDraw_fe();
};

function _GeneratorClock_ClockDraw_fe() { /*Generator Clock /Clock Draw*/
	_GeneratorClock_D_ve = new Date(); /*Date*/
	_GeneratorClock_D_T_ve = _GeneratorClock_D_ve.toLocaleTimeString(); /*Date /Time*/
	_GeneratorClock_D_H_ve = Number(_GeneratorClock_D_T_ve[0]+_GeneratorClock_D_T_ve[1]); /*Date /Hour*/
	_GeneratorClock_D_M_ve = Number(_GeneratorClock_D_T_ve[3]+_GeneratorClock_D_T_ve[4]); /*Date /Minut*/
	_GeneratorClock_D_S_ve = Number(_GeneratorClock_D_T_ve[6]+_GeneratorClock_D_T_ve[7]); /*Date /Scond*/
	if(0<=_GeneratorClock_D_H_ve&&_GeneratorClock_D_H_ve<6) {
		_GeneratorClock_DClock_ve.style.left = 'calc('+_GeneratorClock_WW_ve+'px - '+_GeneratorClock_RS_se+' - '+_GeneratorClock_RM_se+')';
		_GeneratorClock_DClock_ve.style.transform = 'rotate(40deg)';
	} else if(6<=_GeneratorClock_D_H_ve&&_GeneratorClock_D_H_ve<12) {
		_GeneratorClock_DClock_ve.style.left = _GeneratorClock_RM_se;
		_GeneratorClock_DClock_ve.style.transform = 'rotate(0deg)';
	} else if(12<=_GeneratorClock_D_H_ve&&_GeneratorClock_D_H_ve<18) {
		_GeneratorClock_DClock_ve.style.left = 'calc('+_GeneratorClock_WW_ve+'px - 2*'+_GeneratorClock_RS_se+' - 2*'+_GeneratorClock_RM_se+')';
		_GeneratorClock_DClock_ve.style.transform = 'rotate(0deg)';
	} else if(18<=_GeneratorClock_D_H_ve&&_GeneratorClock_D_H_ve<24) {
		_GeneratorClock_DClock_ve.style.left = 'calc('+_GeneratorClock_WW_ve+'px - '+_GeneratorClock_RS_se+' - '+_GeneratorClock_RM_se+')';
		_GeneratorClock_DClock_ve.style.transform = 'rotate(0deg)';
	};
	_GeneratorClock_DClock_ve.style.background = 'hsla('+((_GeneratorClock_D_H_ve/24)+((_GeneratorClock_D_M_ve/60)/24)+(((_GeneratorClock_D_S_ve/60)/60)/24))*360*4+',100%,26%,0.2)';
	if(_GeneratorClock_D_S_ve%5==0&&_GeneratorClock_D_S_ve%15!=0&&_GeneratorClock_D_S_ve%30!=0) {
		if(_GeneratorClock_D_M_ve==0&&(_GeneratorClock_D_H_ve%6)*2>_GeneratorClock_D_S_ve) {
			///*Skip*/
		} else if(_GeneratorClock_D_M_ve%5==0&&(Math.abs(6-(_GeneratorClock_D_M_ve/5))+1)*2>_GeneratorClock_D_S_ve) {
			///*Skip*/
		} else {
			_GeneratorClock_Flash_fe(1,75,26);
		};
	};
	if(_GeneratorClock_D_S_ve%15==0&&_GeneratorClock_D_S_ve%30!=0) {
		_GeneratorClock_Flash_fe(1,50,26);
	};
	if(_GeneratorClock_D_S_ve==30) {
		_GeneratorClock_Flash_fe(1,0,26);
	};
	if(_GeneratorClock_D_S_ve==0&&_GeneratorClock_D_M_ve%5!=0) {
		_GeneratorClock_Flash_fe(_GeneratorClock_D_M_ve%5,100,50);
	};
	if(_GeneratorClock_D_M_ve!=0&&_GeneratorClock_D_M_ve%5==0&&_GeneratorClock_D_S_ve==0) {
		_GeneratorClock_Flash_fe(Math.abs(6-(_GeneratorClock_D_M_ve/5))+1,100,0);
	};
	if(_GeneratorClock_D_M_ve==0&&_GeneratorClock_D_S_ve==0) {
		_GeneratorClock_Flash_fe(_GeneratorClock_D_H_ve%6,100,100);
	};
	//~ alert(_GeneratorClock_D_H_ve+':'+_GeneratorClock_D_M_ve+':'+_GeneratorClock_D_S_ve); ///Time
};
function _GeneratorClock_Flash_fe(_GeneratorClock_Flash_NF_ve,_GeneratorClock_Flash_S_ve,_GeneratorClock_Flash_L_ve) { /*Flash*/
	/*Number of Flashes*/
	/*Saturation*/
	/*Luminosity*/
	_GeneratorClock_Flash_I_ve = [0]; /*Iteration*/
	for(_GeneratorClock_Flash_I_ve[0]; _GeneratorClock_Flash_I_ve[0]<_GeneratorClock_Flash_NF_ve; _GeneratorClock_Flash_I_ve[0]++) {
		setTimeout(function() {
			_GeneratorClock_DClock_ve.style.background = 'hsla('+((_GeneratorClock_D_H_ve/24)+((_GeneratorClock_D_M_ve/60)/24)+(((_GeneratorClock_D_S_ve/60)/60)/24))*360*4+','+_GeneratorClock_Flash_S_ve+'%,'+_GeneratorClock_Flash_L_ve+'%,0.2)';
		},2000*_GeneratorClock_Flash_I_ve[0]);
	};
};

function _GeneratorClock_ClockOnClick_fe() { /*Generator Clock /Clock On Click*/
};

function _GeneratorClock_ClockOnMouseOver_fe() { /*Generator Clock /Clock On Mouse Over*/
};
function _GeneratorClock_ClockOnMouseLeave_fe() { /*Generator Clock /Clock On Mouse Leave*/
};

function _GeneratorClock_WindowSizes_fe() { /*Window Sizes*/
	_GeneratorClock_WW_ve = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	_GeneratorClock_WH_ve = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
};

var _GeneratorClock_E_ve; /*Generator Clock /Element*/
var _GeneratorClock_S_ve; /*Generator Clock /Side*/
var _GeneratorClock_M_ve; /*Generator Clock /Margin*/
var _GeneratorClock_WW_ve; /*Generator Clock /Window Width*/
var _GeneratorClock_WH_ve; /*Generator Clock /Window Height*/

window.addEventListener('resize', _GeneratorClock_WindowSizes_fe);
