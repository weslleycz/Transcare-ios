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

export const Path4 = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Back navigation={navigation} pag="Path" />
      <ContainerPath>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Box padding={4}>
              <Text color={"#FF66C4"} fontSize="xl" textAlign={"center"} bold>
                {
                  "PRINCIPAIS CARACTERÍSTICAS QUE OS PROFISSIONAIS DE SAÚDE DEVEM SABER SOBRE A POPULAÇÃO TRANS"
                }
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Toda a equipe multiprofissional da saúde desempenha uma função
                importante no cuidado às pessoas trans. Esses profissionais
                devem estar preparados para exercer o cuidado ético e de
                qualidade, respeitando a diversidade sexual, de gênero e as
                demais características das pessoas.
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/1.png`)} />
              </Center>
              <Text marginTop={2} textAlign={"justify"}>
                Questões acerca da saúde mental, a não observação do nome social
                e a incapacidade em manejar questões próprias do universo
                LGBTQIA+ são exemplos de dificuldades.
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Perguntar sobre os hábitos sexuais de forma aberta, amigável e
                não heteronormativa deve ser rotineiro ao profissional da saúde.
                Perguntas simples, por exemplo:
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/2.png`)} />
              </Center>
              <Text marginTop={2} textAlign={"justify"}>
                “Como você deseja ser chamado(a)?” ou “Como você se identifica e
                gostaria que fosse identificado?”.
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Quanto ao uso da terapia hormonal por pessoas transgênero, tal
                procedimento é um fator de grande importância para o seu
                bem-estar, pois é por meio dos hormônios que suas
                características físicas são desenvolvidas. No entanto muitas
                vezes estes carecem de poder aquisitivo para permanência do seu
                uso, fazendo até mesmo o compartilhamento destes hormônios entre
                si. Além disso, a terapia hormonal está bastante ligada ao
                tratamento do HIV, tendo em vista que muitos interrompem o
                tratamento da doença se a eficiência dos hormônios for afetada.
              </Text>
              <Center marginTop={2}>
                <Image source={require(`./imgs/3.png`)} />
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
