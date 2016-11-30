import React, { Component, PropTypes } from 'react'
import {
  ListView,
  View,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import EventCell from '../components/EventCell'
import PlusButton from '../components/PlusButton'
import Calendar from 'react-native-calendar'

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

  renderRow() {
    return (
      <EventCell />
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
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderHeader={this.renderCalendar.bind(this)}
          renderRow={this.renderRow.bind(this)}
        />
        <PlusButton onPress={() => Actions.createEvent()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = () => {
  return {events: ['a', 'b']}
}

export default connect(mapStateToProps, {})(LobbyPage)
