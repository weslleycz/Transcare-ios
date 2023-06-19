import { Box, Text } from "native-base";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Footer } from "../../components/Footer";
import { MenuHeader } from "../../components/MenuHeader";
import { NavigationProps } from "../../types/navigation";

export const References = ({ navigation }: NavigationProps) => {
  return (
    <>
      <MenuHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Box padding={3}>
            <Text color={"#8ED9EF"} textAlign={"center"} bold fontSize="xl">
              {"REFERÊNCIAS"}
            </Text>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              Agência Brasil.{" "}
                <Text bold>
                Governo lança Sistema Nacional LGBT para integrar políticas contra o preconceito.
                </Text>{" "}
                Disponível em{" "}
                {`Disponível em <https://agencia-brasil.jusbrasil.com.br/noticias/100583510/governo-lanca-sistema-nacional-lgbt-para-integrar-politicas-contra-o-preconceito>.`}{" "}
                Acesso em 19 set 2021.
              </Text>
            </Box>

            <Box>
              <Text marginTop={1} textAlign={"justify"} fontSize="md">
              BRASIL. Ministério da Saúde.{" "}
                <Text bold>
                Conselho Nacional de Combate à Discriminação. Brasil Sem Homofobia: Programa de combate à violência e à discriminação contra GLTB e promoção da cidadania homossexual.
                </Text>{" "}
                Brasília: Ministério da Saúde, 2004. 
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              BRASIL. Ministério da Saúde.{" "}
                <Text bold>
                Secretaria de Gestão Estratégica e Participativa. Departamento de Apoio à Gestão Participativa. Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais.
                </Text>{" "}
                Brasília: 1. ed., 1. reimp. Ministério da Saúde, 2013. 32 p. ISBN 978-85-334-144-5
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              BRASIL. Ministério Público.{" "}
                <Text bold>
                O ministério público e a igualdade de direitos LGBT.
                </Text>{" "}
                2017.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              BRASIL. Presidência da República. Secretaria Especial dos Direitos Humanos – SEDH.{" "}
                <Text bold>
                Plano Nacional de Promoção da Cidadania e Direitos Humanos de Lésbicas, Gays, Bissexuais, Travestis e Transexuais.
                </Text>{" "}
                Brasília: Secretaria Especial dos Direitos Humanos da Presidência da República, 2009.
              </Text>
            </Box>

            <Box>
              <Text marginTop={2} textAlign={"justify"} fontSize="md">
              CLARK, B.A. et al. Primary care access and foregone care: a survey of transgender adolescents and young adults. {" "}
                <Text bold>
                Family Practice
                </Text>{" "}
                , v. 35, n. 3, p. 302-306, 2018.
              </Text>
            </Box>

            <Box>
              <Text marginTop={5} textAlign={"justify"} fontSize="md">
              FERNANDES, Estevão Rafael; RIBEIRO, Igor Veloso.{" "}
                <Text bold>
                Transfobia: Incessante Tortura.
                </Text>{" "}
                Clareira, Internet, v. 5, n. 1, p. 1-33, jul./2018. Disponível em: https://www.periodicos.unir.br/index.php/clareira/article/view/4407/2795. Acesso em: 16 abr. 2021. https://br.freepik.com/search?dates=any&format=search&page=1&query=travesti&sort=popular
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              KANO, M. et al. Stakeholders  recommendations to improve patient-centered “LGBT” primary care in rural and multicultural practices.{" "}
                <Text bold>
                The Journal of the American Board of Family Medicine
                </Text>{" "}
                , v. 29, n. 1, p.156-160, 2016. DOI: https://doi.org/10.3122/jabfm.2016.01.150205.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              LOVISON, R.; ASCARI, T. M.; ZOCCHE, D. A. A.; DURAND, M. K.; ASCARI, R. A. Travestis e Transexuais: Despindo as percepções acerca do acesso e assistência em saúde.{" "}
                <Text bold>
                Enferm. Foco.
                </Text>{" "}
                , n. 10, v. 5. 2019.
              </Text>
            </Box>

            <Box>
              <Text marginTop={2} textAlign={"justify"} fontSize="md">
              LYONS, Tara; KRÜSI, Andrea; PIERRE, Leslie; KERR, Thomas; SMALL, Will; SHANNON, Kate. Negotiating violence in the context of transphobia and criminalization: the experiences of trans sex workers in Vancouver, Canada, Qualitative{" "}
                <Text bold>
                Health Research.
                </Text>{" "}
                v.27, n.2, p. 182-190, 2017.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              MELENDEZ, R.M.; PINTO R.M. HIV Prevention and Primary Care for Transgender Women in a Community-Based Clinic. {" "}
                <Text bold>
                Journal of the Association of Nurses in AIDS Care,
                </Text>{" "}
                v. 20, n. 5, p. 387-397, 2009. Doi :https://doi.org/10.1016/j.jana.2009.06.002.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              PEREIRA, L. B. C.; CHAZAN, A. C. S. O Acesso das Pessoas Transexuais e Travestis à Atenção Primária à Saúde: uma revisão integrativa.{" "}
                <Text bold>
                Rev. Bras. Med. Fam. Comunidade
                </Text>{" "}
                , n. 14, v. 41. 2019. 
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              PEREIRA, L. B. C; CHAZAN, A. C. S. O Acesso das Pessoas Transexuais e Travestis à Atenção Primária à Saúde: uma revisão integrativa.{" "}
                <Text bold>
                Revista Brasileira De Medicina De Família E Comunidade,
                </Text>{" "}
                v. 14, n. 41, p. 1795-1795, 2019.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              PEREIRA, L. B. C; CHAZAN, A. C. S. O Acesso das Pessoas Transexuais e Travestis à Atenção Primária à Saúde: uma revisão integrativa. {" "}
                <Text bold>
                Revista Brasileira De Medicina De Família E Comunidade,
                </Text>{" "}
                v. 14, n. 41, p. 1795-1795, 2019.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              PETRY, A. R. Mulheres transexuais e o Processo Transexualizador: experiências de sujeição, padecimento e prazer na adequação do corpo.{" "}
                <Text bold>
                Revista Gaúcha de Enfermagem,
                </Text>{" "}
                v. 36, n. 2, p. 70-75, 2015.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              PINHEIRO, M. V. (In)visibilidade LGBT: práticas e desafios na EJA. {" "}
                <Text bold>
                Revista Escritos e Escritas na EJA.
                </Text>{" "}
                n. 7. 2017.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              PPODESTÁ, L. L. D. Ensaio sobre o conceito de transfobia.{" "}
                <Text bold>
                Revista Periódicus,
                </Text>{" "}
                Salvador, v. 1, n. 11, p. 363-380, jul./2019.
              </Text>
            </Box>


            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              REIS, T., org. Manual de Comunicação LGBTI+. Curitiba: Aliança Nacional LGBTI /{" "}
                <Text bold>
                GayLatino
                </Text>{" "}
                , 2018. ISBN: 978-85-66278-11-8.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              RIBEIRO, P. V. S. TERAPIA HORMONAL PARA REDESIGNAÇÃO DE GÊNERO-MULHER TRANS: UMA REVISÃO. {" "}
                <Text bold>
                Saúde. Com-Ciência
                </Text>{" "}
                ISSN: 2594-5890, n. 1, p. 9-16, 2020.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              ROCON, P. C. et al. Acesso à saúde pela população trans no Brasil: nas entrelinhas da revisão integrativa. Trabalho, {" "}
                <Text bold>
                Educação e Saúde
                </Text>{" "}
                , v. 18, n. 1, 2020.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              ROCON, P. C. et al. Desafios enfrentados por pessoas trans para acessar o processo transexualizador do Sistema Único de Saúde. Interface-Comunicação, {" "}
                <Text bold>
                Saúde, Educação,
                </Text>{" "}
                v. 23, p. e180633, 2019.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              ROCON, P. C. et al. O que esperam pessoas trans do Sistema Único de Saúde?. Interface-Comunicação, {" "}
                <Text bold>
                Saúde, Educação,
                </Text>{" "}
                2017.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              ROSA, D. F.; CARVALHO, M.V.F.; PEREIRA, N. R.; ROCHA, N. T.; NEVES, V. R.; ROSA, A. S. Assistência de Enfermagem à população trans: gêneros na perspectiva da prática profissional. {" "}
                <Text bold>
                Rev. Bras. Enferm.
                </Text>{" "}
                n. 1, v. 72. 2019.
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              ROSA, Danilo Fagundes et al . Assistência de Enfermagem à população trans: gêneros na perspectiva da prática profissional.  {" "}
                <Text bold>
                Rev. Bras. Enferm.,
                </Text>{" "}
                Brasília ,  v. 72, supl. 1, p. 299-306,  Feb.  2019.  https://doi.org/10.1590/0034-7167-2017-0644
              </Text>
            </Box>

            <Box>
              <Text marginTop={4} textAlign={"justify"} fontSize="md">
              SILVA, L. K. M.; SILVA, A. L. M. A.; COELHO, A. A.; MARTINIANO, C. S. Uso do nome social no Sistema Único de Saúde: elementos para o debate sobre a assistência prestada a travestis e transexuais.{" "}
                <Text bold>
                Revista de Saúde Coletiva,
                </Text>{" "}
                n. 3, v. 27. 2017. 
              </Text>
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
