// @flow

import * as ActionTypes from './types'
import type { Action } from './types'

export const onMessageSent = (messages: any[]): Action => {
	return { type: ActionTypes.MESSAGES_NEW_SENT, messages }
}


