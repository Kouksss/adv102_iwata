import { Stack } from "expo-router";

export default function Layout () {
  return (
    <Stack>
      <Stack.Screen 
        name="exercise3"
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen 
        name="exercise4"
        options={{
          title: "Stopwatch",
        }}
      />
      <Stack.Screen 
        name="exercise5"
        options={{
          title: "Register",
        }}
      />
      <Stack.Screen 
        name="exercise6"
        options={{
          title: "CRUD",
        }}
      />
    </Stack>
  )
}