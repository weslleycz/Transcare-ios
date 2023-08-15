import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import { Box, NativeBaseProvider } from "native-base";
import React, { useEffect } from 'react';
import { LogBox, Platform } from "react-native";
import { ALERT_TYPE, AlertNotificationRoot, Toast } from "react-native-alert-notification";
import { Routes } from "./Routes";
import { theme } from "./src/theme";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'ios') {
        const { status } = await requestTrackingPermissionsAsync();
        if (status === 'granted') {
        }else{
          Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Atenção',
            textBody: 'Para utilizar o aplicativo, é necessário conceder permissão.',
          })
        }
      } else if (Platform.OS === 'android') {
        // Código específico para Android usando o plugin
      }
    })();
  }, []);
  return (
    <>
      <AlertNotificationRoot>
        <NativeBaseProvider theme={theme}>
          <Box bg={"primary.100"} safeAreaTop />
          <Routes />
        </NativeBaseProvider>
      </AlertNotificationRoot>
    </>
  );
}
