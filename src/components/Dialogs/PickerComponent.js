// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import Picker from 'react-native-wheel-picker'

type PickerComponentProps = {
	options: any[],
	onValueChange: () => void,
}

type PickerComponentState = {
	selection: ?string,
}

class PickerComponent extends Component {
	props: PickerComponentProps
	state: PickerComponentState

	constructor(props: any) {
		super(props)
		this.state = { selection: null }
	}

	renderItems() {
		return this.props.options
			.map((value, index) => {
				return (
					<Picker.Item label={value['label']} value={value['value']} key={index} />
				)
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<Picker
					style={styles.picker}
					selectedValue={this.state.selection}
					onValueChange={(value, index) => {
						this.props.onValueChange(index)
						this.setState({ selection: value })
					}}
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
	},
})

export default PickerComponent
