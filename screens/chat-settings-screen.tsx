import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Settings Screen</Text>
    </View>
  );
};

export default ChatSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
