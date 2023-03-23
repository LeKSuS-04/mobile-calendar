import { View, StyleSheet } from "react-native";
import config from "./sharedPanelConfig";

export default function TopPanel() {
  return <View style={styles.topPanel}></View>;
}

const styles = StyleSheet.create({
  topPanel: {
    minHeight: "10%",
    backgroundColor: config.backgroundColor,
    borderBottomLeftRadius: config.borderRadius,
    borderBottomRightRadius: config.borderRadius,
  },
});
