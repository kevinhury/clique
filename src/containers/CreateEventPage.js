import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
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
        <FormLabel>Name</FormLabel>
        <FormInput
          onChangeText={this.props.changeEventName}
          value={this.props.name}
        />
        <FormLabel>Description</FormLabel>
        <FormInput
          onChangeText={this.props.changeEventDescription}
          value={this.props.description}
        />
        <FormLabel>Location</FormLabel>
        <FormInput
          onChangeText={this.props.changeEventLocation}
          value={this.props.location}
        />
        <Button
          large
          raised
          onPress={() => Actions.createEventPage2()}
          title='Next'
          backgroundColor='#01a836'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
