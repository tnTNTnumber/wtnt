function _BS_fe(_BT_T_fe,_BT_I_fe) { /*Button Scroll*/
	/*Tag*/
	/*Id*/
	if(document.getElementsByTagName(String(_BT_T_fe))[0].style.display==='none') {
	} else {
		document.getElementsByTagName(String(_BT_T_fe))[0].scrollIntoView();
	};
};

function _BT_fe(_BT_T_fe,_BT_I_fe) { /*Button Toggle*/
	/*Tag*/
	/*Id*/
	if(document.getElementsByTagName(String(_BT_T_fe))[0].style.display==='none') {
		_CC_fe(document.getElementById(_BT_I_fe),'_BS1_ce _BT_ce');
		for(var _BT_I_ve=0; _BT_I_ve<document.getElementsByTagName(String(_BT_T_fe)).length; _BT_I_ve++) {
			document.getElementsByTagName(String(_BT_T_fe))[_BT_I_ve].style.display = 'block';
		};
	} else {
		_CC_fe(document.getElementById(_BT_I_fe),'_BS2_ce _BT_ce');
		for(var _BT_I_ve=0; _BT_I_ve<document.getElementsByTagName(String(_BT_T_fe)).length; _BT_I_ve++) {
			document.getElementsByTagName(String(_BT_T_fe))[_BT_I_ve].style.display = 'none';
		};
	};
};

function _CC_fe(_CC_O_ve,_CC_CL_ve) { /*Change Class*/
    /*Object*/
    /*Class List*/
    _CC_O_ve.className = String(_CC_CL_ve);
};

window.onload = function() {
	document.body.innerHTML += '<button class="_BT_ce _BS1_ce" id="_BTS_de" onclick="_BT_fe(`T_S`,`_BTS_de`);">S</button>';
	document.body.innerHTML += '<button class="_BT_ce _BS1_ce" id="_BTE_de" onclick="_BT_fe(`T_E`,`_BTE_de`);">E</button>';
};
