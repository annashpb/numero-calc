'use strict';

function calculation(e) {
	e.preventDefault();
	
	const inputs={};
	const results = [];
	Object.values(e.target)
	.filter((item) => item.name)
	.map((item) => {
		inputs[item.name] = item.value;
		const arr = item.value.split('');
		arr.forEach(el => results.push(parseInt(el, 10)));
	});
	const firstAdditionalNum = results.reduce((partialSum, a) => partialSum + a, 0);

	console.log(inputs);
	console.log(results);
	console.log(firstAdditionalNum);
	document.getElementById('additional-numbers').innerHTML = firstAdditionalNum;
}

const calculationForm = document.getElementById('calculation-form');
calculationForm.addEventListener('submit', calculation);
