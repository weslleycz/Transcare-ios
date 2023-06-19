import { Box, HStack, useMediaQuery } from "native-base";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FooterBlue } from "../../components/FooterBlue";
import { MenuHeader } from "../../components/MenuHeader";
import { NavigationProps } from "../../types/navigation";

export const Path = ({ navigation }: NavigationProps) => {
  const [isSmallScreen] = useMediaQuery({
    minHeight: 280,
    maxHeight: 760,
  });
  return (
    <>
      <MenuHeader navigation={navigation} />
      <ImageBackground
        source={require("./imgs/background.png")}
        resizeMode="stretch"
        style={styles.image}
      >
        <ScrollView>
          <Box marginTop={isSmallScreen ? 7 : 20}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Path6")}
              activeOpacity={0.8}
            >
              <Box marginLeft={2}>
                <Image source={require(`./imgs/6.png`)} />
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Path5")}
              activeOpacity={0.8}
            >
              <Box>
                <HStack justifyContent={"flex-end"}>
                  <Box marginRight={3.5}>
                    <Image source={require(`./imgs/5.png`)} />
                  </Box>
                </HStack>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Path4")}
              activeOpacity={0.8}
            >
              <Box>
                <HStack justifyContent={"center"}>
                  <Image source={require(`./imgs/4.png`)} />
                </HStack>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Path3")}
              activeOpacity={0.8}
            >
              <Box marginRight={3.5}>
                <HStack>
                  <Box marginLeft={isSmallScreen ? 2 : 0}>
                    <Image source={require(`./imgs/3.png`)} />
                  </Box>
                </HStack>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Path2")}
              activeOpacity={0.8}
            >
              <Box>
                <HStack justifyContent={"flex-end"}>
                  <Box marginRight={isSmallScreen ? 3.5 : 20}>
                    <Image source={require(`./imgs/2.png`)} />
                  </Box>
                </HStack>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Path1")}
              activeOpacity={0.8}
            >
              <Box>
                <Box marginTop={isSmallScreen ? 0 : 20}>
                  <HStack>
                    <Box marginLeft={3}>
                      <Image source={require(`./imgs/1.png`)} />
                    </Box>
                  </HStack>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </ImageBackground>
      <FooterBlue navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
