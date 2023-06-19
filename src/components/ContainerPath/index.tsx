import { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";

type Pros = {
  children: ReactNode;
};

const ContainerPath = ({ children }: Pros) => {
  return (
    <>
      <ImageBackground
        source={require("./background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </>
  );
};

export default ContainerPath;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
