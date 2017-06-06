var inputfield = document.getElementById("inputfield");
var outputfield = document.getElementById("outputfield");
var alphabet = "abcdefghijklmnopqrstuvqxyz";
var validHex = "0123456789abcdef"

function rot(value, offset) {
	var result = "";
	for (var i = 0; i < value.length; i++) {
		var index = alphabet.indexOf(value[i]);
		if (index == -1) {
			result += value[i];
		} else {
			index = (index + offset + alphabet.length) % alphabet.length;
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

function asciiToHex(value) {
	var result = "";
	for (var i = 0; i < value.length; i++) {
		var s = value.charCodeAt(i).toString(16);
		result += (s.length == 1 ? "0" : "") + s;
	}
	return result.toLowerCase();
}

function update() {
	if (document.activeElement == inputfield) {
		var input = inputfield.value;
		outputfield.value = hexToAscii(rot(input.toLowerCase(), 13));
	}
	if (document.activeElement == outputfield) {
		var input = outputfield.value;
		inputfield.value = rot(asciiToHex(input.toLowerCase()), -13);
	}
}

inputfield.addEventListener("input", update);
outputfield.addEventListener("input", update);
inputfield.focus();
inputfield.select();