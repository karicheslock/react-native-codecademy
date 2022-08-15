import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
