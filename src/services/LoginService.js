// @flow

import type { RegisterResponse, LoginResponse, ILoginAPI } from '../api/epoch/LoginAPI'

export default (API: ILoginAPI) => {
	return {
		register: (phoneNumber: string, country: string, password: string): Promise<RegisterResponse> => {
			const phone = country + phoneNumber
			return API
				.register(phone, password)
		},
		verifyRegister: (phoneNumber: string, country: string, password: string, token: string): Promise<LoginResponse> => {
			const phone = country + phoneNumber
			return API
				.verifyRegister(phone, password, token)
		},
		login: (pid: string, password: string): Promise<LoginResponse> => {
			return API
				.login(pid, password)
		},
	}
}