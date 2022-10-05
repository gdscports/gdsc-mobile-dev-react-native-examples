import { Button, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export function UseStateExample() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Button title='Decrement' onPress={() => setCounter(counter - 1)} />
      <Text>Current Value: {counter}</Text>
      <Button title='Increment' onPress={() => setCounter(counter + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
