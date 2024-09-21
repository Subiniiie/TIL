/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';



function App(): JSX.Element {
 

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text>알람</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 alarmBtn: {

 }
});

export default App;
