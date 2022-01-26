import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, LogBox } from 'react-native'
import Header from '../../components/Header'
import DashboardItem from '../../components/DashboardItem'
import { getAllDashboard } from '../../services/getData'
export default function DashboardScreen() {
  const navigation = useNavigation()
  const [dashboards, setDashboards] = useState([])
  useEffect(async () => {
    LogBox.ignoreLogs(['Setting a timer'])
    console.log('Here')
    setDashboards(await getAllDashboard())
  }, [])
  return (
    <View style={styles.container}>
      <Header
        iconName="home-outline"
        title="GoodStart Early Learning ABC"
        iconLeft="add-box"
        marginLeft={2}
        marginRight={35}
      />

      <View style={styles.contentContainer}>
        {dashboards &&
          dashboards.map((dashboard, id) => {
            return <DashboardItem dashboard={dashboard} key={id} />
          })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
})
