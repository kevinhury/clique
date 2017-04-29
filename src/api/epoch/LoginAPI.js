// @flow

import BaseAPI from './BaseAPI'
import type { Response } from './BaseAPI'

export type RegisterResponse = {
	success: boolean,
}

export type LoginResponse = {
	success: boolean,
	accessToken: string,
	pid: string,
	phone: string,
	image: string,
	username: string,
}

export type ILoginAPI = {
	register(phone: string, password: string): Promise<RegisterResponse>,
	verifyRegister(phone: string, password: string, token: string): Promise<LoginResponse>,
	login(pid: string, password: string): Promise<LoginResponse>,
}

export const LoginAPI: ILoginAPI = {
	register(phone: string, password: string): Promise<RegisterResponse> {
		return BaseAPI
			.post('/accounts/register', { phone, password })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				const { success } = response.data
				return { success }
			})
	},
	verifyRegister(phone: string, password: string, token: string): Promise<LoginResponse> {
		return BaseAPI
			.post('/accounts/verifyRegister', { phone, password, token })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	login(pid: string, password: string): Promise<LoginResponse> {
		return BaseAPI
			.post('/accounts/authenticate', { pid, password })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
}