import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoTextList, setTodoTextList] = useState([]);

  const addTodoHandler = () => {
    setTodoTextList((currentTodoTextList) => [
      ...currentTodoTextList,
      todoText,
    ]);
    setTodoText("");
  };

  return (
    <View style={styles.root}>
      <View style={styles.todoForm}>
        <TextInput
          style={styles.todoTextInput}
          placeholder="Enter a todo"
          onChangeText={setTodoText}
          value={todoText}
        />
        <View style={styles.submitButton}>
          <Button title="submit" onPress={addTodoHandler} />
        </View>
      </View>
      <View style={styles.clearButtonRoot}>
        <Pressable style={styles.clearButton} onPress={() => setTodoTextList([])}>
          <Text style={styles.clearButtonText}>x</Text>
        </Pressable>
      </View>
      <View style={styles.todoListRoot}>
        {todoTextList.length > 0 && (
          <Text style={{ fontSize: 24 }}>Todo List...</Text>
        )}
        {/* {todoTextList &&
          todoTextList.map((todoText) => (
            <Text key={Math.random()} style={styles.todoText}>{todoText}</Text>
          ))} */}

        <FlatList
          data={todoTextList}
          renderItem={({ item, index, separators }) => (
            <Text key={index} style={styles.todoText}>
              {item}
            </Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    padding: 20,
		height: "100%",
  },
  todoForm: {
    marginTop: 20,
    flexDirection: "row",
  },
  todoTextInput: {
    width: "70%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  submitButton: {
    width: "30%",
  },
  todoListRoot: {
    marginTop: 40,
  },
  todoText: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    marginVertical: 3,
    borderRadius: 10,
  },
  clearButtonRoot: {
    position: "absolute",
    right: 50,
		bottom: 50,
		zIndex: 100,
  },
  clearButton: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
	},
	clearButtonText: {
		color: "white",
		fontSize: 30,
	}
});
