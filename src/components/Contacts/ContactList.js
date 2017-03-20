// @flow

import React, { Component } from 'react'
import {
	View,
	ListView,
	StyleSheet,
} from 'react-native'
import ContactCell from './ContactCell'
import SectionHeader from './SectionHeader'
import Header from './Header'
import type { Contact } from '../../actions/types'

type ContactListProps = {
	contacts: Contact[],
	selectedList: Contact[],
	onValueChange: () => void,
}

class ContactList extends Component {
	props: ContactListProps
	dataSource: any

	componentWillMount() {
		this.createDataSource(this.props)
	}

	componentWillReceiveProps(nextProps: any) {
		this.createDataSource(nextProps)
	}

	createDataSource({ contacts }: any) {
		const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId]
		const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`]

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
			getSectionData,
			getRowData,
		})

		const { dataBlob, sectionIds, rowIds } = this.formatData(contacts)
		this.dataSource = ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
	}

	formatData(data: any) {
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

		const dataBlob = {}
		const sectionIds = []
		const rowIds = []

		for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
			if (data.length == 0) break
			const currentChar = alphabet[sectionId]
			const users = data.filter((user) => user.name.toUpperCase().indexOf(currentChar) === 0)
			if (users.length === 0) continue

			sectionIds.push(sectionId)
			dataBlob[sectionId] = { character: currentChar }
			rowIds.push([])

			for (let i = 0; i < users.length; i++) {
				const rowId = `${sectionId}:${i}`
				rowIds[rowIds.length - 1].push(rowId)
				dataBlob[rowId] = users[i]
			}
		}
		return { dataBlob, sectionIds, rowIds }
	}

	renderRow(contact: any) {
		const selected = this.props.selectedList.includes(contact.recordId)
		return (
			<ContactCell
				contact={contact}
				selected={selected}
				onValueChange={value => this.props.onValueChange(value, contact)}
			/>
		)
	}

	renderSeparator(sectionId: string, rowId: string) {
		return (
			<View key={rowId} style={styles.separator} />
		)
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow.bind(this)}
				renderSeparator={this.renderSeparator.bind(this)}
				style={styles.container}
				renderHeader={() => <Header />}
				renderSectionHeader={(sectionData) => <SectionHeader { ...sectionData} />}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {

	},
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#8E8E8E',
	},
})

export default ContactList
