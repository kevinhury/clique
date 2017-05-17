// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import I18n from 'react-native-i18n'
import { changeEventLocation } from '../actions'

type Props = {
	navigation: any,
	changeEventLocation: (any) => void,
}

class SetLocationPage extends Component {
	props: Props
	static navigationOptions = () => ({
		title: I18n.t('navigation.createEventTitle'),
	})

	setLocation({ address, latitude, longitude }: any) {
		if (!address || !latitude || !longitude) return
		this.props.changeEventLocation({
			longitude,
			latitude,
			address,
		})
		this.props.navigation.goBack()
	}

	render() {
		return (
			<GooglePlacesAutocomplete
				placeholder='Search'
				minLength={2}
				autoFocus
				fetchDetails={true}
				renderDescription={(row) => row.description}
				onPress={(data, details) => {
					this.setLocation({
						address: details.formatted_address,
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
					})
				}}
				getDefaultValue={() => ''}
				query={{
					key: 'AIzaSyAT900HJPlE7i3-opAiNy4vzjoeSANTw3E',
					language: I18n.currentLocale(),
				}}
				styles={{
					description: {
						fontWeight: 'bold',
					},
					predefinedPlacesDescription: {
						color: '#1faadb',
					},
				}}
				currentLocation={true}
				currentLocationLabel="Current location"
				nearbyPlacesAPI='GoogleReverseGeocoding'
				debounce={400}
			/>
		)
	}
}

export default connect(null, {
	changeEventLocation,
})(SetLocationPage)