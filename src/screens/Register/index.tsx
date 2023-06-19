import { Box, SubmitButton } from "@native-base/formik-ui";
import createValidator from "class-validator-formik";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Formik } from "formik";
import {
  Button,
  Center,
  CheckIcon,
  Checkbox,
  FormControl,
  Heading,
  Input,
  Link,
  Select,
  Text,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import CryptoJS from 'crypto-js';
import Container from "../../components/Container";
import { Header } from "../../components/Header";
import { process } from "../../env";
import { firestore } from "../../servers/firebase";
import { NavigationProps } from "../../types/navigation";
import { UserDTO } from "../../validators/UserDTO";

export const Register = ({ navigation }: NavigationProps) => {

  const onSubmit = async (values: UserDTO, { resetForm, setErrors }: any) => {
    const { email, password, name, isCheckbox } = values;
    let user = null;
    const q = query(
      collection(firestore, "Users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      user = { ...data, id: doc.id };
    });
    if (user === null) {
      const id = uuid.v4().toString();
      const cipherPassword = CryptoJS.AES.encrypt(
        password,
        process.env.SecretKey
      ).toString();
      await setDoc(doc(firestore, "Users", id), {
        ...values,
        quiz1: false,
        quiz2: false,
        id,
        password: cipherPassword,
      });
      navigation.navigate("Quiz", {
        name: name,
        email: email,
        isQuiz2: false,
        isLogin:true
      });
    }
  };

  return (
    <>
      <Container>
        <Header navigation={navigation} pag={"Small"} />
        <Center>
          <Text bold color={"primary.100"} fontSize="5xl">
            Cadastro
          </Text>
          <Heading size="sm" color="coolGray.500">
            Campos com (*) são obrogatórios.
          </Heading>
        </Center>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Center w="100%">
              <Formik
                validate={createValidator(UserDTO)}
                initialValues={{
                  name: "",
                  corporate_name: "",
                  gender: "",
                  age: "",
                  profession: "",
                  email: "",
                  password: "",
                  isCheckbox: "",
                }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <>
                    <Box safeArea py="1" w="100%" maxW="345">
                      <VStack space={4} mt="5">
                        <FormControl>
                          <Input
                            placeholder="Nome*"
                            placeholderTextColor={
                              errors.name && touched.name
                                ? "#ff2626"
                                : "#2b2a2a68"
                            }
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            id="name"
                            autoFocus
                            borderColor={
                              errors.name && touched.name
                                ? "#ff2626"
                                : "#FFFFFF"
                            }
                            value={values.name}
                            onChangeText={handleChange("name")}
                          />
                          {errors.name && touched.name ? (
                            <Text color={"#ff2626"} fontSize="md">
                              <WarningOutlineIcon
                                color={"#ff2626"}
                                size="xs"
                                mt={2}
                              />{" "}
                              {errors.name}
                            </Text>
                          ) : null}
                        </FormControl>
                        <FormControl>
                          <Input
                            placeholder="E-mail*"
                            placeholderTextColor={
                              errors.email && touched.email
                                ? "#ff2626"
                                : "#2b2a2a68"
                            }
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            id="email"
                            autoFocus
                            borderColor={
                              errors.email && touched.email
                                ? "#ff2626"
                                : "#FFFFFF"
                            }
                            value={values.email}
                            onChangeText={handleChange("email")}
                          />
                          {errors.email && touched.email ? (
                            <Text color={"#ff2626"} fontSize="md">
                              <WarningOutlineIcon
                                color={"#ff2626"}
                                size="xs"
                                mt={2}
                              />{" "}
                              {errors.email}
                            </Text>
                          ) : null}
                        </FormControl>
                        <FormControl>
                          <Input
                            placeholder="Senha*"
                            placeholderTextColor={
                              errors.password && touched.password
                                ? "#ff2626"
                                : "#2b2a2a68"
                            }
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            id="password"
                            autoFocus
                            type={"password"}
                            borderColor={
                              errors.password && touched.password
                                ? "#ff2626"
                                : "#FFFFFF"
                            }
                            value={values.password}
                            onChangeText={handleChange("password")}
                          />
                          {errors.password && touched.password ? (
                            <Text color={"#ff2626"} fontSize="md">
                              <WarningOutlineIcon
                                color={"#ff2626"}
                                size="xs"
                                mt={2}
                              />{" "}
                              {errors.password}
                            </Text>
                          ) : null}
                        </FormControl>
                        <FormControl>
                          <Input
                            placeholder="Nome social"
                            placeholderTextColor={"#2b2a2a68"}
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            value={values.corporate_name}
                            onChangeText={handleChange("corporate_name")}
                          />
                        </FormControl>
                        <FormControl bgColor={"rgba(0, 255, 255, 0)"} shadow={"6"} >
                          <Select
                            selectedValue={values.gender}
                            minWidth="200"
                            placeholderTextColor={"#2b2a2a68"}
                            height={"16"}
                            borderRadius={6}
                            fontSize={17}
                            width="full"
                            bgColor={"#FFFFFF"}
                            accessibilityLabel="Gênero"
                            placeholder="Gênero"
                            _selectedItem={{
                              bg: "#FDA3B5",
                              endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={handleChange("gender")}
                          >
                            <Select.Item
                              fontSize={17}
                              label="Masculino"
                              value="Masculino"
                            />
                            <Select.Item
                              fontSize={17}
                              label="Feminino"
                              value="Feminino"
                            />
                            <Select.Item
                              fontSize={17}
                              label="Transgênero"
                              value="Transgênero"
                            />
                            <Select.Item
                              fontSize={17}
                              label="Não binário"
                              value="Não binário"
                            />
                          </Select>
                        </FormControl>

                        <FormControl>
                          <Input
                            placeholder="Idade"
                            placeholderTextColor={"#2b2a2a68"}
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            keyboardType={"numeric"}
                            value={values.age}
                            onChangeText={handleChange("isCheckbox")}
                          />
                        </FormControl>
                        <FormControl>
                          <Input
                            placeholder="Profissão"
                            placeholderTextColor={"#2b2a2a68"}
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            value={values.profession}
                            onChangeText={handleChange("profession")}
                          />
                        </FormControl>

                        <Checkbox
                          value={values?.isCheckbox}
                          onChange={() =>
                            setFieldValue(
                              "isCheckbox",
                              values?.isCheckbox != "true" ? "true" : ""
                            )
                          }
                          isInvalid={
                            errors.isCheckbox && touched.isCheckbox
                              ? true
                              : false
                          }
                          color={"#07ffc9"}
                          my={1}
                        >
                          <Link
                            href="https://transcareufcg.blogspot.com/2023/04/bem-vindo-ao-nosso-aplicativo-para.html"
                            isExternal
                            _text={{
                              color: "primary.200",
                            }}
                          >
                            <Text
                              color={
                                errors.isCheckbox && touched.isCheckbox
                                  ? "#ff2626"
                                  : ""
                              }
                            >
                              Li e estou de acordo com os{" "}
                            </Text>
                            termos de uso
                          </Link>
                        </Checkbox>
                        {errors.isCheckbox && touched.isCheckbox ? (
                          <Text marginRight={6} color={"#ff2626"} fontSize="sm">
                            <WarningOutlineIcon
                              color={"#ff2626"}
                              size="xs"
                              mt={2}
                            />
                            {` Você precisa aceitar os termos de uso para se registrar.`}
                          </Text>
                        ) : null}
                      </VStack>
                      <SubmitButton height={"12"} size={"lg"} mt="4">
                        Cadastrar
                      </SubmitButton>
                      <Button
                        marginBottom={4}
                        height={"12"}
                        size={"lg"}
                        mt="2"
                        onPress={() => navigation.navigate("Small")}
                        variant="outline"
                      >
                        Voltar
                      </Button>
                    </Box>
                  </>
                )}
              </Formik>
            </Center>
          </ScrollView>
        </SafeAreaView>
      </Container>
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
