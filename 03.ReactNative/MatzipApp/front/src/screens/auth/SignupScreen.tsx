import React, {useRef} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import { validateSignup } from '../../utils';
import { TextInput } from 'react-native-gesture-handler';



function SignupScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup
  })

  const handleSubmit = () => {
    console.log(signup.values);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField 
        autoFocus
          placeholder='이메일'
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode='email'
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
          >
        </InputField>
        <InputField
          ref={passwordRef}
          placeholder='비밀번호'
          textContentType='oneTimeCode' 
          error={signup.errors.password}
          touched={signup.touched.password}
          secureTextEntry
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps('password')}
          >
        </InputField>
        <InputField 
          ref={passwordConfirmRef}
          placeholder='비밀번호 확인' 
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          secureTextEntry
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        >
        </InputField>
    </View>
    <CustomButton label='회원가입' onPress={handleSubmit}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  }
});

export default SignupScreen;