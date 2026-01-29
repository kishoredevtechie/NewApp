import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <Ionicons name="person-add-outline" size={50} color="black" />
      <Text style={{ fontSize: 32, fontWeight: '800', marginBottom: 25 }}>
        Register
      </Text>
      <View style={[styles.subView, { marginHorizontal: 10 }]}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>Got an account?</Text>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.goBack('LoginScreen')}
        >
          <Text style={{ fontSize: 14, color: '#27a8e5', fontWeight: '500' }}>
            Log in here{' '}
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
        <TouchableOpacity
          style={styles.signinOptionView}
          onPress={() => {
            navigation.navigate('SignupForm');
          }}
        >
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
};

export default SignupScreen;

const styles = StyleSheet.create({
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
