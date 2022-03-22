import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import layout from "../../constants/Layout";
import * as WebBrowser from "expo-web-browser";

interface BlogItemProps {
  title: string;
  description: string;
}

const win = Dimensions.get("window");
const ratio = win.width / 1993;

const BlogItem: React.FC<BlogItemProps> = (props) => {
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
      {/* <Image
        source={{
          uri: "https://cdn.fansided.com/wp-content/uploads/getty-images/2016/09/610165314-arsenal-v-chelsea-premier-league.jpg",
        }}
        
      ></Image> */}
      <Text style={styles.title} onPress={_handlePressButtonAsync}>
        {props.title}
      </Text>
      <Text>{result && JSON.stringify(result)}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 40,
  },
  image_container: {
    height: 250,
    width: win.width,
    resizeMode: "center",
    backgroundColor: "red",
    marginBottom: 30,
  },
  image: {
    height: 250,
    width: win.width,
    resizeMode: "cover",
  },
});
