import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ReduxExample } from './examples/ReduxExample';

import { UseStateExample } from './examples/UseStateExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UseStateExample />
      {/* <ReduxExample /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
