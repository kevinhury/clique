import React, { Component, PropTypes } from 'react'
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native'
import ContactCell from './ContactCell'
import SectionHeader from './SectionHeader'
import Footer from './Footer'
import Header from './Header'

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    selectedList: PropTypes.array.isRequired,
    onValueChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId]
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`]

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    })

    const { dataBlob, sectionIds, rowIds } = this.formatData(props.contacts)
    this.dataSource = ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
  }

  formatData(data) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    const dataBlob = {}
    const sectionIds = []
    const rowIds = []

    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      const currentChar = alphabet[sectionId]
      const users = data.filter((user) => user.name.toUpperCase().indexOf(currentChar) === 0)
      if (users.length > 0) {
        sectionIds.push(sectionId)
        dataBlob[sectionId] = { character: currentChar }

        rowIds.push([])

        for (let i = 0; i < users.length; i++) {
          const rowId = `${sectionId}:${i}`
          rowIds[rowIds.length - 1].push(rowId)
          dataBlob[rowId] = users[i]
        }
      }
    }

    return { dataBlob, sectionIds, rowIds }
  }

  renderRow(contact) {
    return (
      <ContactCell
        contact={contact}
        selected={false}
        onValueChange={value => this.props.onValueChange(value, contact)}
      />
    )
  }

  renderSeparator(sectionId, rowId) {
    return (
      <View key={rowId} style={styles.separator} />
    )
  }

  onValueChange(value) {
    console.log(value)
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSeparator={this.renderSeparator.bind(this)}
        style={styles.container}
        renderHeader={() => <Header />}
        renderFotter={() => <Footer />}
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
  }
})

export default ContactList
