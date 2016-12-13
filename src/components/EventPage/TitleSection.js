// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'

class TitleSection extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		creator: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		approved: PropTypes.bool.isRequired,
		status: PropTypes.string.isRequired,
	}

	eventStatus(): string {
		return this.props.status
	}

	userStatus(): string {
		const { approved, status } = this.props
		if (approved && status === 'Cliqued') {
			return 'Going'
		} else if (approved) {
			return 'RSVP\'d'
		} else {
			return 'Declined'
		}
	}

	render() {
		const { title, creator, image } = this.props
		return (
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.creatorText}>by {creator}</Text>
        <View style={styles.buttonContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
          <Button
            title={this.userStatus()}
            raised
            buttonStyle={styles.button}
            backgroundColor='#01a836'
          />
        </View>
        <Text style={styles.eventStatus}>
          Event status: {' '}
          <Text style={[styles.eventStatus, {fontWeight: 'bold'}]}>
            {this.eventStatus()}
          </Text>
        </Text>
      </View>
		)
	}
}

const styles = StyleSheet.create({
	titleSection: {
		backgroundColor: '#222222',
		borderWidth: 1,
		borderColor: 'white',
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		alignItems: 'center',
		padding: 5,
	},
	titleText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	creatorText: {
		color: 'white',
		marginBottom: 5,
		fontSize: 12
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	button: {
		borderRadius: 30,
		borderColor: '#fff',
		borderWidth: 1,
		height: 35,
		width: 115,
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 22,
		borderColor: '#fff',
		borderWidth: 1,
		alignSelf: 'center'
	},
	eventStatus: {
		color: 'white',
		marginTop: 5,
	}
})

export default TitleSection
