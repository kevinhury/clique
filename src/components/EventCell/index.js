import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TitleSection from './TitleSection'
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'
import BottomSection from './BottomSection'

class EventCell extends Component {
	static propTypes = {
		event: PropTypes.object.isRequired
	}

	render() {
		const { title, owner, date, going, expires, atendees, admin } = this.props.event
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.background}
			>
				<TitleSection going={going} admin={admin} />
				<View style={styles.container}>
					<TopSection title={title} owner={owner} date={date} />
					<View style={styles.separator} />
					<MiddleSection />
					<View style={styles.separator} />
					<BottomSection going={going} expires={expires} />
				</View>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		borderRadius: 5,
		margin: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'transparent',
	},
	separator: {
		backgroundColor: '#4BA4E1',
		alignSelf: 'stretch',
		height: 1,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
	}
})

export default EventCell
