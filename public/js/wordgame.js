document.getElementById('check-word').value = '';
document.getElementById('check-word').focus;

document.getElementById('check-word').addEventListener('keyup', function(event) {

	if( event.key == "Enter" ) {

		if( currentIteration < totalIteration ) {

			let enteredWord	= document.getElementById('check-word').value;

			if( enteredWord.length < defaultLength ) {
				alert('Please enter 5 letters word!');
				return;
			}

			const formData = {
				"enteredWord" : enteredWord
			};

			fetch('/checkWord', {
				method	:'POST',
				headers	: { 'Content-Type' : 'application/json;charset=utf-8' },
				body	: JSON.stringify( formData )
			}).then(result =>
				result.json()
			).then(res => {
				if( res.message == 'success') {

					const wordArr = res.word;
					let row = document.getElementById('row'+currentIteration);
					for( let obj of wordArr ) {
						row.cells[obj.index].innerHTML = obj.char;
						row.cells[obj.index].classList.add(obj.letterClass);
					}

					if( res.equal === true ) {
						alert("You win! \n Click OK to restart the game.");
						location.reload();
					} else {
						currentIteration += 1;
						document.getElementById('row'+currentIteration).classList.add('active');
						document.getElementById('check-word').value = '';
						document.getElementById('check-word').focus;

						if( currentIteration == totalIteration ) {
							alert("Maximum limit. \n Click OK to restart the game.");
							location.reload();
						}
					}
				}
			}).catch(error => {
				console.log(error);
			});
		} else {
			alert("You have reached your maximum limit. \n Click OK to restart the game.");
			location.reload();
		}
	}
});