const aTimeRange = [1000, 3000];
const sClassVisible = 'visible';

window.addEventListener('load', () => {
	const _hFiguresMoves = document.getElementById('random-moves-figures');
	if (_hFiguresMoves && CHESS_BOARD) {
		
		_generateMove();
		
		/* Chess move generation */
		function _generateMove() {
			const _sRandomLetter = CHESS_BOARD.letters[getRandomIntInclusive(0, Object.keys(CHESS_BOARD.letters).length)];
			const _sRandomNumber = CHESS_BOARD.numbers[getRandomIntInclusive(0, Object.keys(CHESS_BOARD.numbers).length)];
			const _sRandomEmotion = CHESS_BOARD.emotions[getRandomIntInclusive(0, Object.keys(CHESS_BOARD.emotions).length)];
			
			if (_sRandomLetter && _sRandomNumber && _sRandomEmotion) {
				_hFiguresMoves.innerHTML = `${_sRandomLetter}${_sRandomNumber}${_sRandomEmotion}`;
				
				/* By default, the element is hidden, so a class is added to show it */
				if (!_hFiguresMoves.classList.contains(sClassVisible)) {
					_hFiguresMoves.classList.add(sClassVisible);
				}
			}
			
			/* Recursion! */
			setTimeout(_generateMove, getRandomIntInclusive(aTimeRange[0], aTimeRange[1]));
		}
	}
});

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}