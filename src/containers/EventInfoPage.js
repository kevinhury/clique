// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-elements'
import CardView from '../components/CardView'
import TitleSection from '../components/EventPage/TitleSection'
import InfoSection from '../components/EventPage/InfoSection'
import { Separator, AtendeeBubbles, ChatButton } from '../components/Common'
import Dialog from '../components/Dialogs/Dialog'

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

	minAtendeesText() {
		const { minAtendees } = this.props.event
		if (minAtendees == 0)
			return (<Text>Not limited</Text>)
		return (
			<Text style={styles.greenText}>{minAtendees}</Text>
		)
	}

	maxAtendeesText() {
		const { limitedRSVP } = this.props.event
		if (limitedRSVP == 0)
			return (<Text>Not limited</Text>)
		return (
			<Text style={styles.greenText}>{limitedRSVP} / {limitedRSVP}</Text>
		)
	}

	cancelDialogToggle(state: boolean) {
		if (state)
			this.refs.cancelDialog.modal().open()
		else
		this.refs.cancelDialog.modal().close()
	}

	inviteesDialogToggle(state: boolean) {
		if (state)
			this.refs.inviteesDialog.modal().open()
		else
      this.refs.inviteesDialog.modal().close()
	}

	render() {
		const {
			title, description, location, approved, status, owner,
			date, isAdmin, invitees
		} = this.props.event
		return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.page}
      >
        <CardView>
          <TitleSection
            isAdmin={isAdmin}
            title={title}
            creator={owner}
            image={'https://facebook.github.io/react/img/logo_og.png'}
            approved={approved}
            status={status}
            onStatusPress={() => {}}
            onCancelPress={() => this.cancelDialogToggle(true)}
          />
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText} numberOfLines={3}>{description}</Text>
          </View>
          <Separator style={styles.separator} />
          <InfoSection date={date.date} time={date.time} location={location} />
          <Separator style={styles.separator} />
          <View style={styles.atendeesSection}>
            <Text>People going:</Text>
            <TouchableWithoutFeedback onPress={() => this.inviteesDialogToggle(true)}>
              <View style={styles.goingSection}>
                <AtendeeBubbles images={invitees.map(x => x.image)} bubblesToShow={2} />
                <ChatButton
                  onPress={() => console.log('press')}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Separator style={styles.separator} />
          <View style={styles.numAtendeesSection}>
            <Text>Minimum of RSVP's: {this.minAtendeesText()}</Text>
            <Text>Maximum of RSVP's: {this.maxAtendeesText()}</Text>
          </View>
          <Separator style={styles.separator} />
          {this.renderBottomButton()}
        </CardView>
        <Dialog
          ref={'inviteesDialog'}
          title='See you there!'
          type={{ name:'invitees', invitees: this.props.event.invitees }}
          buttonText='GREAT!'
          modalStyle={{ height: 280 }}
          buttonCallback={() => this.inviteesDialogToggle(false)}
        />
        <Dialog
					ref={'cancelDialog'}
					title='Wait a second...'
					type={{ name: 'text', text: 'Are you sure you want to cancel this event?' }}
					buttonText='YES'
				/>
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
