const config = require('../config/config');
const helper = require('../helpers/helper');

exports.getWordGame = (req, res, next) => {

	res.render('wordgame', {
		tries	: config.tries,
		letters	: config.letters
	});
};

exports.checkWord = (req, res, next) => {

	let enteredWord = '';
	if( req.body.hasOwnProperty('enteredWord') ) {
		enteredWord = req.body.enteredWord;
	}

	let jsonResponse = {
		"message"	: "error",
		"equal"		: false,
		"word"		: []
	};

	if(enteredWord.length) {

		const result = helper.compareWords(config.word, enteredWord);

		jsonResponse.message	= "success";
		jsonResponse.word		= result;

		if( config.word.toLowerCase() === enteredWord.toLowerCase() ) {
			jsonResponse.equal	= true;
		}
	}

	return res.status(200).json(jsonResponse);
};