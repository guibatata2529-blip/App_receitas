# App de Receitas

Aplicativo em React Native com Expo que consome a API [TheMealDB](https://www.themealdb.com/) e mostra uma lista de receitas. Ao tocar em uma receita, o app abre uma tela com os detalhes dela.

## Funcionalidades

- **Home**: busca as receitas com `axios` (`search.php?s=chicken`), guarda no estado e exibe em uma `FlatList` com imagem e nome.
- **Detalhes**: recebe a receita selecionada por parâmetros de navegação e mostra imagem, nome, categoria e modo de preparo.

## Tecnologias

- Expo + React Native
- Expo Router (navegação em pilha)
- Axios

## Estrutura

```
src/
├── app/
│   ├── _layout.jsx    # Navegação (Stack) com as duas telas
│   ├── index.jsx      # Tela Home (lista de receitas)
│   └── detalhes.jsx   # Tela de Detalhes
└── estilos/
    ├── home.js        # Estilos da tela Home
    └── detalhes.js    # Estilos da tela de Detalhes
```

## Como executar

```bash
npm install
npm run start
```

Depois, leia o QR code com o app **Expo Go** no celular ou pressione `w` para abrir no navegador.
