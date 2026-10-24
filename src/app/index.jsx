import axios from "axios";
import {router} from "expo-router";
import {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";

import {estilo} from "../estilos/home";

export default function Home() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    buscarReceitas();
  }, []);

  async function buscarReceitas() {
    try {
      const resposta = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
      setReceitas(resposta.data.meals);
    } catch (erro) {
      console.log("Erro ao buscar receitas:", erro);
    }
  }

  function abrirDetalhes(receita) {
    let ingredientes = "";

    for (let i = 1; i <= 20; i++) {
      const ingrediente = receita["strIngredient" + i];
      const medida = receita["strMeasure" + i];

      if (ingrediente) {
        ingredientes += "• " + medida + " " + ingrediente + "\n";
      }
    }

    router.push({
      pathname: "/detalhes",
      params: {
        nome: receita.strMeal,
        imagem: receita.strMealThumb,
        categoria: receita.strCategory,
        preparo: receita.strInstructions,
        ingredientes: ingredientes,
      },
    });
  }

  return (
    <View style={estilo.container}>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.idMeal}
        renderItem={({item}) => (
          <TouchableOpacity style={estilo.item} onPress={() => abrirDetalhes(item)}>
            <Image source={{uri: item.strMealThumb}} style={estilo.imagem} />
            <Text style={estilo.nome}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
