import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import {
	changeEventName,
	changeEventDescription,
	changeEventLocation,
} from '../actions'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton } from '../components/Common'

class CreateEventPage extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		changeEventName: PropTypes.func.isRequired,
		changeEventDescription: PropTypes.func.isRequired,
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
						<TextInput
							placeholder='Type event name here...'
							onChangeText={this.props.changeEventName}
							value={this.props.name}
							style={styles.inputStyle}
							autoFocus
						/>
						<TextInput
							placeholder='Type event description...'
							onChangeText={this.props.changeEventDescription}
							value={this.props.description}
							style={[styles.inputStyle, { height: 100 }]}
							multiline
						/>
						<TextInput
							placeholder='Enter location name'
							onChangeText={this.props.changeEventLocation}
							value={this.props.location}
							style={styles.inputStyle}
						/>
						<FormButton
							text='Set location'
							onPress={() => Actions.setLocationPage()}
							style={styles.locationButton}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							large
							raised
							onPress={() => Actions.createEventPage2()}
							title='Next'
							backgroundColor='#01a836'
							buttonStyle={styles.nextButton}
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
	nextButton: {
		height: 50,
		borderRadius: 15,
	},
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#31A5FD',
		height: 40,
		margin: 8,
	},
	locationButton: {
		height: 40,
		marginLeft: 5,
		marginRight: 5,
		margin: 8,
	}
})

const mapStateToProps = state => {
	const { name, description, location } = state.form
	return { name, description, location }
}

export default connect(mapStateToProps, {
	changeEventName,
	changeEventDescription,
	changeEventLocation,
})(CreateEventPage)
