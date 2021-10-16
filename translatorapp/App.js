/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { goForAxios  } from './api/apiCall';


const App = () => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState(null)

  const handlePress = () => {
    goForAxios(setLoading, setData)
  }

  const handleClear = () => {
    setData(null)
  }

  return (
    <View style={styles.root}>
     {loading && <Text>Loading....</Text>}
     {data && data.map((item) => <Text>Hello {item.name}</Text>)}
     <Button onPress={handlePress} title="Load"/>
     <Button onPress={handleClear} title="Clear"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
