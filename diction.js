
const firstWord = 'a';

const lastWord = 'z';

// Some dictionaries cosist of only one main part.
// while other dictionaries may have an appendix
// in the middle of the dictionary, or in some 
// cases, there may be two appendices, which split
// the main part of the dictionary in 3 sections.

// This variable takes a value of 1, 2 or 3
// depending on how many sections the dictionary has.

// We are interesting in the scections only if
// the page numbers from one section to the next
// are not continuous.
// Othewise, if the numbering from one section
// to the other is continous, regardless of the appendix
// or the appendices between the sections,
// then we would consider that the dictionary
// consists of only one section.

// Thus, the "dictionarySections" variable would
// 2 or 3 only if the page numbering of those
// sections is not continous.

const dictionarySections = 2;

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

	console.log('position: ', position, 'word: ', wordList[position]);

} else {
	console.log('No such word');
}

