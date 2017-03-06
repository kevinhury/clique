// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'
import I18n from 'react-native-i18n'

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

	eventStatus(status: string): string {
		var state: string
		if (status === 'Pending')
			state = 'pending'
		else if (status === 'Cancelled')
			state = 'cancelled'
		else if (status === 'Cliqued')
			state = 'cliqued'
		return I18n.t(state)
	}

	userStatus(approved: string, status: string): string {
		var state: string
		if (approved === 'Approved' && status === 'Cliqued')
			state = 'going'
		else if (approved === 'Approved')
			state = 'cell.userRSVPd'
		else if (approved === 'Pending')
			state = 'pending'
		else
			state = 'cell.userDeclined'
		return I18n.t(state)
	}

	renderCancelButton(isAdmin: boolean) {
		if (isAdmin == false) {
			return (<View />)
		}
		return (
			<Button
				title={I18n.t('cancel')}
				raised
				buttonStyle={styles.button}
				backgroundColor='#b04549'
        onPress={this.props.onCancelPress}
			/>
		)
	}

	render() {
		const { title, creator, image, approved, status, isAdmin } = this.props
		return (
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.creatorText}>by {creator}</Text>
        <View style={styles.buttonContainer}>
          {this.renderCancelButton(isAdmin)}
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
          <Button
            title={this.userStatus(approved, status)}
            raised
            buttonStyle={styles.button}
            backgroundColor='#01a836'
						onPress={this.props.onStatusPress}
          />
        </View>
        <Text style={styles.eventStatus}>
					{I18n.t('eventStatus')}: {' '}
          <Text style={[styles.eventStatus, {fontWeight: 'bold'}]}>
            {this.eventStatus(status)}
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
		fontSize: 12,
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
		alignSelf: 'center',
	},
	eventStatus: {
		color: 'white',
		marginTop: 5,
	},
})

export { TitleSection }
