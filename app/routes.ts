import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("debug", [index("routes/debug/route.tsx")]),
] satisfies RouteConfig;
