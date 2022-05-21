const _aTimeRange = [1000, 3000]

window.addEventListener('load', () => {
	const _hFiguresMoves = document.getElementById('figures-moves-random');
	if (_hFiguresMoves && CHESS_BOARD) {
		
		_generateMove();
		
		function _generateMove() {
			const _sRandomLetter = CHESS_BOARD.LETTERS[_getRandomIntInclusive(0, Object.keys(CHESS_BOARD.LETTERS).length)];
			const _sRandomNumber = CHESS_BOARD.NUMBERS[_getRandomIntInclusive(0, Object.keys(CHESS_BOARD.NUMBERS).length)];
			const _sRandomEmotion = CHESS_BOARD.EMOTIONS[_getRandomIntInclusive(0, Object.keys(CHESS_BOARD.EMOTIONS).length)];
			
			if (_sRandomLetter && _sRandomNumber && _sRandomEmotion) {
				_hFiguresMoves.innerHTML = `${_sRandomLetter}${_sRandomNumber}${_sRandomEmotion}`;
			}
			
			setTimeout(_generateMove, _getRandomIntInclusive(_aTimeRange[0], _aTimeRange[1]));
		}
		
		function _getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is
			                                                          // inclusive
		}
	}
});