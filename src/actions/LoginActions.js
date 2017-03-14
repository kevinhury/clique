import LoginService from '../services/LoginService'
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

export const submitLogin = (number: string, country: CountryCode) => {
	return (dispatch) => {
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
}

export const submitLoginBack = () => {
	return { type: LOGIN_SUBMIT_PHONE_BACK }
}

export const submitVerificationCode = (code: string) => {
	return (dispatch) => {
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
}

