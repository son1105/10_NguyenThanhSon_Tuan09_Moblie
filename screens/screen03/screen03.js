import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import AddJob from './AddJob'
const screen03 = ({navigation, route}) => {
    var obj = route.params;
    React.useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <View style={{ flexDirection: "row", width: "100%", marginLeft: 20 }}>
              <Image
                source={require("../../assets/user.jpg")}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
              <View style={{ justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Hi {obj.name}</Text>
                <Text style={{ fontSize: 14, fontWeight: 700 }}>
                  Have agrate day a head
                </Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Screen02", obj.name);
              }}
            >
              <AntDesign
                style={{ marginRight: 30 }}
                name="arrowleft"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ),
        });
      }, []);
  return (
    <Provider store={store}>
        <AddJob navigation={navigation} obj={obj}/>
    </Provider>
  )
}

export default screen03