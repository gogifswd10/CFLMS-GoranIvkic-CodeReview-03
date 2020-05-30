function calculateInsurance() {
	var name = document.getElementById("NAME").value; 
	var age = Number(document.getElementById("AGE").value);
	var country = document.getElementById("COUNTRY").value;
	var horsepower = Number(document.getElementById("HORSEPOWER").value); 

	var insurance = '';
	var result = document.getElementById("RESULT");

	if (country === "Austria") {
		insurance = horsepower * 100 / age + 50;

		result.innerHTML = name + ", your insurance costs " + insurance.toFixed(2) + "€"

	}

	else if (country === "Hungary") {
		insurance = horsepower * 120 / age + 100;

		result.innerHTML = name + ", your insurance costs " + insurance.toFixed(2) + "€"

	}

	else {
		insurance = horsepower * 150 / (age+3) + 50;

		result.innerHTML = name + ", your insurance costs " + insurance.toFixed(2) + "€"

	}



	// console.log(typeof age)

}

	var btn = document.getElementById("BUTTON");
	btn.addEventListener("click", calculateInsurance, false); 






