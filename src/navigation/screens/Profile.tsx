import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Colors } from "../../tools/styles";

interface IProps {
  navigation?: any;
  route?: any;
};

const Profile: React.FC<IProps> = ({
  navigation,
  route
}): React.ReactNode => {
  console.log('==Profile: ',route.params.user)
  const user = route.params.user;
  return (
    <View style={styles.container}>
      {/* <Text>{route.params?.user.following}'s Profile</Text> */}
      <View style={[styles.center]}>

        <Image
          style={[styles.avatar]}
          source={{
            uri: user.avatar_url
          }}
        />
        <Text>{user.login}</Text>
        <Text>{user.name}</Text>
      </View>
      <View>
        <Text>{user.bio}</Text>
        <Text>following: {user.following}</Text>
        <Text>followers: {user.followers}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
});

export default Profile;