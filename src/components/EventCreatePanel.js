// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

type EventCreatePanelProps = {
	style: Object,
	stateIndex: number,
}

class EventCreatePanel extends Component {
	props: EventCreatePanelProps

	showUnderlay(index: number, selectedIndex: number) {
		if (selectedIndex === index) {
			return <View style={styles.underlay} />
		} else {
			return <View />
		}
	}

	renderStates(states: Array<string>, selectedIndex: number) {
		return states
			.map(state => `  ${state}  `)
			.map((state, index) => {
				const style = index === selectedIndex ? undefined : styles.unselectedText
				return (
					<View key={index}>
						<Text style={style}>{state}</Text>
						{this.showUnderlay(index, selectedIndex)}
					</View>
				)
			})
	}

	render() {
		const states = ['details', 'dates', 'invites', 'revise']
			.map(state => I18n.t(state))
		return (
			<View style={[styles.panel, this.props.style]}>
				{this.renderStates(states, this.props.stateIndex)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	panel: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	unselectedText: {
		color: 'gray',
	},
	underlay: {
		backgroundColor: '#F2AB2A',
		height: 1,
	},
})

export default EventCreatePanel
