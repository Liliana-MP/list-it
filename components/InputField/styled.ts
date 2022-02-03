import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { boxShadow } from "../../theme/shadows";

const screenWidth = Dimensions.get("window").width;
const width = screenWidth / 1.25;

export const InputField = styled.TextInput`
  height: 60px;
  margin: 8px 15px;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  width: ${width}px;
  ${boxShadow}
  font-size: 18px;
`;

export const PasswordField = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  background-color: white;
  height: 40px;
  font-size: 18px;
`;

export const ModalField = styled.TextInput`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  width: 90%;
  font-size: 20px;
`;
