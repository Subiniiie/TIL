import React from 'react';
import {
    StyleSheet, 
    View,
    Text

} from 'react-native';

interface HomeScreenProps {

}

function HomeScreen({}: HomeScreenProps) {
  return (
    <View>
        <Text>홈스크린</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;