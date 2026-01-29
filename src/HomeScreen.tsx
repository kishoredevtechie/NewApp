import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/loginSlice.tsx';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { isLoggedIn, username } = useSelector(state => state.loginAuth);
  const dispatch = useDispatch();

  return (
    <View style={styles.bgImage}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          dispatch(logout());
          navigation.navigate('LoginScreen');
        }}
      >
        {isLoggedIn ? (
          <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
        ) : (
          <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
        )}
      </TouchableOpacity>
      {isLoggedIn ? (
        <Text style={styles.userName}>Welcome {username}</Text>
      ) : (
        <Text style={styles.userName}>Guest user</Text>
      )}

      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('MyScrollComponent')}
        >
          <Text style={styles.textComponent}>MyScrollComponent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('MySectionList')}
        >
          <Text style={styles.textComponent}>MySectionList</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('MyFlatlist')}
        >
          <Text style={styles.textComponent}>MyFlatlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('UserFlatlist')}
        >
          <Text style={styles.textComponent}>UserFlatlist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('ApiCall')}
        >
          <Text style={styles.textComponent}>ApiCall</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('ApiPost')}
        >
          <Text style={styles.textComponent}>ApiPost</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('ImagePicker')}
        >
          <Text style={styles.textComponent}>DocumentPicker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('CounterScreen')}
        >
          <Text style={styles.textComponent}>CounterScreen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.push('TabNavigation')}
        >
          <Text style={styles.textComponent}>TabNavigation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textComponent}>CounterScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  buttonsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttons: {
    height: 60,
    width: 170,
    borderRadius: 10,
    borderColor: 'bdbdbd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: 'white',
    // backgroundColor: '#e09389',
  },
  textComponent: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'regular',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logoutButton: {
    width: 70,
    height: 30,
    backgroundColor: '#ff2600ff',
    color: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 70,
    right: 30,
  },
});
