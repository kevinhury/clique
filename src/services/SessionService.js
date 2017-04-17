// @flow

import { AsyncStorage } from 'react-native'
import storageConfig from '../config/storage'

export const generatePassword = (): string => {
	const s4 = () => {
		return Math
			.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1)
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

export const setCredentialsToStorage = (credentials: any): Promise<any> => {
	const { pid, password, accessToken } = credentials
	var promises = []
	if (pid) {
		promises.push(AsyncStorage.setItem(storageConfig.pid, pid))
	}
	if (password) {
		promises.push(AsyncStorage.setItem(storageConfig.password, password))
	}
	if (accessToken) {
		promises.push(AsyncStorage.setItem(storageConfig.accessToken, accessToken))
	}
	return Promise.all(promises)
		.then((results) => {
			console.log('set results')
			console.log(results)
		})
		.catch((err) => {
			console.log('set results err')
			console.log(err)
		})
}

export const getCredentialsFromStorage = (): Promise<any> => {
	const credentials = [
		AsyncStorage.getItem(storageConfig.pid),
		AsyncStorage.getItem(storageConfig.password),
	]
	return Promise.all(credentials)
		.then((results) => {
			return { pid: results[0], password: results[1] }
		})
}