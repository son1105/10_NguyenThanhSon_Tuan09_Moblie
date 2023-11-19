import {
    Text,
    View,
    Image,
} from "react-native";
import React from 'react'
import ManageTodos from './ManageTodos'
import { Provider } from 'react-redux'
import store from '../../redux/store'
const Screen02 = ({ navigation, route }) => {
    var name = route.params;
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: "row", width: "100%", marginRight: 20 }}>
                    <Image
                  source={require("../../assets/user.jpg")}
                  style={{ width: 80, height: 80, borderRadius: 40 }}
                />
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: 700 }}>Hi {name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700 }}>
                            Have agrate day a head
                        </Text>
                    </View>
                </View>
            ),
        });
    }, [])
    return (
        <Provider store={store}>
            <View style={{ flex: 3 }}>
                <ManageTodos navigation={navigation} name={name} />
            </View>
        </Provider>
    )
}

export default Screen02