import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import ContactList from '../components/ContactList'

const contacts = [
  {
    recordId: 1,
    name: 'Carl Jung',
    phone: '(555) 555-5555',
    thumbnail: 'https://lh3.googleusercontent.com/e32QLv_H4fsEE9ztnxkbRFQogySH-vMp4MiIxp_NC4tpFiPLB2vfNHrpGqeGY0Lyzg=w300',
  },
  {
    recordId: 2,
    name: 'John Young',
    phone: '(444) 444-4444',
    thumbnail: 'https://lh3.googleusercontent.com/e32QLv_H4fsEE9ztnxkbRFQogySH-vMp4MiIxp_NC4tpFiPLB2vfNHrpGqeGY0Lyzg=w300',
  },
  {
    recordId: 3,
    name: 'Scooby Doo',
    phone: '(333) 333-3333',
    thumbnail: 'https://lh3.googleusercontent.com/e32QLv_H4fsEE9ztnxkbRFQogySH-vMp4MiIxp_NC4tpFiPLB2vfNHrpGqeGY0Lyzg=w300',
  },
  {
    recordId: 4,
    name: 'Moshiko Balagan',
    phone: '(222) 222-2222',
    thumbnail: 'https://lh3.googleusercontent.com/e32QLv_H4fsEE9ztnxkbRFQogySH-vMp4MiIxp_NC4tpFiPLB2vfNHrpGqeGY0Lyzg=w300',
  },
]

class CreateEventPage extends Component {
  render() {
    return (
      <View>
        <ContactList contacts={contacts}/>
      </View>
    )
  }
}

export default connect(null, {})(CreateEventPage)
