// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  TextInput,
	StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton } from '../components/Common'
import Dialog from '../components/Dialogs/Dialog'

function generateTimeFormat(): Array<string> {
	const interval = 15
	return Array.from({
		length: 24 * 60 / interval
	}, (v, i) => {
		let h = Math.floor(i * interval / 60)
		let m = i * interval - h * 60
		if (h < 10)
			h = '0' + h
		if (m < 10)
			m = '0' + m
		return h + ':' + m
	})
}


class CreateEventPage2 extends Component {
	static propTypes = {

	}

	setDaysOnClick() {
		this.refs.numDaysDialog.modal().open()
	}

	setTimeOnCLick() {
		this.refs.timeDialog.modal().open()
	}

	setDeadlineOnClick() {
		this.refs.deadlineDialog.modal().open()
	}

	render() {
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
        <CardView style={styles.card}>
					<EventCreatePanel stateIndex={1} style={styles.statePanel} />
					<View>
						<FormButton
							text='Event length (days)'
							onPress={() => this.setDaysOnClick()}
							style={styles.button}
						/>
						<FormButton
							text='Start time'
							onPress={() => this.setTimeOnCLick()}
							style={styles.button}
						/>
						<FormButton
							text='RSVP deadline'
							onPress={() => this.setDeadlineOnClick()}
							style={styles.button}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							large
							raised
							onPress={() => Actions.createEventPage3()}
							title='Next'
							backgroundColor='#01a836'
							buttonStyle={styles.nextButton}
						/>
					</View>
				</CardView>
				<Dialog
          ref={'numDaysDialog'}
          title='How many days?'
          type={{ name:'picker', options: [ ...Array(10).keys()].map(x => x + 1) }}
          buttonText='SET'
          modalStyle={{ height: 280 }}
          buttonCallback={() => console.log('set')}
        />
				<Dialog
					ref={'timeDialog'}
					title='What time your event will start?'
					type={{ name:'picker', options: generateTimeFormat() }}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => console.log('set')}
				/>
				<Dialog
					ref={'deadlineDialog'}
					title='Invites ends in?'
					type={{ name:'picker', options: [1, 2, 3, 7, 12, 24, 48, 72].map(x => `${x} Hours`) }}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => console.log('set')}
				/>
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
	button: {
		height: 40,
		marginLeft: 5,
		marginRight: 5,
		margin: 8,
	},
	buttonContainer: {
		flex: 2,
		justifyContent: 'flex-end',
	},
	nextButton: {
		height: 50,
		borderRadius: 15,
	},
})

export default connect(null, {})(CreateEventPage2)
