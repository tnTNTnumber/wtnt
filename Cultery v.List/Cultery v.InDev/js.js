function _ChangeFontSize_fe(_ChangeFontSize_Element_ve,_ChangeFontSize_Size_ve) {
	for(var _ChangeFontSize_Iteration_ve=0; _ChangeFontSize_Iteration_ve<_ChangeFontSize_Element_ve.children.length; _ChangeFontSize_Iteration_ve++) {
		_ChangeFontSize_Element_ve.children[_ChangeFontSize_Iteration_ve].style.fontSize = String(_ChangeFontSize_Size_ve);
	};
};

function _Game_fe() {
	_ScreenSet_fe();
	_ScreenLoad_fe('_LayoutHome_ne');
};

function _ScreenLoad_fe(_ScreenLoad_LayoutName_ve,_ScreenLoad_Where_ve) {
	if(!_ScreenLoad_LayoutName_ve) {
		_ScreenLoad_LayoutName_ve = A._ScreenLoad_ve._LayoutName_ve;
		_ScreenLoad_Where_ve = A._ScreenLoad_ve._Where_ve;
	};
	if(!_ScreenLoad_Where_ve) {
		_ScreenLoad_Where_ve = CLASS('_WindowFull_ce')[0];
	};
	A._ScreenLoad_ve._LayoutName_ve = _ScreenLoad_LayoutName_ve;
	A._ScreenLoad_ve._Where_ve = _ScreenLoad_Where_ve;
	if(_ScreenLoad_Where_ve==CLASS('_Window_ce')[0]|_ScreenLoad_Where_ve==CLASS('_LandscapeWindow_ce')[0]|_ScreenLoad_Where_ve==CLASS('_WindowFull_ce')[0]) {
		CLASS('_Window_ce')[0].innerHTML = '';
	};
	if(_ScreenLoad_Where_ve==CLASS('_LandscapeWindow_ce')[0]|_ScreenLoad_Where_ve==CLASS('_LandscapeWindow_ce')[0]) {
		CLASS('_LandscapeWindow_ce')[0].innerHTML = CLASS('_Window_ce')[0].innerHTML;
	};
	if(_ScreenLoad_Where_ve==CLASS('_WindowFull_ce')[0]) {
		CLASS('_WindowFull_ce')[0].innerHTML = CLASS('_LandscapeWindow_ce')[0].innerHTML;
	};
	switch(_ScreenLoad_LayoutName_ve) {
		case '_LayoutHome_ne':
			_ScreenLoad_Where_ve.innerHTML += CLASS('_LayoutHome_ce')[0].innerHTML;
			//~ _ScreenLoad_Where_ve.style.fontSize = A._PxUnitOfMeasure_ve/1+'px';
			_ChangeFontSize_fe(_ScreenLoad_Where_ve,A._PxUnitOfMeasure_ve/16+'px');
			CLASS('_ButtonSetting_ce')[0].style.top = A._PxUnitOfMeasure_ve/100+'px';
			CLASS('_ButtonSetting_ce')[0].style.left = A._PxUnitOfMeasure_ve/100+'px';
		default:
	};
};

function _ScreenSet_fe() {
	if(W.innerWidth/W.innerHeight<A._AspectRatio_Heightest_ve) { /**Heightest*/
		A._WindowX_ve = W.innerWidth;
		A._WindowY_ve = W.innerWidth/A._AspectRatio_Prototype_ve;
	} else if(W.innerWidth/W.innerHeight>A._AspectRatio_Widthest_ve) { /**Widthest*/
		A._WindowY_ve = W.innerHeight;
		A._WindowX_ve = W.innerHeight*A._AspectRatio_Prototype_ve;
	} else { /**OK*/
		A._WindowX_ve = W.innerWidth;
		A._WindowY_ve = W.innerHeight;
	};
	CLASS('_LandscapeWindow_ce')[0].style.height = A._WindowY_ve+'px';
	CLASS('_Window_ce')[0].style.width = A._WindowX_ve+'px';
	A._PxUnitOfMeasure_ve = (A._WindowX_ve+A._WindowY_ve)/2;
	_ScreenLoad_fe();
};

function _TestADBlock_fe() {
	if(localStorage) {
		return true;
	} else {
		alert('You may have some adBlocks running.\nPlease, turn off it, otherwise we cannot keep your progress saved\nand the game cannot start!\n\nThe problem is probably caused by blocking cookies.\nIf you want to fix it, try disabling the adBlock\nor try to set off in your adBlock, for this site, the Cookie Block.');
		return false;
	};
};

var AJ = { /*All Dates JSON*/
	'_GameName_ve': 'Cultery', /**!IMPORTANT*/ /**The Name MUST BE DIFFERENT between every programs used on the browser that open this file !IMPORTANT*/
	'_CodeNumberVersion_ve': 3, /**!IMPORTANT*/
	'_ForceUpdate_ve': 0, /**!IMPORTANT*/ /**0=true; 1=false*/ /**For Coding: true (0); For Public Release: false (1)*/
	'_GameOpenedNTimes_ve': 0, /**!IMPORTANT*/
}; function AJ0(AJI) { /*All Dates JSON - Updater*/
	/*(All Dates JSON) Input*/
	eval(`AJV = `+AJI+`;`); /*(All Dates JSON) Variable*/
	AJV._AspectRatio_Widthest_ve = 5/7;
	AJV._AspectRatio_Heightest_ve = 9/21;
	AJV._AspectRatio_Prototype_ve = (AJV._AspectRatio_Widthest_ve+AJV._AspectRatio_Heightest_ve)/2;
	AJV._WindowX_ve = W.innerWidth;
	AJV._WindowY_ve = W.innerWidth/AJV._AspectRatio_Prototype_ve;
}; function AJ1(AJI) { eval(`AJV = `+AJI+`;`);
}; function AJ2(AJI) { eval(`AJV = `+AJI+`;`);
}; function AJ3(AJI) { eval(`AJV = `+AJI+`;`);
	AJV._PxUnitOfMeasure_ve = 0;
	AJV._ScreenLoad_ve = {};
	AJV._ScreenLoad_ve._LayoutName_ve = '_LayoutHome_ne';
	AJV._ScreenLoad_ve._Where_ve = CLASS('_WindowFull_ce')[0];
};

window.onload = function _O_fe() { /*Onload*/
	document.body.innerHTML = '<div class="_DHTML_ce">'+document.getElementsByClassName('_DHTML_ce')[0].innerHTML+'</div>';
	S = localStorage;
	W = window;
	G = window.MyGlobalVariables = {};
	//~ Sr('Cultery'); /**DANGER!*/
	setTimeout(function() {
		if(_TestADBlock_fe()==true) {
			Ag();
			_Game_fe();
		};
	},16);
};

window.addEventListener('resize', _ScreenSet_fe);
