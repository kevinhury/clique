// @flow

import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import { onMessageSent, messageListRequest } from '../actions'

type ChatPageProps = {
	navigation: any,
	chatRoomId: string,
	roomTitle: string,
	loadingMessages: boolean,
	messages: [],
	onMessageSent: (any[]) => void,
	messageListRequest: (string) => void,
	pid: string,
	accessToken: string,
}

class ChatPage extends Component {
	props: ChatPageProps
	static navigationOptions = ({ navigation }) => {
		const title = navigation.state.params.title
		return { title }
	}

	componentDidMount() {
		this.props.messageListRequest(this.props.chatRoomId)
	}

	onSend(messages: any[] = []) {
		const modified = GiftedChat.append(this.props.messages, messages)
		this.props.onMessageSent(modified)
	}

	renderIndicator() {
		return (
			<View style={styles.center}>
				<ActivityIndicator animating size='large' color='gray' />
			</View>)
	}

	render() {
		if (this.props.loadingMessages)
			return this.renderIndicator()
		return (
			<GiftedChat
				messages={this.props.messages}
				onSend={this.onSend.bind(this)}
			/>
		)
	}
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

const mapStateToProps = state => {
	const { pid, accessToken } = state.session
	return { ...state.chat, pid, accessToken }
}

export default connect(mapStateToProps, {
	onMessageSent,
	messageListRequest,
})(ChatPage)