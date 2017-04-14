// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import I18n from 'react-native-i18n'
import moment from 'moment'
import { ProfileIcon, Separator, AddressBarItem, CommonCalendar } from '../components/Common'
import { invitationChooseDates } from '../actions'

type InvitationPageProps = {
	inviter: string,
	invitationChooseDates: () => void,
	dates: Date[],
}

const mock = {
	inviter: 'Yossi Kerman',
	title: 'FIFA SESSION 17',
	inviterImage: 'https://facebook.github.io/react/img/logo_og.png',
	location: 'Kevin\'s place - 6 Malkat Shva',
	startTime: '10:35',
	expires: '02d 15h 46m',
	maxRSVPs: 20,
	// dates: [{ date: '2017-04-18'}, { date: '2017-04-20'}, { date: '2017-04-19'}],
}

class InvitationPage extends Component {
	props: InvitationPageProps

	dateOnClick(datestr: string) {
		const date = new Date(datestr)
		const dates = this.props.dates
		const index = dates.map(x => x.getTime()).indexOf(date.getTime())
		if (index > -1)
			this.props.invitationChooseDates([ ...dates.slice(0, index), ...dates.slice(index + 1) ])
		else if (this.props.dates.length < 3)
			this.props.invitationChooseDates([ ...dates, date])
	}

	render() {
		const { inviter, title, inviterImage, location, startTime, expires, maxRSVPs } = mock
		const { dates } = this.props
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
						<Text style={styles.fontSmall}>{I18n.t('invitation.title', { string: inviter })}</Text>
						<Text style={styles.fontMedium}>{title}</Text>
						<AddressBarItem text={location} />
					</View>
					<Separator />
					<View style={styles.contentInfo}>
					</View>
					<View style={[styles.calendar, styles.center]}>
						<Text style={styles.fontSmall}>{I18n.t('invitation.selectDate')}</Text>
						<CommonCalendar
							onDateSelect={this.dateOnClick.bind(this)}
							events={dates}
						/>
					</View>
					<View style={[styles.bottomTextContainer, styles.center]}>
						<Text style={styles.fontMedium}>{I18n.t('invitation.startTime')} {startTime}</Text>
					</View>
					<View style={[styles.notice, styles.center]}>
						<Text style={[styles.noticeText, styles.fontSmall]}>{I18n.t('invitation.rsvpNotice', { number: maxRSVPs })}</Text>
					</View>
					<View style={[styles.bottomTextContainer, styles.center]}>
						<Text style={styles.boldText}>{I18n.t('invitation.expires')} {expires}</Text>
					</View>
					<View style={styles.buttons}>
						<Button title={I18n.t('invitation.declineButton')} backgroundColor='#C55755' />
						<Button title={I18n.t('invitation.acceptButton')} backgroundColor='#01A836' />
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
		fontSize: 16,
	},
	fontBig: {
		fontSize: 20,
	},
	calendar: {
		flex: 16,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: '#31A5FD',
		margin: 5,
	},
	bottomTextContainer: {
		flex: 1,
		margin: 5,
	},
	notice: {
		backgroundColor: '#31A5FD',
		flex: 2,
		padding: 5,
	},
	noticeText: {
		color: 'white',
		textAlign: 'center',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 5,
	},
})

const mapStateToProps = state => {
	return state.invitation
}

export default connect(mapStateToProps, {
	invitationChooseDates,
})(InvitationPage)
