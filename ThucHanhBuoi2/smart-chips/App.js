import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  const [name, setName] = useState('');
  const [isPress, setIsPress] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderWidth: 1,
          marginVertical: 10,
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <Button title={isPress?"Hide":"Show"} onPress={() => setIsPress(!isPress)}></Button>
      {isPress && name !== '' && (
        <Text style={{ fontWeight: 500, fontSize: 36 }}>Hello:{name}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
