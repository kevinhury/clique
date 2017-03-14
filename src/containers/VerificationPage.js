// @flow

import React, { Component } from 'react'
import { View, Text, TextInput, Platform, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { changeLoginCountry, changeLoginNumber, submitLogin, submitVerificationCode } from '../actions'
import type { CountryCode } from '../actions/types'


type State = {
	enterCode: boolean,
	spinner: boolean,
	code: string,
}

type Props = {
	phoneNumber: string,
	countryCode: CountryCode,
	changeLoginCountry: (CountryCode) => void,
	changeLoginNumber: (string) => void,
	submitLogin: () => void,
	submitVerificationCode: () => void,
}

class VerificationPage extends Component {
	props: Props
	state: State
	constructor(props: any) {
		super(props)
		this.state = {
			enterCode: false,
			spinner: false,
			code: '',
		}
	}

	_changeCountry(country: any) {
		this.props.changeLoginCountry(country)
	}

	_getSubmitAction() {
		if (this.state.enterCode)
			this._verifyCode()
		else
			this._getCode()
	}

	_verifyCode() {
		if (this.state.spinner) return
		this.setState({ spinner: true })

		setTimeout(() => {
			Alert.alert('Success!', 'You have successfully verified your phone number', [{
				text: 'OK',
				onPress: () => Actions.main({ type: 'replace' }),
			}])
			this.setState({ spinner: false })
		}, 1000)
	}

	_getCode() {
		if (this.state.spinner) return
		this.setState({ spinner: true })

		this.props.submitLogin()

		setTimeout(() => {
			this.setState({
				spinner: false,
				enterCode: true,
			})

			Alert.alert('Sent!', "We've sent you a verification code", [{
				text: 'OK',
				onPress: () => this.refs.textInput.focus(),
			}])

		}, 1000)
	}

	_tryAgain() {
		this.setState({ enterCode: false })
		this.props.changeLoginNumber('')
	}

	_renderFooter() {
		if (this.state.enterCode)
			return (
				<View>
					<Text style={styles.wrongNumberText} onPress={this._tryAgain.bind(this)}>
						Enter the wrong number or need a new code?
          </Text>
				</View>
			)

		return (
			<View>
				<Text style={styles.disclaimerText}>
					By tapping "Send confirmation code" above, we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.
				</Text>
			</View>
		)
	}

	_renderCountryPicker() {
		if (this.state.enterCode)
			return (<View />)

		return (
			<CountryPicker
				ref={'countryPicker'}
				closeable
				style={styles.countryPicker}
				onChange={this._changeCountry.bind(this)}
				cca2={this.props.countryCode.cca2}
				translation='eng' />
		)
	}

	_renderCallingCode() {
		if (this.state.enterCode)
			return (<View />)

		return (
			<View style={styles.callingCodeView}>
				<Text style={styles.callingCodeText}>+{this.props.countryCode.callingCode}</Text>
			</View>
		)
	}

	_renderSpinner() {
		if (!this.state.spinner)
			return (<View />)
		return (<ActivityIndicator size='small' />)
	}

	render() {
		const headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`
		const buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code'
		const textStyle = this.state.enterCode ? {
			height: 50,
			textAlign: 'center',
			fontSize: 40,
			fontWeight: 'bold',
			fontFamily: 'Courier',
		} : {}

		return (
			<View style={styles.container}>
				<Text style={styles.header}>{headerText}</Text>
				<View style={{ flexDirection: 'row' }}>
					{this._renderCountryPicker()}
					{this._renderCallingCode()}
					<TextInput
						name={this.state.enterCode ? 'code' : 'phoneNumber'}
						ref={'textInput'}
						type={'TextInput'}
						underlineColorAndroid={'transparent'}
						autoCapitalize={'none'}
						autoCorrect={false}
						placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
						keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
						style={[styles.textInput, textStyle]}
						autoFocus
						placeholderTextColor={brandColor}
						selectionColor={brandColor}
						maxLength={this.state.enterCode ? 6 : 20}
						onSubmitEditing={this._getSubmitAction.bind(this)}
						value={this.state.enterCode ? this.state.code : this.props.phoneNumber}
						onChangeText={(text) => {
							this.state.enterCode ? this.setState({ code: text }) : this.props.changeLoginNumber(text)
						}}
					/>
				</View>
				<TouchableOpacity style={styles.button} onPress={this._getSubmitAction.bind(this)}>
					<Text style={styles.buttonText}>{buttonText}</Text>
				</TouchableOpacity>
				{this._renderFooter()}
				{this._renderSpinner()}
			</View>
		)
	}
}

const brandColor = '#31A5FD'
const styles = StyleSheet.create({
	countryPicker: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flex: 1,
		margin: 20,
	},
	header: {
		textAlign: 'center',
		fontSize: 22,
		margin: 20,
		color: '#4A4A4A',
	},
	textInput: {
		padding: 0,
		margin: 0,
		flex: 1,
		fontSize: 20,
		color: brandColor,
	},
	button: {
		marginTop: 20,
		height: 50,
		backgroundColor: brandColor,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontFamily: 'Helvetica',
		fontSize: 16,
		fontWeight: 'bold',
	},
	wrongNumberText: {
		margin: 10,
		fontSize: 14,
		textAlign: 'center',
	},
	disclaimerText: {
		marginTop: 30,
		fontSize: 12,
		color: 'grey',
	},
	callingCodeView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	callingCodeText: {
		fontSize: 20,
		color: brandColor,
		fontFamily: 'Helvetica',
		fontWeight: 'bold',
		paddingRight: 10,
	},
})

const mapStateToProps = state => {
	const { login } = state
	return login
}

export default connect(mapStateToProps, {
	changeLoginCountry,
	changeLoginNumber,
	submitLogin,
	submitVerificationCode,
})(VerificationPage)