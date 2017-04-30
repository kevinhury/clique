// @flow

import * as ActionTypes from '../actions/types'
import type { Action } from '../actions/types'

export const INITIAL_STATE: ChatReducerState = {
	chatRoomId: null,
	loadingMessages: false,
	textInput: '',
	messages: [],
}

export type ChatReducerState = {
	chatRoomId: ?string,
	loadingMessages: boolean,
	textInput: string,
	messages: any[],
}

export const ChatReducer = (state: ChatReducerState = INITIAL_STATE, action: Action): ChatReducerState => {
	switch (action.type) {
		case ActionTypes.MESSAGES_TEXT_INPUT_CHANGED:
			return { ...state, textInput: action.text }
		case ActionTypes.MESSAGES_NEW_RECEIVED:
			return { ...state, messages: [...state.messages, action.message ] }
		case ActionTypes.MESSAGES_NEW_SENT:
			return { ...state, messages: action.messages }
		default:
			return state
	}
}