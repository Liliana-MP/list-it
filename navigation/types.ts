import { Item, List } from "../models/types";
import { ScreenRoute, TabRoute } from "./constants";

export type RootStackParamList = {
  [ScreenRoute.MAIN_SCREEN]: undefined;
  [ScreenRoute.LOGIN_SCREEN]: undefined;
  [ScreenRoute.LIST_SETTINGS_SCREEN]: undefined;
  [ScreenRoute.SIGNUP_SCREEN]: undefined;
  [ScreenRoute.LIST_SCREEN]: List;
};

export type RootTabParamList = {
  [TabRoute.HOME_SCREEN]: undefined;
  [TabRoute.NOTIFICATION_SCREEN]: undefined;
  [TabRoute.ADD_LIST_MODAL]: undefined;
  [TabRoute.ALL_LISTS_SCREEN]: undefined;
  [TabRoute.ACCOUNT_SCREEN]: undefined;
};
