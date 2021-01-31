/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
import {generateTestCrash} from 'appcenter-crashes';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {trackEvent} from 'appcenter-analytics';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.root}>
          <TextInput
            placeholder="Number a: "
            onChangeText={setNumberA}
            style={styles.input}
          />
          <TextInput
            placeholder="Number b: "
            onChangeText={setNumberB}
            style={styles.input}
          />
        </View>

        <Button
          title="CLICK"
          onPress={() => {
            // throw new Error('This is a test javascript crash!');
            // generateTestCrash()
            // trackEvent('onClick', {title: 'btn-click-2'})
            // trackEvent('CLICK-EVENT');
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 20,
    paddingHorizontal: 5,
  },
});

export default App;
