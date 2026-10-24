import {Stack} from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {backgroundColor: '#475569'},
        headerTintColor: '#fff',
        contentStyle: {backgroundColor: '#121212'},
      }}>
      <Stack.Screen name="index" options={{title: "Receitas"}} />
      <Stack.Screen name="detalhes" options={{title: "Detalhes"}} />
    </Stack>
  );
}
