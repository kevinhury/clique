import React, { Component, PropTypes } from 'react'
import {
	View,
	Picker,
	StyleSheet
} from 'react-native'


class PickerComponent extends Component {
	static propTypes = {
		options: PropTypes.array,
	}

	renderItems() {
		return this.props.options
			.map((option, index) => {
				return (
					<Picker.Item label={`${option}`} value={`${option}`} key={index} />
				)
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<Picker
					style={styles.picker}
					selectedValue={''}
					onValueChange={() => console.log('change')}
				>
					{this.renderItems()}
				</Picker>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
	},
	picker: {
		flex: 1,
		width: 400,
	}
})

export default PickerComponent
