import {StyleSheet} from "react-native";

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  nome: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});
