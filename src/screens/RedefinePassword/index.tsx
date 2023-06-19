import { SubmitButton } from "@native-base/formik-ui";
import createValidator from "class-validator-formik";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import { Box, Center, FormControl, Input, Text, VStack } from "native-base";
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import CryptoJS from 'crypto-js';
import Container from "../../components/Container";
import { Header } from "../../components/Header";
import { process } from "../../env";
import { api } from "../../servers/api";
import { firestore } from "../../servers/firebase";
import { getUser } from "../../servers/getUser";
import { NavigationProps } from "../../types/navigation";
import {
  RedefineDTO,
  RedefinePasswordDTO,
} from "../../validators/RedefinePasswordDTO";

type User = {
  id: string;
};

export const RedefinePassword = ({ navigation }: NavigationProps) => {
  const [isRedefine, setIsRedefine] = useState(false);

  const onSubmit = async (
    values: RedefinePasswordDTO,
    { resetForm, setErrors }: any
  ) => {
    try {
      await api.get(`/user/${values.email}`);
      resetForm();
      setIsRedefine(true);
    } catch (error) {
      setErrors({
        email: "E-mail não vinculado",
      });
    }
  };

  const redefineHandler = async (
    values: RedefineDTO,
    { resetForm, setErrors }: any
  ) => {
    const docRef = doc(firestore, "Codes", values.code);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { email } = docSnap.data();
      const user = (await getUser(email)) as unknown as User;
      await deleteDoc(doc(firestore, "Codes", docSnap.id));
      const cipherPassword = CryptoJS.AES.encrypt(
        values.password,
        process.env.SecretKey
      ).toString();
      await setDoc(doc(firestore, "Users", user.id), {
        ...user,
        password: cipherPassword,
      });
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Sucesso",
        textBody: "Senha redefinida",
      });
      navigation.navigate("Login");
    } else {
      setErrors({
        code: "O código não e valido",
      });
    }
  };

  return (
    <>
      <Container>
        <Header navigation={navigation} pag={"Login"} />
        <SafeAreaView style={styles.container}>
          <Center w="100%">
            {!isRedefine ? (
              <>
                <Box safeArea py="4" w="100%" marginBottom={8} maxW="345">
                  <Center marginTop={1} marginBottom={5}></Center>
                  <Formik
                    validate={createValidator(RedefinePasswordDTO)}
                    initialValues={{
                      email: "",
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
                    }) => (
                      <VStack space={4} mt="5">
                        <Box>
                          <Text fontSize="md" bold color={"gray.600"}>
                            Insira o endereço de email associado à sua conta e
                            enviaremos o código de recuperação
                          </Text>
                        </Box>
                        <FormControl>
                          <Input
                            style={{ fontSize: 17 }}
                            placeholder="Email"
                            placeholderTextColor={
                              errors.email && touched.email
                                ? "#ff2626"
                                : "#2b2a2a68"
                            }
                            height={"16"}
                            borderRadius={6}
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            borderColor={
                              errors.email && touched.email
                                ? "#ff2626"
                                : "#FFFFFF"
                            }
                            value={values.email}
                            onChangeText={handleChange("email")}
                          />
                          {errors.email && touched.email ? (
                            <Text color={"#ff2626"} fontSize="sm">
                              {errors.email}
                            </Text>
                          ) : null}
                        </FormControl>
                        <SubmitButton height={"12"} size={"lg"} mt="90">
                          Enviar
                        </SubmitButton>
                      </VStack>
                    )}
                  </Formik>
                </Box>
              </>
            ) : (
              <>
                <Box safeArea py="4" w="100%" marginBottom={8} maxW="345">
                  <Center marginTop={1} marginBottom={5}></Center>
                  <Formik
                    validate={createValidator(RedefineDTO)}
                    initialValues={{
                      code: "",
                      password: "",
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={redefineHandler}
                  >
                    {({
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <VStack space={4} mt="5">
                        <Box>
                          <Text fontSize="md" bold color={"gray.600"}>
                            Redefina sua senha. Insira o código e a nova senha
                          </Text>
                        </Box>
                        <FormControl>
                          <Input
                            style={{ fontSize: 17 }}
                            placeholder="Código"
                            placeholderTextColor={
                              errors.code && touched.code
                                ? "#ff2626"
                                : "#2b2a2a68"
                            }
                            height={"16"}
                            borderRadius={6}
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            borderColor={
                              errors.code && touched.code
                                ? "#ff2626"
                                : "#FFFFFF"
                            }
                            value={values.code}
                            onChangeText={handleChange("code")}
                          />
                          {errors.code && touched.code ? (
                            <Text color={"#ff2626"} fontSize="sm">
                              {errors.code}
                            </Text>
                          ) : null}
                        </FormControl>
                        <FormControl>
                          <Input
                            style={{ fontSize: 17 }}
                            placeholder="Nova senha"
                            placeholderTextColor={
                              errors.password && touched.password
                                ? "#ff2626"
                                : "#2b2a2a68"
                            }
                            type="password"
                            height={"16"}
                            borderRadius={6}
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            borderColor={
                              errors.password && touched.password
                                ? "#ff2626"
                                : "#FFFFFF"
                            }
                            value={values.password}
                            onChangeText={handleChange("password")}
                          />
                          {errors.password && touched.password ? (
                            <Text color={"#ff2626"} fontSize="sm">
                              {errors.password}
                            </Text>
                          ) : null}
                        </FormControl>
                        <SubmitButton height={"12"} size={"lg"} mt="90">
                          Enviar
                        </SubmitButton>
                      </VStack>
                    )}
                  </Formik>
                </Box>
              </>
            )}
          </Center>
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
    height: 80,
  },
});
