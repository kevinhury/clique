// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

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

type State = {
	marker: Region,
	region: Region,
}

class MapComponent extends Component {
	props: Props
	state: State
	constructor(props: any) {
		super(props)
		this.props = props
		const init = { latitude: 0, longitude: 0, latitudeDelta: 0.0043, longitudeDelta: 0.0043 }
		this.state = { marker: init, region: { ...init } }
	}

	componentWillMount() {
		const { latitude, longitude } = this.props.location
		const region = { ...this.state.region, latitude, longitude }
		this.setState({ region, marker: { ...region } })
	}

	onRegionChange(region: Region) {
		this.setState({ region })
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={this.state.region}
					onRegionChange={this.onRegionChange.bind(this)}
				>
					<MapView.Marker
						coordinate={this.state.marker}
						title={this.props.name}
						description={this.props.description}
					/>
				</MapView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
})

export default MapComponent