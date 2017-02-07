// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
// import MapView from 'react-native-maps'

type Region = {
	latitude: number,
	longitude: number,
	latitudeDelta: number,
	longitudeDelta: number,
}

type Props = {
	location: Region,
	name: string,
	description: string,
}

class MapComponent extends Component {
	state: {
		region: Region
	}
	props: Props

	constructor(props: any) {
		super(props)
		this.props = props
		this.state = {
			region: { latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 },
		}
	}

	onRegionChange(region: Region) {
		this.setState({ region })
	}

	render() {
		return (
			<View style={styles.container}>
			{/*
				<MapView
					style={styles.map}
					region={this.state.region}
					onRegionChange={this.onRegionChange.bind(this)}
				>
					<MapView.Marker
						coordinate={this.state.location}
						title={this.props.name}
						description={this.props.description}
					/>
					
				</MapView>
				*/}
			</View>
		)
	}
}
// MapComponent.defaultProps

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
})

export default MapComponent