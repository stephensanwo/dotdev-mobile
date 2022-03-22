import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import layout from "../../constants/Layout";
import * as WebBrowser from "expo-web-browser";

interface BlogItemProps {
  title: string;
  description: string;
  category: string;
}

const win = Dimensions.get("window");
const ratio = win.width / 1993;

const Featured: React.FC<BlogItemProps> = (props) => {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result: any = await WebBrowser.openBrowserAsync(
      "https://www.stephensanwo.dev/blog/build-a-full-stack-ai-chatbot-part-i-introduction",
      { showTitle: false, dismissButtonStyle: "done", controlsColor: "#addec9" }
    );
    setResult(result);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://ddxzec2p5v0iq.cloudfront.net/blog-image-design.png",
          }}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.category}>{props.category}</Text>
      <Text style={styles.title} onPress={_handlePressButtonAsync}>
        {props.title}
      </Text>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 10,
    width: win.width - 40,
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 5,
    lineHeight: 20,
  },

  category: {
    fontSize: 10,
    fontWeight: "800",
    color: "#addec9",
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 40,
    lineHeight: 20,
  },
  image_container: {
    height: 250,
    width: win.width - 40,
    resizeMode: "center",
    backgroundColor: "red",
    marginBottom: 30,
    marginRight: 10,
  },
  image: {
    height: 250,
    width: win.width - 40,
    resizeMode: "cover",
  },
});
