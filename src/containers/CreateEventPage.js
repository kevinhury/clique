import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import {
	changeEventName,
	changeEventDescription,
	changeLocationName,
	changeEventLocation,
} from '../actions'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton } from '../components/Common'
import NextButton from '../components/NextButton'
import CommonInput from '../components/CommonInput'
import I18n from 'react-native-i18n'

class CreateEventPage extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		locationName: PropTypes.string.isRequired,
		location: PropTypes.object.isRequired,
		changeEventName: PropTypes.func.isRequired,
		changeEventDescription: PropTypes.func.isRequired,
		changeLocationName: PropTypes.func.isRequired,
		changeEventLocation: PropTypes.func.isRequired,
	}

	render() {
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
							text={this.props.location.name}
							onPress={() => Actions.setLocationPage()}
							style={styles.locationButton}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<NextButton onPress={() => Actions.createEventPage2()} />
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
})(CreateEventPage)
