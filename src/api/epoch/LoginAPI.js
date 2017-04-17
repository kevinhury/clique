// @flow

import BaseAPI from './BaseAPI'
import type { Response } from './BaseAPI'

export type RegisterResponse = {
	success: boolean,
}

export type VerifyRegisterResponse = {
	success: boolean,
	pid: string,
	accessToken: string,
}

export type LoginResponse = {
	success: boolean,
	accessToken: string,
}

export type ILoginAPI = {
	register(phone: string, password: string): Promise<RegisterResponse>,
	verifyRegister(phone: string, password: string, token: string): Promise<VerifyRegisterResponse>,
	login(pid: string, password: string): Promise<LoginResponse>,
}

export const LoginAPI: ILoginAPI = {
	register(phone: string, password: string): Promise<RegisterResponse> {
		return BaseAPI
			.get('/accounts/register', { phone, password })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
	verifyRegister(phone: string, password: string, token: string): Promise<VerifyRegisterResponse> {
		return BaseAPI
			.get('/accounts/verifyRegister', { phone, password, token })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
	login(pid: string, password: string): Promise<LoginResponse> {
		return BaseAPI
			.get('/accounts/authenticate', { pid, password })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	}
}