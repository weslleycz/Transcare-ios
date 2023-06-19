import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Button, HStack, Heading } from "native-base";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../types/navigation";

type Props = {
  navigation: NavigationProps;
  pag: string;
};

export const Back = ({ navigation, pag }: Props) => {
  const handlingExit = () => {
    AsyncStorage.clear();
    navigation.navigate("Login");
  };
  return (
    <>
       <Box width={"full"}>
        <HStack style={styles.cont}>
          <Box padding={6} shadow={"5"}>
            <TouchableOpacity onPress={() => navigation.navigate(pag)}>
              <Image source={require("./back.png")} />
            </TouchableOpacity>
          </Box>
          <Heading size="lg">Transcare</Heading>
          <Box marginRight={8}>
            <Button onPress={() => handlingExit()} size="md" variant="ghost">
              <MaterialCommunityIcons
                name="exit-to-app"
                size={29}
                color="black"
              />
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 40,
      height: 50,
    },
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
