import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import firebase from '@react-native-firebase/app';
import auth, {
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const SignupForm = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupresponseSuccess, setSignupresponseSuccess] = useState(false);
  const [signupresponseFailed, setSignupresponseFailed] = useState(false);
  const [signupresponseFailedmessage, setSignupresponseFailedmessage] =
    useState('');

  useEffect(() => {
    console.log('name:', name);
  }, [name]);
  useEffect(() => {
    console.log('email:', email);
  }, [email]);
  useEffect(() => {
    console.log('password:', password);
  }, [password]);

  const SignUpButton = () => {
    createUserWithEmailAndPassword(auth(), email, password)
      .then(() => {
        console.log('User created successfully');
        setSignupresponseSuccess(true);
      })
      .catch(error => {
        if (
          error.message ==
          '[auth/email-already-in-use] The email address is already in use by another account.'
        ) {
          setSignupresponseFailedmessage('Email already exists');
        }
        console.log('Error response from firebase', error);
        setSignupresponseFailed(true);
      });
  };

  const ModalSuccess = () => {
    navigation.navigate('LoginScreen');
    setSignupresponseSuccess(false);
  };

  return (
    <>
      <View style={styles.mainView}>
        <Ionicons name="log-in-outline" size={50} color="black" />
        <Text style={{ fontSize: 32, fontWeight: '800', marginBottom: 25 }}>
          Create your account
        </Text>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#777"
            onChangeText={value => setName(value)}
            autoCapitalize="none"
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#777"
            secureTextEntry={true}
            onChangeText={value => setConfirmPassword(value)}
          />

          <TouchableOpacity
            onPress={SignUpButton}
            style={[styles.loginButton, { backgroundColor: '#0c84e0' }]}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.subView, { marginHorizontal: 10 }]}></View>
      </View>
      {/* 




*/}

      {/* success scenario */}
      <Modal visible={signupresponseSuccess} transparent animationType="fade">
        <View style={styles.modalMainview}>
          <View style={styles.modalContainer}>
            <Ionicons
              name="checkmark-done-circle"
              size={60}
              color="green"
            ></Ionicons>
            <Text style={{ fontWeight: '700', fontSize: 18 }}>Success</Text>
            <Text style={{ fontSize: 14, marginTop: 20, marginBottom: 30 }}>
              Account created successfully
            </Text>
            <TouchableOpacity
              style={[styles.modalLoginbutton, { backgroundColor: 'green' }]}
              onPress={ModalSuccess}
            >
              <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
                Login to continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* 




*/}

      {/* failure scenario */}
      <Modal visible={signupresponseFailed} transparent animationType="fade">
        <View style={styles.modalMainview}>
          <View style={styles.modalContainer}>
            <Ionicons name="alert" size={60} color="red"></Ionicons>
            <Text style={{ fontWeight: '700', fontSize: 18 }}>Failed</Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                marginBottom: 30,
                color: 'red',
              }}
            >
              {signupresponseFailedmessage}
            </Text>
            <TouchableOpacity
              style={[styles.modalLoginbutton, { backgroundColor: 'red' }]}
              onPress={() => {
                setSignupresponseFailed(false);
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
                Retry
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  modalLoginbutton: {
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 60,
  },
  modalMainview: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    height: 350,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F2F4F7',
    marginHorizontal: 20,
    marginVertical: 100,
  },
  textInputView: {
    marginBottom: 15,
    marginHorizontal: 10,
  },
  input: {
    marginVertical: 15,
    borderRadius: 10,
    color: 'black',
    paddingLeft: 20,
    elevation: 1,
    backgroundColor: 'white',
    height: 45,
  },
  loginButton: {
    height: 45,
    elevation: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
