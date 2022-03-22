import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  text: string;
}

const AppHeader: React.FC<Props> = (props) => {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  title_container: {
    width: "100%",
    paddingBottom: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#fff",
  },
});
