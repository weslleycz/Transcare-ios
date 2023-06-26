import { Box, HStack, useMediaQuery } from "native-base";
import { useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Footer } from "../../components/Footer";
import { Image } from "react-native";
import { Database } from "../../database/Database";
import { NavigationProps } from "../../types/navigation";
import { MenuHeader } from "../../components/MenuHeader";

export const Home = ({ navigation }: NavigationProps) => {
  useEffect(() => {
    (async () => {
      const database = new Database();
      const quiz1 = await database.getItem("@quiz1");
      const name = await database.getItem("@name");
      const email = await database.getItem("@email");
      if (!quiz1) {
        console.log(quiz1);
        navigation.navigate("Quiz", {
          name: name,
          email: email,
          isQuiz2: false,
          isLogin: true,
        });
      }
    })();
  }, []);
  const [isSmallScreen] = useMediaQuery({
    minHeight: 280,
    maxHeight: 760,
  });
  return (
    <>
      <MenuHeader navigation={navigation} />
      <ScrollView>
        <ImageBackground
          source={require("./imgs/Group.png") }
          style={styles.image}
        >
          <Box marginTop={isSmallScreen ? 20 : 40}>
            <HStack justifyContent={"flex-end"}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Universe")}
                activeOpacity={0.9}
              >
                <Image source={require(`./imgs/balao.png`)} />
              </TouchableOpacity>
            </HStack>
            <Image source={require(`./imgs/isa.png`)} />
          </Box>
        </ImageBackground>
      </ScrollView>
      <Footer navigation={navigation} /> 
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 6,
  },
});
