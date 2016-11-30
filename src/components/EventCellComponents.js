import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Switch
} from 'react-native'
import AtendeeBubbles from './AtendeeBubbles'

export const EventCellTitleSection = ({ going }) => (
  <View style={styles.titleSection}>
    <Text style={styles.titleText}>Are you coming?</Text>
    <Switch value={going} style={styles.switch} />
  </View>
)

export const EventCellTopSection = ({ title, owner, date }) => (
  <View style={styles.topSection}>
    <View style={styles.topTitleSection}>
      <Text style={styles.nameText}>{title}</Text>
    </View>
    <Text style={styles.creatorText}>Created by {owner}</Text>
    <Text style={styles.dateText}>{date}</Text>
  </View>
)

const mock_images = [
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
]

export const EventCellMiddleSection = () => (
  <View style={styles.middleSection}>
    <View style={styles.middleVerticalSection}>
      <Text>Going:</Text>
      <AtendeeBubbles images={mock_images} bubbles={2} />
      <Text>Chat</Text>
    </View>
    <Text>Minimum of 5 people</Text>
  </View>
)

export const EventCellBottomSection = ({ expires }) => (
  <View style={styles.bottomSection}>
    <Text>Invite expires on: {expires}</Text>
  </View>
)

const styles = StyleSheet.create({
  titleSection: {
		backgroundColor: '#3C9BFD',
		flexDirection: 'row',
		justifyContent: 'flex-end',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
		alignItems: 'center',
    padding: 2,
	},
  titleText: {
    color: '#fff'
  },
  switch: {
    marginLeft: 5,
  },
  topSection: {
    alignItems: 'center',
  },
  topTitleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 18,
  },
  creatorText: {
    color: 'white',
    fontSize: 12,
  },
  dateText: {
    color: 'white',
    fontSize: 16,
  },
  middleSection: {
  },
  middleVerticalSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomSection: {
    alignItems: 'center',
  },
})
