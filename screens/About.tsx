import { ScrollView, StyleSheet } from "react-native";
import AppHeader from "../components/AppHeader";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function About() {
  return (
    <View style={styles.container}>
      <AppHeader text={"About Me"} />
      <ScrollView>
        <View style={styles.container_content}>
          <Text style={styles.section_header}>
            I'm stephen sanwo, I build fullstack software and AI solutions
          </Text>
          <Text>
            {" "}
            I am a Fullstack Software, and ML/AI Solutions Developer. I focus on
            architecting data-driven software that solve domain specific
            problems in complex data-oriented environments (i.e. Financial
            Services Sector and Consumer Markets). I currently lead an analytics
            solutions development team at KPMG Nigeria, focused on developing
            and maintaining scalable analytics solutions for clients. I am also
            a certified robotics process automation (RPA) advanced developer,
            and a Microsoft certified data and analytics expert. I blog about
            tech topics at blog.stephensanwo.dev and I share code snippets at
            codeshare.stephensanwo.dev
          </Text>
        </View>
      </ScrollView>
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
  section_header: {
    fontSize: 18,
    fontWeight: "800",
    color: "#addec9",
    marginBottom: 10,
  },

  section_text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
  },
});
