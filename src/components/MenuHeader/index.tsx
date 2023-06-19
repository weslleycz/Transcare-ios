import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Heading,
  Menu,
  Pressable,
  useMediaQuery,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Database } from "../../database/Database";
import MenuItems from "../MenuItems";
import { ModalQuiz } from "../ModalQuiz";

type Props = {
  navigation: any;
};

export const MenuHeader = ({ navigation }: Props) => {
  const [isQuiz, setIsQuiz] = useState(false);

  useFocusEffect(() => {
    (async () => {
      const database = new Database();
      const quiz2 = await database.getItem("@quiz2");
      setIsQuiz(!quiz2);
    })();
  });

  const [isSmallScreen] = useMediaQuery({
    minHeight: 280,
    maxHeight: 760,
  });

  const handlingExit = () => {
    AsyncStorage.clear();
    navigation.navigate("Login");
  };

  return (
    <>
      <Box>
        <HStack style={styles.cont}>
          <Box padding={5} shadow={"5"}>
            <Menu
              shadow={"0"}
              w="300"
              h={isSmallScreen ? "119.5%" : "132%"}
              marginLeft={"-5"}
              marginTop={"5"}
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    _pressed={{
                      bg: "#fad2d988",
                      borderRadius: 20,
                    }}
                    {...triggerProps}
                  >
                    <Ionicons name="menu" size={32} color="black" />
                  </Pressable>
                );
              }}
            >
              <Box padding={5}>
                <HStack>
                  <Heading color="#0E1F12">Conheça mais:</Heading>
                </HStack>
              </Box>
              <MenuItems navigation={navigation} />
              {isQuiz ? <ModalQuiz navigation={navigation} /> : null}
            </Menu>
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
