import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  width: 100%;
  background-color: transparent;
  align-items: flex-end;
  margin-top: 15px;
  padding-right: 10px;
`;

export const OnGoingContainer = styled.View`
  margin: 10px 10px;
`;

export const DoneContainer = styled.View`
  margin: 50px 10px;
`;

export const ButtonContainer = styled.View`
  background-color: transparent;
  position: absolute;
  bottom: 20px;
  right: 10px;
  left: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
