import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const MySectionList = () => {
  return (
    <View>
      <ImageBackground
        source={require("./Images/0fdf1e0f-5f43-4285-94f9-bef58f01af24.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Text>MySectionList</Text>
      </ImageBackground>
    </View>
  );
};

export default MySectionList;

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
