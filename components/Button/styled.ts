import styled from "styled-components/native";
import { boxShadow } from "../../theme/shadows";

interface ButtonProps {
  color: string;
  borderColor?: string;
}

interface ButtonTextProps {
  textColor: string;
}

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px 60px;
`;

export const RegularButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 10px;
  align-items: center;
  width: 300px;
  height: 50px;
`;

export const SmallRegularButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  ${boxShadow}
`;

export const SignOutButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  ${boxShadow}
`;

export const SignOutContainer = styled.View`
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SquareButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 8px;
  border-radius: 8px;
  width: 200px;
  height: 250px;
  background-color: ${(props) => props.color};
  align-items: center;
  ${boxShadow}
`;

export const TitleContainer = styled.View`
  margin: 10px 0px;
`;

export const OngoingContainer = styled.View`
  align-items: center;
  margin: 10px 0px;
`;

export const DoneContainer = styled.View`
  align-items: center;
  margin: 10px 0px;
`;

export const IconButton = styled.TouchableOpacity<ButtonProps>`
  margin: 25px 8px 0px 8px;
  border-radius: 8px;
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.borderColor};
  border-width: 2px;
  align-items: center;
  justify-content: center;
`;
