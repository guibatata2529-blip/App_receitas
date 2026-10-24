import {StyleSheet} from "react-native";

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  categoria: {
    alignSelf: 'flex-start',
    fontSize: 13,
    color: '#f1f1f1',
    backgroundColor: '#475569',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 8,
    overflow: 'hidden',
  },
  cartao2: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  linha: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 12,
  },
  texto: {
    fontSize: 15,
    lineHeight: 24,
    color: '#d1d1d1',
    textAlign: 'justify',
  },
});
