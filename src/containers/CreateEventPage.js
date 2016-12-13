import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, } from 'react-native'
import { Button } from 'react-native-elements'
import { Input } from '../components/Common'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
	changeEventName,
	changeEventDescription,
	changeEventLocation,
} from '../actions'

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
			<View style={styles.container}>
				<Input
					label='Name'
					onChangeText={this.props.changeEventName}
					value={this.props.name}
				/>
				<Input
					label='Description'
					onChangeText={this.props.changeEventDescription}
					value={this.props.description}
				/>
				<Input
					label='Location'
					onChangeText={this.props.changeEventLocation}
					value={this.props.location}
				/>
				<Button
					large
					raised
					onPress={() => Actions.createEventPage2()}
					title='Next'
					backgroundColor='#01a836'
					buttonStyle={styles.nextButton}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	nextButton: {
		borderRadius: 15,
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
