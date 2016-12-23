import React, { Component, PropTypes } from 'react'
import {
  View,
  TextInput,
	StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
import CardView from '../components/CardView'
import EventCreatePanel from '../components/EventCreatePanel'
import { FormButton } from '../components/Common'

class CreateEventPage2 extends Component {
	static propTypes = {

	}

	render() {
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.page}
			>
        <CardView style={styles.card}>
					<EventCreatePanel stateIndex={1} style={styles.statePanel} />
					<View>
						<FormButton
							text='Event length (days)'
							onPress={() => console.log('press')}
							style={styles.lengthButton}
						/>
					</View>
				</CardView>
      </LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	card: {
		justifyContent: 'flex-start',
	},
	statePanel: {
		margin: 5,
		marginBottom: 15,
	},
	lengthButton: {
		height: 40,
		marginLeft: 5,
		marginRight: 5,
		margin: 8,
	}
})

export default connect(null, {})(CreateEventPage2)
