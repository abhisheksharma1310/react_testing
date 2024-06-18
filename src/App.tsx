import "./App.css";
import Greet from "./components/greet/Greet";
import { Application } from "./components/application/application";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Greet />
        <Application /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
