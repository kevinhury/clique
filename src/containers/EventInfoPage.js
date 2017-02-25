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
import I18n from 'react-native-i18n'
import { Actions } from 'react-native-router-flux'
import CardView from '../components/CardView'
import TitleSection from '../components/EventPage/TitleSection'
import InfoSection from '../components/EventPage/InfoSection'
import { Separator, AtendeeBubbles, ChatButton } from '../components/Common'
import Dialog from '../components/Dialogs/Dialog'
import {
	modifyAttendances,
	cancelEvent,
} from '../actions'

class EventInfoPage extends Component {
	static propTypes = {
		createFlow: PropTypes.bool,
		event: PropTypes.object,
		modifyAttendances: PropTypes.func,
		cancelEvent: PropTypes.func,
	}

	renderBottomButton() {
		if (!this.props.event.createFlow)
			return <View />
		return (
      <Button
        raised
        title={I18n.t('createFlow.finishSendInvites')}
        borderRadius={30}
        fontSize={20}
        backgroundColor='#289FFF'
      />
		)
	}

	minAtendeesText() {
		const { minAtendees } = this.props.event
		if (minAtendees == 0)
			return (<Text>{I18n.t('notLimited')}</Text>)
		return (
			<Text style={styles.greenText}>{minAtendees}</Text>
		)
	}

	maxAtendeesText() {
		const { limitedRSVP } = this.props.event
		if (limitedRSVP == 0)
			return (<Text>{I18n.t('notLimited')}</Text>)
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

	mapDialogToggle(state: boolean) {
		if (state)
			this.refs.mapDialog.modal().open()
		else
			this.refs.mapDialog.modal().close()
	}

	render() {
		const {
			title, description, location, locationName, approved, status, owner,
			date, isAdmin, invitees,
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
          <InfoSection
						date={date.toLocaleDateString()}
						time={date.toLocaleTimeString()}
						location={`${locationName} - ${location}`}
						onLocationPress={() => this.mapDialogToggle(true)}
						/>
          <Separator style={styles.separator} />
          <View style={styles.atendeesSection}>
            <Text>{I18n.t('peopleGoing')}:</Text>
            <TouchableWithoutFeedback onPress={() => this.inviteesDialogToggle(true)}>
              <View style={styles.goingSection}>
                <AtendeeBubbles images={invitees.map(x => x.image)} bubblesToShow={2} />
                <ChatButton
									title={I18n.t('chat')}
                  onPress={() => console.log('press')}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Separator style={styles.separator} />
          <View style={styles.numAtendeesSection}>
            <Text>{I18n.t('minRSVPs')}: {this.minAtendeesText()}</Text>
            <Text>{I18n.t('maxRSVPs')}: {this.maxAtendeesText()}</Text>
          </View>
          <Separator style={styles.separator} />
          {this.renderBottomButton()}
        </CardView>
        <Dialog
          ref={'inviteesDialog'}
          title={I18n.t('dialogs.inviteesTitle')}
          type={{ name: 'invitees', invitees: this.props.event.invitees }}
          buttonText={I18n.t('great!')}
          modalStyle={{ height: 280 }}
          buttonCallback={() => this.inviteesDialogToggle(false)}
        />
        <Dialog
					ref={'cancelDialog'}
					title={I18n.t('dialogs.cancelTitle')}
					type={{ name: 'text', text: I18n.t('dialogs.cancelText') }}
					buttonText={I18n.t('yes')}
					buttonCallback={() => {
						this.props.cancelEvent()
						Actions.pop()
					}}
				/>
        <Dialog
					ref={'mapDialog'}
					title={this.props.event.location}
					type={{ name: 'map', locationName: '', description: '' }}
					buttonText={I18n.t('takeMeThere')}
					buttonCallback={() => {}}
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
		textAlign: 'center',
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
	},
})

const mapStateToProps = state => {
	const { events } = state
	return { event: events.selected }
}

export default connect(mapStateToProps, {
	modifyAttendances,
	cancelEvent,
})(EventInfoPage)
