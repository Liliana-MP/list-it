import styled from "styled-components/native";

interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  textColor: string;
}

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px 60px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.textColor};
`;

export const RegularButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 10px;
  align-items: center;
  width: 300px;
`;

export const AddButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;
