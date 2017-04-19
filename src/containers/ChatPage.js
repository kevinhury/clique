// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import { onMessageSent } from '../actions'

type ChatPageProps = {
	messages: [],
	onMessageSent: (any[]) => void,
}

class ChatPage extends Component {
	props: ChatPageProps

	onSend(messages: any[] = []) {
		const modified = GiftedChat.append(this.props.messages, messages)
		this.props.onMessageSent(modified)
	}

	render() {
		return (
			<GiftedChat
				messages={this.props.messages}
				onSend={this.onSend.bind(this)}
			/>
		)
	}
}

const mapStateToProps = state => {
	return state.chat
}

export default connect(mapStateToProps, {
	onMessageSent,
})(ChatPage)