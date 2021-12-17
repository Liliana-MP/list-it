import styled from "styled-components/native";
import { boxShadow } from "../../theme/shadows";

export const InputField = styled.TextInput`
  height: 50px;
  margin: 8px 15px;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  width: 300px;
  ${boxShadow}
`;

export const PasswordField = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  background-color: white;
`;
