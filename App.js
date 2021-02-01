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
import {trackEvent} from 'appcenter-analytics';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [total, setTotal] = useState(0)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.root}>
          <TextInput
            placeholder="Number a: "
            onChangeText={setNumberA}
            style={styles.input}
            keyboardType="decimal-pad"
          />
          <TextInput
            placeholder="Number b: "
            onChangeText={setNumberB}
            style={styles.input}
            keyboardType="decimal-pad"
          />
          <Text style={styles.txtTotal}>Total is: {total}</Text>
        </View>

        <Button
          title="CLICK"
          onPress={() => {
            // throw new Error('This is a test javascript crash!');
            // generateTestCrash()
            // trackEvent('onClick', {title: 'btn-click-2'})
            // trackEvent('CLICK-EVENT');
            setTotal(parseInt(numberA) + parseInt(numberB));
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
  txtTotal: {
    marginVertical: 20
  }
});

export default App;
