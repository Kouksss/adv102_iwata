import { View, Text, StyleSheet } from "react-native"

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>Kouki Iwata</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 80,
  }
})