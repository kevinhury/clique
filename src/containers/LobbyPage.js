import React, { Component, PropTypes } from 'react'
import {
  ListView,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Calendar from 'react-native-calendar'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import EventCell from '../components/EventCell'
import CardView from '../components/CardView'

class LobbyPage extends Component {
  static propTypes = {
    events: PropTypes.array
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.events)
  }

  onEditPress(event) {
    console.log(event)
  }

  onChatPress(event) {
    console.log(event)
  }

  renderRow(event) {
    return (
      <TouchableOpacity onPress={() => Actions.eventInfoPage()}>
        <EventCell
          event={event}
          onEditPress={this.onEditPress.bind(this)}
          onChatPress={this.onChatPress.bind(this)}
        />
      </TouchableOpacity>
    )
  }

  renderCalendar() {
    return (
      <Calendar
        scrollEnabled
        customStyle={{selectedDayCircle: { 'backgroundColor': 'green' }}}
      />
    )
  }

  render() {
    return (
      <LinearGradient
        colors={['#31A5FD', '#ffffff']}
        style={styles.container}
      >
        <CardView>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderHeader={this.renderCalendar.bind(this)}
            renderRow={this.renderRow.bind(this)}
          />
          <Icon
            type='ionicon'
            name='md-add'
            color='#01a836'
            raised
            reverse
            onPress={() => Actions.createEvent()}
            containerStyle={styles.plusButton}
          />
        </CardView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  }
})

const mock_events = [
  {
    title: 'FIFA 17 SESSION',
    owner: 'You',
    date: '14th Wed, December 13:30',
    going: true,
    admin: true,
    expires: '8th Tue, November 19:00',
    atendees: [],
  },
  {
    title: 'FIFA 17 SESSION',
    owner: 'Yossi K',
    date: '14th Wed, December 13:30',
    going: true,
    admin: false,
    expires: '8th Tue, November 19:00',
    atendees: [],
  },
  {
    title: 'FIFA 17 SESSION',
    owner: 'Yossi K',
    date: '14th Wed, December 13:30',
    going: false,
    admin: false,
    expires: '8th Tue, November 19:00',
    atendees: [],
  },
]

const mapStateToProps = () => {
  return { events: mock_events }
}

export default connect(mapStateToProps, {})(LobbyPage)
