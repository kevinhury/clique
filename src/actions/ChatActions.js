// @flow

import * as ActionTypes from './types'
import type { Action } from './types'

export const onMessageSent = (messages: any[]) => {
	(dispatch: (Action) => void) => {
		dispatch({ type: ActionTypes.MESSAGES_NEW_SENT, messages })
	}
}


