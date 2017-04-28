// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'
import I18n from 'react-native-i18n'
import { Actions } from 'react-native-router-flux'
import CardView from '../components/CardView'
import { Separator } from '../components/Common'
import { AtendeesSection, NumAtendeesSection, TitleSection, InfoSection } from '../components/EventPage'
import Dialog from '../components/Dialogs/Dialog'
import { cancelEvent, createEvent, openInvitation } from '../actions'

import type { UserEvent } from '../actions/types'

type EventInfoPageProps = {
	createFlow: boolean,
	event: UserEvent,
	pid: string,
	accessToken: string,
	openInvitation: () => void,
	cancelEvent: (string, string, string) => void,
	createEvent: () => void,
	form: () => void,
}

class EventInfoPage extends Component {
	props: EventInfoPageProps

	renderBottomButton() {
		if (!this.props.createFlow)
			return <View />
		return (
			<Button
				raised
				title={I18n.t('createFlow.finishSendInvites')}
				borderRadius={30}
				fontSize={20}
				backgroundColor='#289FFF'
				onPress={() => {
					this.props.createEvent(this.props.pid, this.props.accessToken, this.props.form)
					Actions.popTo('main')
				}}
			/>
		)
	}

	cancelDialogToggle(state: boolean) {
		if (state)
			this.refs.cancelDialog.modal().open()
		else
			this.refs.cancelDialog.modal().close()
	}

	inviteesDialogToggle(state: boolean) {
		if (state)
			this.refs.inviteesDialog.modal().open()
		else
			this.refs.inviteesDialog.modal().close()
	}

	mapDialogToggle(state: boolean) {
		if (state)
			this.refs.mapDialog.modal().open()
		else
			this.refs.mapDialog.modal().close()
	}

	render() {
		const {
			id, title, description, location, locationName, approved, status, owner,
			dates, isAdmin, invitees, minAtendees, limitedRSVP,
		} = this.props.event
		const { pid, accessToken } = this.props
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
				<CardView>
					<TitleSection
						isAdmin={isAdmin}
						title={title}
						creator={owner}
						image={'https://facebook.github.io/react/img/logo_og.png'}
						approved={approved}
						status={status}
						onStatusPress={() => {
							if (this.props.createFlow) return
							this.props.openInvitation()
							Actions.invitationPage()
						}}
						onCancelPress={() => this.cancelDialogToggle(true)}
					/>
					<View style={styles.descriptionSection}>
						<Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
					</View>
					<Separator />
					<InfoSection
						date={dates[0].toLocaleDateString()}
						time={dates[0].toLocaleTimeString()}
						location={`${locationName} - ${location.address}`}
						onLocationPress={() => this.mapDialogToggle(true)}
					/>
					<Separator />
					<AtendeesSection
						invitees={invitees}
						style={styles.atendeesSection}
						onPress={() => this.inviteesDialogToggle(true)}
						createFlow={this.props.createFlow}
					/>
					<Separator />
					<NumAtendeesSection
						style={styles.numAtendeesSection}
						limitedRSVP={limitedRSVP}
						minAtendees={minAtendees}
					/>
					<Separator />
					{this.renderBottomButton()}
				</CardView>
				<Dialog
					ref={'inviteesDialog'}
					title={I18n.t('dialogs.inviteesTitle')}
					type={{ name: 'invitees', invitees: this.props.event.invitees }}
					buttonText={I18n.t('great!')}
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.inviteesDialogToggle(false)}
				/>
				<Dialog
					ref={'cancelDialog'}
					title={I18n.t('dialogs.cancelTitle')}
					type={{ name: 'text', text: I18n.t('dialogs.cancelText') }}
					buttonText={I18n.t('yes')}
					buttonCallback={() => {
						this.props.cancelEvent(pid, accessToken, id)
						Actions.pop()
					}}
				/>
				<Dialog
					ref={'mapDialog'}
					title={this.props.event.location.address}
					type={{ name: 'map', locationName, description: location.address, location }}
					buttonText={I18n.t('takeMeThere')}
					buttonCallback={() => {
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
	const createFlow = form.type === 'CREATE'
	return { event: selected, createFlow, form, pid, accessToken }
}

export default connect(mapStateToProps, {
	openInvitation,
	cancelEvent,
	createEvent,
})(EventInfoPage)
