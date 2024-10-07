import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";

const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
}
