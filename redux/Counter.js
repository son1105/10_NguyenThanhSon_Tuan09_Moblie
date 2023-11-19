import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { Increment, Decrement } from './actionType'

const Counter = ({count, increase}) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <TouchableOpacity style={{ backgroundColor: 'green', width: 100, height: 100, margin: 20, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          increase()
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Click</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: Increment }),
    decrease: () => dispatch({ type: Decrement })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)