import React, { Dispatch, useState } from "react";
import { View, Modal, Text, Alert } from "react-native";
import { XIcon } from "react-native-heroicons/outline";
import theme from "../../theme";
import Button from "../Button";
import InputField from "../InputField";

import Typography from "../Typography";
import * as S from "./styled";

interface AddListModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
}

const AddListModal = ({ modalVisible, setModalVisible }: AddListModalProps) => {
  return (
    <Modal
      onRequestClose={() => setModalVisible(!modalVisible)}
      visible={modalVisible}
      animationType="slide"
      transparent={true}
    >
      <S.ModalBackground>
        <S.ModalContainer>
          <S.TextContainer>
            <Typography
              title="Add to list"
              size={28}
              weight="semi-bold"
              color={theme.primary.onColor}
            />
          </S.TextContainer>
          <InputField type="modal" placeHolder="Add to list" />
          <Button
            type="icon"
            color="transparent"
            borderColor="white"
            onPress={() => {
              console.log("click");
            }}
          />
        </S.ModalContainer>
      </S.ModalBackground>
    </Modal>
  );
};

export default AddListModal;
