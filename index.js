'use strict';

function calculation(e) {
	e.preventDefault();

	const inputs = {};
	const results = [];
	Object.values(e.target)
		.filter((item) => item.name)
		.map((item) => {
			inputs[item.name] = item.value;
			const arr = item.value.split('');
			arr.forEach((el) => results.push(el));
		});
	const allNumbers = results.slice();

	const firstAdditionalNum = results.reduce(
		(partialSum, a) => partialSum + parseInt(a, 10),
		0
	);
	const firstAddArr = firstAdditionalNum.toString().split('');
	allNumbers.push(...firstAddArr);

	const secondAdditionalNum = firstAddArr.reduce(
		(partialSum, a) => partialSum + parseInt(a, 10),
		0
	);
	const secondAddArr = secondAdditionalNum.toString().split('');
	allNumbers.push(...secondAddArr);

	const dayFirstNum =
		inputs.day.length && inputs.day[0] == '0'
			? inputs.day[1]
			: inputs.day[0];
	const thirdAdditionalNum = firstAdditionalNum - dayFirstNum * 2;
	const thirdAddArr = thirdAdditionalNum.toString().replace('-', '').split('');
	allNumbers.push(...thirdAddArr);

	const fourthAdditionalNum = thirdAddArr.reduce(
		(partialSum, a) => partialSum + parseInt(a, 10),
		0
	);
	const fourthAddArr = fourthAdditionalNum.toString().split('');
	allNumbers.push(...fourthAddArr);

	const fateNum =
		firstAdditionalNum === 11 || firstAddArr.length === 1
			? firstAdditionalNum
			: firstAddArr.reduce(
					(partialSum, a) => partialSum + parseInt(a, 10),
					0
			  );

	document.getElementById('fate-number-val').innerHTML = fateNum;

	let tempVal = 0;
	let everyDayVal = 0;
	let goalVal = 0;
	let familyVal = 0;
	let habitsVal = 0;

	function insertNumbers(number, elemId) {
		const elems = allNumbers.filter((num) => num === number);
		if (elems && elems.length > 0) {
			document.getElementById(elemId).innerHTML = number
				.repeat(elems.length)
				.replaceAll('', ' ');
		} else {
			document.getElementById(elemId).innerHTML = '-';
		}

		switch (number) {
			case '1':
				goalVal += elems.length;
				break;
			case '2':
				familyVal += elems.length;
				break;
			case '3':
				tempVal += elems.length;
				habitsVal += elems.length;
				break;
			case '4':
				everyDayVal += elems.length;
				goalVal += elems.length;
				break;
			case '5':
				tempVal += elems.length;
				everyDayVal += elems.length;
				familyVal += elems.length;
				break;
			case '6':
				everyDayVal += elems.length;
				habitsVal += elems.length;
				break;
			case '7':
				tempVal += elems.length;
				goalVal += elems.length;
				break;
			case '8':
				familyVal += elems.length;
				break;
			case '9':
				habitsVal += elems.length;
				break;
			default:
				break;
		}
	}

	insertNumbers('1', 'charach-val');
	insertNumbers('2', 'energy-val');
	insertNumbers('3', 'interest-val');
	insertNumbers('4', 'health-val');
	insertNumbers('5', 'logic-val');
	insertNumbers('6', 'work-val');
	insertNumbers('7', 'luck-val');
	insertNumbers('8', 'duty-val');
	insertNumbers('9', 'memory-val');

	document.getElementById('temp-val').innerHTML = tempVal;
	document.getElementById('every-day-val').innerHTML = everyDayVal;
	document.getElementById('goal-val').innerHTML = goalVal;
	document.getElementById('family-val').innerHTML = familyVal;
	document.getElementById('habits-val').innerHTML = habitsVal;

	document.getElementById(
		'additional-numbers'
	).innerHTML = `${firstAdditionalNum}, ${secondAdditionalNum}, ${thirdAdditionalNum}, ${fourthAdditionalNum}`;
}

const calculationForm = document.getElementById('calculation-form');
calculationForm.addEventListener('submit', calculation);
