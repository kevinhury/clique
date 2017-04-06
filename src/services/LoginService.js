// @flow

import type { PhoneLoginResponse, AuthCodeResponse, ILoginAPI } from '../api/epoch/LoginAPI'

export default (API: ILoginAPI) => {
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