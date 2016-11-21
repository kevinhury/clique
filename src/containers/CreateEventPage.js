import React, { Component, PropTypes } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {
  changeEventName,
  changeEventDescription,
  changeEventLocation,
} from '../actions'

class CreateEventPage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    changeEventName: PropTypes.func.isRequired,
    changeEventDescription: PropTypes.func.isRequired,
    changeEventLocation: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          onChangeText={this.props.changeEventName}
          value={this.props.name}
        />
        <TextInput
          style={styles.TextInput}
          onChangeText={this.props.changeEventDescription}
          value={this.props.description}
        />
        <TextInput
          style={styles.TextInput}
          onChangeText={this.props.changeEventLocation}
          value={this.props.location}
        />
        <Button
          onPress={() => Actions.createEventPage2()}
          title='Next'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
})

const mapStateToProps = state => {
  const { name, description, location } = state.form
  return { name, description, location }
}

export default connect(mapStateToProps, {
  changeEventName,
  changeEventDescription,
  changeEventLocation,
})(CreateEventPage)
