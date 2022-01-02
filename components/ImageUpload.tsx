import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const imageUploadHandler = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!res.cancelled) {
      setImage(res.uri);
    }
  };

  return (
    <>
      <Text>Upload image of your ID proof</Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
      )}
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={imageUploadHandler}>
        <Text>Upload</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    width: 256,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: 10,
  },
});
