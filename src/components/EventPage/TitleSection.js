// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'

import type { Status, Approved } from '../../reducers/EventsReducer'

class TitleSection extends Component {
	static propTypes = {
		isAdmin: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired,
		creator: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		approved: PropTypes.string.isRequired, // type "Approval"
		status: PropTypes.string.isRequired, // type "Status"
		onStatusPress: PropTypes.func,
		onCancelPress: PropTypes.func,
	}

	eventStatus(): string {
		return this.props.status
	}

	userStatus(): string {
		const { approved, status } = this.props
		if (approved === 'Approved' && status === 'Cliqued')
			return 'Going'
		else if (approved === 'Approved')
			return 'RSVP\'d'
		else if (approved === 'Pending')
			return 'Pending'
		else
			return 'Declined'
	}

	renderCancelButton() {
		if (this.props.isAdmin == false) {
			return (<View />)
		}
		return (
			<Button
				title={'Cancel'}
				raised
				buttonStyle={styles.button}
				backgroundColor='#b04549'
			/>
		)
	}

	render() {
		const { title, creator, image } = this.props
		return (
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.creatorText}>by {creator}</Text>
        <View style={styles.buttonContainer}>
          {this.renderCancelButton()}
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