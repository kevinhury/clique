// @flow

import React from 'react'
import { Image, StyleSheet } from 'react-native'

type ProfileIconProps = {
	image: string,
	size: number,
	borderColor: string,
	style: any,
}

const ProfileIcon = ({ image, size, borderColor, style }: ProfileIconProps) =>
	<Image
		source={{ uri: image }}
		style={[iconStyle(size, borderColor).icon, style]}
	/>


const iconStyle = (size: number, borderColor: string) =>
	StyleSheet.create({
		icon: {
			height: size,
			width: size,
			borderRadius: size / 2,
			borderWidth: 1,
			borderColor,
		},
	})

export { ProfileIcon }