import { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";

type Pros = {
  children: ReactNode;
};

const Container = ({ children }: Pros) => {
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

export default Container;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
