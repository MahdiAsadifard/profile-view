
import React, { useState } from "react";
import { 
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from "../tools/styles";

interface IProps {
    callback: (e: string) => Promise<void> | void;
}

const searchBar: React.FunctionComponent<IProps> = ({
    callback
}): React.ReactNode => {

    const [search, setSearch] = useState<string>('');

    const onChangeText = (e: string) => {
        setSearch(e);
    };
    
    const onSearch = () => {
        if(callback) callback(search);    
    };

    return(
        <View>
            <View style={[styles.row]}>
                <TextInput
                    style={[styles.searchbox]}
                    onChangeText={onChangeText}
                    placeholder="GitHub user name ..."  
                />
                <TouchableOpacity onPress={onSearch} style={[styles.searchBtn]} >
                    <Ionicons name="search-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchbox: {
        flex: 1,
        fontSize: 20
    },
    row: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.green2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBtn: {
        backgroundColor: Colors.green2,
        padding: 10,
        borderRadius: 5,
    },
}); 

export default searchBar;