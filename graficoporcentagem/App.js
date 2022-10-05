import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import Pie from 'react-native-pie'

const Data = [
  {percentage: 65, color: '#FFAB0F'},
  //{percentage: 33, color: '#247AFD'},
  //{percentage: 34, color: '#FE46A5'},

]

export default props => {
  return(
    <View style={styles.container}>
      <Pie
        sections={Data}
        radious={80}
        innerRadius={60}
        dividerSize={1}
        backgroundColor={'#FFF'}
      />
      <Text style={styles.text}>{Data[0].percentage}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFF'
  },
  text: {
    color: '#000',
    fontSize: 30,
    position: 'absolute'
  }
})