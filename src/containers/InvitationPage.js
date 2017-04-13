// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { ProfileIcon, Separator, AddressBarItem, CommonCalendar } from '../components/Common'

type InvitationPageProps = {

}

class InvitationPage extends Component {
	props: InvitationPageProps

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerBackground}>
						<Text style={styles.title}>FIFA 17 SESSION</Text>
					</View>
					<View style={styles.headerSpace}></View>
					<View style={[styles.profilePicture, styles.center]}>
						<ProfileIcon image={'https://facebook.github.io/react/img/logo_og.png'} size={40} borderColor={'white'} />
					</View>
				</View>
				<View style={styles.content}>
					<View style={[styles.contentTitle, styles.center]}>
						<Text style={styles.fontSmall}>Yossi Kerman has invited you to:</Text>
						<Text style={styles.fontMedium}>FIFA SESSION 17</Text>
						<AddressBarItem text={'Kevin\'s place - 6 Malkat Shva'} />
					</View>
					<Separator />
					<View style={styles.contentInfo}>
					</View>
					<View style={[styles.calendar, styles.center]}>
						<Text style={styles.fontSmall}>Please select your availability from the dates below:</Text>
						<CommonCalendar />
					</View>
					<View style={[styles.bottomTextContainer, styles.center]}>
						<Text style={styles.fontMedium}>Event start time: 10:35</Text>
					</View>
					<View style={[styles.notice, styles.center]}>
						<Text style={[styles.noticeText, styles.fontSmall]}>Max RSVP's is on! First 20 RSVP's will enter the event.{'\n'}Be quick and RSVP now.</Text>
					</View>
					<View style={[styles.bottomTextContainer, styles.center]}>
						<Text>Invite expires in 02d 15h 46m</Text>
					</View>
					<View style={styles.buttons}>
						<Button title='Decline' backgroundColor='#C55755' />
						<Button title='Accept' backgroundColor='#01A836' />
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
		fontWeight: 'bold',
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
	return state
}

export default connect(mapStateToProps, {

})(InvitationPage)
