// @flow

import type { PhoneLoginResponse, AuthCodeResponse } from '../api/epoch/LoginAPI'

export default (API: any) => {
	return {
		loginWithPhone: (phone: string, country: string): Promise<PhoneLoginResponse> => {
			return API
				.phoneLoginAPICall(phone, country)
		},
		authenticatePhoneCode: (code: string): Promise<AuthCodeResponse> => {
			return API
				.authenticateCodeAPICall(code)
		},
	}
}