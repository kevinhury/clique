import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'
import CardView from '../components/CardView'
import TitleSection from '../components/EventPage/TitleSection'
import InfoSection from '../components/EventPage/InfoSection'
import { Separator, AtendeeBubbles, ChatButton } from '../components/Common'

const info = {
  title: 'FIFA 17 SESSION',
  status: 'PENDING',
  creator: 'Yossi Kerman',
  creatorImage: 'https://facebook.github.io/react/img/logo_og.png',
  userStatus: 'Going',
  eventStatus: 'Pending',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  date: 'TUESDAY, 23rd NOVEMBER 2016',
  time: '10:30 AM - 6:00 PM',
  location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
  atendees: [],
  minAtendees: 999,
  limitedRSVP: false,
}

const mock_images = [
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
]

class EventInfoPage extends Component {
  render() {
    const { title, status, creator, creatorImage, userStatus, eventStatus
      , description, date, time, location, atendees, minAtendees, limitedRSVP,
    } = info
    return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.page}
      >
        <CardView>
          <TitleSection
            title={title}
            creator={creator}
            image={creatorImage}
            userStatus={userStatus}
            eventStatus={eventStatus}
          />
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
          </View>
          <Separator style={styles.separator} />
          <InfoSection date={date} time={time} location={location} />
          <Separator style={styles.separator} />
          <View style={styles.atendeesSection}>
            <Text>People going:</Text>
            <View style={styles.goingSection}>
              <AtendeeBubbles images={mock_images} bubblesToShow={2} />
              <ChatButton
                onPress={() => console.log('press')}
              />
            </View>
          </View>
          <Separator style={styles.separator} />
          <View style={styles.numAtendeesSection}>
            <Text>Minimum of RSVP's: {minAtendees}</Text>
            <Text>Maximum of RSVP's: Up to {limitedRSVP} people</Text>
          </View>
          <Separator style={styles.separator} />
          <View style={styles.grocerySection}>
            <Text>Grocery list:</Text>
          </View>
          <Button
            raised
            title='INVITE & FINISH'
            borderRadius={30}
            fontSize={20}
            backgroundColor='#289FFF'
          />
        </CardView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
  },
  atendeesSection: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  goingSection: {
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
