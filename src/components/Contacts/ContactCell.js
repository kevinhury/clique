// @flow

import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	Switch,
} from 'react-native'

type ContactCellProps = {
	contact: any,
	selected: boolean,
	onValueChange: () => void,
}

class ContactCell extends Component {
	props: ContactCellProps

	render() {
		const { contact, selected, onValueChange } = this.props
		const uri = contact.thumbnail ? contact.thumbnail : undefined
		return (
			<View style={styles.container}>
				<View style={styles.leftView}>
					<Image source={{ uri }} style={styles.image}></Image>
					<View style={styles.textsView}>
						<Text style={styles.text}>{contact.name}</Text>
						<Text style={styles.text}>{contact.phone}</Text>
					</View>
				</View>
				<View>
					<Switch value={selected} onValueChange={onValueChange} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 12,
		justifyContent: 'space-between',
	},
	leftView: {
		flexDirection: 'row',
	},
	textsView: {
		marginLeft: 12,
	},
	text: {
		fontSize: 16,
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
})

export default ContactCell
