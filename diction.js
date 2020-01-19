
const firstWord = 'a';

const lastWord ='zxy';

const dictionarySections = 3;

const firstSectionPages = [16, 35];

const secondSectionPages = [48, 72];

const thirdSectionPages = [89, 108];

const wordList = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

let position;

let inputWord = 'test';

if ((inputWord >= firstWord) && (inputWord <= lastWord)) {

	for (let i = 0; i < wordList.length; i++) {
		if (inputWord >= wordList[i]) {
			if (inputWord > wordList[i]) {
				position = i + 1;
			} else {
				position = i;
			}
		}
		if (position > wordList.length) {
			position = position - 1;
		}
	}

	console.log(position, wordList[position]);

} else {
	console.log('No such word');
}

