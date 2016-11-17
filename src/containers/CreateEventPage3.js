import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ContactList from '../components/Contacts/ContactList'
import { addContact, removeContact } from '../actions'

const contacts = [
  {
    recordId: 1,
    name: 'Carl Jung',
    phone: '(555) 555-5555',
    thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
  },
  {
    recordId: 2,
    name: 'John Young',
    phone: '(444) 444-4444',
    thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
  },
  {
    recordId: 3,
    name: 'Scooby Doo',
    phone: '(333) 333-3333',
    thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
  },
  {
    recordId: 4,
    name: 'Moshiko Balagan',
    phone: '(222) 222-2222',
    thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
  },
]

class CreateEventPage3 extends Component {
  static propTypes = {
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
          contacts={contacts}
          selectedList={[]}
          onValueChange={this.contactChanged.bind(this)}
        />
      </View>
    )
  }
}

export default connect(null, {
  addContact,
  removeContact,
})(CreateEventPage3)
