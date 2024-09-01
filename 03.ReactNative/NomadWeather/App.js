import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import { Fontisto } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const API_KEY = Constants.expoConfig.extra.openWeatherApiKey;

const icons = {
  'Clouds': "cloudy",
  'Clear': 'day-sunny',
  'Atmosphere': 'cloudy-guest',
  'Snow': 'snowflake',
  'Rain': 'rain',
  'Drizzle': 'rains',
  'Thunderstorm': 'lightning',
}

export default function App() {
  const [ city, setCity ] = useState('Loading...');
  const [ days, setDays ] = useState([]);
  const [ ok, setOk ] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude}, 
      {useGoogleMaps: false}
    );
    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    const json = await response.json();
    setDays(
      json.list.filter((weather) => {
        if (weather.dt_txt.includes('12:00:00')) {
          return weather
        }
      })
    );
  };

  useEffect(() => {
    getWeather();
  }, [])


  return (
      <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>
        <ScrollView 
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          // indicatorStyle='white'
          contentContainerStyle={styles.weather}
        >
          {days.length === 0 ? (
            <View style={{...styles.day, alignItems: 'center'}}>
              <ActivityIndicator color='white' style={{ marginTop: 10 }} size='large' />
            </View>
          ) : (
            days.map((day, index) => 
              <View key={index} style={styles.day}>
                <View 
                  style={{ 
                    flexDirection:'row', 
                    alignItems:'center',
                    width: '100%',
                    justifyContent: 'space-between',
                    }}>
                <Text style={styles.temp}>
                  {parseFloat(day.main.temp).toFixed(1)}
                </Text>
                <Fontisto name={icons[day.weather[0].main]} size={48

                } color='white' />
                </View>
                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
              </View>)
          )}
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
  },
  temp: {
    fontSize: 98,
    fontWeight: "600",
    color: "white",
    marginTop: 50,
  },
  description: {
    color: "white",
    fontSize: 32,
    marginTop: -30,
  },
  tinyText: {
    color: "white",
    fontSize: 20,
  },
});
