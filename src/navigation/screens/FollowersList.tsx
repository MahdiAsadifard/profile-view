
import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity
} from "react-native";

import { api_call } from "../../tools/utils";
import { Colors } from "../../tools/styles";

interface IProps {
    navigation?: any;
    route?: any;
};

const FollowersList: React.FunctionComponent<IProps> = ({
    navigation,
    route
}): React.ReactNode => {
    const data = route.params.data;

    const onSelectUser = async (user) => {
        const response = await api_call(`users/${user.login}`);
        if(response.status === "404") {
            navigation.navigate("NotFound");
            return;
        }
        navigation.navigate("Profile", {
            user: response
        });
    };

    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity style={[styles.row, styles.padding]}
                onPress={()=>onSelectUser(item)}
            >
                 <Image
                    style={[styles.avatar]}
                    source={{
                        uri: item.avatar_url
                    }}
                />
                <Text style={[styles.text]}>{item.login}</Text>
            </TouchableOpacity>
        );
    };

    const separatorItemsHandler = () => {
        return (
            <View 
                style={{
                    borderWidth: 1,
                    borderColor: Colors.grey2
                }}
            />
        )
    }
        
    const emptyListHandler = () => {
        return (
            <View>
                <Text>No item found.</Text>
            </View>
        )
    };

    return(
        <View style={[styles.conatiner, styles.padding]}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
                initialNumToRender={5}
                windowSize={5}
                ItemSeparatorComponent={separatorItemsHandler}
                ListEmptyComponent={emptyListHandler}
                showsVerticalScrollIndicator={false}
            />
        </View>        
    );
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center'
    },
    padding: {
        padding: 10
    },
    avatar: {
        width: 75,
        height: 75,
        resizeMode: "contain",
        borderRadius: 75/2,
        borderWidth: 1,
        borderColor: Colors.grey2,
        marginHorizontal:10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        flex: 1
    }
});

export default FollowersList;