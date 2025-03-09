
import { StyleSheet, View, Image } from 'react-native';

export function NotFound() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/NotFound.png')} resizeMode='center' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
