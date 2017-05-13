// flow

import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'

export type DateBubblePickerProps = {
	date: Date,
	checked: ?boolean,
	onPress: () => void,
}

const DateBubblePicker = (props: DateBubblePickerProps) =>
	<TouchableWithoutFeedback onPress={props.onPress}>
		<View style={[styles.bubble, styles.baseBubble]}>
			<Text style={[styles.text, styles.dayText]}>{moment(props.date).format('Do')}</Text>
			<Text style={[styles.text, styles.monthText]}>{moment(props.date).format('MMM')}</Text>
			<CheckedBubble checked={props.checked} />
		</View>
	</TouchableWithoutFeedback>

const CheckedBubble = ({ checked }: any) => {
	if (!checked) return <View></View>
	return (
		<View style={[styles.bubble, styles.checked]}>
			<Icon name='md-checkmark-circle' size={36} style={styles.checkedIcon} />
		</View>
	)
}

const size = 80
const styles = StyleSheet.create({
	bubble: {
		width: size,
		height: size,
		borderRadius: size / 2,
		justifyContent: 'center',
		alignItems: 'center',

	},
	baseBubble: {
		backgroundColor: '#31A5FD',
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
		shadowOffset: {},
		elevation: 1,
	},
	text: {
		color: '#fff',
	},
	dayText: {
		fontSize: 28,
		backgroundColor: 'transparent',
		marginBottom: -4,
	},
	monthText: {

	},
	checked: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 0,
		backgroundColor: 'transparent',
		borderWidth: 2,
		borderColor: '#01A836',
		shadowRadius: 0,
	},
	checkedIcon: {
		position: 'absolute',
		color: '#01A836',
		bottom: -13,
		right: -13,
		shadowColor: '#fff',
		shadowRadius: 2,
		shadowOpacity: 0.3,
		shadowOffset: {},
	},
})

export { DateBubblePicker }