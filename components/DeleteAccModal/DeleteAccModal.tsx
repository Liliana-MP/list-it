import React, { Dispatch } from "react";
import { Modal } from "react-native";
import { XIcon } from "react-native-heroicons/outline";
import theme from "../../theme";
import Button from "../Button";
import InputField from "../InputField";
import Typography from "../Typography";
import * as S from "./styled";

interface DeleteAccModalProps {
  color: string;
  title: string;
  modalVisible: boolean;
  setModalVisible: Dispatch<React.SetStateAction<boolean>>;
  onPress: () => void;
}

const DeleteAccModal = ({
  color,
  title,
  modalVisible,
  setModalVisible,
  onPress,
}: DeleteAccModalProps) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <S.ModalBackground>
        <S.ModalContainer color={color}>
          <S.TitleContainer>
            <Typography
              title={title}
              size={28}
              weight="semi-bold"
              color="white"
            />
          </S.TitleContainer>

          <S.ButtonContainer>
            <Button type="icon" onPress={onPress} color={theme.success} />
            <Button
              type="icon"
              onPress={onPress}
              color={theme.error}
              icon={<XIcon color="white" size={60} />}
            />
          </S.ButtonContainer>
        </S.ModalContainer>
      </S.ModalBackground>
    </Modal>
  );
};

export default DeleteAccModal;
