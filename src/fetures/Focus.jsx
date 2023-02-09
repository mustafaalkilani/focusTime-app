import { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { colors } from '../utils/colors.jsx';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton.jsx';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} onChangeText={setSubject} label="What would you like to focus on ?" />
        <View style={styles.buttonContainer}>
          <RoundedButton size={50} title={'+'} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  buttonContainer: {
    justifyContent: 'center',
  },
    textInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 14,
  },
  textInputContainer: {
    padding: 25,
    justifyContent: 'flex-top',
    flexDirection: 'row',
  },
  text: {
    color: colors.White,
  }
})