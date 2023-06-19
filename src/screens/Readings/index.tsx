import { Box, Link, Text } from "native-base";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Footer } from "../../components/Footer";
import { MenuHeader } from "../../components/MenuHeader";
import { NavigationProps } from "../../types/navigation";

export const Readings = ({ navigation }: NavigationProps) => {
  return (
    <>
      <MenuHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Box textAlign={"center"} padding={3}>
            <Text color={"#8ED9EF"} textAlign={"center"} bold fontSize="xl">
              {"SUGESTÕES DE LEITURA"}
            </Text>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"PORTARIA Nº 2.836, DE 1º DE DEZEMBRO DE 2011"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                O Acesso das Pessoas Transexuais e Travestis à Atenção Primária
                à Saúde: uma revisão integrativa (2019)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="https://rbmfc.org.br/rbmfc/article/view/1795"
              >
                https://rbmfc.org.br/rbmfc/article/view/1795
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Trabalho, Educação e Saúde"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Acesso à saúde pela população trans no brasil: nas entrelinhas
                da revisão integrativa (2020)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="https://www.scielo.br/j/tes/a/NGpjbDZLqR78J8Hw4SRsHwL/?lang=pt#"
              >
                https://www.scielo.br/j/tes/a/NGpjbDZLqR78J8Hw4SRsHwL/?lang=pt#
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Revista de Pesquisa Cuidado é Fundamental Online"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Transfobia velada: sentidos produzidos por enfermeiros (as)
                sobre o acolhimento de travestis e transexuais (2021)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="http://www.seer.unirio.br/cuidadofundamental/article/view/7488"
              >
                http://www.seer.unirio.br/cuidadofundamental/article/view/7488
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Revista Enfermagem Atual in Derme"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Acolhimento de travestis e transexuais na atenção primária à
                saúde (2021)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="https://revistaenfermagematual.com/index.php/revista/article/view/1179"
              >
                https://revistaenfermagematual.com/index.php/revista/article/view/1179
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Enfermagem em Foco"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Travestis e transexuais: despindo as percepções acerca do acesso
                e assistência em saúde (2019)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="http://revista.cofen.gov.br/index.php/enfermagem/article/view/2370/685"
              >
                http://revista.cofen.gov.br/index.php/enfermagem/article/view/2370/685
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Saúde em Debate"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Proteção social e produção do cuidado a travestis e a mulheres
                trans em situação de rua no município de Belo Horizonte (MG)
                (2019)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="https://www.scielosp.org/article/sdeb/2019.v43nspe8/107-119/#"
              >
                https://www.scielosp.org/article/sdeb/2019.v43nspe8/107-119/#
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Revista de Divulgação Científica Sena Aires"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Produção do cuidado de enfermagem à população LGBTQIA+ na
                atenção primária (2021)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="http://revistafacesa.senaaires.com.br/index.php/revisa/article/view/721/633"
              >
                http://revistafacesa.senaaires.com.br/index.php/revisa/article/view/721/633
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Revista Brasileira de Medicina de Família e Comunidade"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                Serviços de atendimento integral à saúde de transexuais e
                travestis no Sistema Único de Saúde (2022)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="https://rbmfc.org.br/rbmfc/article/view/2964"
              >
                https://rbmfc.org.br/rbmfc/article/view/2964
              </Link>
            </Box>

            <Box>
              <Text marginTop={4} bold fontSize="md">
                {"Revista do Departamento de Ciências Humanas"}
              </Text>
              <Text textAlign={"justify"} marginTop={2}>
                A (in) visibilidade do acolhimento no âmbito da saúde: em pauta
                as experiências de integrantes da comunidade LGBTQIA+ (2021)
              </Text>
              <Link
                textAlign={"center"}
                _text={{
                  fontSize: "md",
                  color: "#1786b6",
                }}
                href="https://online.unisc.br/seer/index.php/barbaroi/article/view/14765"
              >
                https://online.unisc.br/seer/index.php/barbaroi/article/view/14765
              </Link>
            </Box>
          </Box>
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
    backgroundColor: "#FFFFFF",
  },
});
