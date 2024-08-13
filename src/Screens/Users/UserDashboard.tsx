import { Text, View } from 'react-native'
import React, { Component } from 'react'
import UserCard from '../../components/UserCard'

export class UserDashboard extends Component {
  render() {
    return (
      <View>
        <UserCard />
      </View>
    )
  }
}

export default UserDashboard