import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Layout () {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => 
            <MaterialIcons size={20} name="home" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="exercises"
        options={{
          title: "Exercises",
          tabBarIcon: ({ color }) => 
            <MaterialIcons size={20} name="book" color={color} />,
        }}
      />
    </Tabs>
  )
}