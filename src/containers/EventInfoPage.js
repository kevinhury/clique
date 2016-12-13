// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'
import CardView from '../components/CardView'
import TitleSection from '../components/EventPage/TitleSection'
import InfoSection from '../components/EventPage/InfoSection'
import { Separator, AtendeeBubbles, ChatButton } from '../components/Common'

const info = {
	title: 'FIFA 17 SESSION',
	status: 'PENDING',
	creator: 'Yossi Kerman',
	creatorImage: 'https://facebook.github.io/react/img/logo_og.png',
	userStatus: 'Going',
	eventStatus: 'Pending',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
	date: 'TUESDAY, 23rd NOVEMBER 2016',
	time: '10:30 AM - 6:00 PM',
	location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
	atendees: [],
	minAtendees: 999,
	limitedRSVP: false,
}

class EventInfoPage extends Component {
	static propTypes = {
		event: PropTypes.object,
	}

	renderBottomButton() {
		return (
      <Button
        raised
        title='INVITE & FINISH'
        borderRadius={30}
        fontSize={20}
        backgroundColor='#289FFF'
      />
		)
	}

	render() {
		const {
			title, description, location, approved, status, owner,
			date, minAtendees, limitedRSVP, invitees
		} = this.props.event
		return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.page}
      >
        <CardView>
          <TitleSection
            title={title}
            creator={owner}
            image={'https://facebook.github.io/react/img/logo_og.png'}
            approved={approved}
            status={status}
          />
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
          </View>
          <Separator style={styles.separator} />
          <InfoSection date={date.date} time={date.time} location={location} />
          <Separator style={styles.separator} />
          <View style={styles.atendeesSection}>
            <Text>People going:</Text>
            <View style={styles.goingSection}>
              <AtendeeBubbles images={invitees.map(x => x.image)} bubblesToShow={2} />
              <ChatButton
                onPress={() => console.log('press')}
              />
            </View>
          </View>
          <Separator style={styles.separator} />
          <View style={styles.numAtendeesSection}>
            <Text>Minimum of RSVP's: <Text style={styles.greenText}>{minAtendees}</Text></Text>
            <Text>Maximum of RSVP's: <Text style={styles.greenText}>{limitedRSVP} / {limitedRSVP}</Text></Text>
          </View>
          <Separator style={styles.separator} />
          {/* <View style={styles.grocerySection}>
            <Text>Grocery list:</Text>
          </View> */}
          {this.renderBottomButton()}
        </CardView>
      </LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	descriptionSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	descriptionText: {
		textAlign: 'center'
	},
	separator: {
		backgroundColor: '#F1CE81',
	},
	atendeesSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	goingSection: {
		marginTop: 10,
		paddingLeft: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	numAtendeesSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	grocerySection: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: 'space-between'
	},
	greenText: {
		color: '#01a836',
		fontWeight: 'bold',
	}
})

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, {

})(EventInfoPage)
