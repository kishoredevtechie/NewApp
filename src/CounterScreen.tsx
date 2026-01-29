import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.headingText}>CounterScreen</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:'bold',
    },
    mainView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})