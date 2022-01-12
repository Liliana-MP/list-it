import React from "react";
import { Modal } from "react-native";
import * as S from "./styled";

interface DeleteAccModalProps {
  color: string;
}

const DeleteAccModal = ({ color }: DeleteAccModalProps) => {
  return (
    <Modal>
      <S.ModalBackground>
        <S.ModalContainer color={color}></S.ModalContainer>
      </S.ModalBackground>
    </Modal>
  );
};

export default DeleteAccModal;
