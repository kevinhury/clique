// @flow

import * as ActionTypes from './types'
import type { Action } from './types'

export const chatRoomWillEnter = (eventId: string, eventTitle: string) => {
	return {
		type: ActionTypes.CHAT_ROOM_WILL_ENTER,
		eventId, eventTitle,
	}
}

export const messageListRequest = (pid: string, accessToken: string, eventId: string) =>
	(dispatch: (Object) => void) => {
		console.log(eventId)
		setTimeout(() => {
			dispatch({ type: ActionTypes.CHAT_ROOM_MESSAGES_RESPONSE })
		}, 2000)
	}

export const onMessageSent = (messages: any[]): Action => {
	return { type: ActionTypes.MESSAGES_NEW_SENT, messages }
}


