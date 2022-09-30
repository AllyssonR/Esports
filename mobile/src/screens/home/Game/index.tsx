import React, { useEffect,useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import logoImg from "../../../assets/logo-nlw-esports.png";
import { Background } from "../../../components/Background";
import { styles } from "./styles";
import { GameParams } from "../../../@types/navigation";
import { Image, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../theme";
import { Heading } from "../../../components/Heading";
import { DuoCard } from "../../../components/DuoCard";

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;
  function handleGoBack() {
    navigation.goBack();
  }
  const[ads,setAds]=useState()
  useEffect(() => {
    fetch(`http://192.168.0.11:3333/games/:${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setAds(data));
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
        <DuoCard />
      </SafeAreaView>
    </Background>
  );
}
