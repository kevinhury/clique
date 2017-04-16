// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import Calendar from 'react-native-calendar'

type CommonCalendarProps =  {
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
		}}
    onDateSelect={props.onDateSelect}
  />

const primaryColor = '#31A5FD'
const secondaryColor = '#01a836'
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
})

export { CommonCalendar }