import {
	LOGIN_CHANGE_COUNTRY,
	LOGIN_CHANGE_NUMBER,
	LOGIN_SUBMIT_PHONE,
	LOGIN_SUBMIT_VERIFICATION,
} from './types'
import type { CountryCode } from './types'

export const changeLoginCountry = (country: CountryCode) => {
	return {
		type: LOGIN_CHANGE_COUNTRY,
		country,
	}
}

export const changeLoginNumber = (number: string) => {
	return {
		type: LOGIN_CHANGE_NUMBER,
		number,
	}
}

export const submitLogin = (country: CountryCode, number: string) => {
	return {
		type: LOGIN_SUBMIT_PHONE,
		number,
	}
}

export const submitVerificationCode = (code: string) => {
	return {
		type: LOGIN_SUBMIT_VERIFICATION,
		code,
	}
}

