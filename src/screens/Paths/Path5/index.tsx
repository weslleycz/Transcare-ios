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

export const Path5 = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Back navigation={navigation} pag="Path" />
      <ContainerPath>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Box padding={4}>
              <Text color={"#FF66C4"} fontSize="xl" textAlign={"center"} bold>
                {"Ressignificando o acolhimento em saúde com a população trans"}
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Para que seja oferecido um acolhimento e tratamento eficaz à
                população trans é necessário antes de tudo: Conhecer suas
                particularidades, contexto social e necessidades de saúde; Fugir
                dos padrões heteronormativos e conservadores durante os
                atendimentos.
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/1.png`)} />
              </Center>
              <Text marginTop={2} textAlign={"justify"}>
                Não assumir ou classificar a orientação sexual ou identidade de
                gênero de acordo com as características físicas da pessoa,
                perguntando sempre sobre os hábitos sexuais de forma aberta,
                cordial e não heteronormativa;
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Para que seja oferecido um tratamento eficaz à população trans é
                necessário antes de tudo, conhecer suas particularidades,
                contexto social e necessidades de saúde, tornando necessário o
                maior preparo dos profissionais, já que os mesmos possuem como
                obrigação o oferecimento de um estabelecimento de saúde livre de
                preconceitos e seguro para toda população.
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/2.png`)} />
              </Center>
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
