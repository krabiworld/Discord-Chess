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

const express = require('express'), app = express(), router = express.Router();

/* Port */
const port = 3000;

/* For easy waypointing */
const path = require('path');

/* Static */
app.use(express.static(path.join(__dirname, '../src')));

/* Add router */
app.use('/', router);

/* Running notification */
app.listen(port, () => {
	console.log(`Running at port: ${port}, http://localhost:${port}/`);
});