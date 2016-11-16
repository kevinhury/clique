import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
} from 'react-native'

class ContactList extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func.isRequired
  }

  render() {
    const { contact, selected, onValueChange } = this.props
    return (
      <View>
        <Image source={{ uri: contact.thumbnail }}></Image>
        <View>
          <Text>{contact.name}</Text>
          <Text>{contact.phone}</Text>
        </View>
        <Switch value={selected} onValueChange={onValueChange}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default ContactList
