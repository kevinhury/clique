import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'

const info = {
  title: 'FIFA 17 SESSION',
  status: 'PENDING',
  creator: 'Yossi Kerman',
  creatorImage: '',
  going: true,
  description: '',
  date: 'TUESDAY, 23rd NOVEMBER 2016',
  time: '10:30 AM - 6:00 PM',
  location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
  atendees: [],
  minAtendees: 999,
  limitedRSVP: false,
}

class EventInfoPage extends Component {
  render() {
    const { title, status, creator, creatorImage, going, description,
      date, time, location, atendees, minAtendees, limitedRSVP,
    } = info
    return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.page}
      >
        <View style={styles.card}>
          <View style={styles.titleSection}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.creatorText}>by {creator}</Text>
            <View style={styles.topButtonSection}>
              <Text>You're going</Text>
              <Text>Group Chat</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'stretch'
  },
  card: {
    flex: 1,
    bottom: 0,
    padding: 10,
    borderRadius: 30,
  },
  titleSection: {

  },
  titleText: {

  },
  creatorText: {

  },
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {

})(EventInfoPage)
