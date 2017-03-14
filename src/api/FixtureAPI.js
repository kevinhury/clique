export const phoneLoginAPICall = (phone: string, country: string): Promise<PhoneLoginResponse> => {
	console.log(`PHONE LOGIN API CALL with params: phone ${phone} country ${country}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ success: true })
		}, 1000)
	})
}

export const authenticateCodeAPICall = (code: string): Promise<AuthCodeResponse> => {
	console.log(`AUTH CODE API CALL with params: code ${code}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ success: true })
		}, 1000)
	})
}