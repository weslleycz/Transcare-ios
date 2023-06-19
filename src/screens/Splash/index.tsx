import { Text } from "native-base";
import { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Logo } from "../../components/Logo";
import { Database } from "../../database/Database";
import { NavigationProps } from "../../types/navigation";

export const Splash = ({ navigation }: NavigationProps) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      const database = new Database();
      const token = await database.getItem("@Token");
      if (token === null) {
        navigation.navigate("Small");
      } else {
        navigation.navigate("Dashboard");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ImageBackground
        source={require("./background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Logo height={160} width={160} />
        <Text color={"#38B6FF"} bold fontSize="6xl">
          Trans
          <Text color={"#FDA3B5"} bold fontSize="6xl">
            care
          </Text>
        </Text>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
