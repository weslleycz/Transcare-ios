import { Box, Center, Text } from "native-base";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import ContainerPath from "../../../components/ContainerPath";
import { Footer } from "../../../components/Footer";
import { MenuHeader } from "../../../components/MenuHeader";
import { NavigationProps } from "../../../types/navigation";
import { Back } from "../../../components/Back";

export const Path3 = ({ navigation }: NavigationProps) => {
  return (
    <>
       <Back navigation={navigation} pag="Path" />
      <ContainerPath>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Box padding={4}>
              <Text color={"#FF66C4"} fontSize="xl" textAlign={"center"} bold>
                {
                  "CONSEQUÊNCIAS FÍSICAS E PSICOLÓGICAS PARA A POPULAÇÃO TRANS FRENTE A DISCRIMINAÇÃO NOS SERVIÇOS DE SAÚDE"
                }
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/1.png`)} />
              </Center>
              <Text marginTop={2} textAlign={"justify"}>
                A estigmatização por parte da sociedade para com pessoas trans
                se perpetua até os dias atuais. 63% das pessoas trans sofrem com
                algum tipo de descriminação, experiências de vida mais
                negativas, pior qualidade de vida.
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Nessa perspectiva, o sofrimento mental, como consequência do
                preconceito e marginalização que a população trans vivencia em
                seu cotidiano, acaba reverberando negativamente na qualidade de
                vida desse segmento populacional.
              </Text>
              <Text textAlign={"justify"}>
                Tais fatores tem como consequência a pouca procura por parte das
                pessoas trans aos serviços de saúde, em razão do medo em sofrer
                maus tratos, discriminação, sendo assim, acarretando em agravos
                a saúde e aumento das taxas de morbidade e mortalidade.
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/2.png`)} />
              </Center>
              <Center marginTop={2}>
                <Image source={require(`./imgs/3.png`)} />
              </Center>
              <Text color={"#8BD1F3"} fontSize="xl" textAlign={"center"} bold>
                {"O que fazer diante dessa problemática?"}
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Divulgação de informações sobre a saúde trans para profissionais
                da saúde, para que haja a construção da consciência
                transcultural, fator este essencial no reconhecimento e
                valorização da população trans;
              </Text>
              <Text textAlign={"justify"}>
                {`Melhoria na oferta e acessibilidade aos serviços de saúde;
              `}
              </Text>
              <Text textAlign={"justify"}>
                {`Maior ênfoque sobre a saúde trans nas instituições de ensino;`}
              </Text>

              <Text textAlign={"justify"}>
                {`Acolhimento eficiente pelos profissionais da saúde na Atenção Básica para com pessoas transgênero.`}
              </Text>

              <Text textAlign={"justify"}>
                {`Qualificação por meio da educação permanente dos profissionais da saúde sobre a temática;`}
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
