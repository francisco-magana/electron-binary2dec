let binaryValue;
const btnConvert = document.getElementById('convert');
const binaryInput = document.getElementById('binary');

binaryInput.addEventListener('keydown', (e) => {
	if (e.keyCode != 48 && e.keyCode != 49 && e.keyCode != 8) {
		e.preventDefault();
	}
});

btnConvert.addEventListener('click', () => {
	binaryValue = binaryInput.value;
	let decimalValue = parseInt(binaryValue, 2);
	document.getElementById('decimal').innerText = decimalValue;
});
