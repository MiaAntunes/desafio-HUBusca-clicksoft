import { GlobalStyled } from "./GlobalStyled";
import { GlobalState } from "./context/GlobalState";
import { Router } from "./router/router";

function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      <Router />
    </GlobalState>
  );
}

export default App;
