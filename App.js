import React from "react";
import {
  StyleSheet, 
  Text, 
  View
} from "react-native";
import Posts from "./components/posts";

const App = () => (
  <View style={styles.app}>
    <Text style={styles.baseText}>
      <Posts />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  baseText: {
    fontFamily: "monospace",
    fontSize: 13,
  },
});

export default App;
