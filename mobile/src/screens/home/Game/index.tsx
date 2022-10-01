import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import logoImg from "../../../assets/logo-nlw-esports.png";
import { Background } from "../../../components/Background";
import { styles } from "./styles";
import { GameParams } from "../../../@types/navigation";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../theme";
import { Heading } from "../../../components/Heading";
import { DuoCard } from "../../../components/DuoCard";
export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;
  function handleGoBack() {
    navigation.goBack();
  }
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  useEffect(() => {
    fetch(`http://10.0.0.110:3333/games/:${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DuoCard data={duos[0]} />}
        />
      </SafeAreaView>
    </Background>
  );
}
