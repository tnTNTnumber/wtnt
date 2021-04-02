function _DiscoverIsland_fe(_DiscoverIsland_Object_ve) {
	if(CLASS(_DiscoverIsland_Object_ve,'_Discovered_ce')[0]!==undefined) {
		let _DiscoverIsland_Object_Discovered_ve = CLASS(_DiscoverIsland_Object_ve,'_Discovered_ce')[0];
		let _DiscoverIsland_Object_Scope_ve = CLASS(_DiscoverIsland_Object_ve,'_Scope_ce')[0].innerText;
		if(_DiscoverIsland_Object_Discovered_ve.innerText=='false') {
			_DiscoverIsland_Object_Discovered_ve.innerHTML = 'true';
			_DiscoverIsland_Object_ve.classList.add('_IslandDiscovered_ce');
			_DiscoverIsland_Object_ve.classList.add('_'+_DiscoverIsland_Object_Scope_ve+'_ce');
			_DiscoverIsland_Object_ve.classList.remove('_?_ce');
		};
	};
};

_DragDrop_le: {
	function _DragOver_fe(_Drag_Event_ve) {
		_Drag_Event_ve.preventDefault();
	};
	
	function _DragStart_fe(_Drag_Event_ve) {
		_Drag_Event_ve.dataTransfer.setData("text", _Drag_Event_ve.target.id);
	};
	
	function _Drop_fe(_Drag_Event_ve,_Drag_Object_ve) {
		_Drag_Event_ve.preventDefault();
		_Drag_Event_ve.target.appendChild(ID(_Drag_Event_ve.dataTransfer.getData("text")));
		_DiscoverIsland_fe(_Drag_Object_ve);
	};
};

_Draw_le: {
	function _PlaceBoats_fe(_PlaceBoats_Locate_ve,_PlaceBoats_Objects_ve) {
		for(let _PlaceBoats_I_ve=0; _PlaceBoats_I_ve<_PlaceBoats_Objects_ve.length; _PlaceBoats_I_ve++) {
			let _PlaceBoats_N_ve = _PlaceBoats_I_ve+1;
			let _PlaceBoats_Style_ve = _PlaceBoats_Objects_ve[_PlaceBoats_I_ve];
			_PlaceBoats_Locate_ve.innerHTML += '<div class="_Boat_ce _Boat'+_PlaceBoats_N_ve+'_ce" draggable="true" id="Boat'+_PlaceBoats_N_ve+'" ondragstart="_DragStart_fe(event);" style="'+_PlaceBoats_Style_ve+'"></div>';
		};
	};
	function _PlaceMap_fe(_PlaceMap_Locate_ve,_PlaceMap_Objects_ve) {
		_PlaceMap_DrawIsland_le: {
			for(let _PlaceMap_I_ve=0; _PlaceMap_I_ve<_PlaceMap_Objects_ve.Island.length; _PlaceMap_I_ve++) {
				let _PlaceMap_N_ve = _PlaceMap_I_ve+1;
				let _PlaceMap_Island_ve = _PlaceMap_Objects_ve.Island[_PlaceMap_I_ve];
				let _PlaceMap_IslandScope_ve = _GenerateScope_fe(_PlaceMap_Island_ve.Scope,_Scope_ae[0]);
				_PlaceMap_Locate_ve.innerHTML += '<div class="_Island_ce _Island'+_PlaceMap_N_ve+'_ce _'+_PlaceMap_Island_ve.Scope+'_ce" id="Island'+_PlaceMap_N_ve+'" ondragover="_DragOver_fe(event);" ondrop="_Drop_fe(event,this)"><div class="_PositionX_ce _DN_ce">'+_PlaceMap_Island_ve.X+'</div><div class="_PositionY_ce _DN_ce">'+_PlaceMap_Island_ve.Y+'</div><div class="_Discovered_ce _DN_ce">false</div><div class="_Scope_ce _DN_ce">'+_PlaceMap_IslandScope_ve+'</div></div>';
				//~ _PlaceMap_Locate_ve.innerHTML += '<div class="_Island_ce _Island'+_PlaceMap_N_ve+'_ce _'+_PlaceMap_Island_ve.Scope+'_ce" id="Island'+_PlaceMap_N_ve+'" ondragover="_DragOver_fe(event);" ondrop="_Drop_fe(event,this)"><div class="_PositionX_ce _DN_ce">'+_PlaceMap_Island_ve.X+'</div><div class="_PositionY_ce _DN_ce">'+_PlaceMap_Island_ve.Y+'</div><div class="_Discovered_ce _DN_ce">false</div><div class="_Scope_ce _DN_ce">'+_PlaceMap_IslandScope_ve+'</div>'+_PlaceMap_N_ve+': ('+_PlaceMap_Island_ve.X+';'+_PlaceMap_Island_ve.Y+');<br />'+_PlaceMap_IslandScope_ve+'</div>';
			};
		};
		_PlaceMap_DeepSea_le: {
			for(let _PlaceMap_I_ve=0; _PlaceMap_I_ve<_PlaceMap_Objects_ve.DeepSea.length; _PlaceMap_I_ve++) {
				let _PlaceMap_N_ve = _PlaceMap_I_ve+1;
				let _PlaceMap_DeepSea_ve = _PlaceMap_Objects_ve.DeepSea[_PlaceMap_I_ve];
				_PlaceMap_Locate_ve.innerHTML += '<div class="_DeepSea_ce _DeepSea'+_PlaceMap_N_ve+'_ce" id="DeepSea'+_PlaceMap_N_ve+'" ondragover="_DragOver_fe(event);" ondrop="_Drop_fe(event,this)"><div class="_PositionX_ce _DN_ce">'+_PlaceMap_DeepSea_ve.X+'</div><div class="_PositionY_ce _DN_ce">'+_PlaceMap_DeepSea_ve.Y+'</div></div>';
			};
		};
		_PlaceMap_DrawRoute_le: {
			for(let _PlaceMap_I_ve=0; _PlaceMap_I_ve<_PlaceMap_Objects_ve.Route.length; _PlaceMap_I_ve++) {
				let _PlaceMap_N_ve = _PlaceMap_I_ve+1;
				let _PlaceMap_Route_ve = _PlaceMap_Objects_ve.Route[_PlaceMap_I_ve];
				_PlaceMap_Locate_ve.innerHTML += '<div class="_Route_ce _Route'+_PlaceMap_N_ve+'_ce" id="Route'+_PlaceMap_N_ve+'"><div class="_PositionAX_ce _DN_ce">'+_PlaceMap_Route_ve.AX+'</div><div class="_PositionAY_ce _DN_ce">'+_PlaceMap_Route_ve.AY+'</div><div class="_PositionBX_ce _DN_ce">'+_PlaceMap_Route_ve.BX+'</div><div class="_PositionBY_ce _DN_ce">'+_PlaceMap_Route_ve.BY+'</div></div>';
			};
		};
		_PlaceMap_DrawRouteLocate_le: {
			for(let _PlaceMap_I_ve=0; _PlaceMap_I_ve<_PlaceMap_Objects_ve.RouteLocate.length; _PlaceMap_I_ve++) {
				let _PlaceMap_N_ve = _PlaceMap_I_ve+1;
				let _PlaceMap_RouteLocate_ve = _PlaceMap_Objects_ve.RouteLocate[_PlaceMap_I_ve];
				let _PlaceMap_RouteLocate_AX_ve = CLASS(CLASS(_PlaceMap_Locate_ve,'_'+_PlaceMap_RouteLocate_ve.A+'_ce')[0],'_PositionX_ce')[0].innerText;
				let _PlaceMap_RouteLocate_AY_ve = CLASS(CLASS(_PlaceMap_Locate_ve,'_'+_PlaceMap_RouteLocate_ve.A+'_ce')[0],'_PositionY_ce')[0].innerText;
				let _PlaceMap_RouteLocate_BX_ve = CLASS(CLASS(_PlaceMap_Locate_ve,'_'+_PlaceMap_RouteLocate_ve.B+'_ce')[0],'_PositionX_ce')[0].innerText;
				let _PlaceMap_RouteLocate_BY_ve = CLASS(CLASS(_PlaceMap_Locate_ve,'_'+_PlaceMap_RouteLocate_ve.B+'_ce')[0],'_PositionY_ce')[0].innerText;
				_PlaceMap_Locate_ve.innerHTML += '<div class="_Route_ce _RouteLocate_ce _RouteLocate'+_PlaceMap_N_ve+'_ce" id="RouteLocate'+_PlaceMap_N_ve+'"><div class="_PositionAX_ce _DN_ce">'+_PlaceMap_RouteLocate_AX_ve+'</div><div class="_PositionAY_ce _DN_ce">'+_PlaceMap_RouteLocate_AY_ve+'</div><div class="_PositionBX_ce _DN_ce">'+_PlaceMap_RouteLocate_BX_ve+'</div><div class="_PositionBY_ce _DN_ce">'+_PlaceMap_RouteLocate_BY_ve+'</div></div>';
			};
		};
	};
};

function _GenerateScope_fe(_GenerateScope_Scope_ve,_GenerateScope_ScopesList_ve) {
	if(_GenerateScope_Scope_ve=='?') {
		let _GenerateScope_ScopesProbabilityTot_ve = 0;
		for(let _GenerateScope_I_ve=0; _GenerateScope_I_ve<_GenerateScope_ScopesList_ve.length; _GenerateScope_I_ve++) {
			_GenerateScope_ScopesProbabilityTot_ve += _GenerateScope_ScopesList_ve[_GenerateScope_I_ve][1];
		};
		let _GenerateScope_Case_ve = Math.random()*_GenerateScope_ScopesProbabilityTot_ve;
		let _GenerateScope_CaseCounter_ve = 0;
		let _GenerateScope_CaseI_ve = 0;
		while(_GenerateScope_CaseCounter_ve<_GenerateScope_Case_ve) {
			_GenerateScope_CaseCounter_ve += _GenerateScope_ScopesList_ve[_GenerateScope_CaseI_ve][1];
			_GenerateScope_CaseI_ve += 1;
		};
		return _GenerateScope_ScopesList_ve[_GenerateScope_CaseI_ve-1][0];
	};
	return _GenerateScope_Scope_ve;
};

function _Game_fe() {
	_Game_Draw_le: {
		CLASS('_Window_ce')[0].innerHTML += CLASS('_Dice_ce')[0].outerHTML;
		_PlaceMap_fe(CLASS('_WindowCenter_ce')[0],_Map_ae[0]);
		_PlaceBoats_fe(CLASS(CLASS('_WindowCenter_ce')[0],'_Island_ce')[0],_BoatSet_ae[0]);
	};
	_ScreenSet_fe();
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
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.bottom = CLASS(_ResizeMap_Islands_ve[_ResizeMap_I_ve],'_PositionY_ce')[0].innerText*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.width = _ResizeMap_Island_Side_ve+'px';
		_ResizeMap_Islands_ve[_ResizeMap_I_ve].style.height = _ResizeMap_Island_Side_ve+'px';
	};
	let _ResizeMap_DeepSea_ve = CLASS(CLASS('_WindowCenter_ce')[0],'_DeepSea_ce');
	for(let _ResizeMap_I_ve=0; _ResizeMap_I_ve<_ResizeMap_DeepSea_ve.length; _ResizeMap_I_ve++) {
		let _ResizeMap_DeepSea_Side_ve = A._PxUnitOfMeasure_ve/16;
		_ResizeMap_DeepSea_ve[_ResizeMap_I_ve].style.left = CLASS(_ResizeMap_DeepSea_ve[_ResizeMap_I_ve],'_PositionX_ce')[0].innerText*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_DeepSea_ve[_ResizeMap_I_ve].style.bottom = CLASS(_ResizeMap_DeepSea_ve[_ResizeMap_I_ve],'_PositionY_ce')[0].innerText*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_DeepSea_ve[_ResizeMap_I_ve].style.width = _ResizeMap_DeepSea_Side_ve+'px';
		_ResizeMap_DeepSea_ve[_ResizeMap_I_ve].style.height = _ResizeMap_DeepSea_Side_ve+'px';
	};
	let _ResizeMap_Route_ve = CLASS(CLASS('_WindowCenter_ce')[0],'_Route_ce');
	for(let _ResizeMap_I_ve=0; _ResizeMap_I_ve<_ResizeMap_Route_ve.length; _ResizeMap_I_ve++) {
		let _ResizeMap_Route_Height_ve = A._PxUnitOfMeasure_ve/256;
		let _ResizeMap_Route_Position1X_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_PositionAX_ce')[0].innerText);
		let _ResizeMap_Route_Position1Y_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_PositionAY_ce')[0].innerText);
		let _ResizeMap_Route_Position2X_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_PositionBX_ce')[0].innerText);
		let _ResizeMap_Route_Position2Y_ve = Number(CLASS(_ResizeMap_Route_ve[_ResizeMap_I_ve],'_PositionBY_ce')[0].innerText);
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.left = _ResizeMap_Route_Position1X_ve*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.bottom = _ResizeMap_Route_Position1Y_ve*A._PxUnitOfMeasure_ve/64+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.width = Math.sqrt(Math.pow(_ResizeMap_Route_Position2X_ve-_ResizeMap_Route_Position1X_ve,2)+Math.pow(_ResizeMap_Route_Position2Y_ve-_ResizeMap_Route_Position1Y_ve,2))*A._PxUnitOfMeasure_ve/64+_ResizeMap_Route_Height_ve+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.height = _ResizeMap_Route_Height_ve+'px';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.transform = 'translate(-'+_ResizeMap_Route_Height_ve/2+'px,'+_ResizeMap_Route_Height_ve/2+'px)';
		_ResizeMap_Route_ve[_ResizeMap_I_ve].style.transform += 'rotate('+Math.atan2(_ResizeMap_Route_Position1Y_ve-_ResizeMap_Route_Position2Y_ve,_ResizeMap_Route_Position2X_ve-_ResizeMap_Route_Position1X_ve)/Math.PI/2+'turn)';
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
var _BoatSet_ae = [
	[
		'background:rgba(210,80,80,0.95);',
		'background:rgba(80,210,80,0.95);',
		'background:rgba(80,80,210,0.95);',
		'background:rgba(210,210,80,0.95);',
		'background:rgba(210,80,210,0.95);',
		'background:rgba(80,210,210,0.95);',
		'background:rgba(80,80,80,0.95);',
		'background:rgba(210,210,210,0.95);',
		'background-color:rgba(200,200,200,0.8);background-image:url(\'Boat0 Background.jpeg\');background-position:center;background-repeat:no-repeat;background-size:cover;/*https://miro.medium.com/max/576/1*uOlYH9KOordU2XgVsxR1GQ.jpeg*/'
	],
];
var _Map_ae = [
	{
		"Island": [
			{
				"X": 5,
				"Y": 10,
				"Scope": "Start",
			},
			{
				"X": 9,
				"Y": 2,
				"Scope": "?",
			},
			{
				"X": -1,
				"Y": 12,
				"Scope": "?",
			},
			{
				"X": 1,
				"Y": 18,
				"Scope": "?",
			},
			{
				"X": -13,
				"Y": 7,
				"Scope": "?",
			},
			{
				"X": -17,
				"Y": 12,
				"Scope": "?",
			},
			{
				"X": -19,
				"Y": 6,
				"Scope": "?",
			},
			{
				"X": -23,
				"Y": 10,
				"Scope": "?",
			},
			{
				"X": -24,
				"Y": 17,
				"Scope": "?",
			},
			{
				"X": -29,
				"Y": 16,
				"Scope": "?",
			},
			{
				"X": -35,
				"Y": 8,
				"Scope": "?",
			},
			{
				"X": -37,
				"Y": 15,
				"Scope": "?",
			},
		],
		"DeepSea": [
			{
				"X": -36,
				"Y": 3,
			},
		],
		"Route": [
			/*{
				"AX": 10,
				"AY": 0,
				"BX": 7,
				"BY": 0,
			},*/
		],
		"RouteLocate": [
			{
				"A": "Island1",
				"B": "Island2",
			},
			{
				"A": "Island1",
				"B": "Island3",
			},
			{
				"A": "Island3",
				"B": "Island4",
			},
			{
				"A": "Island3",
				"B": "Island5",
			},
			{
				"A": "Island5",
				"B": "Island6",
			},
			{
				"A": "Island5",
				"B": "Island7",
			},
			{
				"A": "Island6",
				"B": "Island7",
			},
			{
				"A": "Island7",
				"B": "Island8",
			},
			{
				"A": "Island8",
				"B": "Island9",
			},
			{
				"A": "Island6",
				"B": "Island9",
			},
			{
				"A": "Island9",
				"B": "Island10",
			},
			{
				"A": "Island10",
				"B": "Island11",
			},
			{
				"A": "Island10",
				"B": "Island12",
			},
		],
	},
];
var _Scope_ae = [
	[
		['Nothing',2300],

		['Forward1',250],
		['Forward2',150],
		['Forward5',50],
		['Forward10',20],
		['Forward15',10],
		['Forward25',5],

		['Backward1',250],
		['Backward2',150],
		['Backward5',50],
		['Backward10',20],
		['Backward15',10],
		['Backward25',5],

		['GoToStart',100],
		['GoToEnd',80],
		['GoToFirst',100],
		['GoToSecondFirst',40],
		['GoToLast',100],
		['GoToSecondLast',40],

		['GoToNextToStart',45],
		['GoToNextToEnd',40],
		['GoToNextToFirst',45],
		['GoToNextToSecondFirst',20],
		['GoToNextToLast',45],
		['GoToNextToSecondLast',20],

		['Skip1Turn',200],
		['Skip2Turn',80],
		['Skip5Turn',10],
		['Skip10Turn',3],
		['Skip15Turn',2],
		['Skip25Turn',1],

		['ReRollDice',120],

		['YouWin',2],
		['YouLose',2],

		['GameOver',1],
	],
];


window.onload = function _O_fe() { /*Onload*/
	document.body.innerHTML = '<div class="_DHTML_ce">'+document.getElementsByClassName('_DHTML_ce')[0].innerHTML+'</div>';
	S = localStorage;
	W = window;
	G = window.MyGlobalVariables = {};
	_ScreenSet_fe();
	_Game_fe();
};

window.addEventListener('resize', _ScreenSet_fe);
