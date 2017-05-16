// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import I18n from 'react-native-i18n'
import CardView from '../components/CardView'
import { Separator } from '../components/Common'
import { AtendeesSection, NumAtendeesSection, TitleSection, InfoSection } from '../components/EventPage'
import Dialog from '../components/Dialogs/Dialog'
import { cancelEvent, openInvitation, chatRoomWillEnter } from '../actions'

import type { UserEvent } from '../actions/types'

type EventInfoPageProps = {
	navigation: any,
	event: UserEvent,
	pid: string,
	accessToken: string,
	openInvitation: () => void,
	cancelEvent: (string, string, string) => void,
	createEvent: () => void,
	form: () => void,
	chatRoomWillEnter: () => void,
}

type State = {
	cancelDialog: boolean,
	inviteesDialog: boolean,
	mapDialog: boolean,
}

class EventInfoPage extends Component {
	props: EventInfoPageProps
	state: State = {
		cancelDialog: false,
		inviteesDialog: false,
		mapDialog: false,
	}
	static navigationOptions = () => ({
		title: I18n.t('navigation.eventTitle'),
	})
	
	render() {
		const {
			id, title, description, location, locationName, approved, status, owner,
			dates, isAdmin, invitees, minAtendees, limitedRSVP,
		} = this.props.event
		const { pid, accessToken } = this.props
		const adminImage = invitees.filter(x => x.admin)[0].image
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
				<CardView>
					<TitleSection
						renderCancel={isAdmin}
						title={title}
						creator={owner}
						image={adminImage}
						approved={approved}
						status={status}
						onStatusPress={() => {
							if (isAdmin || status != 'Pending') return
							this.props.openInvitation()
							this.props.navigation.navigate('Invitation')
						}}
						onCancelPress={() => this.setState({ cancelDialog: true })}
					/>
					<View style={styles.descriptionSection}>
						<Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
					</View>
					<Separator />
					<InfoSection
						date={dates[0].toLocaleDateString()}
						time={dates[0].toLocaleTimeString()}
						location={`${locationName} - ${location.address}`}
						onLocationPress={() => this.setState({ mapDialog: true })}
					/>
					<Separator />
					<AtendeesSection
						invitees={invitees}
						style={styles.atendeesSection}
						onPress={() => this.setState({ inviteesDialog: true })}
						chatButton={true}
						onChatButtonPress={() => {
							this.props.chatRoomWillEnter(id, title)
							this.props.navigation.navigate('Chat', { title })
						}}
					/>
					<Separator />
					<NumAtendeesSection
						style={styles.numAtendeesSection}
						limitedRSVP={limitedRSVP}
						minAtendees={minAtendees}
					/>
					<Separator />
				</CardView>
				<Dialog
					title={I18n.t('dialogs.inviteesTitle')}
					type={{ name: 'invitees', invitees: this.props.event.invitees }}
					buttonText={I18n.t('great!')}
					modalStyle={{ height: 280 }}
					isVisible={this.state.inviteesDialog}
					dismissCallback={() => this.setState({ inviteesDialog: false })}
					buttonCallback={() => this.setState({ inviteesDialog: false })}
				/>
				<Dialog
					title={I18n.t('dialogs.cancelTitle')}
					type={{ name: 'text', text: I18n.t('dialogs.cancelText') }}
					buttonText={I18n.t('yes')}
					isVisible={this.state.cancelDialog}
					dismissCallback={() => this.setState({ cancelDialog: false })}
					buttonCallback={() => {
						this.setState({ cancelDialog: false })
						this.props.cancelEvent(pid, accessToken, id)
						this.props.navigation.back()
					}}
				/>
				<Dialog
					title={this.props.event.location.address}
					type={{ name: 'map', locationName, description: location.address, location }}
					buttonText={I18n.t('takeMeThere')}
					isVisible={this.state.mapDialog}
					dismissCallback={() => this.setState({ mapDialog: false })}
					buttonCallback={() => {
						this.setState({ mapDialog: false })
						const url = `http://maps.apple.com/?ll=${location.latitude},${location.longitude}&q=${location.address}`
						Linking.canOpenURL(url).then((supported) => {
							if (!supported) return
							Linking.openURL(url)
						})
					}}
				/>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	descriptionSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	descriptionText: {
		textAlign: 'center',
	},
	atendeesSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	numAtendeesSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
})

const mapStateToProps = state => {
	const { events, form, session } = state
	const { selected } = events
	const { pid, accessToken } = session
	return { event: selected, form, pid, accessToken }
}

export default connect(mapStateToProps, {
	openInvitation,
	cancelEvent,
	chatRoomWillEnter,
})(EventInfoPage)
