import { StyleSheet, View } from "react-native";
import Cell from "./Cell";

export default function Row(props) {
  const data = props.data;

  const cells = [];
  for (let i = 0; i < data.length; i++) {
    cells.push(<Cell key={i} {...data[i]}></Cell>);
  }
  return <View style={style.row}>{cells}</View>;
}

const style = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
});
