import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Grid from "./lib/grid/Grid";

export default function App() {
  return (
    <View style={styles.container}>
      <Grid width="7" height="6" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#A16F5A",
  },
});
