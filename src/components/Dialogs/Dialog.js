// @flow

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native'
import Modal from 'react-native-modal'
import { Separator, CommonButton } from '../Common'
import TextComponent from './TextComponent'
import InviteesComponent from './InviteesComponent'
import PickerComponent from './PickerComponent'
import MapComponent from './MapComponent'
import { defaultColors } from '../../themes/styles'

type Callback = () => void

type DialogProps = {
	title: string,
	type: Object,
	modalStyle?: Object,
	buttonText: string,
	buttonStyle?: Object,
	buttonCallback: Callback,
	dismissCallback: ?Callback,
	isVisible: boolean,
}

class Dialog extends Component {
	props: DialogProps

	renderButton() {
		if (this.props.buttonText === undefined)
			return (<View />)

		return (
			<CommonButton
				style={[styles.button, this.props.buttonStyle]}
				title={this.props.buttonText}
				backgroundColor='#14972B'
				onPress={this.props.buttonCallback}
			/>
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
						value={this.props.type.value}
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
			<TouchableWithoutFeedback
				onPress={this.props.dismissCallback || this.props.buttonCallback}
			>
				<Modal
					style={styles.modal}
					isVisible={this.props.isVisible}
				>
					<TouchableWithoutFeedback onPress={null}>
						<View style={[styles.modalContent, this.props.modalStyle]}>
							<View style={styles.titleContainer}>
								<Text style={styles.titleText}>{this.props.title}</Text>
								<Separator />
							</View>
							<View style={styles.componentContainer}>
								{this.renderComponent()}
							</View>
							<View style={styles.buttonContainer}>
								{this.renderButton()}
							</View>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	modal: {
		justifyContent: 'flex-end',
		margin: 20,
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		height: 400,
	},
	titleContainer: {
		flex: 1,
	},
	titleText: {
		color: defaultColors.primaryColor,
		fontSize: 20,
		fontWeight: 'bold',
		margin: 10,
	},
	componentContainer: {
		flex: 4,
		alignSelf: 'stretch',
		margin: 15,
	},
	buttonContainer: {
		flex: 1,
		alignSelf: 'stretch',
	},
	button: {
		height: 40,
	},
})

export default Dialog
