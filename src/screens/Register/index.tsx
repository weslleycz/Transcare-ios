import { Box, SubmitButton } from "@native-base/formik-ui";
import CryptoJS from "react-native-crypto-js";
import Checkbox from "expo-checkbox";
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
  FormControl,
  Heading,
  Input,
  Link,
  Text,
  VStack
} from "native-base";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import Container from "../../components/Container";
import { Header } from "../../components/Header";
import { process } from "../../env";
import { firestore } from "../../servers/firebase";
import { NavigationProps } from "../../types/navigation";

export const Register = ({ navigation }: NavigationProps) => {
  const [isChecked, setChecked] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const onSubmit = async (values: any, { resetForm, setErrors }: any) => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setCheckboxError(false);
    let isError = false;

    if (!values.email) {
      setEmailError(true);
      isError = true;
    }
  
    if (!values.name) {
      setNameError(true);
      isError = true;
    }
  
    if (!values.password) {
      setPasswordError(true);
      isError = true;
    }
  
    if (!isChecked) {
      setCheckboxError(true);
      isError = true;
    }

      if (!isError) {
        const { email, password, name } = values;
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
            process.env.SecretKey,
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
            isLogin: true,
          });
        }
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
                // validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  corporate_name: "",
                  gender: "",
                  age: "",
                  profession: "",
                  email: "",
                  password: "",
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
                              nameError ? "#ff2626" : "#2b2a2a68"
                            }
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            id="name"
                            autoFocus
                            borderColor={nameError ? "#ff2626" : "#FFFFFF"}
                            value={values.name}
                            onChangeText={handleChange("name")}
                          />
                          {nameError ? (
                            <Text color={"#ff2626"} fontSize="md">
                              Esse campo é obrigatório
                            </Text>
                          ) : null}
                        </FormControl>

                        <FormControl>
                          <Input
                            placeholder="E-mail*"
                            placeholderTextColor={
                              emailError ? "#ff2626" : "#2b2a2a68"
                            }
                            style={{ fontSize: 17 }}
                            height={"16"}
                            borderRadius={6}
                            width="full"
                            shadow={"4"}
                            bgColor={"#FFFFFF"}
                            id="email"
                            autoFocus
                            borderColor={emailError ? "#ff2626" : "#FFFFFF"}
                            value={values.email}
                            onChangeText={handleChange("email")}
                          />
                          {emailError ? (
                            <Text color={"#ff2626"} fontSize="md">
                              Você precisa informar o seu email
                            </Text>
                          ) : null}
                        </FormControl>

                        <FormControl>
                          <Input
                            placeholder="Senha*"
                            placeholderTextColor={
                              passwordError ? "#ff2626" : "#2b2a2a68"
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
                            borderColor={passwordError ? "#ff2626" : "#FFFFFF"}
                            value={values.password}
                            onChangeText={handleChange("password")}
                          />

                          {passwordError ? (
                            <Text color={"#ff2626"} fontSize="md">
                              Você precisa informar a sua senha
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

                        <View style={styles.section}>
                          <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={"#FDA3B5"}
                          />
                          <Link
                            href="https://transcareufcg.blogspot.com/2023/04/bem-vindo-ao-nosso-aplicativo-para.html"
                            isExternal
                            _text={{
                              color: "primary.200",
                            }}
                          >
                            <Text>Li e estou de acordo com os </Text>
                            termos de uso
                          </Link>
                        </View>

                        {checkboxError ? (
                          <Text marginRight={6} color={"#ff2626"} fontSize="sm">
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
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
