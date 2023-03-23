import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import TopPanel from "./lib/panels/TopPanel";
import BottomPanel from "./lib/panels/BottomPanel";
import Grid from "./lib/grid/Grid";

export default function App() {
  return (
    <View style={styles.container}>
      <TopPanel />
      <Grid width="7" height="6" />
      <BottomPanel />
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
