function _DragOver_fe(_Drag_Event_ve) {
  _Drag_Event_ve.preventDefault();
};

function _DragStart_fe(_Drag_Event_ve) {
  _Drag_Event_ve.dataTransfer.setData("text", _Drag_Event_ve.target.id);
};

function _Drop_fe(_Drag_Event_ve) {
  _Drag_Event_ve.preventDefault();
  _Drag_Event_ve.target.appendChild(ID(_Drag_Event_ve.dataTransfer.getData("text")));
};

function _ResizeMap_fe() {
	let _ResizeMap_Dice_ve = CLASS(CLASS('_Window_ce')[0],'_Dice_ce');
	for(let _ResizeMap_I_ve=0; _ResizeMap_I_ve<_ResizeMap_Dice_ve.length; _ResizeMap_I_ve++) {
		let _ResizeMap_Dice_Side_ve = 1;
		_ResizeMap_Dice_ve[_ResizeMap_I_ve].style.right = _ResizeMap_Dice_Side_ve*2.5+'em';
		_ResizeMap_Dice_ve[_ResizeMap_I_ve].style.top = _ResizeMap_Dice_Side_ve*2.5+'em';
		_ResizeMap_Dice_ve[_ResizeMap_I_ve].style.width = _ResizeMap_Dice_Side_ve*0.6+'em';
		_ResizeMap_Dice_ve[_ResizeMap_I_ve].style.height = _ResizeMap_Dice_Side_ve*0.6+'em';
		_ResizeMap_Dice_ve[_ResizeMap_I_ve].style.transform = 'scale(6)';
	};
	let _ResizeMap_Islands_ve = CLASS(CLASS('_WindowCenter_ce')[0],'_Island_ce');
	for(let _ResizeMap_I_ve=0; _ResizeMap_I_ve<_ResizeMap_Islands_ve.length; _ResizeMap_I_ve++) {
		let _ResizeMap_Island_Side_ve = A._PxUnitOfMeasure_ve/16;
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.left = CLASS(_ResizeMap_Islands_ve[_ResizeMap_I_ve],'_PositionX_ce')[0].innerText*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.top = CLASS(_ResizeMap_Islands_ve[_ResizeMap_I_ve],'_PositionY_ce')[0].innerText*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.width = _ResizeMap_Island_Side_ve+'px';
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.height = _ResizeMap_Island_Side_ve+'px';
	};
	let _ResizeMap_Route_ve = CLASS(CLASS('_WindowCenter_ce')[0],'_Route_ce');
	for(let _ResizeMap_I_ve=0; _ResizeMap_I_ve<_ResizeMap_Route_ve.length; _ResizeMap_I_ve++) {
		let _ResizeMap_Route_Height_ve = A._PxUnitOfMeasure_ve/256;
		_ResizeMap_Route_Position1X_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_Position1X_ce')[0].innerText);
		_ResizeMap_Route_Position1Y_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_Position1Y_ce')[0].innerText);
		_ResizeMap_Route_Position2X_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_Position2X_ce')[0].innerText);
		_ResizeMap_Route_Position2Y_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_Position2Y_ce')[0].innerText);
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.left = _ResizeMap_Route_Position1X_ve*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.top = _ResizeMap_Route_Position1Y_ve*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.width = Math.sqrt(Math.pow(_ResizeMap_Route_Position2X_ve-_ResizeMap_Route_Position1X_ve,2)+Math.pow(_ResizeMap_Route_Position2Y_ve-_ResizeMap_Route_Position1Y_ve,2))*A._PxUnitOfMeasure_ve/64+_ResizeMap_Route_Height_ve+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.height = _ResizeMap_Route_Height_ve+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.transform = 'translate(-'+_ResizeMap_Route_Height_ve/2+'px,-'+_ResizeMap_Route_Height_ve/2+'px)';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.transform += 'rotate('+Math.atan2(_ResizeMap_Route_Position2Y_ve-_ResizeMap_Route_Position1Y_ve,_ResizeMap_Route_Position2X_ve-_ResizeMap_Route_Position1X_ve)/Math.PI/2+'turn)';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.transformOrigin = _ResizeMap_Route_Height_ve/2+'px center';
	};
	let _ResizeMap_Boat_ve = CLASS(CLASS('_WindowCenter_ce')[0],'_Boat_ce');
	for(let _ResizeMap_I_ve=0; _ResizeMap_I_ve<_ResizeMap_Boat_ve.length; _ResizeMap_I_ve++) {
		let _ResizeMap_Boat_Side_ve = A._PxUnitOfMeasure_ve/64;
		_ResizeMap_Boat_ve[_ResizeMap_I_ve].style.width = _ResizeMap_Boat_Side_ve+'px';
		_ResizeMap_Boat_ve[_ResizeMap_I_ve].style.height = _ResizeMap_Boat_Side_ve+'px';
		_ResizeMap_Boat_ve[_ResizeMap_I_ve].style.margin = _ResizeMap_Boat_Side_ve/8+'px';
		_ResizeMap_Boat_ve[_ResizeMap_I_ve].style.transform = 'translate('+_ResizeMap_Boat_Side_ve/16+'px,'+_ResizeMap_Boat_Side_ve/16+'px)';
	};
};

function _ScreenSet_fe() {
	if(W.innerWidth>W.innerHeight) { /**Landscape*/
		A._WindowX_ve = W.innerWidth;
		A._WindowY_ve = W.innerHeight;
		CLASS('_Window_ce')[0].style.msTransform = 'translate(-50%,-50%)';
		CLASS('_Window_ce')[0].style.transform = 'translate(-50%,-50%)';
		CLASS('_Window_ce')[0].style.msTransform += 'rotate(0deg)';
		CLASS('_Window_ce')[0].style.transform += 'rotate(0deg)';
	} else { /**Vertical*/
		A._WindowX_ve = W.innerHeight;
		A._WindowY_ve = W.innerWidth;
		CLASS('_Window_ce')[0].style.msTransform = 'translate(-50%,-50%)';
		CLASS('_Window_ce')[0].style.transform = 'translate(-50%,-50%)';
		CLASS('_Window_ce')[0].style.msTransform += 'rotate(90deg)';
		CLASS('_Window_ce')[0].style.transform += 'rotate(90deg)';
	};
	CLASS('_Window_ce')[0].style.height = A._WindowY_ve+'px';
	CLASS('_Window_ce')[0].style.width = A._WindowX_ve+'px';
	A._PxUnitOfMeasure_ve = (A._WindowX_ve+A._WindowY_ve)/2;
	_ResizeMap_fe();
};

function _ScrollDice_fe(_ScrollDice_ValueElement_ve,_ScrollDice_Element_ve) {
	var _ScrollDice_TimeOfScrolls_ve = [50,200,320,420,510,600,680,760,750,840,940,1060,1200,1400];
	for(var _ScrollDice_Iteration_ve=0; _ScrollDice_Iteration_ve<_ScrollDice_TimeOfScrolls_ve.length; _ScrollDice_Iteration_ve++) {
		setTimeout(function() {
			_ScrollDice_NumberRolled_ve = CLASS('_DiceUsable_ce')[0].innerText[Math.floor(Math.random()*CLASS('_DiceUsable_ce')[0].innerText.length)];
			_ScrollDice_ValueElement_ve.innerHTML = _ScrollDice_NumberRolled_ve;
			_DrawDice_fe(_ScrollDice_ValueElement_ve,_ScrollDice_Element_ve);
		},_ScrollDice_TimeOfScrolls_ve[_ScrollDice_Iteration_ve]);
	};
	return _ScrollDice_TimeOfScrolls_ve[_ScrollDice_TimeOfScrolls_ve.length-1];
}; function _DrawDice_fe(_DrawDice_ValueElement_ve,_DrawDice_Element_ve) {
	_DrawDice_ClassDiceRolled_ve = '_Dice'+_DrawDice_ValueElement_ve.innerHTML+'_ce';
	_DrawDice_DiceRolled_ve = CLASS(_DrawDice_ClassDiceRolled_ve)[0].innerHTML;
	_DrawDice_Element_ve.innerText = _DrawDice_DiceRolled_ve;
};

var A = {};

window.onload = function _O_fe() { /*Onload*/
	document.body.innerHTML = '<div class="_DHTML_ce">'+document.getElementsByClassName('_DHTML_ce')[0].innerHTML+'</div>';
	S = localStorage;
	W = window;
	G = window.MyGlobalVariables = {};
	_ScreenSet_fe();
	{
	//~ _Game_fe();
	CLASS('_Window_ce')[0].innerHTML += CLASS('_Dice_ce')[0].outerHTML;
	CLASS('_WindowCenter_ce')[0].innerHTML = CLASS('_Map_ce')[0].innerHTML;
	CLASS(CLASS('_WindowCenter_ce')[0],'_Island_ce')[0].innerHTML += CLASS('_BoatsSet_ce')[0].innerHTML;
	_ScreenSet_fe();
	};
};

window.addEventListener('resize', _ScreenSet_fe);
