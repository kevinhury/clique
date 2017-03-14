// @flow

// TODO: replace these
// import * as API from '../api/epoch/LoginAPI'
import * as API from '../api/epoch/FixtureAPI'
import type { PhoneLoginResponse, AuthCodeResponse } from '../api/epoch/LoginAPI'


export default {
	loginWithPhone: (phone: string, country: string): Promise<PhoneLoginResponse> => {
		return API
			.phoneLoginAPICall(phone, country)
	},
	authenticatePhoneCode: (code: string): Promise<AuthCodeResponse> => {
		return API
			.authenticateCodeAPICall(code)
	},
}