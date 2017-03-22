// @flow

// TODO: replace these
// import * as API from '../api/epoch/LoginAPI'
import * as API from '../api/epoch/FixtureAPI'
import LoginServiceGenerate from '../services/LoginService'
import {
	LOGIN_CHANGE_COUNTRY,
	LOGIN_CHANGE_NUMBER,
	LOGIN_SUBMIT_PHONE,
	LOGIN_SUBMIT_PHONE_BACK,
	LOGIN_SUBMIT_RESPONSE,
	LOGIN_SUBMIT_VERIFICATION,
	LOGIN_SUBMIT_VERIFICATION_RESPONSE,
} from './types'
import type { CountryCode } from './types'

const LoginService = LoginServiceGenerate(API)

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

export const submitLogin = (number: string, country: CountryCode) =>
	(dispatch: (Object) => void) => {
		dispatch({ type: LOGIN_SUBMIT_PHONE, country, number })
		LoginService
			.loginWithPhone(number, country)
			.then(({ success }) => {
				dispatch({ type: LOGIN_SUBMIT_RESPONSE, success })
			})
			.catch(() => {
				dispatch({ type: LOGIN_SUBMIT_RESPONSE, success: false })
			})
	}

export const submitLoginBack = () => {
	return { type: LOGIN_SUBMIT_PHONE_BACK }
}

export const submitVerificationCode = (code: string) =>
	(dispatch: (Object) => void) => {
		dispatch({ type: LOGIN_SUBMIT_VERIFICATION, code })
		LoginService
			.authenticatePhoneCode(code)
			.then(({ success }) => {
				dispatch({ type: LOGIN_SUBMIT_VERIFICATION_RESPONSE, success })
			})
			.catch(() => {
				dispatch({ type: LOGIN_SUBMIT_VERIFICATION_RESPONSE, success: false })
			})
	}

