// @flow

import React, { Component } from 'react'
import { View, Keyboard, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import I18n from 'react-native-i18n'
import CardView from '../components/CardView'
import { changeEventName, changeEventDescription, changeLocationName, cancelForm } from '../actions'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton, CommonButton } from '../components/Common'
import CommonInput from '../components/CommonInput'
import { defaultColors } from '../themes/styles'

import type { Location } from '../actions/types'

type CreateEventPageProps = {
	navigation: any,
	name: string,
	description: string,
	locationName: string,
	location: Location,
	changeEventName: (string) => void,
	changeEventDescription: (string) => void,
	changeLocationName: (string) => void,
	cancelForm: () => void,
	onLeft: () => void,
}

type State = {
	focusTitleInput: boolean,
	focusDescInput: boolean,
	focusLocationNameInput: boolean,
}

const INITIAL_STATE = {
	focusTitleInput: false,
	focusDescInput: false,
	focusLocationNameInput: false,
}

class CreateEventPage extends Component {
	props: CreateEventPageProps
	state: State = INITIAL_STATE
	static navigationOptions = () => ({
		title: I18n.t('navigation.createEventTitle'),
	})

	nextDisabled() {
		const { name, description, locationName, location } = this.props
		return name.length <= 0 ||
			description.length <= 0 ||
			locationName.length <= 0 ||
			location.address.length <= 0
	}

	render() {
		const nextDisabled = this.nextDisabled()
		return (
			<LinearGradient
				colors={[defaultColors.primaryColor, '#ffffff']}
				style={styles.page}
			>
				<CardView style={styles.card}>
					<EventCreatePanel stateIndex={0} style={styles.statePanel} />
					<View style={styles.inputContainer}>
						<CommonInput
							placeholder={I18n.t('createFlow.titleInput')}
							onChangeText={this.props.changeEventName}
							value={this.props.name}
							autoFocus
							returnKeyType={'next'}
							onSubmitEditing={() => {
								this.setState({ focusTitleInput: false, focusDescInput: true })
							}}
						/>
						<CommonInput
							placeholder={I18n.t('createFlow.descriptionInput')}
							onChangeText={this.props.changeEventDescription}
							value={this.props.description}
							style={{ height: 100 }}
							returnKeyType={'next'}
							focus={this.state.focusDescInput}
							onSubmitEditing={() => {
								this.setState({ focusDescInput: false, focusLocationNameInput: true })
							}}
						/>
						<CommonInput
							placeholder={I18n.t('createFlow.locationNameInput')}
							onChangeText={this.props.changeLocationName}
							value={this.props.locationName}
							returnKeyType={'done'}
							focus={this.state.focusLocationNameInput}
							onSubmitEditing={() => {
								this.setState(INITIAL_STATE)
							}}
						/>
						<FormButton
							placeholder={I18n.t('createFlow.locationInput')}
							text={this.props.location.address}
							onPress={() => {
								Keyboard.dismiss()
								this.props.navigation.navigate('SetLocation')
							}}
							style={styles.locationButton}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<CommonButton
							title={I18n.t('next')}
							disabled={nextDisabled}
							onPress={() => {
								this.props.navigation.navigate('CreateEvent2')
							}}
						/>
					</View>
				</CardView>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	card: {
		justifyContent: 'flex-start',
	},
	statePanel: {
		margin: 5,
		marginBottom: 15,
	},
	inputContainer: {
		flex: 4,
	},
	buttonContainer: {
		flex: 2,
		justifyContent: 'flex-end',
	},
	locationButton: {
		height: 40,
		marginLeft: 5,
		marginRight: 5,
		margin: 8,
	},
})

const mapStateToProps = state => {
	const { name, description, locationName, location } = state.form
	return { name, description, locationName, location }
}

export default connect(mapStateToProps, {
	changeEventName,
	changeEventDescription,
	changeLocationName,
	cancelForm,
})(CreateEventPage)
