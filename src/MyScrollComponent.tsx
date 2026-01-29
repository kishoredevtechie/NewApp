import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyScrollComponent() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("./Images/0fdf1e0f-5f43-4285-94f9-bef58f01af24.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <ScrollView style={styles.safeAreaView}>
          <Text style={styles.textSize}>
            In academic writing, readers expect each paragraph to have a
            sentence or two that captures its main point. They’re often called
            “topic sentences,” though many writing instructors prefer to call
            them “key sentences.” There are at least two downsides of the phrase
            “topic sentence.” First, it makes it seem like the paramount job of
            that sentence is simply to announce the topic of the paragraph.
            Second, it makes it seem like the topic sentence must always be a
            single grammatical sentence. Calling it a “key sentence” reminds us
            that it expresses the central idea of the paragraph. And sometimes a
            question or a two-sentence construction functions as the key.
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 40,
  },
  safeAreaView: {
    padding: 20,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
