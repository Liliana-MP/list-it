import React, { ReactNode } from "react";
import { SortDescendingIcon } from "react-native-heroicons/outline";
import * as S from "./styled";

interface TabBarButtonProps {
  focused: boolean;
  icon?: ReactNode;
  title?: string;
}

const TabBarButton = ({ focused, icon }: TabBarButtonProps) => {
  return <S.Container>{icon && icon}</S.Container>;
};
