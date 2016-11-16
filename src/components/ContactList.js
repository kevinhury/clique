import React, { Component, PropTypes } from 'react'
import {
  View,
  ListView,
} from 'react-native'
import ContactCell from './ContactCell'

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array
  }

  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.dataSource = ds.cloneWithRows(this.props.contacts)
  }

  renderRow(contact) {
    return (
      <ContactCell
        contact={contact}
        selected={false}
        onValueChange={this.onValueChange.bind(this)}
      />
    )
  }

  onValueChange(value) {
    console.log(value)
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

export default ContactList
