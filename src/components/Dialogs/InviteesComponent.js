import React, { Component, PropTypes } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'
import { AtendeeBubbles } from '../Common'

class InviteesComponent extends Component {
	static propTypes = {
		invitees: PropTypes.array,
	}
	render() {
		const invitees = this.props.invitees
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Going:</Text>
				<AtendeeBubbles
					style={styles.bubbles}
					images={invitees.map(x => x.image)}
					bubblesToShow={2}
				/>
				<Text style={styles.text}>Pending:</Text>
				<AtendeeBubbles
					style={styles.bubbles}
					images={invitees.map(x => x.image)}
					bubblesToShow={2}
				/>
				<Text style={styles.text}>Not going:</Text>
				<AtendeeBubbles
					style={styles.bubbles}
					images={invitees.map(x => x.image)}
					bubblesToShow={2}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		margin: 5,
		paddingLeft: 20,
		flex: 1,
		alignSelf: 'stretch',
	},
	text: {
		color: '#000',
	},
	bubbles: {
		paddingLeft: 10,
		marginBottom: 10,
	}
})

export default InviteesComponent