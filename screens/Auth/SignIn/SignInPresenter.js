import { KeyboardAvoidingView, StatusBar } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Contailner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ email, setEamil, password, setPassword, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Contailner>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              stateFn={setEamil}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </Contailner>
    </DismissKeyboard>
  );
};
