import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  isClip as isClipFun,
} from "react-native-app-clip";
import * as Notifications from 'expo-notifications';
import AppClipScreen from './src/AppClipScreen';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <View style={styles.container}>
      {
        isClipFun() ? <AppClipScreen/> : <Text>Not App Clip</Text>
        // isClipFun() ?<Text>App Clip</Text> : <Text>Not App Clip</Text>
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
