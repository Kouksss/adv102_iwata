import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => setCount(c => c + 1), 10);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => interval && clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  const formatTime = (count) => {
    const h = Math.floor(count / 360000);
    const m = Math.floor((count % 360000) / 6000);
    const s = Math.floor((count % 6000) / 100);
    const ms = count % 100;

    const pad = (num) => num.toString().padStart(2, "0");

    return `${pad(h)}:${pad(m)}:${pad(s)}.${pad(ms)}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{formatTime(count)}</Text>

      <TouchableOpacity
        style={styles.buttonStart}
        onPress={() => setIsRunning(!isRunning)}
      >
        <Text style={styles.buttonText}>{isRunning ? "Stop" : "Start"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonReset} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
    gap: 10,
  },
  counter: {
    fontSize: 60,
    fontWeight: "bold",
  },
  buttonStart: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonReset: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
