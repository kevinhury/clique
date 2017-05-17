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

	setLocation(response: any) {
		if (response.didCancel || response.error) return
		this.props.changeEventLocation({
			longitude: response.longitude,
			latitude: response.latitude,
			address: response.address,
		})
	}

	render() {
		return (
			<GooglePlacesAutocomplete
				placeholder='Search'
				minLength={2} // minimum length of text to search
				autoFocus={false}
				listViewDisplayed='auto'    // true/false/undefined
				fetchDetails={true}
				renderDescription={(row) => row.description} // custom description render
				onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
					console.log(data)
					console.log(details)
				}}
				getDefaultValue={() => {
					return '' // text input default value
				}}
				query={{
					// available options: https://developers.google.com/places/web-service/autocomplete
					key: 'AIzaSyAT900HJPlE7i3-opAiNy4vzjoeSANTw3E',
					language: 'en', // language of the results
					types: '(cities)', // default: 'geocode'
				}}
				styles={{
					description: {
						fontWeight: 'bold',
					},
					predefinedPlacesDescription: {
						color: '#1faadb',
					},
				}}
				currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
				currentLocationLabel="Current location"
				nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
				GoogleReverseGeocodingQuery={{
					// available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
				}}
				GooglePlacesSearchQuery={{
					// available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
					rankby: 'distance',
					types: 'food',
				}}
				filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
				debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
			/>
		)
	}
}

export default connect(null, {
	changeEventLocation,
})(SetLocationPage)