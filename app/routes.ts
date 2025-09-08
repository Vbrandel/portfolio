import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/projets", file: "pages/projets.tsx" },
] satisfies RouteConfig;
