import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect } from "react";

const ApiPost = () => {
  const fetchPost = async () => {
    let data = {
      userId: 22,
      id: 23,
      title: "naan than da unga appan pesran",
      body: "veliya vaa da vanthu paaru da, veliya vanthu paaru da. enga area ku vanthu paaru da. mudinja vanthu paaru da. va da va da va da",
    };
    const url = "https://jsonplaceholder.typicode.com/posts";
    const urlResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const urlJsonResponse = await urlResponse.json();

    console.log("response", urlJsonResponse);
    if (urlJsonResponse.ok) {
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("./Images/0fdf1e0f-5f43-4285-94f9-bef58f01af24.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Text>ApiPost</Text>
      </ImageBackground>
    </View>
  );
};

export default ApiPost;

const styles = StyleSheet.create({
    bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
