// @flow

import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type AddressBarItemProps = {
  style: any,
  text: string,
  onPress: () => void,
}

const AddressBarItem = (props: AddressBarItemProps) =>
  <View style={[styles.infoRow, props.style]}>
    <Icon name='ios-pin-outline' size={20} style={styles.icon} />
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  </View>

const styles = StyleSheet.create({
	infoRow: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	icon: {
		margin: 2,
		marginRight: 8,
	},  
	text: {
		textDecorationLine: 'underline',
		color: '#50A5F9',
	},  
})

export { AddressBarItem }