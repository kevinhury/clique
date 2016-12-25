import React, { Component, PropTypes } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Button } from 'react-native-elements'
import ContactList from '../components/Contacts/ContactList'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import Dialog from '../components/Dialogs/Dialog'
import { addContact, removeContact } from '../actions'

class CreateEventPage3 extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		selectedContacts: PropTypes.array.isRequired,
		addContact: PropTypes.func.isRequired,
		removeContact: PropTypes.func.isRequired,
	}

	contactChanged(selected: boolean, contact: any) {
		const { addContact, removeContact } = this.props
		selected ? addContact(contact.recordId) : removeContact(contact.recordId)
	}

	onMinRSVPToggle(value: boolean) {
		console.log(value)
		this.refs.minRSVPDialog.modal().open()
	}

	onMaxRSVPToggle(value: boolean) {
		console.log(value)
		this.refs.maxRSVPDialog.modal().open()
	}

	render() {
		return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.page}
      >
        <CardView style={styles.card}>
          <ContactList
            contacts={this.props.contacts}
            selectedList={this.props.selectedContacts}
            onValueChange={this.contactChanged.bind(this)}
            style={{flex: 6}}
          />
          <View style={styles.rsvpSection}>
						<View style={styles.rsvpCell}>
							<Text>Min RSVP's:{' '}</Text>
							<Switch
								onValueChange={this.onMinRSVPToggle.bind(this)}
								value={false}
							/>
						</View>
						<View style={styles.rsvpCell}>
							<Text>Min RSVP's:{' '}</Text>
							<Switch
								onValueChange={this.onMaxRSVPToggle.bind(this)}
								value={true}
							/>
						</View>
          </View>
					<View style={styles.buttonContainer}>
						<Button
							large
							raised
							onPress={() => console.log('xxx')}
							title='Next'
							backgroundColor='#01a836'
							buttonStyle={styles.nextButton}
						/>
					</View>
        </CardView>
				<Dialog
					ref={'minRSVPDialog'}
					title='By choosing this option your event will take place only with the minimum RSVPs that you define'
					type={{ name:'picker', options: [ ...Array(50).keys()].map(x => x + 1) }}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => console.log('set')}
				/>
				<Dialog
					ref={'maxRSVPDialog'}
					title='By choosing this option you will limit your event to a maximum number of participants'
					type={{ name:'picker', options: [ ...Array(50).keys()].map(x => x + 1) }}
					buttonText='SET'
					modalStyle={{ height: 280 }}
					buttonCallback={() => console.log('set')}
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
})

const mapStateToProps = state => {
	const { contacts, form } = state
	return { contacts, selectedContacts: form.contacts }
}

export default connect(mapStateToProps, {
	addContact,
	removeContact,
})(CreateEventPage3)
