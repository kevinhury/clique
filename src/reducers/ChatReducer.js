// @flow

import * as ActionTypes from '../actions/types'
import type { Action } from '../actions/types'

export const INITIAL_STATE: ChatReducerState = {
	chatRoomId: null,
	roomTitle: '',
	loadingMessages: false,
	textInput: '',
	messages: [],
	loadingMessages: true,
}

export type ChatReducerState = {
	chatRoomId: ?string,
	roomTitle: string,
	loadingMessages: boolean,
	textInput: string,
	messages: any[],
	loadingMessages: boolean,
}

export const ChatReducer = (state: ChatReducerState = INITIAL_STATE, action: Action): ChatReducerState => {
	switch (action.type) {
		case ActionTypes.CHAT_ROOM_WILL_ENTER:
			return { ...INITIAL_STATE, chatRoomId: action.eventId, roomTitle: action.eventTitle }
		case ActionTypes.MESSAGES_TEXT_INPUT_CHANGED:
			return { ...state, textInput: action.text }
		case ActionTypes.MESSAGES_NEW_RECEIVED:
			return { ...state, messages: [...state.messages, action.message] }
		case ActionTypes.MESSAGES_NEW_SENT:
			return { ...state, messages: action.messages }
		case ActionTypes.CHAT_ROOM_MESSAGES_REQUEST:
			return state
		case ActionTypes.CHAT_ROOM_MESSAGES_RESPONSE:
			return { ...state, loadingMessages: false }
		default:
			return state
	}
}