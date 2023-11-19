import {
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import React from 'react'
import {
    MaterialCommunityIcons,
    AntDesign,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/action";
const Todo = (props) => {
    let item = props.item;
    let dispatch = useDispatch();
    return (
        <View
            style={{
                alignItems: "center",
                marginVertical: 10,
                height: 48,
                borderRadius: 24,
                backgroundColor: "lightgray",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <TouchableOpacity onPress={() => {
                dispatch(deleteItem(item))
            }}
            >
                <MaterialCommunityIcons
                    style={{ marginHorizontal: 30 }}
                    name="checkbox-marked-outline"
                    size={24}
                    color="green"
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: 700 }}>{item}</Text>
            <TouchableOpacity>
                <AntDesign
                    style={{ marginHorizontal: 30 }}
                    name="edit"
                    size={24}
                    color="red"
                />
            </TouchableOpacity>
        </View>
    )
}

export default Todo