import { Box, Link, Text } from "native-base";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Footer } from "../../components/Footer";
import { MenuHeader } from "../../components/MenuHeader";
import { NavigationProps } from "../../types/navigation";

export const Documents = ({ navigation }: NavigationProps) => {
  return (
    <>
      <MenuHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Box padding={3}>
            <Text color={"#8ED9EF"} textAlign={"center"} bold fontSize="xl">
              {"DOCUMENTOS MINISTERIAIS NA ÍNTEGRA"}
            </Text>
            <Text marginTop={4} textAlign={"center"} bold fontSize="md">
              {"PORTARIA Nº 2.836, DE 1º DE DEZEMBRO DE 2011"}
            </Text>
            <Link
              textAlign={"center"}
              _text={{
                fontSize: "md",
                color: "#1786b6",
              }}
              href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt2836_01_12_2011.html"
            >
              https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt2836_01_12_2011.html
            </Link>
            <Text marginTop={4}  bold fontSize="md">
              {"PORTARIA Nº 2.803, DE 19 DE NOVEMBRO DE 2013(*)"}
            </Text>
            <Link
              textAlign={"center"}
              _text={{
                fontSize: "md",
                color: "#1786b6",
              }}
              href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt2803_19_11_2013.html"
            >
              https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt2803_19_11_2013.html
            </Link>
            <Text marginTop={4}  bold fontSize="md">
              {"DECRETO Nº 8.727, DE 28 DE ABRIL DE 2016"}
            </Text>
            <Link
              textAlign={"center"}
              _text={{
                fontSize: "md",
                color: "#1786b6",
              }}
              href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8727.htm"
            >
              http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8727.htm
            </Link>
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
