// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import I18n from 'react-native-i18n'
import CardView from '../components/CardView'
import { Separator, CommonButton } from '../components/Common'
import { AtendeesSection, NumAtendeesSection, TitleSection, InfoSection } from '../components/EventPage'
import Dialog from '../components/Dialogs/Dialog'
import { createEvent } from '../actions'

import type { EventForm } from '../actions/types'

type CreateEventPage4Props = {
	navigation: any,
	pid: string,
	username: string,
	phone: string,
	accessToken: string,
	createEvent: () => void,
	form: EventForm,
	image: string,
}

type State = {
	inviteesDialog: boolean,
	mapDialog: boolean,
}

class CreateEventPage4 extends Component {
	props: CreateEventPage4Props
	state: State = {
		inviteesDialog: false,
		mapDialog: false,
	}
	static navigationOptions = () => ({
		title: I18n.t('navigation.createEventTitle'),
	})

	render() {
		const {
			name, description, location, locationName,
			dates, minAtendees, maxAtendees, contacts,
		} = this.props.form
		const { username, image, phone } = this.props
		const adminImage = this.props.image
		const invitees = contacts.map(x => {
			return { image: x.thumnbail, name: x.name, phone: x.phone, approved: 'Pending' }
		})
		invitees.push({ approved: 'Approved', name: username, image, phone })
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
				<CardView>
					<TitleSection
						renderCancel={false}
						title={name}
						creator={'You'}
						image={adminImage}
						approved={'Approved'}
						status={'Pending'}
						onStatusPress={() => { }}
						onCancelPress={() => { }}
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
						chatButton={false}
					/>
					<Separator />
					<NumAtendeesSection
						style={styles.numAtendeesSection}
						limitedRSVP={maxAtendees}
						minAtendees={minAtendees}
					/>
					<Separator />
					<CommonButton
						title={I18n.t('createFlow.finishSendInvites')}
						backgroundColor='#289FFF'
						onPress={() => {
							this.props.createEvent(this.props.pid, this.props.accessToken, this.props.form)
							this.props.navigation.dispatch({ type: 'Navigation/BACK' })
						}}
					/>
				</CardView>
				<Dialog
					title={I18n.t('dialogs.inviteesTitle')}
					type={{ name: 'invitees', invitees }}
					buttonText={I18n.t('great!')}
					modalStyle={{ height: 280 }}
					dismissCallback={() => this.setState({ inviteesDialog: false })}
					buttonCallback={() => this.setState({ inviteesDialog: false })}
					isVisible={this.state.inviteesDialog}
				/>
				<Dialog
					title={location.address}
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
	const { form, session } = state
	const { pid, accessToken, image, username, phone } = session
	return { form, pid, accessToken, image, username, phone }
}

export default connect(mapStateToProps, {
	createEvent,
})(CreateEventPage4)
