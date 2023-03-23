import { StyleSheet, View, FlatList } from "react-native";
import Row from "./Row";

export default function Grid(props) {
  const w = props.width;
  const h = props.height;

  const rows = [];
  for (let i = 0; i < h; i++) {
    const row = [];
    for (let j = 0; j < w; j++) {
      row.push({ content: i * w + j + 1 });
    }
    rows.push(<Row key={i} data={row}></Row>);
  }

  return <View style={styles.grid}>{rows}</View>;
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "column",
  },
});
