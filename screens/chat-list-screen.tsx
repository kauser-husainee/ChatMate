import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chat List Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => props.navigation.navigate("ChatScreen")}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
