import { Box, Center, Container } from "native-base";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Back } from "../../../components/Back";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";

export const Path6 = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Back navigation={navigation} pag="Path" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Container>
            <Box>
              <Center>
                <Image style={styles.image} source={require(`./imgs/1.png`)} />
                <Image style={styles.image} source={require(`./imgs/2.png`)} />
                <Image style={styles.image} source={require(`./imgs/3.png`)} />
                <Image style={styles.image} source={require(`./imgs/4.png`)} />
                <Image style={styles.image} source={require(`./imgs/5.png`)} />
                <Image style={styles.image} source={require(`./imgs/6.png`)} />
                <Image style={styles.image} source={require(`./imgs/7.png`)} />
              </Center>
            </Box>
          </Container>
        </ScrollView>
      </SafeAreaView>
      <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: 400,
    height: 90,
    backgroundColor: "#DDF5FF",
  },
  image: {
    flex: 1,
    width: 390,
    height: 405,
    resizeMode: "contain",
  },
});
