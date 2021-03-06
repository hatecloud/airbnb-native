import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import Btn from "../../components/Auth/Btn";

const LOGO_URL =
  "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png";

const Conttainer = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  margin-top: 150px;
  width: 100px;
  height: 100px;
`;

const BtnContainer = styled.View`
  margin-top: 50px;
`;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
    <Conttainer>
      <BlurView
        intensity={40}
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo source={{ url: LOGO_URL }} />
        <BtnContainer>
          <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
          <Btn onPress={goToSignIn} text={"Sign In"} />
        </BtnContainer>
      </BlurView>
      <Image source={require("../../assets/loginBg.jpeg")} />
      <StatusBar barStyle="light-content" />
    </Conttainer>
  );
};
