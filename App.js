import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  isClip as isClipFun,
  displayOverlay,
  setSharedCredential,
  getSharedCredential,
} from "react-native-app-clip";

export default function App({isClip}) {
  console.log(`app`, {
    isClip, 
    isClipFun: isClipFun()
  })
  return (
    <View style={styles.container}>
      {
        isClipFun() ? <Text>App Clip</Text> : <Text>Not App Clip</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
