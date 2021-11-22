import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  padding-bottom: 5px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  background-color: blue;
`;
