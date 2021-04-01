function TAG(_TAG_ElementOrTag_ve,_TAG_Tag_ve) {
	if(_TAG_Tag_ve) {
		return _TAG_ElementOrTag_ve.getElementsByTagName(_TAG_Tag_ve);
	} else {
		return document.getElementsByTagName(_TAG_ElementOrTag_ve);
	};
};

function ID(_TAG_ElementOrId_ve,_ID_Id_ve) {
	if(_ID_Id_ve) {
		return _TAG_ElementOrId_ve.getElementById(_ID_Id_ve);
	} else {
		return document.getElementById(_TAG_ElementOrId_ve);
	};
};

function CLASS(_TAG_ElementOrClass_ve,_CLASS_Class_ve) {
	if(_CLASS_Class_ve) {
		return _TAG_ElementOrClass_ve.getElementsByClassName(_CLASS_Class_ve);
	} else {
		return document.getElementsByClassName(_TAG_ElementOrClass_ve);
	};
};

function NAME(_NAME_ElementOrName_ve,_NAME_Name_ve) {
	if(_NAME_Name_ve) {
		return _TAG_ElementOrName_ve.getElementsByName(_NAME_Name_ve);
	} else {
		return document.getElementsByName(_NAME_ElementOrName_ve);
	};
};

function ATTR(_ATTR_ElementOrName_ve,_ATTR_Name_ve) { /*get Attribute*/
	if(_ATTR_Name_ve) {
		return _ATTR_ElementOrName_ve.getAttribute(_ATTR_Name_ve);
	} else {
		return document.getAttribute(_ATTR_ElementOrName_ve);
	};
};

//~ function ELEM(_ELEM_ElementOrName_ve,_ELEM_Name_ve) { /*custom Element*/
	//~ if(_ELEM_Name_ve) {
		//~ return _ELEM_ElementOrName_ve.customElements.get(_ELEM_Name_ve);
	//~ } else {
		//~ return document.customElements.get(_ELEM_ElementOrName_ve);
	//~ };
//~ };

function CALHTML(_CALHTML_Element_ve,_CALHTML_Value_ve) { /*Change All Lenght innerHTML*/
	for(var _CALHTML_Iteration_ve=0; _CALHTML_Iteration_ve<_CALHTML_Element_ve.length; _CALHTML_Iteration_ve++) {
		_CALHTML_Element_ve[_CALHTML_Iteration_ve].innerHTML = _CALHTML_Value_ve;
	};
};

function AREMOVE(_AREMOVE_Array_ve,_AREMOVE_Value_ve) {
	var _AREMOVE_Index_ve = _AREMOVE_Array_ve.indexOf(_AREMOVE_Value_ve);
	if(_AREMOVE_Index_ve>-1) {
		_AREMOVE_Array_ve.splice(_AREMOVE_Index_ve,1);
	};
	return _AREMOVE_Array_ve;
};

function LOG(_LOG_Value_ve) {
	console.log(_LOG_Value_ve);
};

function JL(_JL_Value_ve) { /*JSON.lenght*/
	return Object.keys(_JL_Value_ve).length;
};

function SD(_SD_VariableString_ve,_SD_Value_ve) { /*local Storage JSON for Declaration and Global Declaration*/ /**Declaration*/
	if(_SD_Value_ve) {
		localStorage.setItem(_SD_VariableString_ve,JSON.stringify(_SD_Value_ve));
		eval(_SD_VariableString_ve+` = _SD_Value_ve;`);
	} else {
		localStorage.setItem(_SD_VariableString_ve,undefined);
		eval(_SD_VariableString_ve+` = undefined;`);
	};
};

function Sd(_Sd_VariableString_ve,_Sd_Value_ve) { /*local Storage JSON for Declaration*/ /**Declaration*/
	if(_Sd_Value_ve) {
		localStorage.setItem(_Sd_VariableString_ve,JSON.stringify(_Sd_Value_ve));
	} else {
		localStorage.setItem(_Sd_VariableString_ve,undefined);
	};
};

function SDJ(_SDJ_VariableString_ve) { /*local Storage JSON for Declaration and Global Declaration (set JSON)*/ /**Declaration*/
	localStorage.setItem(_SDJ_VariableString_ve,{});
	eval(_SDJ_VariableString_ve+` = {};`);
};

function Sdj(_Sdj_VariableString_ve) { /*local Storage JSON for Declaration (set JSON)*/ /**Declaration*/
	localStorage.setItem(_Sdj_VariableString_ve,{});
};

function Sj(_Sj_VariableString_ve,_Sj_Variable_ve) { /*local Storage JSON for Write (stringify)*/ /**Write (stringify)*/
	if(_Sj_Variable_ve) {
		localStorage.setItem(_Sj_VariableString_ve,JSON.stringify(_Sj_Variable_ve));
	} else {
		eval(`localStorage.setItem(_Sj_VariableString_ve,JSON.stringify(`+_Sj_VariableString_ve+`));`);
	};
};

function SJ(_SJ_VariableString_ve,_SJ_Variable_ve) { /*local Storage JSON for Write in Opposite (parse)*/ /**Write in Opposite (parse)*/
	if(_SJ_Variable_ve) {
		eval(_SJ_Variable_ve+` = JSON.parse(localStorage.getItem(_SJ_VariableString_ve));`);
	} else {
		eval(_SJ_VariableString_ve+` = JSON.parse(localStorage.getItem(_SJ_VariableString_ve));`);
	};
};

function Se(_Se_VariableString_ve) { /*local Storage JSON for Extract (parse)*/ /**Extract (parse)*/
	return JSON.parse(localStorage.getItem(_Se_VariableString_ve));
};

function Sr(_Sr_VariableString_ve) { /*local Storage JSON for Removing*/ /**Removing*/
	localStorage.removeItem(_Sr_VariableString_ve);
};

function SR(_SR_VariableString_ve) { /*local Storage JSON for Removing and Remove a Global Variable*/ /**Removing*/
	localStorage.removeItem(_SR_VariableString_ve);
	eval(`delete `+_SR_VariableString_ve+`;`);
};

function j() { /**Write*/
	Sj(A._GameName_ve,A);
}; function AS() { /**All Dates Save*/
	Sj(A._GameName_ve,A);
};

function J() { /**Read*/
	SJ(A._GameName_ve,'A');
}; function AE() { /**All Dates Extract*/
	SJ(A._GameName_ve,'A');
};

function ASet() { /**All Dates Set*/
	eval(AJ._GameName_ve+` = AJ;`);
	eval(`A = `+AJ._GameName_ve);
};

function AD() { /**All Dates*/
	_SavingDates_NotFirstTime_ve = false;
	eval(`if(S.`+AJ._GameName_ve+`) {_SavingDates_NotFirstTime_ve = true;};`);
	if(_SavingDates_NotFirstTime_ve) {
		J();
	} else {
		Sd(AJ._GameName_ve,A);
	};
	A._GameOpenedNTimes_ve = A._GameOpenedNTimes_ve+1;
	j();
};

function AL() { /*All Dates LOG*/
	console.log(A);
};

function Al() { /*All Dates LOG*/
	console.log(AJ);
};

function AG() { /*All Dates Go*/
	ASet();
	AD();
	for(var _AG_I_ve=0; _AG_I_ve<AJ._CodeNumberVersion_ve+1; _AG_I_ve++) {eval(`AJ`+_AG_I_ve+`('AJ');`);};
	for(var _AG_I_ve=A._CodeNumberVersion_ve+AJ._ForceUpdate_ve; _AG_I_ve<AJ._CodeNumberVersion_ve+1; _AG_I_ve++) {eval(`AJ`+_AG_I_ve+`('A');`);};
	A._CodeNumberVersion_ve = AJ._CodeNumberVersion_ve;
	j();
};

function Ag() { /*All Dates Go with LOG*/
	AG();
	Al();
	AL();
};
