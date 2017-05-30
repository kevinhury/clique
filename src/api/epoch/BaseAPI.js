// @flow

import { create } from 'apisauce'

export type Response = {
	data: Object,
	status: string,
	ok: boolean,
	headers: Object,
	config: Object,
}

export default create({
	// baseURL: 'http://146.185.144.235/',
	// baseURL: 'http://localhost:3000',
	baseURL: 'http:/10.0.0.4:3000',
})