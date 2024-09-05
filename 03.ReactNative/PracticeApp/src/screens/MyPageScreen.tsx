import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    SafeAreaView
} from 'react-native';

interface MyPageProps {

}

function MyPage({}: MyPageProps) {
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
        <View style={styles.menu}></View>
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
    // borderStyle: 'solid',
    // borderWidth: 2,
    marginVertical: 40,
    justifyContent: 'center'
  },
  menu: {
    flex: 3.5,
    backgroundColor: 'teal',
  },
  footer : {
    flex: 1,
    backgroundColor: 'violet',
  },

  textStyle : {
    fontSize: 20,
  }

});

export default MyPage;