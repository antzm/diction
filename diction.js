
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
// "onlyOddPages" boolean variable which is "true"
// if we use only the odd pages of the dictionary
// and "false" if we use all the pages of the dictionary.
//
// "sectionPages" array where we enter the first
// and the last page number for every section of the
// dictionary (either one continuous section or more
// than one sections which are separated by various
// appendices).


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
const onlyOddPages = true;


// Some dictionaries consist of only one main part,
// while other dictionaries may have an appendix
// in the middle of the dictionary, or in some 
// cases, there may be two appendices, or more, that split
// the main part of the dictionary in 3 or more sections.
//
// We are interesting in those scections only if
// the page numbers from one section to the next
// are not continuous.
// Othewise, if the numbering from one section
// to the other is continous, regardless of the appendix
// or the appendices between the sections,
// then we would consider that the dictionary
// consists of only one section.
//
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
// "onlyOddPages = true"
// the array should include only
// odd page numbers.
// As an example, if a section starts
// at page 16 and ends at page 104 it
// should be included as [17, 105].
// On the other hand, if the variable 
// "onlyOddPages = false", then
// the array may contain both
// odd and even page numbers.
const sectionPages = [
	[17, 29], // first section
	[37, 53], // second section
	[97, 115] // third section
];


// This array contains the selected
// words form the dictionary.
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

// In this array, the pages of the dictionary,
// which correspond to each word in the "WordList" array,
// will be added.
const wordPages = [];

let inputWord = 'test';

checkSectionNumbers();
createPageNumbers();
checkWordValidity();


// Whenever "onlyOddPageNumbers = true",
// the array "sectionsPageNumbers" should
// contain only odd page numbers.
// This function checks the array
// and if there are even numbers in it,
// it increases those numbers by 1,
// so that all the numbers in the 
// array will be odd numbers.
function checkSectionNumbers() {
	if (onlyOddPages === true) {
		for (i = 0; i < sectionPages.length; i++) {
			for (j = 0; j < 2; j++) {
				if (sectionPages[i][j] % 2 === 0) {
					sectionPages[i][j] += 1;
				}
			}
		}
	}
}


// This functions creates and adds the page
// numbers of the dictionary in the array
// "wordPages".
// Based on the "sectionPages" array, 
// and the "onlyOddPages" boolean variable,
// it calculates and stores the dictionary
// page numbers in the array "wordPages".
// Thus, each page number in the array "wordPages"
// corresponds to each word in the "wordsList" array.
// i.e. the word "wordsList[18]" is on the page "wordPages[18]"
function createPageNumbers() {
	if (onlyOddPages === true) {
		for (i = 0; i < sectionPages.length; i++) {
			let range = sectionPages[i][1] - sectionPages[i][0];
			for (j = 0; j < range + 1; j += 2) {
				wordPages.push(j + sectionPages[i][0]);
			}
		}
	} else {
		for (i = 0; i < sectionPages.length; i++) {
			let range = sectionPages[i][1] - sectionPages[i][0];
			for (j = 0; j < range + 1; j++) {
				wordPages.push(j + sectionPages[i][0]);
			}
		}		
	}
}

// This array is used for debugging pursposes
// to test whether the secions pages have
// been given in the correct form and in
// the correct order.
function checkPageSections() {

	for (i = 0; i < sectionPages.length; i++) {
		let pageRange = sectionPages[i][1] - sectionPages[i][0];
		if (pageRange <= 0) {
			console.log('No pages in section: ', i+1);
		} else {
			console.log('Section pages look OK');
		}
	}

	for (j = 0; j < sectionPages.length-1; j++) {
		let sectionRange = sectionPages[j+1][0] - sectionPages[j][0];
		if (sectionRange <= 0) {
			console.log('This section is not in the correct order: ', j+2);
		} else {
			console.log('Section order looks OK');
		}
	}

}


// This function checks whether the words
// in the wordList array have been placed 
// correctly in alphabetical order,
// otherwise it prints a list
// with the misplaced words and
// also, the index in the original
// array where those words are located.
// The function is not part of the code
// and is only used for debugging purposes.
function checkWordsOrder() {
	let wrongWords = [];
	for (i = 0; i < wordList.length; i++) {
		if (wordList[i] >= wordList[i+1]) {
			wrongWords.push('index: ' + (i+1) + ' => ' + wordList[i+1]);
		}
	}
	if (wrongWords.length === 0) {
		console.log('The words are in alphabetical order');
	} else {
		console.log('The following words are not in alphabetical order:');
		console.log(wrongWords);
	}
}


// This function is not part of the code.
// It's purspose is to provide some neccesary
// help while configuring the code to work
// with a new array and a new set of variables.
// It can be called in the cosole and if both
// arrays have the same length, then a combined array will
// be logged, otherwise a message will appear
// mentioning that the arrays wordList and 
// wordPages have different length, i.e. there's
// probably a problem with either the wordList array,
// or the sectionPages array and it sould be corrected.
// Also, when the arrays have different length, the longest
// array is used to calculate the combinedArray.
function compareArrays() {
	const combinedArray = [];
	if (wordList.length === wordPages.length) {
		for (i = 0; i < wordList.length; i++) {
			combinedArray[i] = wordList[i] + " " + wordPages[i];
		} 
		console.log(combinedArray);
		console.log('Both arrays, wordList and wordPages, have the SAME length')
	}	else if (wordList.length > wordPages.length){
			for (i = 0; i< wordList.length; i++) {
				combinedArray[i] = wordList[i] + " " + wordPages[i];
			} 
			console.log(combinedArray);
			console.log('Important note: The length of the array wordList is GREATER than the length of the array wordPages');
	}	else {
			for (i = 0; i < wordPages.length; i++) {
			combinedArray[i] = wordList[i] + " " + wordPages[i];
			} 
			console.log(combinedArray);
			console.log('Important note: The length of the array wordList is SHORTER than the length of the array wordPages');
	}
}


// This function checks whether a word is contained
// inside the dictionary, based on the first and the last
// word of the dictionary, as have been entered in the
// "wordsRange" array.
function checkWordValidity() {
	if ((inputWord >= wordsRange[0]) && (inputWord <= wordsRange[1])) {
		wordSearch();
	} else {
		console.log('This word is not included in the dictionary');
	}
}

// This function is used to search for a certain
// word inside the dictionary (i.e. wordsList array)
// and returns the number of page or the number of pages
// corresponding to that word.
// i.e. The page number is stored inside the wordPages array
// so that each itemm in the wordsList array corresponds to the
// correct item (i.e. the page) in the wordPages array.
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
	console.log('position: ', position, 'word: ', wordList[position], 'page:, ', wordPages[position]);
}