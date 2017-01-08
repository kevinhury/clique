// @flow

import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
	en: require('./english.json'),
}

const languageCode = I18n.locale.substr(0, 2)

switch (languageCode) {
case 'he':
	I18n.translations.he = require('./he.json')
	break
}