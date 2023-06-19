import { Foundation } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Entypo";
import { Box, Center, HStack, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../types/navigation";

type Props = {
  navigation: NavigationProps;
};

export const FooterBlue = ({ navigation }: Props) => {
  return (
    <>
      <Box shadow={"8"} padding={1} backgroundColor={"#69D1FF"}>
        <Center>
          <HStack style={styles.cont}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              activeOpacity={0.8}
            >
              <Center>
                <Ionicons
                  onPress={() => navigation.navigate("Home")}
                  name="home"
                  color={"#ffff"}
                  size={32}
                />
                <Text color={"#ffff"} bold>Home</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Path")}
              activeOpacity={0.8}
            >
              <Center marginLeft={4}>
                <Ionicons
                  onPress={() => navigation.navigate("Path")}
                  name="map"
                  color={"#ffff"}
                  size={32}
                />
                <Text color={"#ffff"} bold>Caminho</Text>
              </Center>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SocialMedia")}
              activeOpacity={0.8}
            >
              <Center>
                <Foundation
                  onPress={() => navigation.navigate("SocialMedia")}
                  color={"#ffff"}
                  name="social-myspace"
                  size={32}
                />
                <Text color={"#ffff"} bold>Redes sociais</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
        </Center>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: "space-between",
    width: 360,
    shadowOffset: {
      width: 40,
      height: 50,
    },
  },
});
