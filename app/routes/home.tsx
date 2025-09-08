import type { Route } from "./+types/home";
import { Welcome } from "../pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Virgil Brandel - Développeur web" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
