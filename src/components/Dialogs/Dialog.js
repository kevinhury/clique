// @flow

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'
import Modal from 'react-native-modalbox'
import { Separator, CommonButton } from '../Common'
import TextComponent from './TextComponent'
import InviteesComponent from './InviteesComponent'
import PickerComponent from './PickerComponent'
import MapComponent from './MapComponent'

type DialogProps = {
	title: string,
	type: Object,
	modalStyle?: Object,
	buttonText: string,
	buttonStyle?: Object,
	buttonCallback: () => void,
}

class Dialog extends Component {
	props: DialogProps

	modal() {
		return this.refs.modal
	}

	renderButton() {
		if (this.props.buttonText === undefined)
			return (<View />)

		return (
			<View style={styles.buttonContainer}>
				<CommonButton
					style={[styles.button, this.props.buttonStyle]}
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
					<TextComponent text={this.props.type.text} />
				)
			case 'invitees':
				return (
					<InviteesComponent invitees={this.props.type.invitees} />
				)
			case 'picker':
				return (
					<PickerComponent
						options={this.props.type.options}
						onValueChange={this.props.type.onValueChange}
					/>
				)
			case 'map':
				return (
					<MapComponent
						location={this.props.type.location}
						name={this.props.type.locationName}
						description={this.props.type.description}
					/>
				)
			default:
				return (<View />)
		}
	}

	render() {
		return (
			<Modal style={[styles.modal, this.props.modalStyle]} ref={'modal'} position='bottom'>
				<View style={styles.container}>
					<Text style={styles.titleText}>{this.props.title}</Text>
					<Separator />
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
		alignItems: 'center',
	},
	titleText: {
		color: '#31A5FD',
		fontSize: 20,
		fontWeight: 'bold',
		margin: 10,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 5,
		left: 40,
		right: 40,
		alignSelf: 'stretch',
	},
	button: {
		height: 40,
	},
})

export default Dialog
