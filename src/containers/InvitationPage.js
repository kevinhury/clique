// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import { ProfileIcon, Separator, AddressBarItem, DateBubblePicker } from '../components/Common'
import { invitationChooseDates, invitationAttendance } from '../actions'
import type { Location } from '../actions/types'

type InvitationPageProps = {
	owner: string,
	title: string,
	location: Location,
	locationName: string,
	expires: ?Date,
	limitedRSVP: ?number,
	dates: Date[],
	invitationChooseDates: () => void,
	selectedDates: Date[],
	invitationAttendance: () => void,
}

class InvitationPage extends Component {
	props: InvitationPageProps

	componentDidMount() {
		Actions.refresh({ title: I18n.t('invitation.navigationTitle') })
	}

	dateOnClick(date: Date) {
		const dates = this.props.selectedDates
		const index = dates.map(x => x.getTime()).indexOf(date.getTime())
		if (index > -1)
			this.props.invitationChooseDates([...dates.slice(0, index), ...dates.slice(index + 1)])
		else if (this.props.selectedDates.length < 3)
			this.props.invitationChooseDates([...dates, date])
	}

	renderDateBubbles() {
		const { dates, selectedDates } = this.props
		return dates.map((date, index) => {
			const checked = selectedDates.includes(date)
			return (
				<DateBubblePicker key={index} date={date} checked={checked} onPress={() => this.dateOnClick(date)} />
			)
		})
	}

	render() {
		const { owner, title, location, locationName, expires, limitedRSVP } = this.props
		const startTime = this.props.dates[0].toLocaleTimeString()
		const inviterImage = 'https://facebook.github.io/react/img/logo_og.png'
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerBackground}>
						<Text style={[styles.title, styles.boldText]}>{title}</Text>
					</View>
					<View style={styles.headerSpace}></View>
					<View style={[styles.profilePicture, styles.center]}>
						<ProfileIcon image={inviterImage} size={40} borderColor={'white'} />
					</View>
				</View>
				<View style={styles.content}>
					<View style={[styles.contentTitle, styles.center]}>
						<Text style={styles.fontSmall}>{I18n.t('invitation.title', { string: owner })}</Text>
						<Text style={styles.fontMedium}>{title}</Text>
						<AddressBarItem text={locationName + ' - ' + location.address} />
					</View>
					<Separator />
					<View style={styles.contentInfo}>
					</View>
					<View style={styles.calendar}>
						<Text style={[styles.fontMedium, styles.selectDateText]}>{I18n.t('invitation.selectDate')}</Text>
						<View style={styles.bubblesContainer}>
							{this.renderDateBubbles()}
						</View>
					</View>
					<View style={[styles.bottomTextContainer, styles.center]}>
						<Text style={styles.fontMedium}>{I18n.t('invitation.startTime')} {startTime}</Text>
					</View>
					<View style={[styles.notice, styles.center]}>
						<Text style={[styles.noticeText, styles.fontSmall]}>{I18n.t('invitation.rsvpNotice', { number: limitedRSVP })}</Text>
					</View>
					<View style={[styles.bottomTextContainer, styles.center]}>
						<Text style={styles.boldText}>{I18n.t('invitation.expires')} {moment(expires).fromNow()}</Text>
					</View>
					<View style={styles.buttons}>
						<Button
							title={I18n.t('invitation.declineButton')}
							buttonStyle={styles.button}
							backgroundColor='#C55755'
							onPress={() => {
								this.props.invitationAttendance('Approved')
								Actions.pop()
							}} />
						<Button
							title={I18n.t('invitation.acceptButton')}
							buttonStyle={styles.button}
							backgroundColor='#01A836'
							onPress={() => {
								this.props.invitationAttendance('Declined')
								Actions.pop()
							}} />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	boldText: {
		fontWeight: 'bold',
	},
	header: {
		flex: 1,
	},
	headerBackground: {
		flex: 12,
		backgroundColor: 'black',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 18,
		bottom: 10,
	},
	headerSpace: {
		flex: 1,
	},
	content: {
		flex: 6,
	},
	profilePicture: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		right: 0,
	},
	contentTitle: {
		padding: 8,
	},
	contentInfo: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	fontSmall: {
		fontSize: 12,
	},
	fontMedium: {
		fontSize: 14,
	},
	fontBig: {
		fontSize: 20,
	},
	calendar: {
		flex: 3,
		margin: 5,
		padding: 5,
	},
	selectDateText: {
		textAlign: 'center',
		marginBottom: 30,
	},
	bottomTextContainer: {
		flex: 0.5,
		margin: 5,
	},
	notice: {
		backgroundColor: '#31A5FD',
		flex: 0.8,
		padding: 5,
	},
	noticeText: {
		color: 'white',
		textAlign: 'center',
	},
	buttons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},
	button: {
		borderRadius: 30,
		height: 35,
		width: 115,
		shadowColor: '#000',
		shadowRadius: 3,
		shadowOpacity: 0.5,
		shadowOffset: {},
	},
	bubblesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

const mapStateToProps = state => {
	const { selected } = state.events
	const { selectedDates } = state.invitation
	return { ...selected, selectedDates }
}

export default connect(mapStateToProps, {
	invitationChooseDates,
	invitationAttendance,
})(InvitationPage)
