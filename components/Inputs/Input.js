import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './StyleSheet.js'
import { Input } from 'react-native-elements'
import { Icon } from '@rneui/themed';


const Inputs = (props) => {
  const [isFocus, setIsFocus] = useState(false)
  onFocusChange = () => {
    setIsFocus(!isFocus)
  }

  return (
    <View style={[styles.container, { borderColor: isFocus ? '#779ef' : '#eee' }]}>
      <Input 
        placeholder={props.name}
        onFocus={onFocusChange}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        secureTextEntry={props.pass}
        onChangeText= {props.onchangeText} 
        rightIcon={
          <Icon
            name={props.icon}
            size={27}
            width={25}
            color={isFocus ? 'orange' : '#0CC'}
          />
        }
      />
    </View>
  )
}

export default Inputs;