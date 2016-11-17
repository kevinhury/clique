import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ContactList from '../components/Contacts/ContactList'
import { addContact, removeContact } from '../actions'

class CreateEventPage3 extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    selectedContacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
  }

  contactChanged(selected, contact) {
    const { addContact, removeContact } = this.props
    selected ? addContact(contact) : removeContact(contact)
  }

  render() {
    return (
      <View>
        <ContactList
          contacts={this.props.contacts}
          selectedList={this.props.selectedContacts}
          onValueChange={this.contactChanged.bind(this)}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { contacts, form } = state
  return { contacts, selectedContacts: form.contacts }
}

export default connect(mapStateToProps, {
  addContact,
  removeContact,
})(CreateEventPage3)
