import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity, 
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import { theme } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity 
          activeOpacity={0.4} 
          onPress={() => console.log('work touch')}
        >
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => console.log('hi touch')}
        >
          <Text style={styles.btnText}>HI</Text>
        </TouchableWithoutFeedback>
        <Pressable
          onPress={() => console.log('me touch')}
        >
          <Text style={styles.btnText}>ME</Text>
        </Pressable>
        <TouchableHighlight 
          underlayColor='red'
          activeOpacity={0.6}
          onPress={() => console.log('travel touch')}
        >
        <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 36,
    fontWeight: '600',
    color: 'white',

  },
});
