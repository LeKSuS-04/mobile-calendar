import { View, StyleSheet } from "react-native";
import config from "./sharedPanelConfig";

export default function TopPanel() {
  return <View style={styles.topPanel}></View>;
}

const styles = StyleSheet.create({
  topPanel: {
    minHeight: "20%",
    backgroundColor: config.backgroundColor,
    borderTopLeftRadius: config.borderRadius,
    borderTopRightRadius: config.borderRadius,
  },
});
