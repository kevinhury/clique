// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import I18n from 'react-native-i18n'
import moment from 'moment'
import CardView from '../components/CardView'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton, CommonCalendar, CommonButton } from '../components/Common'
import Dialog from '../components/Dialogs/Dialog'
import {
	changeEventLength,
	changeStartTime,
	changeRSVPDeadline,
	addEventDate,
	removeEventDate,
} from '../actions'
import { defaultColors } from '../themes/styles'

type Props = {
	navigation: any,
	length: number,
	startTime: string,
	deadline: number,
	dates: Date[],
	changeEventLength: (any) => void,
	changeStartTime: (any) => void,
	changeRSVPDeadline: (any) => void,
	addEventDate: (any) => void,
	removeEventDate: (any) => void,
}

type Label = {
	value: any,
	label: string,
}

type State = {
	numDaysDialog: boolean,
	timeDialog: boolean,
	deadlineDialog: boolean,
	deadlines: Label[],
	days: Label[],
	hours: Label[],
}

class CreateEventPage2 extends Component {
	props: Props
	state: State = {
		numDaysDialog: false,
		timeDialog: false,
		deadlineDialog: false,
		deadlines: [],
		days: [],
		hours: [],
	}
	static navigationOptions = () => ({
		title: I18n.t('navigation.createEventTitle'),
	})

	componentWillMount() {
		const deadlines = genereateDeadlinesFormat().map(x => {
			return { value: x, label: `${x} Hours` }
		})
		const days = generateDaysFormat().map(x => {
			return { value: x, label: `${x} Days` }
		})
		const hours = generateTimeFormat().map(x => {
			return { value: x, label: `${x}` }
		})

		const currentTimeFormatted = () => {
			const mom = moment()
			return mom.hours() + ':' + mom.minutes()
		}

		this.props.changeRSVPDeadline(deadlines[4].value)
		this.props.changeEventLength(days[0].value)
		this.props.changeStartTime(
			closestTime(
				currentTimeFormatted(),
				hours.map(x => x.value)
			)
		)

		this.setState({ deadlines, days, hours })
	}

	nextDisabled() {
		const { length, startTime, deadline, dates } = this.props
		return length <= 0 ||
			!startTime ||
			deadline <= 0 ||
			dates.length <= 0
	}

	dateOnClick(datestr: string) {
		const date = new Date(datestr)
		const exist = this.props.dates.map(x => x.getTime()).indexOf(date.getTime()) > -1
		if (exist)
			this.props.removeEventDate(date)
		else if (this.props.dates.length < 3)
			this.props.addEventDate(date)
	}

	lengthInputFormatted(): string {
		if (!this.props.length) return ''
		return this.state.days.filter(x =>
			x.value === this.props.length
		)[0].label || ''
	}

	rsvpInputFormatted(): string {
		if (!this.props.deadline) return ''
		return this.state.deadlines.filter(x =>
			x.value === this.props.deadline
		)[0].label || ''
	}

	render() {
		return (
			<LinearGradient
				colors={[defaultColors.primaryColor, '#ffffff']}
				style={styles.page}
			>
				<CardView style={styles.card}>
					<EventCreatePanel stateIndex={1} style={styles.statePanel} />
					<View style={styles.card}>
						<FormButton
							placeholder={I18n.t('createFlow.lengthInput')}
							text={this.lengthInputFormatted()}
							onPress={() => this.setState({ numDaysDialog: true })}
							style={styles.button}
						/>
						<View style={styles.calendarContainer}>
							<CommonCalendar
								events={this.props.dates.map(x => { return { date: x } })}
								onDateSelect={this.dateOnClick.bind(this)}
							/>
						</View>
						<View style={styles.buttonContainer}>
							<FormButton
								placeholder={I18n.t('createFlow.timeInput')}
								text={`${this.props.startTime}`}
								onPress={() => this.setState({ timeDialog: true })}
								style={styles.button}
							/>
							<FormButton
								placeholder={I18n.t('createFlow.rsvpInput')}
								text={this.rsvpInputFormatted()}
								onPress={() => this.setState({ deadlineDialog: true })}
								style={styles.button}
							/>
							<CommonButton
								title={I18n.t('next')}
								disabled={this.nextDisabled()}
								onPress={() => {
									this.props.navigation.navigate('CreateEvent3')
								}}
							/>
						</View>
					</View>
				</CardView>
				<Dialog
					title={I18n.t('dialogs.daysTitle')}
					type={{
						name: 'picker', options: this.state.days, value: this.props.length, onValueChange: (index) => {
							const length = this.state.days[index]['value']
							this.props.changeEventLength(length)
						},
					}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 320 }}
					isVisible={this.state.numDaysDialog}
					dismissCallback={() => this.setState({ numDaysDialog: false })}
					buttonCallback={() => this.setState({ numDaysDialog: false })}
				/>
				<Dialog
					title={I18n.t('dialogs.timeTitle')}
					type={{
						name: 'picker', options: this.state.hours, value: this.props.startTime, onValueChange: (index) => {
							const startTime = this.state.hours[index]['value']
							this.props.changeStartTime(startTime)
						},
					}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 320 }}
					isVisible={this.state.timeDialog}
					dismissCallback={() => this.setState({ timeDialog: false })}
					buttonCallback={() => this.setState({ timeDialog: false })}
				/>
				<Dialog
					title={I18n.t('dialogs.deadlineTitle')}
					type={{
						name: 'picker', options: this.state.deadlines, value: this.props.deadline, onValueChange: (index) => {
							const deadline = this.state.deadlines[index]['value']
							this.props.changeRSVPDeadline(deadline)
						},
					}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 320 }}
					isVisible={this.state.deadlineDialog}
					dismissCallback={() => this.setState({ deadlineDialog: false })}
					buttonCallback={() => this.setState({ deadlineDialog: false })}
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
		flex: 1,
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
		margin: 6,
	},
	buttonContainer: {
		flex: 1,
	},
	calendarContainer: {
		flex: 2,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: defaultColors.primaryColor,
		margin: 8,
		marginLeft: 5,
		marginRight: 5,
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


// Helpers

const genereateDeadlinesFormat = () => {
	return [1, 2, 3, 7, 12, 24, 48, 72]
}

const generateDaysFormat = () => {
	return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

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

const closestTime = (time: string, hours: string[]) => {
	const toInteger = (format: string) => {
		const split = format.split(':')
		return parseInt(split[0]) * 60 + parseInt(split[1])
	}
	const inMinutes = hours.map(toInteger)
	const currentTime = toInteger(time)
	const diff = []
	for (let i = 0; i < inMinutes.length; i++)
		diff.push(Math.abs(currentTime - inMinutes[i]))

	const index = (diff.indexOf(Math.min.apply(Math, diff)) + 1) % hours.length
	return hours[index]
}