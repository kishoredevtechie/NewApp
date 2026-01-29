import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { pick, types } from '@react-native-documents/picker';
import { useNavigation } from '@react-navigation/native';

const ImagePicker = () => {
  const [imageUri, setimageUri] = useState();

  const navigation = useNavigation();

  const documentPicker = async () => {
    const response = await pick({
      type: types.allFiles,
      allowMultiSelection: true,
    });
    if (response != null) {
      console.log('Resonse from imported document', response);
      navigation.navigate('DocumentPreview', response);
    }
  };

  const cameraPicker = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'front',
        saveToPhotos: true,
      },
      response => {
        console.log('camera picture', response);
        if (response.assets != null) {
          setimageUri(response.assets[0].uri);
        }
      },
    );
  };

  const libraryPicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 2,
      },
      response => {
        console.log('galary picture', response);
        if (response.assets != null) {
          setimageUri(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('./Images/0fdf1e0f-5f43-4285-94f9-bef58f01af24.jpg')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Text>ImagePicker</Text>
        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.buttons} onPress={cameraPicker}>
            <Text style={styles.textComponent}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={libraryPicker}>
            <Text style={styles.textComponent}>Open Gallery</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttons} onPress={documentPicker}>
          <Text style={styles.textComponent}>Choose from library</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    height: 60,
    width: 170,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e09389',
  },
  textComponent: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'regular',
  },
  buttonsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
