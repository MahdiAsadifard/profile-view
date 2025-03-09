
import React from "react";
import {StyleSheet, View, Text} from "react-native";


import SearchBar from "../../components/searchBar";
import { api_call } from "../../tools/utils";

interface IProps {
    navigation?: any;
    route?: any;
};

const Home: React.FunctionComponent<IProps> = ({
    navigation,
    route
}): React.ReactNode => {

    // e: usename
    const onSearchbarCallback = async (e: string) => {
        const response = await api_call(`users/${e}`);
        if(response.status === "404") {
            navigation.navigate("NotFound");
            return;
        }
        navigation.navigate("Profile", {
            user: response
        });
    };

    return(
        <View style={[styles.conatiner, styles.padding]}>
            <Text style={[styles.searchText]}>Search</Text>
            <SearchBar callback={onSearchbarCallback} />
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
    searchText: {
        fontSize: 40
    },
});

export default Home;