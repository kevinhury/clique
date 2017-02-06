import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
// import MapView from 'react-native-maps'
import I18n from 'react-native-i18n'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import {

} from '../actions'

class SetLocationPage extends Component {

	onSetClick() {
		Actions.pop()
	}

	render() {
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
				>
				<CardView style={styles.card}>
					{ /** <MapView
						style={styles.map}
						region={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121,
						}}
						/> */}
					<View style={styles.inputContainer}>
						<TextInput
							placeholder={I18n.t('createFlow.addressInput')}
							onChangeText={() => { } }
							value={''}
							style={styles.input}
							autoFocus
							/>
					</View>
					<Button
						large
						raised
						onPress={this.onSetClick.bind(this)}
						title={I18n.t('set')}
						backgroundColor='#01a836'
						buttonStyle={styles.setButton}
						/>
				</CardView>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	card: {
		justifyContent: 'flex-start',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	inputContainer: {
		position: 'absolute',
		top: 10,
		left: 0,
		right: 0,
	},
	input: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#31A5FD',
		height: 40,
		margin: 10,
		backgroundColor: '#fff',
	},
	setButton: {
		height: 50,
		borderRadius: 15,
		bottom: 0,
	},
})

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, {
	
})(SetLocationPage)
