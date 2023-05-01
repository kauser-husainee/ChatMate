import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
