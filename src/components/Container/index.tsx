import { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Box } from "native-base";

type Pros = {
  children: ReactNode;
};

const Container = ({ children }: Pros) => {
  return (
    <>
      <Box
        style={styles.image}
      >
        {children}
      </Box>
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
