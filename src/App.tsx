import { HomePage } from "./pages/HomePage";
import { ChallengePage } from "./pages/ChallengePage";

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/mastercard-challenge") {
    return <ChallengePage />;
  }

  return <HomePage />;
}