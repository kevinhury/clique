// @flow

import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import Calendar from 'react-native-calendar'
import I18n from 'react-native-i18n'
import CardView from '../components/CardView'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton } from '../components/Common'
import Dialog from '../components/Dialogs/Dialog'
import NextButton from '../components/NextButton'
import {
	changeEventLength,
	changeStartTime,
	changeRSVPDeadline,
	addEventDate,
	removeEventDate,
} from '../actions'

const generateTimeFormat = (): Array<string> => {
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
		dates: PropTypes.arrayOf(Date),
		changeEventLength: PropTypes.func,
		changeStartTime: PropTypes.func,
		changeRSVPDeadline: PropTypes.func,
		addEventDate: PropTypes.func,
		removeEventDate: PropTypes.func,
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

	dateOnClick(datestr: string) {
		const date = new Date(datestr)
		const exist = this.props.dates.map(x => x.getTime()).indexOf(date.getTime()) > -1
		if (exist)
			this.props.removeEventDate(date)
		else if (this.props.dates.length < 3)
			this.props.addEventDate(date)
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
							placeholder={I18n.t('createFlow.lengthInput')}
							text={`${this.props.length > 0 ? this.props.length : ''}`}
							onPress={() => this.setDaysOnClick()}
							style={styles.button}
							/>
						<View style={styles.calendarContainer}>
							<Calendar
								scrollEnabled
								dayHeadings={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
								events={this.props.dates.map(x => { return { date: x }})}
								showEventIndicators
								customStyle={{
									calendarContainer: styles.calendar,
									eventIndicator: styles.eventIndicator,
									hasEventCircle: styles.hasEventCircle,
									hasEventDaySelectedCircle: styles.hasEventCircle,
								}}
								onDateSelect={this.dateOnClick.bind(this)}
							/>
						</View>
						<FormButton
							placeholder={I18n.t('createFlow.timeInput')}
							text={`${this.props.startTime}`}
							onPress={() => this.setTimeOnClick()}
							style={styles.button}
							/>
						<FormButton
							placeholder={I18n.t('createFlow.rsvpInput')}
							text={`${this.props.deadline > 0 ? this.props.deadline : ''}`}
							onPress={() => this.setDeadlineOnClick()}
							style={styles.button}
							/>
					</View>
					<View style={styles.buttonContainer}>
						<NextButton onPress={() => Actions.createEventPage3()} />
					</View>
				</CardView>
				<Dialog
					ref={'numDaysDialog'}
					title={I18n.t('dialogs.daysTitle')}
					type={{ name: 'picker', options: this.days, onValueChange: (index) => {
						const length = this.days[index]['value']
						this.props.changeEventLength(length)
					}}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.refs.numDaysDialog.modal().close()}
					/>
				<Dialog
					ref={'timeDialog'}
					title={I18n.t('dialogs.timeTitle')}
					type={{ name: 'picker', options: this.hours, onValueChange: (index) => {
						const startTime = this.hours[index]['value']
						this.props.changeStartTime(startTime)
					}}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.refs.timeDialog.modal().close()}
					/>
				<Dialog
					ref={'deadlineDialog'}
					title={I18n.t('dialogs.deadlineTitle')}
					type={{ name: 'picker', options: this.deadlines, onValueChange: (index) => {
						const deadline = this.deadlines[index]['value']
						this.props.changeRSVPDeadline(deadline)
					}}}
					buttonText={I18n.t('set')}
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
	calendarContainer: {
		borderWidth: 1,
		borderRadius: 15,
		borderColor: '#31A5FD',
		margin: 8,
		marginLeft: 5,
		marginRight: 5,
	},
	calendar: {
		backgroundColor: 'transparent',
	},
	eventIndicator: {
		backgroundColor: '#31A5FD',
		width: 5,
		height: 5,
	},
	hasEventCircle: {
		backgroundColor: '#31A5FD',
	},
})

const mapStateToProps = state => {
	const { length, startTime, deadline, dates } = state.form
	return { length, startTime, deadline, dates }
}

export default connect(mapStateToProps, {
	changeEventLength,
	changeStartTime,
	changeRSVPDeadline,
	addEventDate,
	removeEventDate,
})(CreateEventPage2)
