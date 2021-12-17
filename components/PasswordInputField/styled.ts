import styled from "styled-components/native";
import { boxShadow } from "../../theme/shadows";

export const Container = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  margin: 8px 15px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${boxShadow};
`;
