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
import { NavigationProps } from "../../../types/navigation";
import { Back } from "../../../components/Back";

export const Path2 = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Back navigation={navigation} pag="Path" />
      <ContainerPath>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Box padding={4}>
              <Text color={"#FF66C4"} fontSize="xl" textAlign={"center"} bold>
                {"POLÍTICAS PÚBLICAS VOLTADAS À POPULAÇÃO LGBTQIA+"}
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                A existência de políticas públicas voltadas à população LGBTQIA+
                simboliza a garantia e proteção dos direitos dessas pessoas.
                Asseguram a inserção coletiva de cada indivíduo desse grupo,
                promovendo a cidadania e a participação social.
              </Text>
              <Center>
                <Image source={require(`./imgs/1.png`)} />
              </Center>
              <Text color={"#8BD1F3"} fontSize="xl" textAlign={"center"} bold>
                {
                  " Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais (LGBT)"
                }
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Lançada em 2013, visando a equidade proposta pelo Sistema Único
                de Saúde. Visa o preenchimento de lacunas existentes no processo
                saúde-doença, dando as devidas orientações acerca da
                assistência, reduzindo, assim, a exclusão e discriminação em
                serviços de saúde.
              </Text>
              <Text color={"#8BD1F3"} fontSize="xl" textAlign={"center"} bold>
                {"Brasil sem homofobia"}
              </Text>
              <Center>
                <Image source={require(`./imgs/2.png`)} />
              </Center>
              <Text color={"#8BD1F3"} fontSize="xl" textAlign={"center"} bold>
                {
                  "Plano Nacional de Promoção da Cidadania e Direitos Humanos de Lésbicas, Gays, Bissexuais, Travestis e Transexuais"
                }
              </Text>
              <Text marginTop={2} textAlign={"justify"}>
                Surgiu, em 2009, na finalidade de orientar a elaboração de
                políticas públicas que visam a inclusão social da população
                LGBT, prezando pela intersetorialização transversalização nas
                propostas e implementações dessas ações.
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
