import React from "react"
import { View, Text, Button} from "react-native"
import * as Notifications from 'expo-notifications';
import useNotification from "./useNotification";

const AppClipScreen = () => {

    const {expoPushToken, notification} = useNotification()

    console.log(`expoPushToken`,{
        expoPushToken, 
        notification
    })

    async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Notif from app📬",
            body: 'Test notif from app',
            data: { data: 'goes here', test: { test1: 'more data' } },
          },
          trigger: { seconds: 2 },
        });
      }
    
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', gap:8, padding:16}}>
        <Text>I am app clip app</Text>
        <Text>To Test notification click this button or drag and drop file notif-clip.apns</Text>
        <Button title="Test Notification" onPress={schedulePushNotification}/>
        </View>
    )
}

export default AppClipScreen