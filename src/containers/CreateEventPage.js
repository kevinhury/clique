// @flow

import React, { Component } from 'react'
import { View, Keyboard, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import RNGooglePlacePicker from 'react-native-google-place-picker'
import I18n from 'react-native-i18n'
import CardView from '../components/CardView'
import { changeEventName, changeEventDescription, changeLocationName, changeEventLocation, cancelForm } from '../actions'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton, CommonButton } from '../components/Common'
import CommonInput from '../components/CommonInput'


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
	changeEventLocation: (Location) => void,
	cancelForm: () => void,
	onLeft: () => void,
}

class CreateEventPage extends Component {
	props: CreateEventPageProps
	static navigationOptions = () => ({
		title: I18n.t('navigation.createEventTitle'),
	})

	nextDisabled() {
		return false
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
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
				<CardView style={styles.card}>
					<EventCreatePanel stateIndex={0} style={styles.statePanel} />
					<View style={styles.inputContainer}>
						<CommonInput
							placeholder={I18n.t('createFlow.titleInput')}
							onChangeText={this.props.changeEventName}
							value={this.props.name}
						/>
						<CommonInput
							placeholder={I18n.t('createFlow.descriptionInput')}
							onChangeText={this.props.changeEventDescription}
							value={this.props.description}
							style={{ height: 100 }}
						/>
						<CommonInput
							placeholder={I18n.t('createFlow.locationNameInput')}
							onChangeText={this.props.changeLocationName}
							value={this.props.locationName}
						/>
						<FormButton
							placeholder={I18n.t('createFlow.locationInput')}
							text={this.props.location.address}
							onPress={() => {
								Keyboard.dismiss()
								RNGooglePlacePicker.show((response) => {
									if (response.didCancel || response.error) return
									this.props.changeEventLocation({
										longitude: response.longitude,
										latitude: response.latitude,
										address: response.address,
									})
								})
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
	changeEventLocation,
	cancelForm,
})(CreateEventPage)
