import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { viewDocument } from "@react-native-documents/viewer";

const DocumentPreview = ({ route }) => {
  const navigation = useNavigation();
  const iconSelector = {
    "application/pdf": require("../src/Icons/pdf.png"),
    "image/webp": require("../src/Icons/jpeg.png"),
    "image/gif": require("../src/Icons/jpeg.png"),
    "image/png": require("../src/Icons/jpeg.png"),
    "image/jpeg": require("../src/Icons/jpeg.png"),
    "audio/ogg": require("../src/Icons/mp3.png"),
    "audio/x-wav": require("../src/Icons/mp3.png"),
    "audio/mpeg": require("../src/Icons/mp3.png"),
  };

  const documentListRender = ({ item }) => {
    const icon = iconSelector[item.type];

    const previewRender = () => {
      viewDocument({ uri: item.uri, mimeType: item.type })
        .then((data) => {
          console.log("data from promise", data);
        })
        .catch((err) => {
          console.log("error:", err);
        });
      console.log(
        "preview file url",
        item.uri,
        "preview file mimetype",
        item.type
      );
    };

    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={previewRender}>
          <Image style={{ width: 50, height: 50 }} source={icon} />
        </TouchableOpacity>
        <Text>{item.type}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <View>
        <Text style={{ fontSize: 20 }}>DocumentPreview</Text>
      </View>
      <View>
        <FlatList data={route.params} renderItem={documentListRender} />
      </View>
    </View>
  );
};

export default DocumentPreview;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 50,
  },
});
