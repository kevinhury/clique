// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import I18n from 'react-native-i18n'
import moment from 'moment'

class TopSection extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		owner: PropTypes.string.isRequired,
		date: PropTypes.instanceOf(Date),
	}

	render() {
		const { title, owner, date } = this.props
		return (
      <View style={styles.topSection}>
        <View style={styles.topTitleSection}>
          <Text style={styles.nameText}>{title}</Text>
        </View>
        <Text style={styles.creatorText}>{I18n.t('createdBy')} {owner}</Text>
        <Text style={styles.dateText}>{moment(date).local().format('MMMM Do, H:MM')}</Text>
      </View>
		)
	}
}

const styles = StyleSheet.create({
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
		fontWeight: 'bold',
	},
	creatorText: {
		color: 'white',
		fontSize: 12,
	},
	dateText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default TopSection
