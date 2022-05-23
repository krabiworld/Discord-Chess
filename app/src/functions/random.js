/*
 * Copyright (c) 2022 MineEjo.
 * This file is part of Discord-Chess <https://github.com/MineEjo/Discord-Chess>.
 *
 * Discord-Chess is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Discord-Chess is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Discord-Chess. If not, see <http://www.gnu.org/licenses/>.
 */

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