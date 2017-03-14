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
	baseURL: 'http://localhost:8080',
	timeout: 10000,
})