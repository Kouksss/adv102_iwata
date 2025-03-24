import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ExerciseHome() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    const { name, email, password } = form;
    if (name && email && password) {
      setSubmitted(true);
    }
  };

  const InputField = ({ placeholder, value, onChangeText, secureTextEntry = false }) => (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );

  return (
    <View style={styles.container}>
      {!submitted ? (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register</Text>
          <InputField
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <InputField
            placeholder="Email"
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <InputField
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
          />
          <Button title="Pick an image from album" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>User Details</Text>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <Text style={styles.detailText}>Name: {form.name}</Text>
          <Text style={styles.detailText}>Email: {form.email}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 700,
  },
  input: {
    width: "60%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  button: {
    width: "60%",
    padding: 10,
    backgroundColor: "#3bd95a",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    cursor: 'pointer',
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  detailsContainer: {
    alignItems: "center",
  },
  detailText: {
    fontSize: 18,
    marginTop: 10,
  },
});
