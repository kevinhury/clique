import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Switch
} from 'react-native'

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

export const EventCellMiddleSection = () => (
  <View style={styles.middleSection}>
    <View style={styles.middleVerticalSection}>
        <Text>Going:
          <Text>First 30 people</Text>
        </Text>

      <Text>Icons</Text>
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
	},
  titleText: {
    color: '#fff'
  },
  switch: {
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
    alignItems: 'center',
  },
  middleVerticalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSection: {
    alignItems: 'center',
  },
})
