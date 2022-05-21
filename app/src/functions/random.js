const aTimeRange = [1000, 3000]
const sClassVisible = 'visible';

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
				
				if (!_hFiguresMoves.classList.contains(sClassVisible)) {
					_hFiguresMoves.classList.add(sClassVisible);
				}
			}
			
			setTimeout(_generateMove, _getRandomIntInclusive(aTimeRange[0], aTimeRange[1]));
		}
		
		function _getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
	}
});