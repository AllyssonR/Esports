import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
export interface DuoCardProps {}
export function DuoCard() {
  const route = useRoute();
  const game = route.params;
  return <View style={styles.container}></View>;
}
