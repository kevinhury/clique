// @flow

// TODO: replace these
// import { phoneLoginAPICall, authenticateCodeAPICall } from '../api/LoginAPI'
import { phoneLoginAPICall, authenticateCodeAPICall } from '../api/FixtureAPI'
import type { PhoneLoginResponse, AuthCodeResponse } from '../api/LoginAPI'

export const loginWithPhone = (phone: string, country: string): Promise<PhoneLoginResponse> => {
	return phoneLoginAPICall(phone, country)
}

export const authenticatePhoneCode = (code: string): Promise<AuthCodeResponse> => {
	return authenticateCodeAPICall(code)
}