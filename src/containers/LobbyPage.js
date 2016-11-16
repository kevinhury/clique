import React, { Component, PropTypes } from 'react'
import {
  ListView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

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
      <View />
    )
  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        <TouchableOpacity onPress={() => Actions.createEvent()}>
          <Text>Create event</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = () => {
  return {events: ['a', 'b']}
}

export default connect(mapStateToProps, {})(LobbyPage)
