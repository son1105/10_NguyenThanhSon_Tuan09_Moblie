import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Fontisto,
} from "@expo/vector-icons";
import React from "react";
import Todo from "./todo";
import { loadItem, searchItem } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux"
var obj = {}
export default function ManageTodos(props) {
  var name = props.name
  var data = useSelector(state => state);
  var [arr, setArr] = React.useState([]);
  var [todo, setTodo] = React.useState("");
  var [isEdit, setIsEdit] = React.useState(true);
  var dispatch = useDispatch();
  React.useEffect(() => {
    fetch("https://654370a801b5e279de205e32.mockapi.io/api/v1/todo")
      .then((response) => response.json())
      .then((result) => {
        var temp = result.filter((item) => {
          return item.name == name;
        });
        obj = temp[0]
        setIsEdit(true);
        dispatch(loadItem(obj.todos));
      });
  }, []);
  React.useEffect(() => {
    setArr(data)
    if(isEdit){
      obj = {...obj, todos: data};
    fetch('https://654370a801b5e279de205e32.mockapi.io/api/v1/todo/' + obj.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    })
    }
  }, [data])
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            borderColor: "#9095A0",
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: "#ffffff",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsEdit(false);
              dispatch(loadItem(obj.todos));
              dispatch(searchItem(todo));
            }}
          >
            <Fontisto
              name="search"
              size={30}
              color="black"
              style={{ marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              fontSize: 14,
              backgroundColor: "#ffffff",
              height: 44,
              padding: 10,
              width: "87%",
            }}
            placeholder="Search"
            value={todo}
            onChangeText={setTodo}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          style={{ width: "90%" }}
          data={arr}
          renderItem={({ item }) => (
            <Todo item={item} />
          )}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    style={{
                        width: 69,
                        height: 69,
                        borderRadius: 35,
                        backgroundColor: "#00BDD6",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => {
                        props.navigation.navigate("Screen03", obj);
                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 700, color: "#ffffff" }}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
