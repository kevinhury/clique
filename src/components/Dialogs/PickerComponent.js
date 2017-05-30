// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import Picker from 'react-native-wheel-picker'

type PickerComponentProps = {
	value: any,
	options: any[],
	onValueChange: (any) => void,
}

type PickerComponentState = {
	selection: ?string,
}

class PickerComponent extends Component {
	props: PickerComponentProps
	state: PickerComponentState

	constructor(props: any) {
		super(props)
		this.state = { selection: props.value }
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
					style={{ width: 400, height: 150 }}
					selectedValue={this.state.selection}
					onValueChange={(value, index) => {
						if (typeof index === 'undefined') return
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
		flex: 1,
		alignItems: 'center',
		margin: 5,
		borderWidth: 1,
		borderColor: 'red',
	},
	picker: {
		width: 400,
		height: 150,
	},
})

export default PickerComponent
