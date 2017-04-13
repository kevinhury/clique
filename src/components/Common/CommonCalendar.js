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
			eventIndicator: styles.eventIndicator,
			hasEventCircle: styles.hasEventCircle,
			hasEventDaySelectedCircle: styles.hasEventCircle,
		}}
    onDateSelect={props.onDateSelect}
  />

const styles = StyleSheet.create({
	calendar: {
		backgroundColor: 'transparent',
	},
	eventIndicator: {
		backgroundColor: '#31A5FD',
		width: 5,
		height: 5,
	},
	hasEventCircle: {
		backgroundColor: '#31A5FD',
	},
})

export { CommonCalendar }