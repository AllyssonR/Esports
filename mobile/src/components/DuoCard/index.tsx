import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { DuoCardProps } from "../../screens/home/Game";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

interface Props {
  data: DuoCardProps;
}
export function DuoCard({ data }: Props) {
  const route = useRoute();
  const game = route.params;
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de Jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo label="Disponibilidade" value={`${data.weekDays.length} dias`} />
      <DuoInfo label="diego" value={data.name} />
      <DuoInfo label="diego" value={data.name} />

    </View>
  );
}
