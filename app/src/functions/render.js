const sLocaleAttribute = 'localize';
const sLangCookieKey = 'lang';

window.addEventListener('load', () => {
	/* Writing a domain into the copyright */
	const hDomain = document.getElementById('domain');
	if (hDomain) hDomain.innerHTML = window.location.hostname;
	
	/* Loading available languages */
	const hLang = document.getElementById('language');
	if (hLang && LANGUAGES) {
		/*  Writing the selected language in cookies */
		hLang.addEventListener('change', (_event) => {
			document.cookie = `${sLangCookieKey}=${_event?.target?.value};`;
			localise(_event?.target?.value);
		});
		
		let _bInputBlocked = false;
		
		/* Localization override */
		for (let _nIndex = 0; _nIndex < Object.keys(LANGUAGES).length; _nIndex++) {
			/*  Creating an option*/
			const _hOption = document.createElement('option');
			_hOption.value = LANGUAGES[_nIndex][1];
			_hOption.innerHTML = LANGUAGES[_nIndex][0];
			
			/* Checking for correctness */
			if (LANGUAGES[_nIndex][0] && LANGUAGES[_nIndex][1] && LANGUAGES[_nIndex][2]) {
				hLang.appendChild(_hOption);
				
				/* Getting a cookie */
				const _aCookie = document.cookie.replace(/ /g, '').split(';') || undefined;
				
				/* Checking the saved language */
				if (!_bInputBlocked && document.cookie && _aCookie && _aCookie.includes(`${sLangCookieKey}=${LANGUAGES[_nIndex][1]}`)) {
					_hOption.selected = true;
					_bInputBlocked = true;
				}
				/* The user language is preferred if it is available in translation */
				else if (!_bInputBlocked && navigator.language === LANGUAGES[_nIndex][1]) {
					_hOption.selected = true;
				}
				/* The first language is selected by default */
				else if (!_bInputBlocked && _nIndex === 0) {
					_hOption.selected = true;
				}
			} else {
				/* Localization error message */
				console.error(`In the translation "${LANGUAGES[_nIndex][0]} (${LANGUAGES[_nIndex][1]})", a mistake has been made!`);
			}
		}
		
		if (hLang.value) localise(hLang.value);
	}
});

/* Localization function */
function localise(_sLangCode) {
	const _allElements = document.getElementsByTagName('*');
	
	const _aForLocalise = [];
	let _jLocales = null;
	
	/* Obtaining items requiring localization */
	for (const _hElement of _allElements) {
		if (_hElement.getAttribute(sLocaleAttribute)) {
			_aForLocalise.push(_hElement);
		}
	}
	
	/* Obtaining localization by checking the language code */
	for (let _nIndex = 0; _nIndex < Object.keys(LANGUAGES).length; _nIndex++) {
		if (LANGUAGES[_nIndex][1] === _sLangCode) {
			_jLocales = LANGUAGES[_nIndex][2];
		}
	}
	
	/* Localizing */
	for (const _hElement of _aForLocalise) {
		const _sLocale = _jLocales[_hElement.getAttribute(sLocaleAttribute)];
		
		if (_sLocale) {
			_hElement.innerHTML = _sLocale;
		} else {
			/* Installing the primary localization if no key is found in the secondary localization */
			console.error(`Key "${_hElement.getAttribute(sLocaleAttribute)}" is not found in locale "${_sLangCode}"`);
			_hElement.innerHTML = LANGUAGES[0][2][_hElement.getAttribute(sLocaleAttribute)];
		}
	}
}