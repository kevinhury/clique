// @flow

// TODO: replace these
import { LoginAPI } from '../api/epoch/LoginAPI'
// import * as LoginAPI from '../api/epoch/FixtureAPI'
import LoginServiceGenerate from '../services/LoginService'
import * as SessionService from '../services/SessionService'
import {
	LOGIN_CHANGE_COUNTRY,
	LOGIN_CHANGE_NUMBER,
	LOGIN_SUBMIT_PHONE,
	LOGIN_SUBMIT_PHONE_BACK,
	LOGIN_SUBMIT_RESPONSE,
	LOGIN_SUBMIT_VERIFICATION_REQUEST,
	LOGIN_SUBMIT_VERIFICATION_SUCCESS,
	LOGIN_SUBMIT_VERIFICATION_FAILURE,
} from './types'
import type { CountryCode } from './types'

const LoginService = LoginServiceGenerate(LoginAPI)

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
		SessionService.getUserPassword()
			.then((password) => {
				return LoginService.register(number, country.callingCode, password)
			})
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

export const submitVerificationCode = (number: string, country: CountryCode, token: string) =>
	(dispatch: (Object) => void) => {
		dispatch({ type: LOGIN_SUBMIT_VERIFICATION_REQUEST, token })
		SessionService.getUserPassword()
			.then((password) => {
				return LoginService.verifyRegister(number, country.callingCode, password, token)
			})
			.then(({ success, pid, accessToken }) => {
				SessionService.setCredentialsToStorage({ pid })
					.then(() => {
						dispatch({ type: LOGIN_SUBMIT_VERIFICATION_SUCCESS, success, pid, accessToken })
					})
			})
			.catch(() => {
				dispatch({ type: LOGIN_SUBMIT_VERIFICATION_FAILURE, success: false })
			})
	}

