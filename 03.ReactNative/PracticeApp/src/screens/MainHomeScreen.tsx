import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../stack/StackNavigator';
import {
  StyleSheet, 
  SafeAreaView,
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import { navigations } from '../constants/navigations';

type MainHomeScreenProps = StackScreenProps<
  StackParamList,
  typeof navigations.MAINHOME
>

function MainHomeScreen({navigation}: MainHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='마이페이지'
        onPress={() => navigation.navigate(navigations.MYPAGE)}
      >
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MainHomeScreen;