import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { addItem } from "../../redux/action";
import { useDispatch } from "react-redux";
export default function AddJob(props) {
  var obj = props.obj;
  var [job, setJob] = React.useState("");
  var dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginVertical: 10,
            height: "10%",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          ADD YOUR JOB
        </Text>
        <View
          style={{
            width: "90%",
            borderColor: "#9095A0",
            borderWidth: 1,
            borderRadius: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="list-alt"
            size={30}
            color="green"
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            style={{
              fontSize: 14,
              backgroundColor: "#ffffff",
              height: "99%",
              padding: 10,
              width: "87%",
            }}
            placeholder="input your job"
            value={job}
            onChangeText={setJob}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 190,
            height: 44,
            backgroundColor: "#00BDD6",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={() => {
            dispatch(addItem(job));
            props.navigation.navigate("Screen02", obj.name);
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16, marginRight: 10 }}>
            FINSH
          </Text>
          <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 190, height: 190 }}
          source={require("../../assets/addJob.jpg")}
        />
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
