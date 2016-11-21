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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        <PlusButton onPress={() => Actions.createEvent()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = () => {
  return {events: ['a', 'b']}
}

export default connect(mapStateToProps, {})(LobbyPage)
