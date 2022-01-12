import React, { Dispatch, useState } from "react";
import { Modal } from "react-native";
import Toast from "react-native-toast-message";
import Button from "../Button";
import InputField from "../InputField";
import Typography from "../Typography";
import * as S from "./styled";

interface AddListModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
  title: string;
  color: string;
  onPress: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
}

const AddListModal = ({
  modalVisible,
  setModalVisible,
  title,
  color,
  onPress,
  onChangeText,
  value,
}: AddListModalProps) => {
  return (
    <Modal
      onRequestClose={() => setModalVisible(!modalVisible)}
      visible={modalVisible}
      animationType="slide"
      transparent={true}
    >
      <S.ModalBackground>
        <S.ModalContainer color={color}>
          <S.TextContainer>
            <Typography
              title={title}
              size={28}
              weight="semi-bold"
              color="white"
            />
          </S.TextContainer>
          <InputField
            type="modal"
            placeHolder={title}
            onChangeText={onChangeText}
            value={value}
          />
          <Button
            type="icon"
            color="transparent"
            borderColor="white"
            onPress={onPress}
          />
        </S.ModalContainer>
      </S.ModalBackground>
      <Toast />
    </Modal>
  );
};

export default AddListModal;
