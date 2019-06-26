function calculator(){
	var x = parseInt(document.querySelector("#value1").value);
	var y = parseInt(document.querySelector("#value2").value);
	var op = document.querySelector("#operator").value;
	var calculate;
	var res = document.querySelector("#result");

	if(op == "add"){
		calculate = x + y;
	} 
	else if(op == "min"){
		calculate = x - y;
	}
	else if(op == "div"){
		calculate = x / y;
	} 
	else if(op == "mul"){
		calculate = x * y;
	}
	document.querySelector("#result").value = calculate;
}