import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class TitleSection extends Component {
  static propTypes = {
    going: PropTypes.bool.isRequired,
    admin: PropTypes.bool.isRequired,
    onEditPress: PropTypes.func.isRequired,
  }

  titleText(): string {
    return this.props.going ? 'You\'re going!' : 'Are you coming?'
  }

  sectionColor() {
    const backgroundColor = this.props.going ? '#01a836' : '#3C9BFD'
    return { backgroundColor }
  }

  adminState() {
    return (
      <View style={[styles.content, {justifyContent: 'space-between'}]}>
        <Text style={styles.titleText}>{this.titleText()}</Text>
        <TouchableOpacity onPress={this.props.onEditPress}>
          <View style={styles.editButton}>
            <Text style={styles.titleText}>Edit</Text>
            <Icon size={12} name='border-color' color='#fff' style={styles.editIcon} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  inviteeState() {
    return (
      <View style={[styles.content, {justifyContent: 'flex-end'}]}>
        <Text style={styles.titleText}>{this.titleText()}</Text>
        <Switch value={this.props.going} style={styles.switch} />
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.titleSection, this.sectionColor()]}>
        { this.props.admin ? this.adminState() : this.inviteeState() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleSection: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 2,
	},
  content: {
    flex: 1,
		flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: '#fff'
  },
  switch: {
    marginLeft: 5,
  },
  editButton: {
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 5,
  }
})

export default TitleSection
