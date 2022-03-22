import { ScrollView, StyleSheet, FlatList, Dimensions } from "react-native";
import BlogItem from "../components/BlogItem";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Pressable } from "react-native";
import Featured from "../components/BlogItem/Featured";
import AppHeader from "../components/AppHeader";

const win = Dimensions.get("window");

const data = [
  {
    title:
      "Build a full stack AI Chatbot with GPT, React, FastAPI, Redis & AWS",
    description:
      "One of the best ways to learn how to develop full stack applications is to build projects that cover the end to end development process, from designing the solution architecture, to building the API, developing the user interface, and finally deploying your application. This tutorial will take your through each step using a project based example.",
    category: "APIs and Software Development",
  },
  {
    title:
      "Build a full stack AI Chatbot with GPT, React, FastAPI, Redis & AWS",
    description:
      "One of the best ways to learn how to develop full stack applications is to build projects that cover the end to end development process, from designing the solution architecture, to building the API, developing the user interface, and finally deploying your application. This tutorial will take your through each step using a project based example.",
    category: "APIs and Software Development",
  },
];

export default function BlogFeedScreen({
  navigation,
}: RootTabScreenProps<"BlogFeed">) {
  return (
    <View style={styles.container}>
      <AppHeader text={"Dev Blog"} />

      <View style={styles.container_content}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <BlogItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              </Pressable>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={styles.featured_container}>
              <Text style={styles.title_small}>Featured</Text>
              <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <View key={index} style={styles.featured_content}>
                    <Featured
                      title={item.title}
                      description={item.description}
                      category={item.category}
                    />
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
          )}
        />
      </View>

      {/* <View>
        <BlogItem
          title="Build a full stack AI Chatbot with GPT, React, FastAPI, Redis & AWS"
          description="One of the best ways to learn how to develop full stack applications is to build projects that cover the end to end development process, from designing the solution architecture, to building the API, developing the user interface, and finally deploying your application. This tutorial will take your through each step using a project based example."
        />
      </View> */}
      {/* <EditScreenInfo path="/screens/BlogFeedScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container_content: {
    paddingTop: 20,
  },
  title_container: {
    width: "100%",
    borderBottomColor: "#fff",
    paddingBottom: 20,
    borderBottomWidth: 0.2,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
  },
  title_small: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 10,
    color: "#addec9",
  },
  featured_content: {
    width: win.width - 30,
    marginBottom: 30,
  },
  featured_container: {
    borderBottomColor: "#fff",
    borderBottomWidth: 0.2,
    marginBottom: 30,
  },
});
