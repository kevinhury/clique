// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import Calendar from '../Calendar'
import { defaultColors } from '../../themes/styles'

type CommonCalendarProps = {
	events: ?string[],
		onDateSelect: () => void,
}

const CommonCalendar = (props: CommonCalendarProps) =>
	<Calendar
		scrollEnabled
		dayHeadings={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
		events={props.events}
		showEventIndicators
		customStyle=
		{{
			calendarContainer: styles.calendar,
			currentDayCircle: styles.commonBackgroundColor,
			currentDayText: styles.commonColor,
			eventIndicator: styles.eventIndicator,
			hasEventCircle: styles.hasEventCircle,
			hasEventDaySelectedCircle: styles.commonBackgroundColor,
			dayHeading: styles.commonColor,
			weekendHeading: styles.commonColor,
			selectedDayCircle: styles.hasEventCircle,
			selectedDayText: styles.commonText,
			title: [styles.commonColor, styles.boldText],
			calendarHeading: styles.borderless,
			dayButton: styles.borderless,
			dayButtonFiller: styles.borderless,
		}}
		onDateSelect={props.onDateSelect}
	/>

const primaryColor = defaultColors.primaryColor
const secondaryColor = defaultColors.secondaryColor
const styles = StyleSheet.create({
	calendar: {
		backgroundColor: 'transparent',
	},
	eventIndicator: {
		backgroundColor: secondaryColor,
		width: 5,
		height: 5,
	},
	hasEventCircle: {
		backgroundColor: secondaryColor,
	},
	commonColor: {
		color: primaryColor,
	},
	commonBackgroundColor: {
		backgroundColor: primaryColor,
	},
	commonText: {
		color: '#fff',
	},
	boldText: {
		fontWeight: 'bold',
	},
	borderless: {
		borderTopWidth: 0,
		borderBottomWidth: 0,
	},
})

export { CommonCalendar }