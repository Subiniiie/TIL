import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { navigations } from '../constants/navigations';
import { StackParamList } from '../stack/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

type MyPageProps = StackScreenProps<
  StackParamList,
  typeof navigations.MYPAGE
>

function MyPageScreen({navigation}: MyPageProps) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage}></View>
          <View style={styles.profile}>
            <Text style={styles.textStyle}>이름 : 구현우</Text>
            <Text style={styles.textStyle}>20대 남성</Text>
            <Text>리뷰 : 26개</Text>
          </View>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate(navigations.MYREVIEW)}
          >
            <Text style={styles.buttonText}>내 리뷰 보러가기</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate(navigations.UPDATEPROFILE)}
          >
            <Text style={styles.buttonText}>회원정보 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => 
              Alert.alert(
                '로그아웃',
                '로그아웃 하시겠습니까?',
                [
                  { text: '취소', onPress: () => {}, style: 'cancel' },
                  { text: '로그아웃', onPress: () => {}, style: 'destructive' }
                ]
            )}
          >
            <Text style={styles.buttonText}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => 
              Alert.alert(
                '회원탈퇴',
                '회원탈퇴 하시겠습니까?',
                [
                  { text: '취소', onPress: () => {}, style: 'cancel' },
                  { text: '회원탈퇴', onPress: () => {}, style: 'destructive' }
                ]
              )}
          >
            <Text style={styles.buttonText}>회원탈퇴</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 3,
    flexDirection: 'row',
    // backgroundColor: 'orange',
  },
  profileImage : {
    width: '32%',
    height: '44%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 125,
    marginHorizontal: 25,
    marginVertical: 40,
  },
  profile : {
    width: '45%',
    height: '45%',
    marginVertical: 40,
    justifyContent: 'center'
  },
  optionContainer: {
    flex: 3.5,
    // backgroundColor: 'teal',
    flexDirection: 'column',
  },
  optionButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', // 버튼 배경색
    marginVertical: 2,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black', // 버튼 텍스트 색상
  },
  footer : {
    flex: 1,
    backgroundColor: 'violet',
  },
  textStyle : {
    fontSize: 20,
  }

});

export default MyPageScreen;
