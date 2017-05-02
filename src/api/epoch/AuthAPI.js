// @flow

import { create } from 'apisauce'
import BaseAPI from './BaseAPI'

const AuthAPI = create({
	baseURL: BaseAPI.getBaseURL(),
})

export default (accessToken: string) => {
	AuthAPI.setHeaders({
		'Authorization': 'token',
		'x-access-token': accessToken,
	})
	return AuthAPI
}