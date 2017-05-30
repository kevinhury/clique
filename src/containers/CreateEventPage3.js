// @flow

import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import ContactList from '../components/Contacts/ContactList'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import Dialog from '../components/Dialogs/Dialog'
import EventCreatePanel from '../components/EventCreatePanel'
import { CommonButton } from '../components/Common'

import {
	addContact,
	removeContact,
	changeMinAtendees,
	changeMaxAtendees,
	requestContactList,
} from '../actions'
import type { Contact, EventForm } from '../actions/types'
import { defaultColors } from '../themes/styles'

type Label = {
	value: any,
	label: string,
}

type CreateEventPage3Props = {
	navigation: any,
	permission: string,
	contacts: Contact[],
	selectedContacts: Contact[],
	minAtendees: number,
	maxAtendees: number,
	addContact: (any) => void,
	removeContact: (any) => void,
	changeMinAtendees: (any) => void,
	changeMaxAtendees: (any) => void,
	requestContactList: (any) => void,
	form: EventForm,
}

type State = {
	minRSVPDialog: boolean,
	maxRSVPDialog: boolean,
}

class CreateEventPage3 extends Component {
	props: CreateEventPage3Props
	state: State = {
		minRSVPDialog: false,
		maxRSVPDialog: false,
	}
	static navigationOptions = () => ({
		title: I18n.t('navigation.createEventTitle'),
	})

	minRSVPs: Label[] = Array.from(Array(50).keys()).map(x => {
		return { value: x, label: `${x}` }
	})
	maxRSVPs: Label[] = Array.from(Array(50).keys()).map(x => {
		return { value: x, label: `${x}` }
	})

	componentWillMount() {
		this.props.requestContactList()
	}

	nextDisabled() {
		const { selectedContacts, minAtendees, maxAtendees } = this.props
		const contactSelected = selectedContacts.length > 0
		const minLowerThanMax = maxAtendees === 0 || minAtendees <= maxAtendees
		const contactsHigherThanMin = selectedContacts.length >= minAtendees
		return !contactSelected ||
			!minLowerThanMax ||
			!contactsHigherThanMin
	}

	contactChanged(selected: boolean, contact: any) {
		const { addContact, removeContact } = this.props
		selected ? addContact(contact) : removeContact(contact)
	}

	renderList() {
		return (
			<View style={styles.page}>
				<View style={styles.list}>
					<ContactList
						contacts={this.props.contacts}
						selectedList={this.props.selectedContacts.map((x: any) => x.recordId)}
						onValueChange={this.contactChanged.bind(this)}
					/>
				</View>
				<View style={styles.rsvpSection}>
					<View style={styles.rsvpCell}>
						<Text>{I18n.t('createFlow.minRSVP')}:{' '}</Text>
						<Switch
							onValueChange={(value) => {
								if (value == false)
									this.props.changeMinAtendees(0)
								this.setState({ minRSVPDialog: value })
							}}
							value={this.props.minAtendees > 0}
						/>
					</View>
					<View style={styles.rsvpCell}>
						<Text>{I18n.t('createFlow.maxRSVP')}:{' '}</Text>
						<Switch
							onValueChange={(value) => {
								if (value == false)
									this.props.changeMaxAtendees(0)
								this.setState({ maxRSVPDialog: value })
							}}
							value={this.props.maxAtendees > 0}
						/>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<CommonButton
						title={I18n.t('next')}
						disabled={this.nextDisabled()}
						onPress={() => {
							this.props.navigation.navigate('CreateEvent4')
						}}
					/>
				</View>
			</View>
		)
	}

	render() {
		return (
			<LinearGradient
				colors={[defaultColors.primaryColor, '#ffffff']}
				style={styles.page}
			>
				<CardView style={styles.card}>
					<EventCreatePanel stateIndex={2} style={styles.statePanel} />
					{this.renderList()}
				</CardView>
				<Dialog
					title={I18n.t('dialogs.minRSVPTitle')}
					type={{
						name: 'picker', options: this.minRSVPs, value: this.props.minAtendees, onValueChange: (index) => {
							this.props.changeMinAtendees(index)
						},
					}}
					buttonText={I18n.t('set')}
					isVisible={this.state.minRSVPDialog}
					dismissCallback={() => this.setState({ minRSVPDialog: false })}
					buttonCallback={() => this.setState({ minRSVPDialog: false })}
				/>
				<Dialog
					ref={'maxRSVPDialog'}
					title={I18n.t('dialogs.maxRSVPTitle')}
					type={{
						name: 'picker', options: this.maxRSVPs, value: this.props.maxAtendees, onValueChange: (index) => {
							this.props.changeMaxAtendees(index)
						},
					}}
					buttonText={I18n.t('set')}
					isVisible={this.state.maxRSVPDialog}
					dismissCallback={() => this.setState({ maxRSVPDialog: false })}
					buttonCallback={() => this.setState({ maxRSVPDialog: false })}
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
	list: {
		flex: 14,
		borderColor: 'gray',
		borderWidth: 1,
	},
	rsvpSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rsvpCell: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 8,
	},
	buttonContainer: {
		flex: 2,
		justifyContent: 'flex-end',
	},
	statePanel: {
		margin: 5,
		marginBottom: 15,
	},
})

const mapStateToProps = state => {
	var { contacts, form, permissions } = state
	const permission = permissions.contacts
	const selectedContacts = form.contacts
	const { minAtendees, maxAtendees } = form
	return { contacts, permission, selectedContacts, minAtendees, maxAtendees, form }
}

export default connect(mapStateToProps, {
	addContact,
	removeContact,
	changeMinAtendees,
	changeMaxAtendees,
	requestContactList,
})(CreateEventPage3)
