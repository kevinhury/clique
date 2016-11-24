import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const info = {
  title: 'FIFA 17 SESSION',
  status: 'PENDING',
  creator: 'Yossi Kerman',
  creatorImage: '',
  going: true,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
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
              <Button
                raised
                small
                iconRight
                icon={{ name: 'cached' }}
                title='Youre going'
                borderRadius={30}
                fontSize={8}
                backgroundColor='#289FFF'
                buttonStyle={{ height: 25}}
              />
              <Button
                raised
                small
                iconRight
                icon={{ name: 'cached', size: 15 }}
                title='Group Chat'
                borderRadius={30}
                fontSize={8}
                backgroundColor='#289FFF'
                buttonStyle={{ height: 25}}
              />
            </View>
          </View>
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Icon name='calendar' />
              <Text>{date}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name='calendar' />
              <Text>{time}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name='calendar' />
              <Text>{location}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.atendeesSection}>
            <Text>Going / Attending / Pending / Invited</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.numAtendeesSection}>
            <Text>Minimum Atendees: {minAtendees}</Text>
            <Text>Limited RSVP's: {limitedRSVP}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.grocerySection}>
            <Text>Grocery list:</Text>
            <Button
              raised
              small
              title='Create'
              borderRadius={30}
              backgroundColor='#289FFF'
              buttonStyle={{ height: 25 }}
            />
          </View>
          <Button
            raised
            title='INVITE & FINISH'
            borderRadius={30}
            fontSize={20}
            backgroundColor='#289FFF'
          />
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'white',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 5,
    shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowRadius: 3,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleSection: {
    backgroundColor: '#222222',
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'white',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 3,
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  creatorText: {
    color: 'white'
  },
  topButtonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionSection: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionText: {
    textAlign: 'center'
  },
  separator: {
    backgroundColor: '#F1CE81',
    marginRight: 10,
    marginLeft: 10,
    height: 1,
  },
  infoSection: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  atendeesSection: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  numAtendeesSection: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  grocerySection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {

})(EventInfoPage)
