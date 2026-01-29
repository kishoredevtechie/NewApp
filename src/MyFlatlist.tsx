import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const animals = [
  { id: "1", name: "Lion" },
  { id: "2", name: "Tiger" },
  { id: "3", name: "Elephant" },
  { id: "4", name: "Giraffe" },
  { id: "5", name: "Zebra" },
];

const animalRender = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
  </View>
);

const headerRender = () => (
  <View>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
      Animals List
    </Text>
  </View>
);

const MyFlatlist = () => {
  return (
    <View>
      <ImageBackground
        source={require("./Images/0fdf1e0f-5f43-4285-94f9-bef58f01af24.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <FlatList
          data={animals}
          keyExtractor={(item) => item.id}
          renderItem={animalRender}
          ListHeaderComponent={headerRender}
        />
      </ImageBackground>
    </View>
  );
};

export default MyFlatlist;

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
