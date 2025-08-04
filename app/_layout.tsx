import { Stack } from "expo-router";
import {colors} from "@/app/theme";

export default function RootLayout() {
  return (<Stack screenOptions={{ headerShown: false }} />);
}
