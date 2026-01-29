import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from './Redux/loginSlice';
import Ionicons from '@react-native-vector-icons/ionicons';
import auth, { signInWithEmailAndPassword } from '@react-native-firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage, setErrormessage] = useState(null);
  const [loginloading, setLoginloading] = useState(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('the Username is', email);
  }, [email]);

  useEffect(() => {
    console.log('the Password is', password);
  }, [password]);

  const loginValidate = () => {
    signInWithEmailAndPassword(auth(), email, password)
      .then(success => {
        console.log('success response', success);
        console.log('user fetch', success.additionalUserInfo);
        console.log('Login Success');
        dispatch(login(email));
      })
      .catch(error => {
        console.log('error respose:', error);
        setErrormessage(true);
      });
  };

  return (
    <View style={styles.mainView}>
      <Ionicons name="log-in-outline" size={50} color="black" />
      <Text style={{ fontSize: 32, fontWeight: '800', marginBottom: 25 }}>
        Log In
      </Text>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          onChangeText={value => setEmail(value)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        {errormessage && (
          <Text style={styles.incorrectLogin}>
            Incorrect username or password
          </Text>
        )}
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#27a8e5' }}>
            Forget password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={loginValidate} style={styles.loginButton}>
          {<Text style={{ fontSize: 16, color: 'white' }}>Log In</Text>}
        </TouchableOpacity>
      </View>
      <View style={[styles.subView, { marginHorizontal: 10 }]}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          Don't have account?
        </Text>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.push('SignupScreen')}
        >
          <Text style={{ fontSize: 14, color: '#27a8e5', fontWeight: '500' }}>
            Register here{' '}
          </Text>
          <Ionicons name="arrow-forward-outline" size={20} color="#27a8e5" />
        </TouchableOpacity>
      </View>
      <View style={styles.subView}>
        <TouchableOpacity style={styles.signinOptionView}>
          <View>
            <Ionicons name="logo-apple" size={25} color="black" />
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>with</Text>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinOptionView}>
          <View>
            <Ionicons name="mail-outline" size={25} color="red" />
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>with</Text>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Email</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  incorrectLogin: {
    color: 'red',
  },
  loginButton: {
    height: 45,
    backgroundColor: '#0c84e0',
    elevation: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 200,
    borderRadius: 10,
  },
  textInputView: {
    marginBottom: 15,
    marginHorizontal: 10,
  },
  input: {
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    borderColor: '#bdbdbd',
    paddingLeft: 20,
    elevation: 2,
    backgroundColor: 'white',
    height: 45,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F2F4F7',
    marginHorizontal: 20,
    marginVertical: 100,
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signinOptionView: {
    width: 160,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 10,
    marginVertical: 20,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
