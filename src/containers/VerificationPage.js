// @flow

import React, { Component } from 'react'
import { View, Text, TextInput, Platform, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import { changeLoginCountry, changeLoginNumber, submitLogin, submitLoginBack, submitVerificationCode } from '../actions'
import type { CountryCode } from '../actions/types'

type State = {
	code: string,
}

type Props = {
	phoneNumber: string,
	countryCode: CountryCode,
	loginStage: string,
	loading: false,
	changeLoginCountry: (CountryCode) => void,
	changeLoginNumber: (string) => void,
	submitLogin: (string, CountryCode) => void,
	submitLoginBack: () => void,
	submitVerificationCode: (string, CountryCode, string) => void,
}

class VerificationPage extends Component {
	props: Props
	state: State
	constructor(props: any) {
		super(props)
		this.state = { code: '' }
	}

	componentWillReceiveProps(nextProps: Props) {
		if (nextProps.loginStage === 'CODE' && !nextProps.loading) {
			Alert.alert(I18n.t('verification.codeSentButton'), I18n.t('verification.codeSentText'), [{
				text: I18n.t('ok'),
				onPress: () => this.refs.textInput.focus(),
			}])
		} else if (nextProps.loginStage === 'DONE') {
			Alert.alert(I18n.t('verification.successButton'), I18n.t('verification.successText'), [{
				text: I18n.t('ok'),
				onPress: () => Actions.main({ type: 'replace' }),
			}])
		}
	}

	_isCodeStage(): boolean {
		return this.props.loginStage === 'CODE' || this.props.loginStage === 'DONE'
	}

	_changeCountry(country: any) {
		this.props.changeLoginCountry(country)
	}

	_getSubmitAction() {
		if (this._isCodeStage())
			this._verifyCode()
		else
			this._getCode()
	}

	_verifyCode() {
		if (this.props.loading) return
		this.props.submitVerificationCode(this.props.phoneNumber, this.props.countryCode, this.state.code)
	}

	_getCode() {
		if (this.props.loading) return
		this.props.submitLogin(this.props.phoneNumber, this.props.countryCode)
	}

	_tryAgain() {
		this.props.changeLoginNumber('')
		this.props.submitLoginBack()
	}

	_renderFooter() {
		if (this._isCodeStage())
			return (
				<View>
					<Text style={styles.wrongNumberText} onPress={this._tryAgain.bind(this)}>
						{I18n.t('verification.footerText')}
					</Text>
				</View>
			)

		return (
			<View>
				<Text style={styles.disclaimerText}>
					{I18n.t('verification.disclaimerText')}
				</Text>
			</View>
		)
	}

	_renderCountryPicker() {
		if (this._isCodeStage())
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
		if (this._isCodeStage())
			return (<View />)

		return (
			<View style={styles.callingCodeView}>
				<Text style={styles.callingCodeText}>+{this.props.countryCode.callingCode}</Text>
			</View>
		)
	}

	_renderSpinner() {
		if (!this.props.loading)
			return (<View />)
		return (<ActivityIndicator size='small' />)
	}

	render() {
		const headerText = this._isCodeStage() ? I18n.t('verification.whatVerificationCode') : I18n.t('verification.whatPhoneNumber')
		const buttonText = this._isCodeStage() ? I18n.t('verification.btnVerifyConf') : I18n.t('verification.btnSendConf')
		const textStyle = this._isCodeStage() ? {
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
						name={this._isCodeStage() ? 'code' : 'phoneNumber'}
						ref={'textInput'}
						type={'TextInput'}
						underlineColorAndroid={'transparent'}
						autoCapitalize={'none'}
						autoCorrect={false}
						placeholder={this._isCodeStage() ? '_ _ _ _ _ _' : I18n.t('verification.phonePlaceholder')}
						keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
						style={[styles.textInput, textStyle]}
						autoFocus
						placeholderTextColor={brandColor}
						selectionColor={brandColor}
						maxLength={this._isCodeStage() ? 6 : 20}
						onSubmitEditing={this._getSubmitAction.bind(this)}
						value={this._isCodeStage() ? this.state.code : this.props.phoneNumber}
						onChangeText={(text) => {
							this._isCodeStage() ? this.setState({ code: text }) : this.props.changeLoginNumber(text)
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
	submitLoginBack,
	submitVerificationCode,
})(VerificationPage)