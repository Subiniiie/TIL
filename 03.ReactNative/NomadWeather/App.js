import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <ScrollView 
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          // indicatorStyle='white'
          contentContainerStyle={styles.weather}
        >
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'tomato'
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'black',
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    fontSize: 178,
    fontWeight: "600",
    marginTop: 50,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
