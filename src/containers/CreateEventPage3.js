// @flow

import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import ContactList from '../components/Contacts/ContactList'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import Dialog from '../components/Dialogs/Dialog'
import EventCreatePanel from '../components/EventCreatePanel'
import NextButton from '../components/NextButton'
import {
	addContact,
	removeContact,
	changeMinAtendees,
	changeMaxAtendees,
	requestContactList,
	selectFormToReview,
} from '../actions'
import type { Contact, EventForm } from '../actions/types'

type Label = {
	value: any,
	label: string,
}

type CreateEventPage3Props = {
	permission: string,
	contacts: Contact[],
	selectedContacts: Contact[],
	minAtendees: number,
	maxAtendees: number,
	addContact: () => void,
	removeContact: () => void,
	changeMinAtendees: () => void,
	changeMaxAtendees: () => void,
	requestContactList: () => void,
	selectFormToReview: () => void,
	form: EventForm,
}

class CreateEventPage3 extends Component {
	props: CreateEventPage3Props
	minRSVPs: Label[] = [...Array(50).keys()].map(x => {
		return { value: x, label: `${x}` }
	})
	maxRSVPs: Label[] = [...Array(50).keys()].map(x => {
		return { value: x, label: `${x}` }
	})

	componentWillMount() {
		this.props.requestContactList()
	}

	contactChanged(selected: boolean, contact: any) {
		const { addContact, removeContact } = this.props
		selected ? addContact(contact.recordId) : removeContact(contact.recordId)
	}

	onMinRSVPToggle(value: boolean) {
		const modal = this.refs.minRSVPDialog.modal()
		if (value)
			modal.open()
		else
			modal.close()
	}

	onMaxRSVPToggle(value: boolean) {
		const modal = this.refs.maxRSVPDialog.modal()
		if (value)
			modal.open()
		else
			modal.close()
	}

	renderList() {
		return (
			<View style={styles.page}>
				<View style={styles.list}>
					<ContactList
						contacts={this.props.contacts}
						selectedList={this.props.selectedContacts}
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
								this.onMinRSVPToggle(value)
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
								this.onMaxRSVPToggle(value)
							}}
							value={this.props.maxAtendees > 0}
						/>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<NextButton onPress={() => {
						this.props.selectFormToReview(this.props.form)
						Actions.eventInfoPage()
					}} />
				</View>
			</View>
		)
	}

	render() {
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
				<CardView style={styles.card}>
					<EventCreatePanel stateIndex={2} style={styles.statePanel} />
					{this.renderList()}
				</CardView>
				<Dialog
					ref={'minRSVPDialog'}
					title={I18n.t('dialogs.minRSVPTitle')}
					type={{
						name: 'picker', options: this.minRSVPs, onValueChange: (index) => {
							this.props.changeMinAtendees(index)
						},
					}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.onMinRSVPToggle(false)}
				/>
				<Dialog
					ref={'maxRSVPDialog'}
					title={I18n.t('dialogs.maxRSVPTitle')}
					type={{
						name: 'picker', options: this.maxRSVPs, onValueChange: (index) => {
							this.props.changeMaxAtendees(index)
						},
					}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.onMaxRSVPToggle(false)}
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
	selectFormToReview,
})(CreateEventPage3)
