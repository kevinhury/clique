import { AsyncStorage } from 'react-native'
import storageConfig from '../config/storage'

export const removeSessionKeys = () => {
	return Promise.all([
		AsyncStorage.removeItem(storageConfig.pid),
		AsyncStorage.removeItem(storageConfig.password),
  ])
}