import { Box, NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { Routes } from "./Routes";
// import { theme } from "./src/theme";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  return (
    <>
      <AlertNotificationRoot>
          <NativeBaseProvider>
            <Box bg={"primary.100"} safeAreaTop />
            <Routes />
          </NativeBaseProvider>
      </AlertNotificationRoot>
    </>
  );
}
