// @flow

import React, { Component, PropTypes } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Button } from 'react-native-elements'
import I18n from 'react-native-i18n'
import ContactList from '../components/Contacts/ContactList'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import Dialog from '../components/Dialogs/Dialog'
import EventCreatePanel from '../components/EventCreatePanel'
import {
	addContact,
	removeContact,
	changeMinAtendees,
	changeMaxAtendees,
} from '../actions'

class CreateEventPage3 extends Component {
	minRSVPs = [ ...Array(50).keys()].map(x => {
		return { value: x, label: `${x}` }
	})
	maxRSVPs = [ ...Array(50).keys()].map(x => {
		return { value: x, label: `${x}` }
	})
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		selectedContacts: PropTypes.array.isRequired,
		minAtendees: PropTypes.number.isRequired,
		maxAtendees: PropTypes.number.isRequired,
		addContact: PropTypes.func.isRequired,
		removeContact: PropTypes.func.isRequired,
		changeMinAtendees: PropTypes.func.isRequired,
		changeMaxAtendees: PropTypes.func.isRequired,
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

	render() {
		return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.page}
      >
        <CardView style={styles.card}>
					<EventCreatePanel  stateIndex={2} style={styles.statePanel} />
          <ContactList
            contacts={this.props.contacts}
            selectedList={this.props.selectedContacts}
            onValueChange={this.contactChanged.bind(this)}
            style={{flex: 6}}
          />
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
						<Button
							large
							raised
							onPress={() => console.log('xxx')}
							title={I18n.t('next')}
							backgroundColor='#01a836'
							buttonStyle={styles.nextButton}
						/>
					</View>
        </CardView>
				<Dialog
					ref={'minRSVPDialog'}
					title={I18n.t('dialogs.minRSVPTitle')}
					type={{ name: 'picker', options: this.minRSVPs, onValueChange: (index) => {
						this.props.changeMinAtendees(index)
					}}}
					buttonText={I18n.t('set')}
					modalStyle={{ height: 280 }}
					buttonCallback={() => this.onMinRSVPToggle(false)}
				/>
				<Dialog
					ref={'maxRSVPDialog'}
					title={I18n.t('dialogs.maxRSVPTitle')}
					type={{ name: 'picker', options: this.maxRSVPs, onValueChange: (index) => {
						this.props.changeMaxAtendees(index)
					}}}
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
	nextButton: {
		height: 50,
		borderRadius: 15,
	},
	statePanel: {
		margin: 5,
		marginBottom: 15,
	},
})

const mapStateToProps = state => {
	const { contacts, form } = state
	const selectedContacts = form.contacts
	const { minAtendees, maxAtendees } = form
	return { contacts, selectedContacts, minAtendees, maxAtendees }
}

export default connect(mapStateToProps, {
	addContact,
	removeContact,
	changeMinAtendees,
	changeMaxAtendees,
})(CreateEventPage3)
