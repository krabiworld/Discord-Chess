const LINKS = {
	DONATE: 'https://nowpayments.io/donation/chesscord',
	GITHUB: 'https://github.com/MineEjo/Discord-Chess',
	DISCORD: 'https://discord.gg/ZHpdPgBb54'
};

const LANGUAGES = [
	/* Main */
	[
		'English', 'en-US', {
		name: 'Discord Chess',
		home: 'Home',
		donate: 'Donate',
		sourceCode: 'Source Code',
		join: 'Join',
		headline: 'IMAGINE A PLACE…',
		subline: '…where you can become a member of the international chess community.',
		language: 'Interface language',
		important: 'Important',
		notificationCookie: 'This website uses cookies to offer you the most up-to-date information. By accessing this site, you automatically agree to the processing of your cookies!',
		copyright: 'All rights reserved'
	}
	],
	
	/* Secondary */
	[
		'Suomalainen', 'fi-FI', {
		name: 'Discord Chess',
		home: 'Etusivu',
		donate: 'Lahjoita',
		sourceCode: 'Lähdekoodi',
		join: 'Liity',
		headline: 'KUVITTELE PAIKKA…',
		subline: '…jossa voit liittyä kansainvälisen shakkiyhteisön jäseneksi.',
		language: 'Käyttöliittymän kieli',
		important: 'Tärkeä',
		notificationCookie: 'Tämä verkkosivusto käyttää evästeitä, jotta voimme tarjota sinulle ajantasaisimmat tiedot. Käyttämällä tätä sivustoa hyväksyt automaattisesti evästeiden käsittelyn!',
		copyright: 'Kaikki oikeudet pidätetään'
	}
	],
	
	[
		'Русский', 'ru-RU', {
		name: 'Discord Chess',
		home: 'Основная',
		donate: 'Поддержка',
		sourceCode: 'Исходный код',
		join: 'Войти',
		headline: 'ПРЕДСТАВЬТЕ МЕСТО…',
		subline: '…где вы можете стать членом международного шахматного сообщества.',
		language: 'Язык интерфейса',
		important: 'Важно',
		notificationCookie: 'Этот сайт использует файлы cookie, чтобы предложить вам самую актуальную информацию. Заходя на этот сайт, вы автоматически соглашаетесь на обработку файлов cookie!',
		copyright: 'Все права защищены'
	}
	]
];

const CHESS_BOARD = {
	LETTERS: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
	NUMBERS: ['1', '2', '3', '4', '5', '6', '7', '8'],
	EMOTIONS: [
		'?', '!!!', '!', ' :D', ' XD', ' >:)', ' :’-)', ' =)', ' :)', ' =3', ' :3', ' :P', ' :-/', ' :-|', ' ._.',
		' -_-', ' (* ^ ω ^)', ' (o^▽^o)', ' (o･ω･o)', ' (^人^)', ' ( ´ ω )', ' ╰(▔∀▔)╯', ' (✯◡✯)', ' (o˘◡˘o)', ' *О*',
		' *_*', ' о_О', ' :-E', ' :-<', ' :*)', ' [:]|||[:]', ' *:O)', ' (:\\/)', ' (MineEjo: **Keats**, stop what?!)',
		' (ಥ﹏ಥ)', ' ╮(￣_￣)╭', ' (¬‿¬ )', ' (´• ω •)ﾉ', ' (づ◡﹏◡)づ', ' (づ ◕‿◕ )づ'
	]
};