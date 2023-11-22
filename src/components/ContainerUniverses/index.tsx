import { Box } from "native-base";
import { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";

type Pros = {
  children: ReactNode;
};

export const ContainerUniverses = ({ children }: Pros) => {
  return (
    <>
      <Box style={styles.image}>{children}</Box>
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
