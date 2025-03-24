import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Exercise6() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [editingUser, setEditingUser] = useState(null);

  const handleInputChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm({ name: "", phone: "", address: "" });
    setEditingUser(null);
  };

  const handleAddUser = () => {
    const { name, phone, address } = form;
    if (name && phone && address) {
      const newUser = { id: Date.now(), name, phone, address };
      setUsers((prev) => [...prev, newUser]);
      resetForm();
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setForm({ name: user.name, phone: user.phone, address: user.address });
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? { ...editingUser, ...form } : user
    );
    setUsers(updatedUsers);
    resetForm();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const renderUserItem = ({ item, index }) => (
    <View style={styles.userItem}>
      <Text style={styles.userText}>
        {index + 1}. {item.name} - {item.phone} - {item.address}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEditUser(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteUser(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <Text style={styles.text}>{editingUser ? "Edit User" : "Add User"}</Text>
      <Text style={styles.count}>Total Users: {users.length}</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={form.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        value={form.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={form.address}
        onChangeText={(text) => handleInputChange("address", text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={editingUser ? handleUpdateUser : handleAddUser}
      >
        <Text style={styles.buttonText}>{editingUser ? "Update User" : "Add User"}</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserItem}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 700,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    width: "70%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  button: {
    width: "70%",
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    cursor: 'pointer',
  },
  buttonText: {
    fontSize: 15,
  },
  userItem: {
    width: "100%",
    padding: 10,
    borderColor: "pink",
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "column",
  },
  userText: {
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  editButton: {
    backgroundColor: "yellow",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    cursor: 'pointer',

  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    cursor: 'pointer',
  },
});
