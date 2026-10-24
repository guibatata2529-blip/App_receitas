import {useLocalSearchParams} from "expo-router";
import {Image, ScrollView, Text, View} from "react-native";

import {estilo} from "../estilos/detalhes";

export default function Detalhes() {
  const {nome, imagem, categoria, preparo, ingredientes} = useLocalSearchParams();

  return (
    <ScrollView style={estilo.container}>
      <View style={estilo.cartao}>
        <Image source={{uri: imagem}} style={estilo.imagem} />

        <View style={estilo.info}>
          <Text style={estilo.nome}>{nome}</Text>
          <Text style={estilo.categoria}>{categoria}</Text>
        </View>
      </View>

      <View style={estilo.cartao2}>
        <Text style={estilo.titulo}>Ingredientes</Text>
        <View style={estilo.linha} />
        <Text style={estilo.texto}>{ingredientes}</Text>
      </View>

      <View style={estilo.cartao2}>
        <Text style={estilo.titulo}>Modo de preparo</Text>
        <View style={estilo.linha} />
        <Text style={estilo.texto}>{preparo}</Text>
      </View>
    </ScrollView>
  );
}
