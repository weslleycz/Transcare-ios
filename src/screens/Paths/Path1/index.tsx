import { Box, Center, Text } from "native-base";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Back } from "../../../components/Back";
import ContainerPath from "../../../components/ContainerPath";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";

export const Path1 = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Back navigation={navigation} pag="Path" />
      <ContainerPath>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Box padding={4}>
              <Text color={"#FF66C4"} fontSize="xl" textAlign={"center"} bold>
                {
                  "DIFICULDADES VIVENCIADAS PELA POPULAÇÃO TRANS NOS SERVIÇOS DE SAÚDE"
                }
              </Text>
              <Center>
                <Image source={require(`./imgs/Revisao.png`)} />
              </Center>
              <Text textAlign={"justify"}>
                A escassez do serviço especializado e de saúde pública, bem como
                a demora, burocracia e negligência no processo para atender as
                demandas da população trans, os deixa susceptíveis a
                automedicação e realizações de procedimentos estéticos sem
                acompanhamento de profissionais da saúde. A falta de uma
                estrutura adequada para a população trans gera um distanciamento
                e conflitos com os profissionais de saúde.
              </Text>
            </Box>
          </ScrollView>
        </SafeAreaView>
      </ContainerPath>
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
  },
});
