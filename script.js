//=========================== ENCODAGE=============================
//=================================================================

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

// Encodage d'un texte complet en morse (+ en majuscule) :
const encode = (text) => {
	// Je mets le texte en maujuscule :
	const textUpper = text.toUpperCase();
	// Je découpe mon texte en tableau de caractères :
	const textCut = getLatinCharacterList(textUpper);
	// Je récupère mes caractères morse dans un nouveau tableau :
	const morseCharacterList = textCut.map((character) => {
		if (character === " ") {
			return "/";
		} else {
			return translateLatinCharacter(character);
		}
	});
	return morseCharacterList;
};

//=========================== DECODAGE=============================
//=================================================================

// Dictionnaire Morse to Latin :
const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

// Découpage d'une chaîne de caractères en tableau de caractères grâce à split(" ") :
const getMorseCharacterList = (text) => {
	return text.split(" ");
};

// Traduction d'un caractère morse en latin :
const translateMorseCharacter = (character) => {
	return morseToLatin[character];
};

// Encodage d'un texte complet en latin :
const decode = (text) => {
	// Découpage du texte :
	const textCut = getMorseCharacterList(text);
	// Récupération des caractères latin dans un nouveau :
	const latinCharacterList = textCut.map((character) => {
		if (character === "/") {
			return " ";
		} else {
			return translateMorseCharacter(character);
		}
	});
	return latinCharacterList.join("");
};
console.log(decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));