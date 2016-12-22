import React, { Component, PropTypes } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'
import Modal from 'react-native-modalbox'
import { Separator } from '../Common'
import { Button } from 'react-native-elements'
import TextComponent from './TextComponent'

class Dialog extends Component {
	static propTypes = {
		title: PropTypes.string,
		type: PropTypes.object,
		modalStyle: PropTypes.any,
		buttonText: PropTypes.string,
		buttonStyle: PropTypes.any,
		buttonCallback: PropTypes.func,
	}

	modal() {
		return this.refs.modal
	}

	renderButton() {
		if (this.props.buttonText === undefined)
			return (<View />)

		return (
			<View style={styles.button}>
				<Button
					style={this.props.buttonStyle}
					raised
					title={this.props.buttonText}
					backgroundColor='#14972B'
					onPress={this.props.buttonCallback}
				/>
			</View>
		)
	}

	renderComponent() {
		switch (this.props.type.name) {
		case 'text':
			return (
				<TextComponent text={this.props.type.text}/>
			)
		default:
			return (<View />)
		}
	}

	render() {
		return (
			<Modal style={[styles.modal, this.props.modalStyle]} ref={'modal'} position='bottom'>
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.titleText}>{this.props.title}</Text>
					</View>
					<Separator style={styles.separator} />
					{this.renderComponent()}
					{this.renderButton()}
				</View>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	modal: {
		backgroundColor: '#fff',
		height: 230,
	},
	container: {
		flex: 1,
		alignItems: 'center'
	},
	title: {

	},
	titleText: {
		color: '#31A5FD',
		fontSize: 20,
		fontWeight: 'bold',
		margin: 5,
	},
	separator: {
		backgroundColor: '#F1CE81',
		marginLeft: 20,
		marginRight: 20,
	},
	button: {
		position: 'absolute',
		bottom: 5,
		left: 40,
		right: 40,
		alignSelf: 'stretch',
	}
})

export default Dialog
