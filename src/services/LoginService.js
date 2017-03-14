// @flow

// TODO: replace these
// import * as API from '../api/LoginAPI'
import * as API from '../api/FixtureAPI'
import type { PhoneLoginResponse, AuthCodeResponse } from '../api/LoginAPI'


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