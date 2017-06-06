var inputfield = document.getElementById("inputfield");
var outputfield = document.getElementById("outputfield");
var alphabet = "abcdefghijklmnopqrstuvqxyz";
var validHex = "0123456789abcdef"

function rot13(value) {
	var result = "";
	for (var i = 0; i < value.length; i++) {
		var index = alphabet.indexOf(value[i]);
		if (index == -1) {
			result += value[i];
		} else {
			index = (index + 13) % alphabet.length;
			result += alphabet[index];
		}
	}
	return result;
}

function hexToAscii(value) {
	var result = "";
	for (var i = 0; i < value.length; i += 2) {
		var charCode = parseInt("0x" + value[i] + value[i + 1]);
		if (charCode >= 32 && charCode <= 126) {
			result += String.fromCharCode(charCode);
		}
	}
	return result;
}

function update() {
	var input = inputfield.value;			
	outputfield.innerHTML = hexToAscii(rot13(input.toLowerCase()));
}

inputfield.addEventListener("input", update);
update();
inputfield.focus();
inputfield.select();