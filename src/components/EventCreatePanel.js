import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class EventCreatePanel extends Component {
	static propTypes = {
		style: PropTypes.any,
		stateIndex: PropTypes.number.isRequired,
	}

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
		return (
			<View style={[styles.panel, this.props.style]}>
				{this.renderStates(['Details', 'Dates', 'Invites', 'Revise'], this.props.stateIndex)}
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
