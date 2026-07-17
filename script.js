// Découpage d'une chaîne de caractères en tableau de caractères grâce à split("") :
const getLatinCharacterList = (text) => {
	return text.split("");
};

// Dictionnaire Latin to Morse :
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

// Traduction d'un caractère latin en morse :
const translateLatinCharacter = (character) => {
	return latinToMorse[character];
};
console.log(translateLatinCharacter("A"));