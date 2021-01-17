let binaryValue;
const btnConvert = document.getElementById('convert');
const binaryInput = document.getElementById('binary');

btnConvert.addEventListener('click', () => {
	binaryValue = binaryInput.value;
	let decimalValue = parseInt(binaryValue, 2);
	document.getElementById('decimal').innerText = decimalValue;
});
