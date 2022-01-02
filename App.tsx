import { StyleSheet, View } from 'react-native';
import ImageUpload from './components/ImageUpload';
import PhoneNumber from './components/PhoneNumberModel';

export default function App() {
  return (
    <View style={styles.container}>
      <PhoneNumber />
      {/* <ImageUpload /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,256,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
