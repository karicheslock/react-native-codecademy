import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from 'react-native';

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <>
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>The <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>quick brown fox</Text> jumps over the lazy dog</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{ height: 100, width: 100, }} source={{ uri: 'https://picsum.photos/100/100'}} />
        {/* Use this for preloaded images // <Image style={{ height: 100, width: 100 }} source={require('./react-native.jpg')} /> */}
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
          Scroll me!
        </Text>
        <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
          {/* This is our scrollable area */}
          <ScrollView horizontal={true}>
            <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
            <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
            <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
          </ScrollView>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ margin: 16 }}>
          {pressedCount > 0
            ? `The button was pressed ${pressedCount} times!`
            : 'The button isn\'t pressed yet'
          }
        </Text>
        <Button
          title='Press me'
          onPress={() => setPressedCount(pressedCount + 1)}
          disabled={(pressedCount >= 3 ? true : false)}
        />
      </View>
      <View style={{
        flex: 1,
        alignContent: 'center', 
        justifyContent: 'center', 
        padding: 16,
      }}>
        <Text style={{ marginVertical: 16 }}>
          {name ? `Hi ${name}!` : 'What is your name?'}
        </Text>
        <TextInput
          style={{ padding: 8, backgroundColor: '#f5f5f5' }}
          onChangeText={text => setName(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Box color={'red'} />
        <Box color={'green'} />
        <Box color={'blue'} />
      </View>
    </ScrollView>
  </>
  );
}

export const Box = (props) => (
  // Move a box `View` component here
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
