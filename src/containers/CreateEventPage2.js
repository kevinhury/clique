// @flow

import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton } from '../components/Common'
import Dialog from '../components/Dialogs/Dialog'

import {
	changeEventLength,
	changeStartTime,
	changeRSVPDeadline,
} from '../actions'

function generateTimeFormat(): Array<string> {
	const interval = 15
	return Array.from({
		length: 24 * 60 / interval,
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
	deadlines: Array<any> = [1, 2, 3, 7, 12, 24, 48, 72].map(x => {
		return { value: x, label: `${x} Hours` }
	})
	days: Array<any> = [ ...Array(10).keys()].map(x => x + 1).map(x => {
		return { value: x, label: `${x}` }
	})
	hours: Array<any>

	static propTypes = {
		length: PropTypes.number,
		startTime: PropTypes.string,
		deadline: PropTypes.number,
		changeEventLength: PropTypes.func,
		changeStartTime: PropTypes.func,
		changeRSVPDeadline: PropTypes.func,
	}

	componentWillMount() {
		this.hours = generateTimeFormat().map(x => {
			return { value: x, label: `${x}` }
		})
	}

	setDaysOnClick() {
		this.refs.numDaysDialog.modal().open()
	}

	setTimeOnClick() {
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
							placeholder='Event length (days)'
							text={`${this.props.length}`}
							onPress={() => this.setDaysOnClick()}
							style={styles.button}
							/>
						<FormButton
							placeholder='Start time'
							text={`${this.props.startTime}`}
							onPress={() => this.setTimeOnClick()}
							style={styles.button}
							/>
						<FormButton
							placeholder='RSVP deadline'
							text={`${this.props.deadline}`}
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
					type={{ name: 'picker', options: this.days, onValueChange: (index) => {
						const length = this.days[index]['value']
						this.props.changeEventLength(length)
					}}}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.refs.numDaysDialog.modal().close()}
					/>
				<Dialog
					ref={'timeDialog'}
					title='What time your event will start?'
					type={{ name: 'picker', options: this.hours, onValueChange: (index) => {
						const startTime = this.hours[index]['value']
						this.props.changeStartTime(startTime)
					}}}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.refs.timeDialog.modal().close()}
					/>
				<Dialog
					ref={'deadlineDialog'}
					title='Invites ends in?'
					type={{ name: 'picker', options: this.deadlines, onValueChange: (index) => {
						const deadline = this.deadlines[index]['value']
						this.props.changeRSVPDeadline(deadline)
					}}}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.refs.deadlineDialog.modal().close()}
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

const mapStateToProps = state => {
	const { length, startTime, deadline } = state.form
	return { length, startTime, deadline }
}

export default connect(mapStateToProps, {
	changeEventLength,
	changeStartTime,
	changeRSVPDeadline,
})(CreateEventPage2)
