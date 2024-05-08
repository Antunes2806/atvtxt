import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Ana Julia Antunes Cardoso</Text>
      <Text style={styles.numero}>03</Text>
      <Text style={styles.sala}>I2HN</Text>
      <Text style={styles.hora}>15:20</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  nome: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right",
  },
  numero: {
    fontSize: 25,
    fontFamily: "italic",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    textAlign: "left",
    width: 50,
  },
  sala: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  hora: {
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
  },
});
