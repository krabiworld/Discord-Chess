const sLocaleAttribute = 'localize';
const sLinkAttribute = 'link';
const sLangCookieKey = 'lang';
const sClassLoaded = 'loaded';
const sTranslationAttribute = 'translation';
const sFoundationYear = '2022';

window.addEventListener('load', () => {
	/* Copyright year */
	const _hYear = document.getElementById('year');
	if (_hYear) _hYear.innerHTML = (new Date().getFullYear().toString() === sFoundationYear) ? new Date().getFullYear().toString() : `${sFoundationYear} - ${new Date().getFullYear().toString()}`;
	
	/* Navbar menu */
	const _hMenu = document.getElementById('nav-menu');
	const _hMenuLinks = document.getElementById('nav-tabs-links');
	const _hMenuSpan = document.getElementById('nav-menu-span');
	const _hMenuSpanClose = document.getElementById('nav-menu-span-close');
	const _hIconMenu = document.getElementById('icon-nav-menu');
	const _hIconAngleSmall = document.getElementById('icon-nav-cross');
	
	if (_hMenu && _hMenuLinks && _hIconMenu && _hMenuSpan && _hMenuSpanClose && _hIconAngleSmall) {
		_hMenu.addEventListener('click', () => {
			const _sVisibleStatus = getComputedStyle(document.documentElement).getPropertyValue('--tabs-hidden');
			
			if (_sVisibleStatus) {
				if (JSON.parse(_sVisibleStatus)) {
					if (_hIconMenu.classList.contains('hidden')) {
						_hIconAngleSmall.classList.add('hidden');
						_hIconMenu.classList.remove('hidden');
						
						_hMenuSpan.classList.remove('hidden');
						_hMenuSpanClose.classList.add('hidden');
						
						_hMenuLinks.classList.remove('adaptive');
					} else {
						_hIconMenu.classList.add('hidden');
						_hIconAngleSmall.classList.remove('hidden');
						
						_hMenuSpan.classList.add('hidden');
						_hMenuSpanClose.classList.remove('hidden');
						
						_hMenuLinks.classList.add('adaptive');
					}
				}
			}
		});
	}
	
	/* Writing a domain into the copyright */
	const _hDomain = document.getElementById('domain');
	if (_hDomain) _hDomain.innerHTML = window.location.hostname;
	
	/* Loading available languages */
	const _hLang = document.getElementById('language');
	if (_hLang && LANGUAGES) {
		/*  Writing the selected language in cookies */
		_hLang.addEventListener('change', (_event) => {
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
				_hLang.appendChild(_hOption);
				
				/* Getting a cookie */
				const _aCookie = document.cookie.replace(/ /g, '').split(';') || undefined;
				
				/* Checking the saved language */
				if (!_bInputBlocked && document.cookie && _aCookie && _aCookie.includes(`${sLangCookieKey}=${LANGUAGES[_nIndex][1]}`)) {
					_hOption.selected = true;
					_bInputBlocked = true;
				}
				/* The user language is preferred if it is available in translation */
				else if (!_bInputBlocked && navigator.language && navigator.language.slice(0, 2) === LANGUAGES[_nIndex][1]) {
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
		
		if (_hLang.value) localise(_hLang.value);
	}
	
	setLinks();
	
	/* Removing the load-overlay */
	const _hOverlay = document.getElementById('load-overlay');
	if (!_hOverlay.classList.contains(sClassLoaded)) _hOverlay.classList.add(sClassLoaded);
	document.body.classList.add(sClassLoaded);
});

function setLinks() {
	if (LINKS) {
		const _allElements = document.getElementsByTagName('*');
		
		for (const _hElement of _allElements) {
			if (_hElement.getAttribute(sLinkAttribute)) {
				try {
					_hElement.href = LINKS[_hElement.getAttribute(sLinkAttribute)];
				} catch (_e) {
					console.log(_e);
				}
			}
		}
	}
}

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
			/* Nicknames do not need to be translated, there is a separate attribute for this */
			if (_hElement.getAttribute(sTranslationAttribute) !== 'false') {
				/* Installing the primary localization if no key is found in the secondary localization */
				console.error(`Key "${_hElement.getAttribute(sLocaleAttribute)}" is not found in locale "${_sLangCode}"`);
			}
			
			_hElement.innerHTML = LANGUAGES[0][2][_hElement.getAttribute(sLocaleAttribute)];
		}
	}
}