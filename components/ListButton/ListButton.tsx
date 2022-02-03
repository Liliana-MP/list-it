import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { ChevronRightIcon, TrashIcon } from "react-native-heroicons/outline";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

interface ListButtonProps {
  title: string;
  onPress: () => void;
  type: "list" | "item";
  color?: string;
  onDismiss?: (id: string) => void;
  id?: string;
  isChecked?: boolean;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const ListButton = ({
  title,
  onPress,
  type,
  color = "white",
  onDismiss,
  id,
  isChecked = false,
}: ListButtonProps) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(60);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event: any) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(id);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
    );
    return {
      opacity,
    };
  });

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  if (type === "list") {
    return (
      <Animated.View style={[styles.itemContainer, rContainerStyle]}>
        <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
          <TrashIcon color={theme.error} size={30} />
        </Animated.View>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={rStyle}>
            <S.Button color={color} onPress={onPress} activeOpacity={1}>
              <Typography
                title={title}
                size={20}
                weight="light"
                numberOfLines={1}
              />
              <S.IconContainer>
                <ChevronRightIcon color="black" />
              </S.IconContainer>
            </S.Button>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    );
  } else if (type === "item") {
    return (
      <Animated.View style={[styles.itemContainer, rContainerStyle]}>
        <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
          <TrashIcon color={theme.error} size={30} />
        </Animated.View>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={rStyle}>
            <S.ItemButton color={color}>
              <S.TextContainer>
                <Typography
                  title={title}
                  size={20}
                  weight="light"
                  numberOfLines={1}
                />
              </S.TextContainer>
              <S.IconContainer>
                <BouncyCheckbox
                  onPress={onPress}
                  textStyle={{ textDecorationLine: "none" }}
                  fillColor={theme.secondary.color}
                  iconStyle={{
                    borderRadius: 5,
                  }}
                  isChecked={isChecked}
                />
              </S.IconContainer>
            </S.ItemButton>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    );
  }
  return (
    <S.Button color={color} onPress={onPress}>
      <Typography title={title} size={20} weight="light" />
      <S.IconContainer>
        <ChevronRightIcon color="black" />
      </S.IconContainer>
    </S.Button>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    marginVertical: 10,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    right: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListButton;
