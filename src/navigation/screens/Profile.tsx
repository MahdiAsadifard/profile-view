import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { Colors } from "../../tools/styles";
import { api_call } from "../../tools/utils";

interface IProps {
  navigation?: any;
  route?: any;
};

const Profile: React.FC<IProps> = ({
  navigation,
  route
}): React.ReactNode => {
  const user = route.params.user;

const onFollowing = async ()=>{
  const response =  await api_call(`users/${user.login}/following`);
  navigation.navigate('FollowersList', {
    data: response,
    parent: 'following'
  });
};
const onFollowwers = async ()=>{
  const response =  await api_call(`users/${user.login}/followers`);
  navigation.navigate('FollowersList', {
    data: response,
    parent: 'followers'
  });
};

  return (
    <View style={styles.container}>
      <View style={[styles.center]}>

        <Image
          style={[styles.avatar]}
          source={{
            uri: user.avatar_url
          }}
        />
        <Text style={[styles.text, styles.bold]}>{user.name}</Text>
        <Text style={[styles.text]}>({user.login})</Text>
      </View>
      <View style={[styles.box]}>
        <Text style={[styles.text]}>{user.bio?.length ? user.bio : "Bio not provided"}</Text>
      </View>
      <View style={[ styles.row]}>
        <TouchableOpacity onPress={onFollowing} style={[styles.followBtn]}>
          <Text style={[styles.text, {color: 'white'}]}>Following: {user.following}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onFollowwers} style={[styles.followBtn]}>
          <Text style={[styles.text, {color: 'white'}]}>Followers: {user.followers}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  center: {
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: 200/2,
    borderWidth: 1,
    borderColor: Colors.grey2
  },
  text: {
    fontSize: 20
  },
  bold: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  box: {
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.grey1,
    padding: 20,
    borderRadius: 5,
    //  shadowColor: "grey",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,  
    // elevation: 3
  },
  row: {
    flexDirection: 'row'
  },
  followBtn: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    margin: 5,
    backgroundColor: Colors.green2,
  }
});

export default Profile;