import { StyleSheet, View, Text } from "react-native";

export default function Cell(props) {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flexBasis: 1,
    flexGrow: 1,
    padding: 5,
    borderColor: "#885c4c",
    borderWidth: 1,
  },
  text: {
    color: "#44241c",
  },
});
