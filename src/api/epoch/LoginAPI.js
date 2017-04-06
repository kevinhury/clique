// @flow

import BaseAPI from './BaseAPI'
import type { Response } from './BaseAPI'

export type PhoneLoginResponse = {
	success: boolean,
}

export type AuthCodeResponse = {
	success: boolean,
}

export type ILoginAPI = {
	phoneLoginAPICall(phone: string, country: string): Promise<PhoneLoginResponse>,
	authenticateCodeAPICall(code: string): Promise<AuthCodeResponse>,
}

export const LoginAPI: ILoginAPI = {
	phoneLoginAPICall(phone: string, country: string): Promise<PhoneLoginResponse> {
		return BaseAPI
			.get('/login/phone', { phone, country })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
	authenticateCodeAPICall(code: string): Promise<AuthCodeResponse> {
		return BaseAPI
			.get('/login/code', { q: code })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
}