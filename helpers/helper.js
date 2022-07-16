exports.compareWords = (word, enteredWord) => {

	word		= word.toUpperCase();
	enteredWord	= enteredWord.toUpperCase();

	const wordArr		= word.split('');
	const enteredArr	= enteredWord.split('');

	let result = [];

	if( enteredArr.length ) {

		for( let index in enteredArr ) {

			let char = enteredArr[index];

			let indexInWordArr		= wordArr.indexOf(char);
			let indexInEnteredArr	= enteredArr.indexOf(char);

			let letterClass	= 'red';
			if(indexInWordArr == indexInEnteredArr) {
				letterClass = 'green';
			} else if(indexInWordArr >= 0 ) {
				letterClass = 'yellow';
			}

			result.push({
				"index"			: index,
				"char"			: char,
				"letterClass"	: letterClass
			});
		}
	}

	return result;
}