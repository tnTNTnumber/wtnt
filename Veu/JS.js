window.onload = function onload() {
	for(i=0; i<3; i++) {
		document.getElementsByTagName("input")[i].addEventListener("change", calc);
	};
};

function calc() {
	let risultato;
	switch (document.getElementById("op").value) {
		case '+':
			risultato = Number(document.getElementById("n1").value) + Number(document.getElementById("n2").value);
			break;
		case '-':
			risultato = Number(document.getElementById("n1").value) - Number(document.getElementById("n2").value);
			break;
		case '*':
			risultato = Number(document.getElementById("n1").value) * Number(document.getElementById("n2").value);
			break;
		case '/':
			risultato = Number(document.getElementById("n1").value) / Number(document.getElementById("n2").value);
			break;
		case '^':
			risultato = Math.pow(Number(document.getElementById("n1").value),Number(document.getElementById("n2").value));
			break;
		default:
			risultato = "Err";
	};
	document.getElementsByName("result")[0].innerText = risultato;
};
