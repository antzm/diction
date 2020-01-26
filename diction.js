
// tl;dr
// The purpose of this code is to help you
// locate an unknown word in any dictionary,
// provided that firstly you create an array
// with the basic structure of the dictionary.
// After that, you enter an unknown word
// and the code will return the page
// of the dictionary where this word is located.
//
// There are two approaches to bulid this array,
// which will contain key words of the dictionary.
// The easiest appproach is to take into consideration
// only the odd pages of the dictionary and then,
// to enter into an array one word from every odd page
// of the dictionary, and to be precise, the last
// word in every odd page. Thus, if the dictionary
// has 1000 pages, then we will need only 500 words
// to bulid this array.
//
// The second approach, is more time consuming
// but it will return the exact page for each word.
// In this approach, we need to enter into an array,
// the last word in every page of the dictionary.
// Thus, for a 1000 pages dictionary, we will 
// need 1000 words.
//
// The first approach will give us the double page
// where a word is located i.e. pages 168-169,
// while the second approach will give us the exact
// page where a word is located i.e. page 168.
//
// Obviously, the result is based only on the array
// words and there's no guarntee that a certain word
// will be included in the dictionary, but, provided
// that a word is included in the dictionary, this
// web-app will return the page (or the double page)
// where this word is located.
//
// Besides the word array, the only other things
// we need to change in this code are the following
// variables:
//
// "wordsRange" array where we enter the very first
// and the very last word of the dictionary.
// 
// "onlyOddPageNumbers" boolean which is "true"
// if we use only the odd pages of the dictionary
// and "false" if we use all the pages of the dictionary.
//
// "sectionsPageNumbers" array where we enter the first
// and the last page number for every section of the
// dictionary (either one continuous section or more
// than, one sections which are separated by various
// appendices).


// Some dictionaries consist of only one main part.
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

const firstSectionPages = [17, 29];

const secondSectionPages = [37, 53];

const thirdSectionPages = [97, 115];


// This array contains the very first
// and the very last word of the dictionary.
// The purpose is to search the dictionary
// only if the given word is between
// those two words. Otherwise, a message
// will be returned that the given word 
// is not included in the dictionary.
// i.e. whenever a number, symbol or
// characters in another language are 
// entered as the input word.
const wordsRange = ['a', 'z'];


// Using only the last word on every odd page
// of the dictionary, is the easiest approach.
// In this case, the app will provide a range of
// two page numbers where the word is located.
// i.e. "This word is on pages 24-25"
// If though we would like the app to return
// the exact page number where a word is located,
// then we need to enter the last word on 
// every single page of the dictionary.
// This means that we will need to enter both 
// the odd and the even pages, which will result
// in doubling the neccesary words that we need
// to enter in the wordList array.
// If the first approach is used, then the variable
// "onlyOddPageNumbers" needs to be set to "true" while
// if both odd and even pages are used, this variable
// should be set to "false".
const onlyOddPageNumbers = true;


// This array contains the page numbers
// for each section of the dictionary.
// If the dictionary has only 1 section,
// then the lines for the 2nd and 3rd
// section should be deleted.
// If there are more than 3 sections,
// then extra lines for each section
// should be added.
// Note that if only odd page numbers
// are used, this array should include
// only odd page numbers.
// i.e. whenever the variable
// "onlyOddPageNumbers = true"
// the array should include only
// odd page numbers.
// As an example, if a section starts
// at page 16 and ends at page 104 it
// should be included as [17, 105]
// Otherwise if the variable 
// "onlyOddPageNumbers = false", then
// it may contain both odd and even numbers.
const sectionsPageNumbers = [
	[17, 29], // first section
	[37, 53], // second section
	[97, 115] // third section
];

const wordList = [
	'a', // page 17
	'b', // ..
	'c', // ..
	'd', // section 1
	'e', // *********
	'f', // ..
	'g', // page 29
	'h', // page 37
	'i', // ..
	'j', // ..
	'k', // ..
	'l', // section 2
	'm', // *********
	'n', // ..
	'o', // ..
	'p', // page 53
	'q', // page 97
	'r', // ..
	's', // ..
	't', // ..
	'u', // section 3
	'v', // *********
	'w', // ..
	'x', // ..
	'y', // ..
	'z'  // page 115
];

let inputWord = 'test';

// whenever "onlyOddPageNumbers = true",
// the array "sectionsPageNumbers" should
// contain only odd page numbers.
// This function checks the array
// and if there are even numbers in it,
// it increases those numbers by 1,
// so that all the numbers in the 
// array will be odd numbers.
function checkSectionNumbers() {
	if (onlyOddPageNumbers = true) {
		for (i = 0; i < sectionsPageNumbers.length; i++) {
			for (j = 0; j < 2; j++) {
				if (sectionsPageNumbers[i][j] % 2 === 0) {
					sectionsPageNumbers[i][j] += 1;
				}
			}
		}
	}
}


function checkWordValidity() {
	if ((inputWord >= wordsRange[0]) && (inputWord <= wordsRange[1])) {
		wordSearch();
	} else {
		console.log('No such word');
	}
}


function wordSearch() {
	let position;
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
}